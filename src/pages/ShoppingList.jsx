import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingList } from '../contexts/ShoppingListContext';

const storeConfig = {
  coles: {
    label: 'Coles',
    icon: '🔴',
    color: 'bg-[#E31E24]',
    lightBg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
  },
  woolworths: {
    label: 'Woolies',
    icon: '🟢',
    color: 'bg-[#1C7A3C]',
    lightBg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
};

export default function ShoppingList() {
  const {
    items, removeItem, updateQty, clearAll, clearByStore,
    colesItems, wooliesItems, colesTotal, wooliesTotal,
    totalSaved, totalCount,
  } = useShoppingList();

  const [copied, setCopied] = useState(null);

  const handleCopy = async (store) => {
    const list = store === 'coles' ? colesItems : wooliesItems;
    const label = storeConfig[store].label;
    const total = store === 'coles' ? colesTotal : wooliesTotal;

    const text = [
      `🛒 ${label} 采购清单`,
      '─'.repeat(24),
      ...list.map((item, i) => `${i + 1}. ${item.nameZh ? item.nameZh + ' ' : ''}${item.nameEn}  ×${item.qty}  $${(item.salePrice * item.qty).toFixed(2)}`),
      '─'.repeat(24),
      `合计：$${total.toFixed(2)}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(store);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(store);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const handleCopyAll = async () => {
    const sections = [];
    if (colesItems.length > 0) {
      sections.push(
        `🔴 Coles 采购清单`,
        '─'.repeat(24),
        ...colesItems.map((item, i) => `${i + 1}. ${item.nameZh ? item.nameZh + ' ' : ''}${item.nameEn}  ×${item.qty}  $${(item.salePrice * item.qty).toFixed(2)}`),
        `小计：$${colesTotal.toFixed(2)}`,
      );
    }
    if (wooliesItems.length > 0) {
      if (sections.length > 0) sections.push('');
      sections.push(
        `🟢 Woolies 采购清单`,
        '─'.repeat(24),
        ...wooliesItems.map((item, i) => `${i + 1}. ${item.nameZh ? item.nameZh + ' ' : ''}${item.nameEn}  ×${item.qty}  $${(item.salePrice * item.qty).toFixed(2)}`),
        `小计：$${wooliesTotal.toFixed(2)}`,
      );
    }
    sections.push('', `💰 总计：$${(colesTotal + wooliesTotal).toFixed(2)}，省 $${totalSaved.toFixed(2)}`);

    try {
      await navigator.clipboard.writeText(sections.join('\n'));
      setCopied('all');
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback
    }
  };

  const renderStoreSection = (store) => {
    const config = storeConfig[store];
    const list = store === 'coles' ? colesItems : wooliesItems;
    const total = store === 'coles' ? colesTotal : wooliesTotal;

    return (
      <div key={store} className={`${config.lightBg} rounded-2xl border-2 ${config.border} p-4 sm:p-5`}>
        {/* Store Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`${config.color} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
              {config.label}
            </span>
            <span className="text-sm text-gray-500">
              {list.length} 件商品
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(store)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
            >
              {copied === store ? '✅ 已复制' : '📋 复制清单'}
            </button>
            <button
              onClick={() => clearByStore(store)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200 active:scale-95 transition-all"
            >
              清空
            </button>
          </div>
        </div>

        {/* Items */}
        {list.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <div className="text-3xl mb-2">🛒</div>
            <p className="text-sm">暂无{config.label}商品</p>
            <Link
              to="/specials"
              className="inline-block mt-2 text-xs text-primary font-semibold hover:underline"
            >
              去特价页添加 →
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {list.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-white rounded-xl p-3">
                {/* Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.nameZh || item.nameEn}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-lg shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-2xl">🛒</span>'; }}
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center text-2xl shrink-0">
                    🛒
                  </div>
                )}

                {/* Name & Price */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {item.nameZh && <span className="text-secondary">{item.nameZh} </span>}
                    {item.nameEn}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-extrabold text-primary">${item.salePrice.toFixed(2)}</span>
                    {item.originalPrice > item.salePrice && (
                      <span className="text-[10px] text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center active:scale-90 transition"
                  >
                    −
                  </button>
                  <span className="w-7 text-center text-sm font-bold text-gray-900">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-sm flex items-center justify-center active:scale-90 transition"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <span className="text-sm font-extrabold text-gray-900 shrink-0 w-16 text-right">
                  ${(item.salePrice * item.qty).toFixed(2)}
                </span>

                {/* Delete */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="shrink-0 w-7 h-7 rounded-lg hover:bg-red-50 hover:text-red-500 text-gray-300 flex items-center justify-center transition"
                  title="移除"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Store Total */}
        {list.length > 0 && (
          <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-200/60">
            <span className="text-sm font-semibold text-gray-600">{config.label} 小计</span>
            <span className="text-lg font-extrabold text-primary">${total.toFixed(2)}</span>
          </div>
        )}
      </div>
    );
  };

  // Empty state
  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="section-title">🛒 采购清单</h1>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-lg font-bold text-gray-600 mb-2">清单是空的</h2>
          <p className="text-sm text-gray-400 mb-6">
            去本周特价页添加想买的商品吧
          </p>
          <Link
            to="/specials"
            className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all no-underline"
          >
            🔥 浏览本周特价
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="section-title">🛒 采购清单</h1>
          <p className="section-subtitle">
            共 {totalCount} 件商品 · 预计省 <span className="text-red-500 font-bold">${totalSaved.toFixed(2)}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopyAll}
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-primary text-white hover:opacity-90 active:scale-95 transition-all"
          >
            {copied === 'all' ? '✅ 已复制' : '📋 复制全部'}
          </button>
          <button
            onClick={clearAll}
            className="text-xs font-semibold px-3 py-2 rounded-lg bg-white border-2 border-red-200 text-red-500 hover:bg-red-50 active:scale-95 transition-all"
          >
            🗑️ 清空全部
          </button>
        </div>
      </div>

      {/* Store Sections */}
      <div className="space-y-5">
        {renderStoreSection('coles')}
        {renderStoreSection('woolworths')}
      </div>

      {/* Grand Total */}
      <div className="mt-6 bg-white rounded-2xl border-2 border-primary/20 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-base font-extrabold text-gray-900">💰 总计</span>
          <span className="text-2xl font-extrabold text-primary">${(colesTotal + wooliesTotal).toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            🔴 Coles ${colesTotal.toFixed(2)} + 🟢 Woolies ${wooliesTotal.toFixed(2)}
          </span>
          <span className="text-sm font-semibold text-red-500">
            省 ${totalSaved.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Quick link back */}
      <div className="mt-6 text-center">
        <Link
          to="/specials"
          className="inline-block text-sm text-primary font-semibold hover:underline no-underline"
        >
          ← 继续浏览特价商品
        </Link>
      </div>
    </div>
  );
}
