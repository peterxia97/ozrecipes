import { useState, useMemo } from 'react';
import specialsData from '../data/specials';
import categoriesData from '../data/categories';

const brandTabs = [
  { id: 'all',     name: '全部' },
  { id: 'coles',   name: 'Coles' },
  { id: 'woolies', name: 'Woolies' },
  { id: 'aldi',    name: 'Aldi' },
];

export default function Specials() {
  const [activeBrand, setActiveBrand] = useState('all');
  const [activeCat, setActiveCat]   = useState('all');
  const [sortBy, setSortBy]         = useState('discount'); // discount | price | name

  const filtered = useMemo(() => {
    let list = specialsData.specials;

    if (activeBrand !== 'all') {
      list = list.filter(s => s.brand === activeBrand);
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
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return list;
  }, [activeBrand, activeCat, sortBy]);

  const brandColor = (brand) => {
    if (brand === 'coles')   return 'bg-[#E31E24] text-white';
    if (brand === 'woolies') return 'bg-[#1C7A3C] text-white';
    return 'bg-[#004C9B] text-white';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="section-title">🔥 本周特价</h1>
      <p className="section-subtitle">
        数据更新至 {specialsData.currentPeriod.label} · 手动维护，以超市实际价格为准
      </p>

      {/* Brand Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {brandTabs.map(b => (
          <button
            key={b.id}
            onClick={() => setActiveBrand(b.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeBrand === b.id
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Category + Sort Row */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categoriesData.specialCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeCat === cat.id
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-secondary'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
          <span>排序：</span>
          {[
            { id: 'discount', label: '折扣最大' },
            { id: 'price',    label: '价格最低' },
            { id: 'name',     label: '名称' },
          ].map(o => (
            <button
              key={o.id}
              onClick={() => setSortBy(o.id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                sortBy === o.id ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-6">
        共 <span className="text-primary font-bold">{filtered.length}</span> 件特价商品
      </p>

      {/* Specials Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">📭</div>
          <p>该分类暂无特价商品</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(s => {
            const discount = Math.round((1 - s.salePrice / s.originalPrice) * 100);
            return (
              <div key={s.id} className="card p-4 relative overflow-hidden">
                {/* Hot badge */}
                {s.isHot && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                    🔥 爆款
                  </div>
                )}

                {/* Brand badge */}
                <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 ${brandColor(s.brand)}`}>
                  {s.brand === 'coles' ? 'Coles' : s.brand === 'woolies' ? 'Woolies' : 'Aldi'}
                </span>

                {/* Image placeholder */}
                <div className="h-36 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-6xl mb-3">
                  🛒
                </div>

                {/* Name */}
                <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">{s.name}</h3>

                {/* Price */}
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-xl font-extrabold text-primary">
                    ${s.salePrice.toFixed(2)}
                  </span>
                  {s.originalPrice > s.salePrice && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        ${s.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-xs font-extrabold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                        -{discount}%
                      </span>
                    </>
                  )}
                </div>

                {/* Notes */}
                {s.notes && (
                  <p className="text-xs text-gray-400 leading-relaxed">{s.notes}</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Future: Cocktail ingredients teaser */}
      <div className="mt-14 card bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-2 border-purple-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🍸</span>
          <div>
            <h3 className="font-extrabold text-gray-900">调酒版块即将上线</h3>
            <p className="text-sm text-gray-500">未来这里也会展示调酒配料（酒、果汁、糖浆等）的超市特价信息 🍹</p>
          </div>
        </div>
      </div>
    </div>
  );
}
