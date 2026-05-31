import { useState, useMemo, useCallback } from 'react';
import specialsData from '../data/specials';
import categoriesData from '../data/categories';

const storeTabs = [
  { id: 'all',         name: '全部' },
  { id: 'coles',       name: 'Coles' },
  { id: 'woolworths',  name: 'Woolies' },
  { id: 'aldi',        name: 'Aldi' },
];

export default function Specials() {
  const [activeStore, setActiveStore] = useState('all');
  const [activeCat, setActiveCat]     = useState('all');
  const [sortBy, setSortBy]           = useState('discount');
  const [selectedProduct, setSelectedProduct] = useState(null);   // 大图弹窗
  const [compareProduct, setCompareProduct]   = useState(null);   // 比价弹窗

  const filtered = useMemo(() => {
    let list = specialsData.specials;

    if (activeStore !== 'all') {
      list = list.filter(s => s.store === activeStore || s.brand === activeStore);
    }
    if (activeCat !== 'all') {
      list = list.filter(s => s.category === activeCat);
    }

    switch (sortBy) {
      case 'discount':
        list = [...list].sort((a, b) => {
          const da = 1 - a.salePrice / a.originalPrice;
          const db = 1 - b.salePrice / b.originalPrice;
          return db - da;
        });
        break;
      case 'price':
        list = [...list].sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'name':
        list = [...list].sort((a, b) => (a.nameEn || a.name || '').localeCompare(b.nameEn || b.name || ''));
        break;
    }

    return list;
  }, [activeStore, activeCat, sortBy]);

  const storeColor = (store) => {
    if (store === 'coles')      return 'bg-[#E31E24] text-white';
    if (store === 'woolworths' || store === 'woolies') return 'bg-[#1C7A3C] text-white';
    return 'bg-[#004C9B] text-white';
  };

  const storeLabel = (store) => {
    if (store === 'coles') return 'Coles';
    if (store === 'woolworths' || store === 'woolies') return 'Woolies';
    return 'Aldi';
  };

  // 比价：查找同分类的其他超市商品
  const getComparableProducts = useCallback((product) => {
    const productStore = product.store || product.brand;
    return specialsData.specials.filter(s => {
      const sStore = s.store || s.brand;
      return s.id !== product.id
        && sStore !== productStore
        && s.category === product.category
        && nameSimilarity(product.nameEn || product.name || '', s.nameEn || s.name || '') >= 0.25;
    }).sort((a, b) => a.salePrice - b.salePrice);
  }, []);

  // 获取同分类其他超市商品（宽松匹配）
  const getCategoryProducts = useCallback((product) => {
    const productStore = product.store || product.brand;
    return specialsData.specials.filter(s => {
      const sStore = s.store || s.brand;
      return s.id !== product.id && sStore !== productStore && s.category === product.category;
    }).sort((a, b) => a.salePrice - b.salePrice).slice(0, 10);
  }, []);

  // 统计
  const stats = useMemo(() => {
    const coles = specialsData.specials.filter(s => (s.store || s.brand) === 'coles').length;
    const woolies = specialsData.specials.filter(s => (s.store || s.brand) === 'woolworths' || (s.store || s.brand) === 'woolies').length;
    return { coles, woolies, total: specialsData.specials.length };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
      {/* Header */}
      <h1 className="section-title">🔥 本周特价</h1>
      <p className="section-subtitle">
        数据更新至 {specialsData.currentPeriod.label} · 共 {stats.total} 件商品（Coles {stats.coles} / Woolies {stats.woolies}）
      </p>

      {/* Store Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {storeTabs.map(b => (
          <button
            key={b.id}
            onClick={() => setActiveStore(b.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeStore === b.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary active:bg-gray-50'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Category — horizontal scroll on mobile */}
      <div className="relative -mx-4 px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto scroll-mobile pb-2">
          {categoriesData.specialCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`shrink-0 px-3 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCat === cat.id
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-secondary active:bg-gray-50'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <span className="text-xs sm:text-sm text-gray-500">排序：</span>
        {[
          { id: 'discount', label: '折扣最大' },
          { id: 'price',    label: '价格最低' },
          { id: 'name',     label: '名称' },
        ].map(o => (
          <button
            key={o.id}
            onClick={() => setSortBy(o.id)}
            className={`px-3 py-2 rounded-full text-xs font-semibold active:scale-95 ${
              sortBy === o.id ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 active:bg-gray-200'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-5">
        共 <span className="text-primary font-bold">{filtered.length}</span> 件特价商品
      </p>

      {/* Specials Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">📭</div>
          <p>该分类暂无特价商品</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {filtered.map(s => {
            const discount = Math.round((1 - s.salePrice / s.originalPrice) * 100);
            const sStore = s.store || s.brand;
            const sLabel = storeLabel(sStore);
            // 检查是否有比价商品
            const comparable = getComparableProducts(s);
            const hasCompare = comparable.length > 0;

            return (
              <div key={s.id} className="card p-3 sm:p-4 relative overflow-hidden">
                {/* Hot badge */}
                {s.isHot && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full z-10">
                    🔥 爆款
                  </div>
                )}

                {/* Store badge */}
                <span className={`inline-block text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full mb-2 sm:mb-3 ${storeColor(sStore)}`}>
                  {sLabel}
                </span>

                {/* Image — click to view large */}
                {s.image ? (
                  <div
                    className="h-24 sm:h-36 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedProduct(s)}
                    title="点击查看大图"
                  >
                    <img
                      src={s.image}
                      alt={s.nameZh || s.nameEn}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-4xl sm:text-6xl">🛒</span>'; }}
                    />
                  </div>
                ) : (
                  <div className="h-24 sm:h-36 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-4xl sm:text-6xl mb-2 sm:mb-3">
                    🛒
                  </div>
                )}

                {/* Name */}
                <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-1.5 sm:mb-2 line-clamp-2">
                  {s.nameZh ? <span className="text-secondary">{s.nameZh}</span> : null}
                  {s.nameZh ? ' ' : ''}
                  {s.nameEn || s.name || ''}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1.5 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
                  <span className="text-base sm:text-xl font-extrabold text-primary">
                    ${s.salePrice.toFixed(2)}
                  </span>
                  {s.originalPrice > s.salePrice && (
                    <>
                      <span className="text-[10px] sm:text-sm text-gray-400 line-through">
                        ${s.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-[10px] sm:text-xs font-extrabold text-red-500 bg-red-50 px-1 sm:px-1.5 py-0.5 rounded">
                        -{discount}%
                      </span>
                    </>
                  )}
                </div>

                {/* Compare price button */}
                {hasCompare && (
                  <button
                    onClick={() => setCompareProduct(s)}
                    className="mt-1 w-full text-[10px] sm:text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary px-2 py-1.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
                  >
                    ⚖️ 比价 · {comparable.length}个{comparable[0] && (comparable[0].store || comparable[0].brand) !== sStore ? storeLabel(comparable[0].store || comparable[0].brand) : ''}同款
                  </button>
                )}

                {/* Category link to browse more */}
                {s.link && (
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[10px] sm:text-xs text-gray-400 hover:text-primary text-center truncate"
                  >
                    在{sLabel}查看 →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Image Modal (大图查看) */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4">
              {/* Close button */}
              <div className="flex justify-between items-start mb-3">
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${storeColor(selectedProduct.store || selectedProduct.brand)}`}>
                  {storeLabel(selectedProduct.store || selectedProduct.brand)}
                </span>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* Large Image */}
              {selectedProduct.image && (
                <div className="bg-gray-50 rounded-xl p-4 mb-4 flex items-center justify-center min-h-[200px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.nameEn || selectedProduct.name}
                    className="max-h-[400px] w-auto object-contain"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-6xl">🛒</span>'; }}
                  />
                </div>
              )}

              {/* Product Info */}
              <h2 className="font-bold text-lg text-gray-900 mb-2">
                {selectedProduct.nameZh && (
                  <span className="text-secondary">{selectedProduct.nameZh}</span>
                )}
              </h2>
              <h3 className="text-sm text-gray-600 mb-3">
                {selectedProduct.nameEn || selectedProduct.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-3 mb-3">
                <span className="text-3xl font-extrabold text-primary">
                  ${selectedProduct.salePrice.toFixed(2)}
                </span>
                {selectedProduct.originalPrice > selectedProduct.salePrice && (
                  <span className="text-lg text-gray-400 line-through">
                    ${selectedProduct.originalPrice.toFixed(2)}
                  </span>
                )}
                {selectedProduct.originalPrice > selectedProduct.salePrice && (
                  <span className="text-sm font-extrabold text-red-500 bg-red-50 px-2 py-0.5 rounded">
                    -{Math.round((1 - selectedProduct.salePrice / selectedProduct.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Quick compare in modal */}
              {(() => {
                const catProducts = getCategoryProducts(selectedProduct);
                if (catProducts.length === 0) return null;
                return (
                  <div className="mt-4 border-t pt-3">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">同分类其他超市商品：</h4>
                    <div className="space-y-2">
                      {catProducts.slice(0, 5).map(p => (
                        <div key={p.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                          {p.image && (
                            <img src={p.image} alt="" className="w-10 h-10 object-contain rounded" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-700 truncate">{p.nameEn || p.name}</p>
                            <p className="text-xs text-gray-400">{p.nameZh}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-0.5 ${storeColor(p.store || p.brand)}`}>
                              {storeLabel(p.store || p.brand)}
                            </span>
                            <p className="text-sm font-extrabold text-primary">${p.salePrice.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Link to store */}
              {selectedProduct.link && (
                <a
                  href={selectedProduct.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition"
                >
                  在 {storeLabel(selectedProduct.store || selectedProduct.brand)} 购买 →
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal (比价弹窗) */}
      {compareProduct && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setCompareProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-bold text-base text-gray-900">⚖️ 比价</h2>
                <button
                  onClick={() => setCompareProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* Current product */}
              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-3 mb-4">
                <div className="flex gap-3">
                  {compareProduct.image && (
                    <img src={compareProduct.image} alt="" className="w-16 h-16 object-contain rounded-lg" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-1 ${storeColor(compareProduct.store || compareProduct.brand)}`}>
                      {storeLabel(compareProduct.store || compareProduct.brand)}
                    </span>
                    <p className="text-sm font-bold text-gray-900 truncate">{compareProduct.nameEn || compareProduct.name}</p>
                    {compareProduct.nameZh && <p className="text-xs text-secondary">{compareProduct.nameZh}</p>}
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-xl font-extrabold text-primary">${compareProduct.salePrice.toFixed(2)}</span>
                      <span className="text-xs text-gray-400 line-through">${compareProduct.originalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Similar products from other stores */}
              {(() => {
                const similar = getComparableProducts(compareProduct);
                const sameCategory = getCategoryProducts(compareProduct).filter(
                  p => !similar.find(s => s.id === p.id)
                );

                return (
                  <>
                    {similar.length > 0 && (
                      <div className="mb-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-2">✅ 相似商品</h3>
                        <div className="space-y-2">
                          {similar.map(p => {
                            const priceDiff = p.salePrice - compareProduct.salePrice;
                            return (
                              <div key={p.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                {p.image && (
                                  <img src={p.image} alt="" className="w-12 h-12 object-contain rounded" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-0.5 ${storeColor(p.store || p.brand)}`}>
                                    {storeLabel(p.store || p.brand)}
                                  </span>
                                  <p className="text-xs font-medium text-gray-700 truncate">{p.nameEn || p.name}</p>
                                  {p.nameZh && <p className="text-[10px] text-secondary">{p.nameZh}</p>}
                                </div>
                                <div className="text-right shrink-0">
                                  <p className="text-base font-extrabold text-primary">${p.salePrice.toFixed(2)}</p>
                                  {priceDiff !== 0 && (
                                    <span className={`text-[10px] font-bold ${priceDiff > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                      {priceDiff > 0 ? '+' : ''}{priceDiff.toFixed(2)}
                                    </span>
                                  )}
                                  {priceDiff === 0 && (
                                    <span className="text-[10px] font-bold text-blue-500">同价</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {sameCategory.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold text-gray-700 mb-2">📋 同分类其他商品</h3>
                        <div className="space-y-2">
                          {sameCategory.slice(0, 8).map(p => (
                            <div key={p.id} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                              {p.image && (
                                <img src={p.image} alt="" className="w-10 h-10 object-contain rounded" />
                              )}
                              <div className="flex-1 min-w-0">
                                <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mb-0.5 ${storeColor(p.store || p.brand)}`}>
                                  {storeLabel(p.store || p.brand)}
                                </span>
                                <p className="text-xs text-gray-600 truncate">{p.nameEn || p.name}</p>
                              </div>
                              <span className="text-sm font-extrabold text-primary shrink-0">${p.salePrice.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {similar.length === 0 && sameCategory.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        <div className="text-4xl mb-2">🔍</div>
                        <p className="text-sm">暂无其他超市的同类商品</p>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Teaser */}
      <div className="mt-10 sm:mt-14 card bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 border-2 border-purple-200">
        <div className="flex items-center gap-3">
          <span className="text-3xl">⚖️</span>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-gray-900">比价功能已上线</h3>
            <p className="text-xs sm:text-sm text-gray-500">点击商品的「比价」按钮，即可查看同款在其他超市的价格 🛒</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 名称相似度计算
function nameSimilarity(name1, name2) {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'with', 'in', 'of', 'for', 'to',
    'is', 'at', 'by', 'on', 'from', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '0', 'pack', 'per', 'each', 'ml', 'l', 'g', 'kg',
  ]);
  const words1 = name1.toLowerCase().split(/[\s|,\/\\]+/).filter(w => w.length > 2 && !stopWords.has(w));
  const words2 = name2.toLowerCase().split(/[\s|,\/\\]+/).filter(w => w.length > 2 && !stopWords.has(w));
  if (words1.length === 0 || words2.length === 0) return 0;
  const common = words1.filter(w => words2.includes(w));
  return common.length / Math.max(words1.length, words2.length);
}
