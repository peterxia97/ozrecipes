// 每周特价数据：从 Coles / Woolworths / Aldi 官网抓取
// 更新方式：浏览 coles.com.au/on-special 和 woolworths.com.au/catalogue
// 筛选与留学生相关的高性价比商品

export default {
  // 当前有效的特价周期
  currentPeriod: {
    startDate: '2026-05-28',
    endDate: '2026-06-03',
    label: '5月28日 - 6月3日',
  },

  specials: [
    // ==================== Coles 半价特价（真实数据 2026-05-28 抓取） ====================
    // --- 食用油 ---
    {
      id: 's001', brand: 'coles', category: 'pantry',
      nameZh: '特级初榨橄榄油', nameEn: 'La Espanola Extra Virgin Olive Oil 1L',
      originalPrice: 26.00, salePrice: 13.00, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5833557.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！炒菜凉拌都好用，1L 大瓶超值',
    },
    {
      id: 's001b', brand: 'coles', category: 'pantry',
      nameZh: '淡味橄榄油', nameEn: 'La Espanola Mild & Light Olive Oil 1L',
      originalPrice: 26.00, salePrice: 13.00, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5847020.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！适合中式爆炒，烟点更高',
    },

    // --- 大米 ---
    {
      id: 's002', brand: 'coles', category: 'pantry',
      nameZh: '茉莉香米', nameEn: 'Sunrice Jasmine White Rice 5kg',
      originalPrice: 27.00, salePrice: 13.50, discount: 50, unit: '5kg',
      image: 'https://cdn.productimages.coles.com.au/productimages/4/4363786.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！5kg 大袋囤货，留学生必备',
    },

    // --- 高汤/汤料 ---
    {
      id: 's003', brand: 'coles', category: 'pantry',
      nameZh: '鸡汤高汤', nameEn: "Campbell's Real Stock Chicken 1L",
      originalPrice: 4.50, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8157935.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！煮面炖菜加一勺秒变高汤',
    },
    {
      id: 's003b', brand: 'coles', category: 'pantry',
      nameZh: '低盐鸡汤高汤', nameEn: "Campbell's Real Stock Chicken Salt Reduced 1L",
      originalPrice: 4.50, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8837306.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！减盐版更健康',
    },
    {
      id: 's003c', brand: 'coles', category: 'pantry',
      nameZh: '蔬菜高汤', nameEn: "Campbell's Real Stock Vegetable 1L",
      originalPrice: 4.50, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8053838.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！素菜炖汤必备',
    },
    {
      id: 's003d', brand: 'coles', category: 'pantry',
      nameZh: '牛肉高汤', nameEn: "Campbell's Real Stock Beef 1L",
      originalPrice: 4.50, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8055800.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！红烧牛肉面好搭档',
    },
    {
      id: 's003e', brand: 'coles', category: 'pantry',
      nameZh: '鸡汤粉', nameEn: 'Vegeta Chicken Stock Powder 200g',
      originalPrice: 4.50, salePrice: 2.25, discount: 50, unit: '200g',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8496985.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！无麸质鸡汤粉，炒菜炖汤百搭',
    },

    // --- 冷冻水饺 ---
    {
      id: 's004', brand: 'coles', category: 'frozen',
      nameZh: '蔬菜水饺', nameEn: 'Golden Wok Vegetable Dumplings 230g',
      originalPrice: 8.50, salePrice: 4.25, discount: 50, unit: '230g',
      image: 'https://cdn.productimages.coles.com.au/productimages/3/3311517.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Diana Chan 系列，适合素馅爱好者',
    },
    {
      id: 's004b', brand: 'coles', category: 'frozen',
      nameZh: '川味猪肉水饺', nameEn: 'Golden Wok Szechuan Pork Dumplings 230g',
      originalPrice: 8.50, salePrice: 4.25, discount: 50, unit: '230g',
      image: 'https://cdn.productimages.coles.com.au/productimages/3/3311492.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！微辣川味，蘸醋吃超爽',
    },
    {
      id: 's004c', brand: 'coles', category: 'frozen',
      nameZh: '蜂蜜酱油鸡肉水饺', nameEn: 'Golden Wok Honey Soy Chicken Dumplings 230g',
      originalPrice: 8.50, salePrice: 4.25, discount: 50, unit: '230g',
      image: 'https://cdn.productimages.coles.com.au/productimages/4/4406608.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！甜咸口味，偏澳式 fusion',
    },
    {
      id: 's004d', brand: 'coles', category: 'frozen',
      nameZh: '韩式牛肉水饺', nameEn: 'Golden Wok Korean Beef Dumplings 230g',
      originalPrice: 8.50, salePrice: 4.25, discount: 50, unit: '230g',
      image: 'https://cdn.productimages.coles.com.au/productimages/3/3311506.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！韩式风味，配泡菜汤绝佳',
    },

    // --- 冷冻蔬菜 ---
    {
      id: 's005', brand: 'coles', category: 'frozen',
      nameZh: '冷冻花椰菜', nameEn: 'McCain Cauliflower 500g',
      originalPrice: 5.00, salePrice: 2.50, discount: 50, unit: '500g',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8162491.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！炒菜打泥都好用',
    },

    // --- 意面酱 ---
    {
      id: 's006', brand: 'coles', category: 'pantry',
      nameZh: '帕玛森意面酱', nameEn: 'Mutti Sugo Parmigiano Reggiano 400g',
      originalPrice: 5.70, salePrice: 2.85, discount: 50, unit: '400g',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5308353.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！意大利进口，拌面一绝',
    },
    {
      id: 's006b', brand: 'coles', category: 'pantry',
      nameZh: '罗勒意面酱', nameEn: 'Mutti Sugo Genovese Basil 400g',
      originalPrice: 5.70, salePrice: 2.85, discount: 50, unit: '400g',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5306620.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！罗勒风味，做意大利面方便',
    },

    // --- 新鲜意面 ---
    {
      id: 's007', brand: 'coles', category: 'pantry',
      nameZh: '牛肉馅意面', nameEn: 'On The Menu Beef Ravioli 600g',
      originalPrice: 11.00, salePrice: 5.50, discount: 50, unit: '600g',
      image: 'https://cdn.productimages.coles.com.au/productimages/9/9991287.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！新鲜意面，煮5分钟即食',
    },
    {
      id: 's007b', brand: 'coles', category: 'pantry',
      nameZh: '菠菜芝士意面', nameEn: 'On The Menu Ricotta & Spinach Agnolotti 600g',
      originalPrice: 11.00, salePrice: 5.50, discount: 50, unit: '600g',
      image: 'https://cdn.productimages.coles.com.au/productimages/9/9991390.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！素馅意面，口感绵密',
    },

    // --- 冷冻薯条/薯饼（空气炸锅好搭档）---
    {
      id: 's008', brand: 'coles', category: 'frozen',
      nameZh: '空气炸锅厚切薯条', nameEn: 'McCain Airfryer Steak Cut Chips 750g',
      originalPrice: 5.50, salePrice: 2.75, discount: 50, unit: '750g',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8076877.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！空气炸锅 12 分钟搞定',
    },
    {
      id: 's008b', brand: 'coles', category: 'frozen',
      nameZh: '空气炸锅薯饼', nameEn: 'McCain Air Fryer Hash Browns 525g',
      originalPrice: 5.50, salePrice: 2.75, discount: 50, unit: '525g',
      image: 'https://cdn.productimages.coles.com.au/productimages/1/1686450.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！早餐配蛋绝了',
    },

    // --- 奶酪 ---
    {
      id: 's009', brand: 'coles', category: 'dairy',
      nameZh: '爱尔兰波特奶酪', nameEn: "Cahill's Irish Porter Cheddar 170g",
      originalPrice: 7.90, salePrice: 3.95, discount: 50, unit: '170g',
      image: 'https://cdn.productimages.coles.com.au/productimages/1/1094371.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！特色爱尔兰奶酪，配饼干红酒',
    },

    // --- 饮料（烹饪可用）---
    {
      id: 's010', brand: 'coles', category: 'pantry',
      nameZh: '天然椰子水', nameEn: 'Raw C Pure Natural Coconut Water 1L',
      originalPrice: 5.50, salePrice: 2.75, discount: 50, unit: '1L',
      image: 'https://cdn.productimages.coles.com.au/productimages/3/3517705.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！做甜品/调酒都用得上',
    },
    {
      id: 's010b', brand: 'coles', category: 'pantry',
      nameZh: '苏打水玻璃瓶装', nameEn: 'Schweppes Soda Water Glass 4x300ml',
      originalPrice: 8.00, salePrice: 4.00, discount: 50, unit: '4pk',
      image: 'https://cdn.productimages.coles.com.au/productimages/7/7351965.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调酒必备苏打水',
    },

    // --- 北京烤鸭酥（冷冻）---
    {
      id: 's011', brand: 'coles', category: 'frozen',
      nameZh: '北京烤鸭酥', nameEn: 'King Of Kings Peking Duck Pastry 130g',
      originalPrice: 5.00, salePrice: 2.50, discount: 50, unit: '130g',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5300646.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！空气炸锅加热即可，当宵夜',
    },

    // ==================== Woolworths 特价 ====================
    {
      id: 's020', brand: 'woolies', category: 'meat',
      nameZh: '鸡腿肉', nameEn: 'Chicken Thigh Fillet',
      originalPrice: 9.00, salePrice: 6.00, discount: 33, unit: 'kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's021', brand: 'woolies', category: 'meat',
      nameZh: '三文鱼', nameEn: 'Salmon Fillet',
      originalPrice: 22.00, salePrice: 16.00, discount: 27, unit: 'kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's022', brand: 'woolies', category: 'veggie',
      nameZh: '番茄', nameEn: 'Truss Tomatoes',
      originalPrice: 5.90, salePrice: 3.50, discount: 41, unit: 'kg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's023', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Full Cream Milk 2L',
      originalPrice: 3.50, salePrice: 2.50, discount: 29, unit: '2L',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's024', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Bananas',
      originalPrice: 3.50, salePrice: 1.90, discount: 46, unit: 'kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },

    // ==================== Aldi 特价 ====================
    {
      id: 's030', brand: 'aldi', category: 'meat',
      nameZh: '五花肉', nameEn: 'Pork Belly',
      originalPrice: 11.00, salePrice: 7.99, discount: 27, unit: 'kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's031', brand: 'aldi', category: 'veggie',
      nameZh: '小白菜', nameEn: 'Bok Choy',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: 'bunch',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's032', brand: 'aldi', category: 'dairy',
      nameZh: '黄油', nameEn: 'Butter 250g',
      originalPrice: 3.50, salePrice: 2.49, discount: 29, unit: '250g',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
    },
    {
      id: 's033', brand: 'aldi', category: 'frozen',
      nameZh: '冷冻蔬菜', nameEn: 'Frozen Mixed Vegetables',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: '1kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
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
