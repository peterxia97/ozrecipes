// 每周特价数据：手动维护
// 更新方式：浏览 coles.com.au/catalogues 和 woolworths.com.au/catalogue
// 筛选与留学生相关的高性价比商品

export default {
  // 当前有效的特价周期
  currentPeriod: {
    startDate: '2026-06-01',
    endDate: '2026-06-07',
    label: '6月第1周',
  },

  specials: [
    // ==================== Coles 特价 ====================
    {
      id: 's001', brand: 'coles', category: 'meat',
      nameZh: '鸡胸肉', nameEn: 'RSPCA Chicken Breast',
      originalPrice: 12.00, salePrice: 8.00, discount: 33, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's002', brand: 'coles', category: 'meat',
      nameZh: '猪排骨', nameEn: 'Pork Loin Chops',
      originalPrice: 14.00, salePrice: 9.00, discount: 36, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's003', brand: 'coles', category: 'veggie',
      nameZh: '西兰花', nameEn: 'Broccoli',
      originalPrice: 3.50, salePrice: 1.90, discount: 46, unit: 'each',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's004', brand: 'coles', category: 'dairy',
      nameZh: '鸡蛋', nameEn: 'Free Range Eggs 12pk',
      originalPrice: 5.50, salePrice: 3.90, discount: 29, unit: 'dozen',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's005', brand: 'coles', category: 'fruit',
      nameZh: '牛油果', nameEn: 'Avocado',
      originalPrice: 2.00, salePrice: 1.20, discount: 40, unit: 'each',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's006', brand: 'coles', category: 'frozen',
      nameZh: '冷冻水饺', nameEn: 'Frozen Dumplings',
      originalPrice: 7.00, salePrice: 5.00, discount: 29, unit: 'pack',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's007', brand: 'coles', category: 'pantry',
      nameZh: '方便面5连包', nameEn: 'Instant Noodles 5pk',
      originalPrice: 3.80, salePrice: 2.50, discount: 34, unit: 'pack',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's008', brand: 'coles', category: 'bakery',
      nameZh: '全麦面包', nameEn: 'Wholemeal Bread',
      originalPrice: 3.50, salePrice: 2.00, discount: 43, unit: 'loaf',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },

    // ==================== Woolworths 特价 ====================
    {
      id: 's009', brand: 'woolies', category: 'meat',
      nameZh: '鸡腿肉', nameEn: 'Chicken Thigh Fillet',
      originalPrice: 9.00, salePrice: 6.00, discount: 33, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's010', brand: 'woolies', category: 'meat',
      nameZh: '三文鱼', nameEn: 'Salmon Fillet',
      originalPrice: 22.00, salePrice: 16.00, discount: 27, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's011', brand: 'woolies', category: 'veggie',
      nameZh: '番茄', nameEn: 'Truss Tomatoes',
      originalPrice: 5.90, salePrice: 3.50, discount: 41, unit: 'kg',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's012', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Full Cream Milk 2L',
      originalPrice: 3.50, salePrice: 2.50, discount: 29, unit: '2L',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's013', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Bananas',
      originalPrice: 3.50, salePrice: 1.90, discount: 46, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's014', brand: 'woolies', category: 'snack',
      nameZh: '薯片', nameEn: 'Smiths Chips',
      originalPrice: 4.50, salePrice: 2.50, discount: 44, unit: 'pack',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's015', brand: 'woolies', category: 'pantry',
      nameZh: '花生酱', nameEn: 'Peanut Butter',
      originalPrice: 3.80, salePrice: 2.50, discount: 34, unit: '375g',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },

    // ==================== Aldi 特价 ====================
    {
      id: 's016', brand: 'aldi', category: 'meat',
      nameZh: '五花肉', nameEn: 'Pork Belly',
      originalPrice: 11.00, salePrice: 7.99, discount: 27, unit: 'kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's017', brand: 'aldi', category: 'veggie',
      nameZh: '小白菜', nameEn: 'Bok Choy',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: 'bunch',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's018', brand: 'aldi', category: 'dairy',
      nameZh: '黄油', nameEn: 'Butter 250g',
      originalPrice: 3.50, salePrice: 2.49, discount: 29, unit: '250g',
      isHot: false,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's019', brand: 'aldi', category: 'frozen',
      nameZh: '冷冻蔬菜', nameEn: 'Frozen Mixed Vegetables',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: '1kg',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
    {
      id: 's020', brand: 'aldi', category: 'snack',
      nameZh: '巧克力', nameEn: 'Choceur Chocolate',
      originalPrice: 3.99, salePrice: 2.29, discount: 43, unit: 'block',
      isHot: true,
      validFrom: '2026-06-01', validTo: '2026-06-07',
    },
  ],

  // 辅助方法：按超市筛选
  getSpecialsByBrand(brand) {
    return this.specials.filter(s => s.brand === brand);
  },

  // 辅助方法：按分类筛选
  getSpecialsByCategory(category) {
    return this.specials.filter(s => s.category === category);
  },

  // 辅助方法：获取热门折扣
  getHotDeals() {
    return this.specials.filter(s => s.isHot);
  },

  // 辅助方法：按超市+分类双重筛选
  getFilteredSpecials(brand, category) {
    return this.specials.filter(s => {
      const brandMatch = !brand || brand === 'all' || s.brand === brand;
      const categoryMatch = !category || category === 'all' || s.category === category;
      return brandMatch && categoryMatch;
    });
  },

  // 辅助方法：自动计算折扣百分比
  calcDiscount(original, sale) {
    return Math.round((1 - sale / original) * 100);
  },
};
