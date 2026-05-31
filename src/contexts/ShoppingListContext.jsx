import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'aussie-recipes-shopping-list';

const ShoppingListContext = createContext(null);

export function ShoppingListProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 持久化到 localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        // 已存在则数量 +1
        return prev.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, {
        id: product.id,
        store: product.store || product.brand,
        nameEn: product.nameEn || product.name || '',
        nameZh: product.nameZh || '',
        salePrice: product.salePrice,
        originalPrice: product.originalPrice,
        image: product.image || '',
        category: product.category || '',
        link: product.link || '',
        qty: 1,
      }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) {
      setItems(prev => prev.filter(i => i.id !== id));
      return;
    }
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  }, []);

  const clearAll = useCallback(() => {
    setItems([]);
  }, []);

  const clearByStore = useCallback((store) => {
    setItems(prev => prev.filter(i => {
      const s = (i.store || '').toLowerCase();
      return s !== store && !(store === 'woolworths' && s === 'woolies');
    }));
  }, []);

  const isInList = useCallback((id) => {
    return items.some(i => i.id === id);
  }, [items]);

  // 统计
  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);

  const colesItems = items.filter(i => (i.store || '').toLowerCase() === 'coles');
  const wooliesItems = items.filter(i => {
    const s = (i.store || '').toLowerCase();
    return s === 'woolworths' || s === 'woolies';
  });

  const colesTotal = colesItems.reduce((sum, i) => sum + i.salePrice * i.qty, 0);
  const wooliesTotal = wooliesItems.reduce((sum, i) => sum + i.salePrice * i.qty, 0);
  const totalSaved = items.reduce((sum, i) => sum + (i.originalPrice - i.salePrice) * i.qty, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQty,
    clearAll,
    clearByStore,
    isInList,
    totalCount,
    colesItems,
    wooliesItems,
    colesTotal,
    wooliesTotal,
    totalSaved,
  };

  return (
    <ShoppingListContext.Provider value={value}>
      {children}
    </ShoppingListContext.Provider>
  );
}

export function useShoppingList() {
  const ctx = useContext(ShoppingListContext);
  if (!ctx) throw new Error('useShoppingList must be used within ShoppingListProvider');
  return ctx;
}
