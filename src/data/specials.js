// 每周特价数据：从 Coles / Woolworths / Aldi 官网抓取
// 更新方式：浏览 coles.com.au/on-special 和 woolworths.com.au/catalogue
// 全量半价商品数据，包含所有类别

export default {
  // 当前有效的特价周期
  currentPeriod: {
    startDate: '2026-05-28',
    endDate: '2026-06-03',
    label: '5月28日 - 6月3日',
  },

  specials: [
    // ==================== Coles 半价特价（23个） ====================
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

    {
      id: 's002', brand: 'coles', category: 'pantry',
      nameZh: '茉莉香米', nameEn: 'Sunrice Jasmine White Rice 5kg',
      originalPrice: 27.00, salePrice: 13.50, discount: 50, unit: '5kg',
      image: 'https://cdn.productimages.coles.com.au/productimages/4/4363786.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！5kg 大袋囤货，留学生必备',
    },

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

    {
      id: 's005', brand: 'coles', category: 'frozen',
      nameZh: '冷冻花椰菜', nameEn: 'McCain Cauliflower 500g',
      originalPrice: 5.00, salePrice: 2.50, discount: 50, unit: '500g',
      image: 'https://cdn.productimages.coles.com.au/productimages/8/8162491.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！炒菜打泥都好用',
    },

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

    {
      id: 's009', brand: 'coles', category: 'dairy',
      nameZh: '爱尔兰波特奶酪', nameEn: "Cahill's Irish Porter Cheddar 170g",
      originalPrice: 7.90, salePrice: 3.95, discount: 50, unit: '170g',
      image: 'https://cdn.productimages.coles.com.au/productimages/1/1094371.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！特色爱尔兰奶酪，配饼干红酒',
    },

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

    {
      id: 's011', brand: 'coles', category: 'frozen',
      nameZh: '北京烤鸭酥', nameEn: 'King Of Kings Peking Duck Pastry 130g',
      originalPrice: 5.00, salePrice: 2.50, discount: 50, unit: '130g',
      image: 'https://cdn.productimages.coles.com.au/productimages/5/5300646.jpg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！空气炸锅加热即可，当宵夜',
    },


    // ==================== Woolworths 半价特价（全量 1978 个，2026-05-31 抓取） ====================

    // --- 肉类 (208个) ---
    {
      id: 'w0014', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0015', brand: 'woolies', category: 'meat',
      nameZh: '培根', nameEn: 'Hans Middle Bacon Rashers From the Deli per 170g',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'per 170g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/714680.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！培根超值',
    },

    {
      id: 'w0019', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Red Rock Deli Potato Chips Honey Soy Chicken 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/781394.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0020', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Arnott\'s Shapes Chicken Crimpy Cracker Biscuits 175g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384245.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0022', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Woolworths Chicken Garlic Kyiv From The Deli each',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/769243.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0032', brand: 'woolies', category: 'meat',
      nameZh: '培根', nameEn: 'Arnott\'s Shapes Cheese & Bacon Cracker Biscuits 180g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！培根超值',
    },

    {
      id: 'w0039', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Nature\'s Gift Adult Wet Dog Food Casserole With Beef Vegetables & Barley 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/793062.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0046', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0049', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Nature\'s Gift Adult Wet Dog Food Tin Chicken Casserole 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/503369.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0057', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0059', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Nature\'s Gift Adult Wet Dog Food Loaf Chicken Vegetables & Rice 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071405.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0066', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Creamy Chicken With Lots Of Noodles 60g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/026649.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0074', brand: 'woolies', category: 'meat',
      nameZh: '香肠', nameEn: 'Patties Sausage Roll Party 450g',
      originalPrice: 9.7, salePrice: 4.85, discount: 50, unit: '450g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/030748.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香肠超值',
    },

    {
      id: 'w0084', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Vegeta Chicken Stock Cubes 60g',
      originalPrice: 2, salePrice: 1, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/083117.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0100', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Chicken With Lots Of Noodles 60g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/032924.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0104', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Vegeta Beef Stock Cubes 60g',
      originalPrice: 2, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/082540.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0111', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Hong Kong Dim Sim Kitchen Pork & Chive Dumplings 300g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162544.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0113', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Creamy Chicken With Croutons 60g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166232.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0119', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Bertocchi Smoked Pork Meaty Hock 700g - 1.1kg',
      originalPrice: 15.95, salePrice: 0, discount: 50, unit: '700g - 1.1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/843231.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0126', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Creamy Chicken & Corn With Croutons 60g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166227.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0134', brand: 'woolies', category: 'meat',
      nameZh: '羊肉', nameEn: 'Nature\'s Gift Adult Wet Dog Food Loaf Lamb Recipe With Vegetables & Pasta 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/058867.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！羊肉超值',
    },

    {
      id: 'w0140', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0162', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Dine Cat Creamy Treats Chicken Flavour Sachets 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/539085.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0171', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0176', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Chinese Chicken & Corn 66g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '66g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054148.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0182', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0194', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Whiskas Adult 1 + Years Wet Cat Food Chicken Favourites in Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/625693.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0203', brand: 'woolies', category: 'meat',
      nameZh: '甜椒', nameEn: 'Continental Classics Cup A Soup Pepper Steak & Mushroom 52g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '52g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828451.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！甜椒超值',
    },

    {
      id: 'w0207', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Nature\'s Gift Adult Wet Dog Food Loaf Lamb With Beef Vegetables & Barley 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071686.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0232', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Mild Chicken Curry 58g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '58g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/013674.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0237', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Four\'N Twenty Traveller Microwavable Classic Beef Pie each',
      originalPrice: 4.3, salePrice: 2.15, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/392359.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0243', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Nature\'s Gift Puppy Wet Dog Food Mince With Chicken 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/523632.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0246', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Hong Kong Dim Sim Kitchen Dumplings Chicken Ginger & Spring Onions 300g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6016216.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0249', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Continental Classics Cup A Soup Roast Chicken 75g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/019158.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0260', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Continental Cup A Soup Hearty Pea & Ham 2 pack',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/320302.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0261', brand: 'woolies', category: 'meat',
      nameZh: '香肠', nameEn: 'Four\'N Twenty Traveller King Size Sausage Roll 180g',
      originalPrice: 4.3, salePrice: 2.15, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/785276.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香肠超值',
    },

    {
      id: 'w0265', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0271', brand: 'woolies', category: 'meat',
      nameZh: '牛奶', nameEn: 'Nice & Natural Roasted Nut Bars Milk Choc 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/332059.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0273', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Hong Kong Dim Sim Kitchen BBQ Pork Buns 300g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164513.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0279', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Whiskas Adult 1 + Years Wet Cat Food Beef Favourites In Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/625159.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0282', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Whiskas 1+ Years Wet Cat Food Chicken In Gravy Pouch 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/784318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0289', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Dine Creamy Treats Collection Cat Food Chicken & Whitefish 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/818747.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0290', brand: 'woolies', category: 'meat',
      nameZh: '牛奶', nameEn: 'Nice & Natural Roasted Nut Bars Peanut & Cashew With Milk Choc 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/830008.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0296', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0300', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Four\'N Twenty Traveller Microwavable Pie Beef Cheese & Bacon 160g',
      originalPrice: 4.3, salePrice: 2.15, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/086334.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0303', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Whiskas Kitten Wet Cat Food Chicken In Gravy Pouch 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/784322.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0304', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Whiskas 1+ Years Wet Cat Food Favourites Beef In Gravy Pouch 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/784323.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0307', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0311', brand: 'woolies', category: 'meat',
      nameZh: 'Haribo Goldbears Sharepack 200g', nameEn: 'Haribo Goldbears Sharepack 200g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/487955.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Haribo Goldbears Sharepack 200g超值',
    },

    {
      id: 'w0316', brand: 'woolies', category: 'meat',
      nameZh: '坚果', nameEn: 'Nice & Natural Roasted Nut Bars Trail Mix 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/332068.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0335', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Hong Kong Dim Sim Kitchen Pork Dim Sims 480g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '480g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/160751.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0341', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Longer & Stronger 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463195.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0354', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Red Rock Deli Chef Series Potato Chips Spiced Chargrilled Chicken 150g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030123.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0365', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Optimum Chilled Dog Food Roll Adult Chicken & Spinach 1kg',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028991.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0366', brand: 'woolies', category: 'meat',
      nameZh: 'Haribo Starmix Sharepack 200g', nameEn: 'Haribo Starmix Sharepack 200g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/487983.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Haribo Starmix Sharepack 200g超值',
    },

    {
      id: 'w0370', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Dream Lengths Restoring Shampoo 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008573.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0390', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0406', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Red Rock Deli Chef Series Potato Chips Smoky Beef Ribs With BBQ Sauce 150g',
      originalPrice: 6, salePrice: 0, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029839.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0422', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0433', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0435', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Optimum Chilled Dog Food Roll Puppy Chicken & Spinach 1kg',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028499.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0439', brand: 'woolies', category: 'meat',
      nameZh: '草莓', nameEn: 'Haribo Balla Stixx Strawberry 200g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/526382.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0461', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Arnott\'s Shapes Spicy Fried Chicken Cracker Biscuits 165g',
      originalPrice: 4, salePrice: 0, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035060.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0470', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Hong Kong Dim Sim Kitchen Dumplings Pork Soup 240g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6015785.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0484', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Daily Moisture Renewal Nourishing Shampoo 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/081515.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0492', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Glycolic Gloss Shampoo 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6061698.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0515', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0524', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Soft & Smooth 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463194.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0531', brand: 'woolies', category: 'meat',
      nameZh: '猪肉', nameEn: 'Hong Kong Dim Sim Kitchen Pork Prawn & Mushroom Siu Mai 300g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162538.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猪肉超值',
    },

    {
      id: 'w0533', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'True Blue Aussie Beef Weasands Dog Treats 7 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '7 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008913.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0538', brand: 'woolies', category: 'meat',
      nameZh: '虾', nameEn: 'Nong Shim Shrimp Meat Chips 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/258579.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！虾超值',
    },

    {
      id: 'w0541', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Longer & Stronger 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486433.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0547', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0551', brand: 'woolies', category: 'meat',
      nameZh: 'Haribo Balla Stixx Rainbow 200g', nameEn: 'Haribo Balla Stixx Rainbow 200g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/526383.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Haribo Balla Stixx Rainbow 200g超值',
    },

    {
      id: 'w0553', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Hyaluron Plump 72h Moisture Filling Shampoo 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6010747.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0558', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0572', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Addictive Brilliant Shine 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463193.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0583', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Nuttelex Chicken Stock 1L',
      originalPrice: 3.9, salePrice: 1.95, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6014663.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0588', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Pro V Classic Clean Shampoo 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/081519.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0589', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Addictive Brilliant Shine 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/491925.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0597', brand: 'woolies', category: 'meat',
      nameZh: '豆类', nameEn: 'Botanica Caribbean Vetiver & Sandalwood Reed Diffuser 80mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '80mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/078657.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！豆类超值',
    },

    {
      id: 'w0616', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Elvive Extraordinary Oil Nourishing Shampoo 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008785.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0617', brand: 'woolies', category: 'meat',
      nameZh: 'Haribo Balla Bites Share Size 200g', nameEn: 'Haribo Balla Bites Share Size 200g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035915.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Haribo Balla Bites Share Size 200g超值',
    },

    {
      id: 'w0620', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo & Conditioner 2 In 1 Total Care 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486510.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0636', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Hyaluron Pure Shampoo 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6014599.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0641', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0643', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0656', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Intensive Repair + Ceramide Shampoo 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062168.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0665', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Coconut Hydration 700mL',
      originalPrice: 13.5, salePrice: 0, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004126.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0671', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0675', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'TRESemme Shampoo Purple Toning 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/265546.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0682', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0684', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Pro-V  Sheer Volume Shampoo for Fine Hair 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/084702.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0701', brand: 'woolies', category: 'meat',
      nameZh: '鸡胸肉', nameEn: 'True Blue Aussie Chicken Fillets Dog Treats 4 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008994.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡胸肉超值',
    },

    {
      id: 'w0706', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Shan Seasoning Mix Malay Chicken Biryani 60g',
      originalPrice: 2.2, salePrice: 1.1, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/437352.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0707', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'True Blue Natures Dental Dog Chews Aussie Chicken Necks 100g',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '100g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056767.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0710', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Soothing Oatmeal Shampoo 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/596155.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0711', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Elvive Color Protect Shampoo 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008860.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0716', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Sunsilk Shampoo Coconut Hydration 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004333.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0740', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'Nuttelex Beef Stock 1L',
      originalPrice: 3.9, salePrice: 1.95, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6012042.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0758', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Ultimate 10 Repair & Protect Shampoo for Damage 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/081521.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0764', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0774', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Growth Booster Shampoo 200mL',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6051621.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0787', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Intensive Repair + Ceramide Shampoo 850mL',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059896.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0795', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0806', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0808', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Glycolic Gloss Shampoo 200mL',
      originalPrice: 19, salePrice: 0, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/567585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0815', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'True Blue Aussie Beef Tendons Dog Treats 3 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008844.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w0816', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Bond Repair Shampoo 200mL',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/280404.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0819', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Garnier Skin Active Hydra Bomb Sheet Face Mask Chamomile each',
      originalPrice: 8, salePrice: 4, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/056453.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0825', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Hask Curl Care Shampoo 355mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/175283.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0847', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0860', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Pro V Colour Protection Shampoo 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/081518.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0864', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Dry Scalp Care Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138425.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0867', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Biotin & Collagen Shampoo For Fine Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/699861.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0872', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Growth Bomb Supercharge Shampoo 300mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267134.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0881', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX ProGrowth & Peptide Shampoo 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060444.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0882', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Pro-V Smooth & Sleek Shampoo for Frizzy Hair 375mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/083254.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0886', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0888', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Anti Dandruff Shampoo With Salicylic Acid 450mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '450mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004003.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0889', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Cool Curls Shampoo With Aloe Vera For Curly Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/557071.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0899', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Collagen Silicone-Free Shampoo 375mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571528.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0902', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Smooth & Control Shampoo With Ketatin For Frizzy Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152966.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0907', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Got2B Dry Shampoo Extra Fresh 200mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684504.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0913', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Dry Shampoo Powder Instant Refresh 17.2g',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '17.2g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6052039.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0915', brand: 'woolies', category: 'meat',
      nameZh: '酱汁', nameEn: 'Al\'Fez Moroccan Meatball Tagine Simmer Sauce Medium 425g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '425g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033505.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱汁超值',
    },

    {
      id: 'w0918', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0929', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0942', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Repair & Strengthen Shampoo Hemp Seed Oil For Damaged Hair 500mL',
      originalPrice: 18, salePrice: 0, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152955.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0955', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Volume Boost + Collagen Shampoo 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062460.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0957', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Hask Keratin Smoothing Shampoo 355mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684164.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0968', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'True Blue Freeze Dry Raw Coated Dry Dog Food Grain Free With Chicken 2.5kg',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '2.5kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057352.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w0972', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Bond Strength + Biotin Shampoo 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0976', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Coconut Curls Shampoo For Curly Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486567.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0979', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'TRESemme Shampoo Keratin Smooth 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/265189.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0980', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Hydrate & Nourish Shampoo With Abyssinian Oil For Dry Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152710.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0986', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Bond Strength + Biotin Shampoo 850mL',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059898.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0993', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Coconut Milk Shampoo 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/325771.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0994', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Hyaluron Clarify & Hydrate Shampoo 375mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004442.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0996', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Volume Thickening Shampoo Biotin Collagen for  Fine Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152656.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w0997', brand: 'woolies', category: 'meat',
      nameZh: '羊肉', nameEn: 'True Blue Freeze Dry Raw Coated Dry Dog Food Grain Free With Lamb 2.5kg',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '2.5kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056823.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！羊肉超值',
    },

    {
      id: 'w1007', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Hask Argan Oil Repairing Shampoo 355mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684145.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1012', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1013', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Elvive Bond Repair Rescue Pre Shampoo 200mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/277582.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1019', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Got2B Dry Shampoo Extra Volume 200mL',
      originalPrice: 15, salePrice: 0, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684013.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1032', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Elvive Total Repair 5 Shampoo 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008645.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1035', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Growth Bomb 2 In 1 Shampoo & Conditioner Support For Thinning Hair 300mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004673.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1039', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Argan Oil Shampoo For Dry & Damaged Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725753.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1040', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Brazilian Keratin Therapy Shampoo For Dull Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/376590.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1042', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1052', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1054', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1060', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Extra Strength Coconut Miracle Oil Shampoo - Dry Hair 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/600932.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1061', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Palmolive Naturals Anti Dandruff Fresh 2 In 1 Shampoo & Conditioner 700mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062227.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1062', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Palmolive Naturals Anti Dandruff Scalp 2 In 1 Shampoo & Conditioner 700mL',
      originalPrice: 15, salePrice: 0, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6061585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1069', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'True Blue Freeze Dry Raw Coated Dry Dog Food Grain Free With Beef 2.5kg',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '2.5kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057351.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w1084', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Argan Oil Extra Strength Shampoo For Damaged Hair 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1089', brand: 'woolies', category: 'meat',
      nameZh: '牛肉', nameEn: 'The Han Kitchen Beef Ramyun 4 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/235625.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛肉超值',
    },

    {
      id: 'w1102', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'The Han Kitchen Flaming Chicken Carbonara Noodles 4 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/322923.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w1133', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1138', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Cool Menthol Anti Dandruff Shampoo for Irritated Scalp 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138427.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1148', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Keratin Silicone-Free Shampoo 375mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571580.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1155', brand: 'woolies', category: 'meat',
      nameZh: '鸡肉', nameEn: 'Al\'Fez Moroccan Chicken Tagine Simmer Sauce Mild 425g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '425g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033201.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鸡肉超值',
    },

    {
      id: 'w1164', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1174', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1176', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1182', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Refreshing Scalp Rosemary Mint Shampoo 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006933.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1183', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pantene Biotin Silicone-Free Shampoo 375mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '375mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571593.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1203', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'L\'Oreal Paris Extraordinary Oil Coconut Shampoo 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008763.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1226', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Dove Damage Therapy Volume Boost & Collagen Shampoo 850mL',
      originalPrice: 19.5, salePrice: 0, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059897.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1239', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Argan Oil Of Morocco Lightweight Shampoo 385mL',
      originalPrice: 23, salePrice: 0, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/591507.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1257', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1272', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Itchy Scalp Care Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138421.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1288', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1298', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1300', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1381', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1393', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Refreshing Tea Tree Oil Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064149.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1410', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'OGX Bond Protein Repair Shampoo 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104115.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1412', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1416', brand: 'woolies', category: 'meat',
      nameZh: 'Sistema To Go Ribbon Lunch Box Container 1.1L each', nameEn: 'Sistema To Go Ribbon Lunch Box Container 1.1L each',
      originalPrice: 11.55, salePrice: 5.77, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/219675.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Ribbon Lunch Box Container 1.1L each超值',
    },

    {
      id: 'w1422', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1424', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1505', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1518', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Pro:Voke Brighten & Repair Shampoo 200mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/857458.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1536', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1546', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1548', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1629', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1645', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Root Concealer Wand Champagne Blonde 3g',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '3g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034063.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1660', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1670', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1672', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1753', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1784', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1792', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Nature\'s Own Sleep Ezy Capsules With Hops Valerian + Chamomile 100 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/940166.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1794', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1796', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1877', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1908', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1918', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1920', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1940', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'TREsemme Bond Repair & UV Filters Shampoo 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6051631.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1941', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Thanks To Nature Revitaplex Bond Repair #3 Shampoo 250mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004006.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1970', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Shampoo 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1971', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1975', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Apple Fresh Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },

    {
      id: 'w1977', brand: 'woolies', category: 'meat',
      nameZh: '火腿', nameEn: 'Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138414.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！火腿超值',
    },


    // --- 海鲜 (46个) ---
    {
      id: 'w0026', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna Chunks In Springwater 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/340411.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0029', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Chunky Tuna In Olive Oil Blend 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257360.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0041', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna In Tomato & Onion Savoury Sauce 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/057070.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0043', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Lemon & Cracked Pepper 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/027570.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0044', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Chilli 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/057053.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0092', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Naturally Smoked Tuna 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/211299.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0099', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Sweet Corn & Mayonnaise 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/310694.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0151', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Zesty Vinaigrette 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/092589.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0155', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Mango Chilli 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252264.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0175', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Oven Dried Tomato & Basil 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/027574.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0189', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Sweet Chilli 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/663986.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0201', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Tangy Jalapenos 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/429224.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0204', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'Whiskas Adult 1 + Years Wet Cat Food Tuna Favourites In Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/625692.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0238', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'John West Tuna With Mild Indian Curry 95g',
      originalPrice: 2.9, salePrice: 1.45, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/135984.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0245', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'Dine Cat Creamy Treats Treats Prawn & Tuna Sachets 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/807548.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0256', brand: 'woolies', category: 'seafood',
      nameZh: '三文鱼', nameEn: 'Dine Cat Creamy Treats Tuna & Salmon Flavour Sachets 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/539750.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！三文鱼超值',
    },

    {
      id: 'w0258', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'Dine Creamy Treats Tuna Flavour Cat Treat 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/539639.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0281', brand: 'woolies', category: 'seafood',
      nameZh: '大虾', nameEn: 'Hong Kong Dim Sim Kitchen Prawn Dumplings 300g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/219281.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大虾超值',
    },

    {
      id: 'w0334', brand: 'woolies', category: 'seafood',
      nameZh: '海鲜', nameEn: 'Dine Creamy Cat Treats Seafood Selections 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/818784.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！海鲜超值',
    },

    {
      id: 'w0336', brand: 'woolies', category: 'seafood',
      nameZh: '大虾', nameEn: 'Just Caught Raw Prawns Tail On Large 500g',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '500g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6070054.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大虾超值',
    },

    {
      id: 'w0345', brand: 'woolies', category: 'seafood',
      nameZh: '海鲜', nameEn: 'Dine Cat Creamy Treats Mixed Seafood Sachets 12g x 4 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '12g x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/807547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！海鲜超值',
    },

    {
      id: 'w0368', brand: 'woolies', category: 'seafood',
      nameZh: '金枪鱼', nameEn: 'Bibigo Gimbap Seaweed Rice Roll Tuna Mayo 250g',
      originalPrice: 7.95, salePrice: 3.95, discount: 50, unit: '250g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/670961.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金枪鱼超值',
    },

    {
      id: 'w0395', brand: 'woolies', category: 'seafood',
      nameZh: '大虾', nameEn: 'Just Caught Raw Prawns Tail Off Medium 500g',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '500g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6070026.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大虾超值',
    },

    {
      id: 'w0487', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Findus Crumbed Fish Fingers 6 pack',
      originalPrice: 8.75, salePrice: 4.35, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309991.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w0550', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Findus Jumbo Battered Fish Fillets 400g',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '400g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034872.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w0606', brand: 'woolies', category: 'seafood',
      nameZh: '大虾', nameEn: 'Ho Mai Money Bags With Prawns 240g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/973266.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大虾超值',
    },

    {
      id: 'w0687', brand: 'woolies', category: 'seafood',
      nameZh: '虾', nameEn: 'Nong Shim Shrimp Crackers 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/063285.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！虾超值',
    },

    {
      id: 'w0792', brand: 'woolies', category: 'seafood',
      nameZh: '虾', nameEn: 'Nong Shim Shrimp Flavoured Chips Hot & Spicy 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/258574.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！虾超值',
    },

    {
      id: 'w0898', brand: 'woolies', category: 'seafood',
      nameZh: '虾', nameEn: 'Nongshim Shrimp Chips Salsa Picante 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057948.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！虾超值',
    },

    {
      id: 'w1294', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Evening Primrose + Fish Oil Capsules 100 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/172804.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1408', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Own Fish Oil Odourless 1500mg Capsules 200 pack',
      originalPrice: 46.5, salePrice: 23.25, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/322292.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1478', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Omega Triple Super Strength Fish Oil Capsules 150 pack',
      originalPrice: 85, salePrice: 42.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906380.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1527', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Swisse Ultiboost Odourless High Strength Wild Fish Oil 200 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/375681.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1541', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Fish Oil 1000mg Omega-3 Capsules 200 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828172.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1552', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Omega Brain High DHA Fish Oil 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/256205.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1603', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Own Concentrated Fish Oil Capsules Omega Triple 180 pack',
      originalPrice: 89.5, salePrice: 44.75, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058631.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1604', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Own Concentrated Fish Oil Omega Mini Capsules 250 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058434.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1639', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Swisse Ultiboost Odourless Super Strength Wild Fish Oil 200 pack',
      originalPrice: 55, salePrice: 27.5, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/155477.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1679', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Fish Oil 1000mg Omega-3 Capsules 400 pack',
      originalPrice: 60, salePrice: 30, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828200.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1689', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Odourless Fish Oil 1000mg Omega-3 Capsules 200 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828148.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1690', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Odourless Fish Oil 1000mg Omega-3 Capsules 400 pack',
      originalPrice: 70, salePrice: 35, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828136.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1693', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Blackmores Omega Triple High Strength Fish Oil Capsules 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828241.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1825', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Way Kids Omega-3 Fish Oil Smart Trio 60 pack',
      originalPrice: 25.5, salePrice: 12.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/775078.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1861', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Way Wild Caught Fish Oil 1000mg Soft Capsules 250 pack',
      originalPrice: 44, salePrice: 22, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028327.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1862', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Nature\'s Way Wild Caught Fish Oil 1500mg Soft Capsules 120 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6000620.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },

    {
      id: 'w1925', brand: 'woolies', category: 'seafood',
      nameZh: '鱼肉', nameEn: 'Swisse Ultiboost Odourless Wild Fish Oil Capsules 400 pack',
      originalPrice: 69.5, salePrice: 34.75, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/375678.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼肉超值',
    },


    // --- 乳制品 (224个) ---
    {
      id: 'w0001', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0003', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0004', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0011', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0013', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0021', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Red Rock Deli Potato Chips Sweet Chilli & Sour Cream 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/781370.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0027', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Kinder Bueno Milk Chocolate Bar 43g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '43g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/066527.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0048', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0065', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Arnott\'s Royals Milk Chocolate Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/069036.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0072', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Unsweetened Almond Long Life Milk UHT 1L',
      originalPrice: 3.3, salePrice: 0, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6024687.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0078', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Arnott\'s Shapes Nacho Cheese Cracker Biscuits 160g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254928.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0080', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Arnott\'s Shapes Vegemite & Cheese Cracker Biscuits 165g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/812783.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0085', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Uncle Tobys Muesli Bars Yoghurt & Strawberry 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0096', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Curly Wurly Milk Chocolate Bar 21.5g',
      originalPrice: 2, salePrice: 1, discount: 50, unit: '21.5g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/109586.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0098', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Chomp Caramel Milk Chocolate Bar 30g',
      originalPrice: 2, salePrice: 1, discount: 50, unit: '30g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/098361.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0107', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Aero Peppermint Milk Chocolate Bar 40g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/330355.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0109', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Uncle Tobys Muesli Bar Milkybar Cookies 145g 5 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '145g 5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055457.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0110', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Twix Milk Chocolate Bar with Caramel Biscuit 50g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/657419.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0117', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Oat Long Life Milk UHT 1L',
      originalPrice: 3.3, salePrice: 1.65, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6024108.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0118', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Freddo Chocolate 35g',
      originalPrice: 2, salePrice: 1, discount: 50, unit: '35g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/326628.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0127', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0129', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0130', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0137', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0139', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0141', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Reese\'s Peanut Butter Cups Milk Chocolate 42g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '42g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/034517.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0144', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Caramel Chocolate Caramello Koala 35g',
      originalPrice: 2, salePrice: 1, discount: 50, unit: '35g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/840556.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0153', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Oxyshred Protein Lean Bar Strawberries & Cream 50g',
      originalPrice: 4, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064971.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0154', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Almond Long Life Milk UHT 1L',
      originalPrice: 3.3, salePrice: 0, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6024800.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0160', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Oat Pure Long Life Milk UHT 1L',
      originalPrice: 3.3, salePrice: 1.65, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6024541.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0163', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Barista Almond Long Life Milk UHT 1L',
      originalPrice: 5, salePrice: 0, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6024656.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0164', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Milky Way Chocolate Bar Whipped Nougat 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164410.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0166', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Oxyshred Protein Lean Bar Cookies & Cream 50g',
      originalPrice: 4, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064635.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0167', brand: 'woolies', category: 'dairy',
      nameZh: '黄油', nameEn: 'Arnott\'s Chocolate Butternut Snap Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/046829.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！黄油超值',
    },

    {
      id: 'w0168', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nestle Aero Milk Chocolate Bar 40g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6040749.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0169', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Inside Out Almond Milk Unsweetened 1L',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/797060.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0173', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0174', brand: 'woolies', category: 'dairy',
      nameZh: '黄油', nameEn: 'Muscle Nation Pistachio Papi Peanut Butter Cup 50g',
      originalPrice: 3.7, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064919.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！黄油超值',
    },

    {
      id: 'w0179', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate Liquorice Bullets 204g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '204g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532536.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0186', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0193', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nuttelex Barista Oat Long Life Milk UHT 1L',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023712.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0195', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nestle Smarties Milk Choc Box 50g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/098471.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0200', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Chokito Caramel Milk Chocolate Bar 50g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345841.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0202', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Uncle Tobys Muesli Bars Yoghurt & Honeycomb 185g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '185g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248257.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0213', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Uncle Tobys Oats Sachets Creamy Honey 10 pack 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/148364.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0222', brand: 'woolies', category: 'dairy',
      nameZh: '黄油', nameEn: 'Reese\'s Peanut Butter Pieces 50g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055433.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！黄油超值',
    },

    {
      id: 'w0223', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Continental Classics Cup A Soup Creamy Mushroom With Croutons 50g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166239.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0231', brand: 'woolies', category: 'dairy',
      nameZh: '黄油', nameEn: 'Muscle Nation Birthday Cake Protein Peanut Butter Cup 50g',
      originalPrice: 3.7, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065141.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！黄油超值',
    },

    {
      id: 'w0235', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate Raspberry Bullets 204g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '204g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532538.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0239', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nestle Peppermint Crisp Milk Chocolate Bar 35g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '35g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/098869.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0244', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Vege Chips Rice Crackers Sour Cream & Chives 75g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/065466.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0251', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Milkybar Classic Bar 44g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '44g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/005519.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0252', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0254', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0255', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0262', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0264', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0268', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Nice & Natural Milk Choc Nut Bars Peanut & Almond 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/343910.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0269', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Red Rock Deli Potato Chips Trio Of Cheese 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056336.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0275', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Ultimate Yoghurt Apple Pie Inspired 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6061987.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0287', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Chocolate Chip Cookie Dough Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345039.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0288', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Ultimate Yoghurt Passionfruit Cheesecake 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064533.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0291', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'The Natural Confectionery Co. Strawberries & Cream Jellies 200g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055323.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0298', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0312', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Old El Paso Nachips Tortilla Nacho Corn Chips Cheese Flavoured 300g',
      originalPrice: 5.95, salePrice: 2.95, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057991.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0317', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'KitKat Chunky Cookie Dough Milk Chocolate Bar 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/414516.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0318', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Lucent Globe Laundry Detergent Sheets Strawberries & Cream 35 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '35 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6039944.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0324', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Vege Chips Rice Crackers Cheese 75g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/065464.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0325', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'BSc Soft Protein Bar Hokey Pokey Ice Cream 55g',
      originalPrice: 3.2, salePrice: 0, discount: 50, unit: '55g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064526.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0327', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'KitKat Chunky Milo Milk Chocolate Bar 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/224320.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0332', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Balls Chocolate Snack & Share Bag 135g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '135g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104074.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0342', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Palmolive Body Wash Shower Gel Naturals Milk & Honey 500mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/163938.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0347', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Vege Chips Rice Crackers Sweet Chilli & Sour Cream 75g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/117912.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0348', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'KitKat Chunky Aero Mint Milk Chocolate Bar 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/176878.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0352', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Liqourice Twist Milk Chocolate Raspberry 200g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815732.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0358', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Uncle Tobys Muesli Bars Yoghurt & Mango & Passionfruit 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248248.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0359', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate BB\'s Orange Crunch 152g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '152g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6005948.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0363', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'KitKat Milkybar White Chocolate 42g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '42g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006265.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0377', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0379', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0380', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0382', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Rocklea Road Milk Chocolate Bites 140g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064249.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0384', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate Coated Original Liquorice Twists 200g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/080421.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0387', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0389', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0394', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Mars Salted Caramel Milk Chocolate Bar 47g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '47g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055208.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0396', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Muscle Nation Popcorn Milk Choc 50g',
      originalPrice: 4, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065379.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0401', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Nescafe Creamy Coconut Latte Coffee Sachets 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6015759.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0404', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Chocolate Fudge Brownie Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345040.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0408', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate BB\'s Minty Crunch 152g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '152g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006653.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0412', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'KitKat Chunky Aero Milk Chocolate Bar 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035815.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0414', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Half Baked Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/348630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0415', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Caramilk Twirl Milk Chocolate Bites Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252006.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0424', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0446', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s The Tonight Dough Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/441151.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0451', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Uncle Tobys Oats Sachets Creamy Vanilla 10 pack 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/147588.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0454', brand: 'woolies', category: 'dairy',
      nameZh: '酸奶', nameEn: 'Ultimate Yoghurt Sticky Date Pudding Inspired 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062442.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酸奶超值',
    },

    {
      id: 'w0469', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Triple Caramel Chunk Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/348629.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0473', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Optimum Nutrition Protein Bar Milk Choc Peanut Butter 60g',
      originalPrice: 3.4, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064944.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0486', brand: 'woolies', category: 'dairy',
      nameZh: '黄油', nameEn: 'Reese\'s White Peanut Butter Cups 39g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '39g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/494618.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！黄油超值',
    },

    {
      id: 'w0491', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0494', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate Raspberry Flavoured Rocklea Road Bites 140g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064248.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0502', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0504', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0505', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0509', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Phish Food Ice Cream Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/348627.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0512', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0514', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0528', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Balls Top Deck Chocolate Snack & Share Bag 135g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '135g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252012.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0549', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0552', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Inside Out Unsweetened Oat Milk 1L',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206055.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0567', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Casa Della Maria\'s Pan Fry Cheese Gnocchi 400g',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '400g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025982.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0568', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Famous Nutrition Sport Protein & Creatine Bar Cookies & Cream 60g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/076927.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0580', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Peppermint Bites Chocolate Snack & Share 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252013.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0592', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Milkybar Crunch Chocolate Bar 38g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '38g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6041910.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0594', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Fry\'s Turkish Delight Milk Chocolate Bites Snack & Share 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252004.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0608', brand: 'woolies', category: 'dairy',
      nameZh: '乳制品', nameEn: 'Ben & Jerry\'s Dairy Free Chocolate Chip Cookie Dough Tub 458mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '458mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/911420.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！乳制品超值',
    },

    {
      id: 'w0609', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0628', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0630', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0631', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0638', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0640', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0646', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Strawberry Bites Chocolate Snack & Share 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252018.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0673', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0678', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0686', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Darrell Lea Milk Chocolate BB\'s Strawberry 152g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '152g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006072.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0696', brand: 'woolies', category: 'dairy',
      nameZh: '芝士', nameEn: 'Ben & Jerry\'s Sundae Choco-lotta Cheesecake Tub 427mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '427mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038999.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芝士超值',
    },

    {
      id: 'w0705', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Clearasil Rapid Action Pimple Treatment Cream 15mL',
      originalPrice: 14.8, salePrice: 7.4, discount: 50, unit: '15mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/331379.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0735', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Hask Curl Defining Cream 198mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '198mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/271015.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0741', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Whole Kids Smoothie Drops Berry Banana & Coconut Milk 20g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '20g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/173846.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0742', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Ben & Jerry\'s Sundae Dulce De-lish Ice Cream 427mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '427mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/494195.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0751', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0753', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0754', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0761', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0763', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0768', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Whole Kids Smoothie Drops Mango Banana & Coconut Milk 20g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '20g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/207238.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0797', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0798', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Crunchy Almond Milk Chocolate Bar 360g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '360g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/290547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0873', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0875', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0876', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0880', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'MCoBeauty Blush & Go Cream Stick Shade 2 6g',
      originalPrice: 24, salePrice: 0, discount: 50, unit: '6g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036196.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0883', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0885', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0920', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0934', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Clear Cosmetic Travel Bag Cream each',
      originalPrice: 12, salePrice: 5, discount: 58, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049154.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0950', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Pantene Frizz Control Smoothing Leave-In Hair Cream 270mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '270mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138584.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0951', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Thanks To Nature Shaving Cream Tube 250mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/318696.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0956', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Skin Active BB Cream Anti Age Light 50mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165487.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w0964', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'OGX Coconut Milk Conditioner For Dry Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/325774.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0965', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Optimum Nutrition Whey Protein Chocolate Milkshake 525g',
      originalPrice: 39.9, salePrice: 0, discount: 50, unit: '525g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064964.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w0999', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1001', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1002', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1009', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1011', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1034', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Vitamin C Hydrating Sorbet Face Cream 85mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '85mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054544.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1044', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1078', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Essano Collagen Boost Restorative Night Cream 50mL',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030659.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1080', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Jack The Barber Shaving Cream Sandalwood Rich Lather 150g',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026068.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1120', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1122', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1123', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1130', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1132', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1140', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'L\'Oreal Paris Elvive Dream Lengths Cream 200mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/052867.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1166', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1169', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Hyaluron Hydrating Sorbet Face Cream 85mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '85mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054226.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1244', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1246', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1247', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1254', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1256', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1267', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Famous Nutrition Protein Creatine Powder Choc Milkshake 400g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '400g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/103179.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1270', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Salicylic Hydrating Sorbet Face Cream 85mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '85mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059994.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1290', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1345', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Skin Active BB Cream Anti Age Medium 50mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165489.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1346', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Skin Active BB Cream Classic Medium 50mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165486.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1347', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Skin Active Brightening Cream Cleanser Vitamin C 250mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907757.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1356', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Schwarzkopf Nordic Blonde Hair Colour C3 Anti Yellow Cream Toner 200mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/859294.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1368', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1370', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1371', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1378', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1380', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1414', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1420', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Swisse Ultiboost High Strength Milk Thistle Film Coated Tablets 60 pack',
      originalPrice: 39.5, salePrice: 0, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058396.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1489', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Garnier Vitamin C Day Cream 50mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267110.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1490', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Hair Wrap & Scrunchies Set Cream each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049138.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1492', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1494', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1495', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1502', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1504', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1538', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1551', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Blackmores Milk Thistle Liver Health Tablets 42 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '42 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/089860.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1590', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'MCoBeauty Brighten & Perfect Cream Concealer Light 2 Fair 5.5mL',
      originalPrice: 22, salePrice: 0, discount: 50, unit: '5.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/398575.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1616', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1618', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1619', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1626', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1628', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1662', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1740', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1742', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1743', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1750', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1752', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1783', brand: 'woolies', category: 'dairy',
      nameZh: '鲜奶油', nameEn: 'Muslin Plush Throw Cream each',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049123.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鲜奶油超值',
    },

    {
      id: 'w1786', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1864', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1866', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1867', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1874', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1876', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1910', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1963', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Crunchie 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1965', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Twirl Milk Chocolate Bites Snack & Share Bag 140g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/252005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1966', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Marvellous Creations Bites Bag 120g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1967', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Balls Hazelnut 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1969', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Cadbury Dairy Milk Chocolate Caramello Bites Snack & Share Bag 142g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '142g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254447.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },

    {
      id: 'w1973', brand: 'woolies', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Toblerone Milk Chocolate Bar 340g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牛奶超值',
    },


    // --- 水果 (179个) ---
    {
      id: 'w0035', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Sprite Lemonade Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/095325.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0037', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Rokeby Protein Snack Banana 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6040151.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香蕉超值',
    },

    {
      id: 'w0052', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Dishwashing Tablets Lemon 46 pack',
      originalPrice: 49, salePrice: 24.5, discount: 50, unit: '46 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/148368.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0064', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Monster Energy Juice Mango Loco 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/708119.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w0073', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Sprite Zero Sugar Lemonade Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/062170.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0087', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Dishwasher Deep Cleaner Lemon 250mL',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065378.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0091', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Morning Fresh Dishwashing Liquid Lemon 900mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208111.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0094', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Fanta Orange Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/032812.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0101', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Monster Energy Ultra Strawberry Dreams 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6007245.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0108', brand: 'woolies', category: 'fruit',
      nameZh: '青柠', nameEn: 'Red Rock Deli Potato Chips Share Pack Lime & Pepper 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/781393.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！青柠超值',
    },

    {
      id: 'w0120', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Morning Fresh Dishwashing Liquid Raspberry & Crisp Apple 900mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/588994.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0131', brand: 'woolies', category: 'fruit',
      nameZh: 'Uncle Tobys Roll Ups Rainbow Berry 94g 6 pack', nameEn: 'Uncle Tobys Roll Ups Rainbow Berry 94g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '94g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324234.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Uncle Tobys Roll Ups Rainbow Berry 94g 6 pack超值',
    },

    {
      id: 'w0143', brand: 'woolies', category: 'fruit',
      nameZh: '桃子', nameEn: 'Monster Energy Drink Ultra Peachy Keen Cans 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/919600.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！桃子超值',
    },

    {
      id: 'w0157', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Lucent Globe Dishwashing Detergent Sheets Fresh Lemon Scent 35 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '35 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6020374.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0159', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Optimum Nutrition Amino Energy Drink Watermelon 355mL',
      originalPrice: 3, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6012980.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w0177', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Optimum Nutrition Amino Energy Drink Grape 355mL',
      originalPrice: 3, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6011886.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w0188', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Uncle Tobys Roll Ups Strawberry Fun Prints 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324231.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0228', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Darrell Lea Twists Raspberry Liquorice 280g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '280g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815736.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0241', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Sour Patch Kids Watermelon Lollies 190g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/233892.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w0242', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Uncle Tobys Oats Quick Sachets Apple & Cinnamon Porridge 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/149866.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0248', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Monster Energy Juice Aussie Lemonade Style 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062556.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0266', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Darrell Lea Raspberry Bullets White Chocolate 150g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006236.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0272', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Optimum Nutrition Amino Energy Drink Green Apple 355mL',
      originalPrice: 3, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064653.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0276', brand: 'woolies', category: 'fruit',
      nameZh: 'The Natural Confectionery Co. Berry Bliss Lollies 180g', nameEn: 'The Natural Confectionery Co. Berry Bliss Lollies 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/233803.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Berry Bliss Lollies 180g超值',
    },

    {
      id: 'w0277', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Fanta Raspberry Zero Sugar Soft Drink Bottles 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/221678.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0278', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Fanta Grape Soft Drink 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/924575.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w0284', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Fanta Orange Zero Sugar Soft Drink 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049732.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0294', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Uncle Tobys Roll-Ups Groovy Grape 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/427562.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w0309', brand: 'woolies', category: 'fruit',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Sachets Berry Variety 10 pack 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/147406.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0329', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Earthwise Orange & Eucalyptus Laundry Liquid Washing Detergent 2L',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905284.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0356', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Optimum Nutrition Protein Bar White Choc Raspberry 60g',
      originalPrice: 3.4, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064973.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0361', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Pascall Pineapple Lumps Chocolate Lollies Snack & Share Bag 185g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '185g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828969.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0373', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Plus Dishwashing Tablets Lemon 56 pack',
      originalPrice: 68, salePrice: 34, discount: 50, unit: '56 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/277151.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0385', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'The Natural Confectionery Co. Juicy Bursts Lollies Strawberry & Raspberry 150g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022769.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0402', brand: 'woolies', category: 'fruit',
      nameZh: 'Sour Patch Kids Berry Lollies 190g', nameEn: 'Sour Patch Kids Berry Lollies 190g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/234585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sour Patch Kids Berry Lollies 190g超值',
    },

    {
      id: 'w0407', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Uncle Tobys Roll Ups Apple 94g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '94g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027817.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0418', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Uncle Tobys Roll Ups Peach & Mango 94g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '94g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055357.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w0426', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Muscle Nation Popcorn White Choc Raspberry 50g',
      originalPrice: 4, salePrice: 0, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065591.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0428', brand: 'woolies', category: 'fruit',
      nameZh: '青柠', nameEn: 'Morning Fresh Dishwashing Liquid Lime 900mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/280546.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！青柠超值',
    },

    {
      id: 'w0438', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Dishwashing Tablets Lemon 70 pack',
      originalPrice: 64, salePrice: 32, discount: 50, unit: '70 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6019017.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0447', brand: 'woolies', category: 'fruit',
      nameZh: '青柠', nameEn: 'Bubly Sparkling Water Cans Lime 375mL x 10 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '375mL x 10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022508.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！青柠超值',
    },

    {
      id: 'w0457', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Nescafe Krispy Kreme Strawberry Doughnut Latte Sachets 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0479', brand: 'woolies', category: 'fruit',
      nameZh: '樱桃', nameEn: 'Cadbury Cherry Ripe Chunks Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035009.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！樱桃超值',
    },

    {
      id: 'w0495', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Nesquik Cereal Bars Strawberry Choc 120g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '120g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055579.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0511', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Bubly Sparkling Water Cans Raspberry 375mL x 10 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '375mL x 10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022765.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0516', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Darrell Lea Chocolate Raspberry Balls 160g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/109918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0536', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Lucent Globe Dish Soap Sheets Lemon 60 pack',
      originalPrice: 6.5, salePrice: 3.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063498.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0544', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Nesquik Cereal Bars Banana Choc 120g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '120g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055578.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香蕉超值',
    },

    {
      id: 'w0545', brand: 'woolies', category: 'fruit',
      nameZh: '蓝莓', nameEn: 'Uncle Tobys Oats Protein Quick Sachets Blueberry Maple Pancake 8 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055435.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蓝莓超值',
    },

    {
      id: 'w0560', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Bulla Splits Sorbet Tub Mango 1L',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043853.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w0561', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Fanta Lemon Zero Sugar Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6012364.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0569', brand: 'woolies', category: 'fruit',
      nameZh: 'The Natural Confectionery Co. Gummy Bears Berry Lollies 180g', nameEn: 'The Natural Confectionery Co. Gummy Bears Berry Lollies 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031073.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Gummy Bears Berry Lollies 180g超值',
    },

    {
      id: 'w0575', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Darrell Lea Allsorts Raspberry 220g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/334142.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0586', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Palmolive Naturals Body Wash Shower Gel Coconut 500mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/158182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0587', brand: 'woolies', category: 'fruit',
      nameZh: '橘子', nameEn: 'Palmolive Ultra Strength Squeeze Dishwashing Liquid Mandarin 500mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064136.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橘子超值',
    },

    {
      id: 'w0595', brand: 'woolies', category: 'fruit',
      nameZh: '蓝莓', nameEn: 'Optimum Nutrition Creatine Blueberry Lemonade 270g',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '270g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065450.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蓝莓超值',
    },

    {
      id: 'w0596', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Plus Dishwashing Tablets Lemon 46 pack',
      originalPrice: 58, salePrice: 29, discount: 50, unit: '46 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064968.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0599', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Lucent Globe Dish Soap Sheets Watermelon Apple 60 pack',
      originalPrice: 6.5, salePrice: 3.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063913.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w0602', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'The Natural Confectionery Co. Juicy Bursts Lollies Orange & Passionfruit 150g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022555.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0607', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'L\'Oreal Paris Elvive Hyaluron Plump 72h Moisture Filling Conditioner 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008859.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w0613', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Bulla Splits Sorbet Tub Raspberry 1L',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043852.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0614', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Darrell Lea Raspberry Bullets Dark Chocolate 190g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006231.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0623', brand: 'woolies', category: 'fruit',
      nameZh: 'Nivea Black Berry Shine Lip Balm 4.8g', nameEn: 'Nivea Black Berry Shine Lip Balm 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/687232.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Black Berry Shine Lip Balm 4.8g超值',
    },

    {
      id: 'w0626', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Earthwise Orange & Eucalyptus Laundry Capsules Washing Detergent 26 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '26 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660833.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0634', brand: 'woolies', category: 'fruit',
      nameZh: '麦片', nameEn: 'Whole Kids Organic Stage 2 Cereal Little Flowers Berry 40g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206810.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0642', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Fairy Platinum Plus Dish Liquid Lemon 495mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '495mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6050203.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0649', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Sunsilk Conditioner Coconut Hydration 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004145.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0654', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Darrell Lea Strawberry Matcha Balls 130g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0657', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Dove Women Advanced 72hr Deodorant Aerosol Coconut 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904751.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0658', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Garnier Skin Active Hydra Bomb Eye Sheet Mask Orange each',
      originalPrice: 6, salePrice: 2.5, discount: 58, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/700247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0659', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Garnier Skin Active Vitamin C + Lemon Face Wash 100mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/256982.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0660', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Nivea Fruity Shine Strawberry Lip Balm 48g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '48g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205926.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0679', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Muscle Nation Sour Protein Water Blue Raspberry 1kg',
      originalPrice: 60, salePrice: 0, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065162.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0689', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Whole Kids Little Stars Cereal Banana & Chia 40g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/908525.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香蕉超值',
    },

    {
      id: 'w0691', brand: 'woolies', category: 'fruit',
      nameZh: '樱桃', nameEn: 'Air Wick Pure Cherry Blossom Plug-In Diffuser 19mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '19mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/816968.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！樱桃超值',
    },

    {
      id: 'w0694', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Fanta Lemon Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6012966.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0697', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Famous Nutrition Sport Protein & Creatine Bar White Choc Raspberry 60g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/076128.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0698', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Nivea Lip Care Balm Watermelon Shine 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/103147.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w0700', brand: 'woolies', category: 'fruit',
      nameZh: '青柠', nameEn: 'Harpic White & Shine Lime Bleach Toilet Cleaner Block each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162030.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！青柠超值',
    },

    {
      id: 'w0708', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Always Fresh Lemon & Chilli Split Green Olives 240g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/326241.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0709', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'BSc Zappo Energy Shred & Hydration Blue Raspberry 355mL',
      originalPrice: 3.5, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035698.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0717', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'BSc Zappo Energy Shred & Hydration Sour Watermelon 355mL',
      originalPrice: 3.5, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w0725', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Sunsilk Conditioner Coconut Hydration 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004410.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0727', brand: 'woolies', category: 'fruit',
      nameZh: '除臭剂', nameEn: 'Dove Women Advanced 72hr Deodorant Aerosol Berry 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904889.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0732', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'BSc Zappo Energy Shred & Hydration Sour Strawberry 355mL',
      originalPrice: 3.5, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036150.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w0757', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Palmolive Squeeze It Dishwashing Liquid Ultra Fresh Lemon 500mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055402.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0765', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Bref Power Active Lemon Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/624270.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0766', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Plus Dishwashing Tablets Lemon 14 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '14 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054891.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0770', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Dove Advanced Care Deodorant Passionfruit & Lemongrass 72h 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022560.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0778', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Bulla Splits Sorbet Tub Lemon Lime 1L',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043921.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0780', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'L\'Oreal Paris Hyaluron Plump 72H Moisture Wrapping Mask 300mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197825.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w0790', brand: 'woolies', category: 'fruit',
      nameZh: '梨', nameEn: 'Grants Liquid Chlorophyll Concentrate Spearmint 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/203746.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！梨超值',
    },

    {
      id: 'w0818', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Dishwashing Tablets Lemon 34 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '34 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/618643.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0858', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'OGX Coconut Miracle Penetrating Hair Oil 100mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601151.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0878', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Harpic Fresh Power Coconut & Sea Salt Toilet Cleaner Block 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/232083.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0891', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Toblerone Orange Twist Chocolate Bar 360g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '360g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/210508.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0903', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'VOOST Effervescent Energy Plus Orange & Mango Tablets 20 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026070.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w0911', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'OGX Coconut Curls Conditioner For Curly Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486571.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w0914', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'VOOST Sport Lemon & Lime Effervescent Tablets 10 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/304348.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w0953', brand: 'woolies', category: 'fruit',
      nameZh: '樱桃', nameEn: 'Air Wick Pure Freshmatic Auto Freshener Cherry Blossom 157g',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '157g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/676392.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！樱桃超值',
    },

    {
      id: 'w0969', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Whole Kids Teething Wafers Raspberry Beetroot & Chia 8+ Months 6 pack',
      originalPrice: 6.2, salePrice: 3.1, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/222866.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w0982', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'BSc Hydrate Electrolytes Salty Grape 325g',
      originalPrice: 29, salePrice: 0, discount: 50, unit: '325g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1003', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'BSc Zappo Energy Shred & Hydration Sour Grape 355mL',
      originalPrice: 3.5, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035206.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1077', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'Essano Collagen Boost Plumping Daily Moisturiser 100mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030660.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1079', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Finish Ultimate Dishwashing Tablets Lemon 56 pack',
      originalPrice: 58, salePrice: 29, discount: 50, unit: '56 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054780.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1095', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'L\'Oreal Paris Paris Elvive Extraordinary Coconut Oil Mask 300mL',
      originalPrice: 14, salePrice: 0, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/682747.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1096', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'MCoBeauty Everyday Lip Balm & Keychain Watermelon 7mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '7mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6015972.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w1146', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'OGX Extra Strength Coconut Miracle Oil Conditioner - Dry 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601150.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1153', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Swisse Apple Cider Vinegar + Fibre Gummies 90 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905305.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1180', brand: 'woolies', category: 'fruit',
      nameZh: 'Nivea Glowy Lips Berry Tinted Lip Balm SPF30 10mL', nameEn: 'Nivea Glowy Lips Berry Tinted Lip Balm SPF30 10mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033060.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Glowy Lips Berry Tinted Lip Balm SPF30 10mL超值',
    },

    {
      id: 'w1190', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'VOOST Performance Plus Effervescent Tablets Orange 40 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026062.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1192', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'BSc Zappo Shred Energy & Hydration Sour Watermelon 275g',
      originalPrice: 29, salePrice: 0, discount: 50, unit: '275g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064145.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w1207', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'MCoBeauty Shimmer Lip Plump 4 In 1 Hydrating Lacquer Dusty Rose each',
      originalPrice: 18, salePrice: 7.2, discount: 60, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/902872.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1227', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Elvive Extraordinary Oil Coconut Conditioner 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008515.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1237', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'Nongshim Banana Kick Corn Puffs 75g',
      originalPrice: 3, salePrice: 0, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058381.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香蕉超值',
    },

    {
      id: 'w1268', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Famous Nutrition Protein Water Shred & Burn Apple Thermogenic 300g',
      originalPrice: 33, salePrice: 16.5, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6041388.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1285', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Swisse Apple Cider Vinegar + Fibre Gummies 45 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/308054.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1293', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'BSc Hydrate Electrolytes Salty Blue Raspberry 325g',
      originalPrice: 29, salePrice: 0, discount: 50, unit: '325g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064048.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w1309', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Famous Nutrition Sport Pre Workout Caffeine Energy Powder Watermelon 225g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '225g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/076928.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w1314', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'L\'Oreal Paris Hyaluron Plump Spray 2% Moisture Serum 150mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/200168.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1329', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'BSc Zappo Shred Energy & Hydration Sour Blue Raspberry 275g',
      originalPrice: 29, salePrice: 0, discount: 50, unit: '275g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w1367', brand: 'woolies', category: 'fruit',
      nameZh: 'Blackmores Cranberry Forte 50000mg Capsules 30 pack', nameEn: 'Blackmores Cranberry Forte 50000mg Capsules 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6000126.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Cranberry Forte 50000mg Capsules 30 pack超值',
    },

    {
      id: 'w1398', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'MCoBeauty Everyday Lip Balm Keyring Grape 7mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '7mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054598.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1417', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Squealini Spritz Spiced Apple Pie 750mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '750mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/908142.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1427', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'BSc Zappo Shred Energy & Hydration Sour Grape 275g',
      originalPrice: 29, salePrice: 0, discount: 50, unit: '275g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064446.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1442', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Famous Nutrition Sport Hydration Powder Electro Coconut Water Orange Mango 180g',
      originalPrice: 33, salePrice: 16.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006672.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1443', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Famous Nutrition Sport Pre Workout Caffeine Energy Powder Mango Passion 225g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '225g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/072255.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w1447', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Hismile Lip Balm Sour Strawberry 10g',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '10g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6035514.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w1448', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Hydralyte Electrolyte Ice Blocks Strawberry Kiwi 16 pack',
      originalPrice: 15.65, salePrice: 7.8, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141150.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w1450', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Life Botanics Shred Gummies Watermelon 60 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030126.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w1453', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Little Swisse Multivitamin Gummies Raspberry 50 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022327.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w1454', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'MCoBeauty Hot Lip Plump Fancy 4mL',
      originalPrice: 16, salePrice: 0, discount: 50, unit: '4mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/500627.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1457', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'MCoBeauty Peptide Lip Treatment Blood Orange 15g',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '15g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1464', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'OGX Coconut Miracle Oil Damage Remedy Hair Mask 300mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/266998.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1473', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'VOOST Energy Plus Effervescent Tablets Orange & Mango 40 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025807.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1475', brand: 'woolies', category: 'fruit',
      nameZh: '樱桃', nameEn: 'Blackmores Energy B12 Rapi Melt Cherry Flavour Tablets 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029068.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！樱桃超值',
    },

    {
      id: 'w1496', brand: 'woolies', category: 'fruit',
      nameZh: '西瓜', nameEn: 'Hydralyte Electrolyte Ice Blocks Watermelon 16 pack',
      originalPrice: 15.65, salePrice: 7.8, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/965774.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！西瓜超值',
    },

    {
      id: 'w1579', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Famous Nutrition Pre Workout Grape Caffeine Free 275g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '275g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6041371.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1580', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Famous Nutrition Sport Creatine Monohydrate Powder Grape 300g',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/072469.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1584', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Hydralyte Electrolyte Ice Block Lemonade 16 pack',
      originalPrice: 15.65, salePrice: 7.8, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/801247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1587', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Life Botanics Nausea Relief Gummies Ginger Lemon Flavour 60 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030270.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1599', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'Maybelline Lifter Plump & Glow Foundation Shade 119 SPF15 30mL',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064133.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1631', brand: 'woolies', category: 'fruit',
      nameZh: 'Swisse Ultiboost High Strength Cranberry Capsules 30 pack', nameEn: 'Swisse Ultiboost High Strength Cranberry Capsules 30 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/733527.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost High Strength Cranberry Capsules 30 pack超值',
    },

    {
      id: 'w1632', brand: 'woolies', category: 'fruit',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost High Strength Magnesium Powder Berry 180g',
      originalPrice: 35, salePrice: 0, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/088680.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1633', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Swisse Ultiboost High Strength Magnesium Powder Orange 360g',
      originalPrice: 55, salePrice: 27.5, discount: 50, unit: '360g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025723.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1646', brand: 'woolies', category: 'fruit',
      nameZh: '香蕉', nameEn: 'The Fox Tan Rapid Banana Whip 200mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038658.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香蕉超值',
    },

    {
      id: 'w1650', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'VOOST Effervescent Sport Hydration Orange 10 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/059490.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1651', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'VOOST Magnesium & Muscle Support Effervescent Tablets Lemon 20 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025729.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1653', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Vital All-In-One Daily Supplement Powder Lemon & Ginger Flavour 240g',
      originalPrice: 59, salePrice: 29.5, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909055.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1654', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: '19 Crimes Calimocho Cocktail Orange Bottles 750mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '750mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027173.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1687', brand: 'woolies', category: 'fruit',
      nameZh: '蓝莓', nameEn: 'Blackmores Nails Hair & Skin Rapi Melt Blueberry Flavour Tablets 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029233.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蓝莓超值',
    },

    {
      id: 'w1732', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Famous Nutrition Creatine + Amino Hydrate Energy Mango Passion 192g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '192g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6042362.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w1733', brand: 'woolies', category: 'fruit',
      nameZh: '芒果', nameEn: 'Famous Nutrition Hydrate Powder Mango 180g',
      originalPrice: 31, salePrice: 15.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/074169.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！芒果超值',
    },

    {
      id: 'w1738', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'Glen 20 Spray Disinfectant Brand New Day Coconut & Sea Salt 375g',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '375g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903739.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1739', brand: 'woolies', category: 'fruit',
      nameZh: '橘子', nameEn: 'Glen 20 Spray Disinfectant Brand New Day Mandarin & Ginger Lily 375g',
      originalPrice: 13, salePrice: 0, discount: 50, unit: '375g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905156.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橘子超值',
    },

    {
      id: 'w1746', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Hydralyte Electrolyte Ice Block Orange 16 pack',
      originalPrice: 15.65, salePrice: 7.8, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/801236.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1747', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Hydralyte Electrolyte Ice Blocks Apple Blackcurrant 16 pack',
      originalPrice: 15.65, salePrice: 7.8, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141339.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1749', brand: 'woolies', category: 'fruit',
      nameZh: '椰子', nameEn: 'L\'Oreal Paris Paris Elvive Extraordinary Coconut Oil 100mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/682749.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！椰子超值',
    },

    {
      id: 'w1759', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Little Swisse Prebiotic + Probiotic Gummies Raspberry 150 pack',
      originalPrice: 65, salePrice: 32.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058611.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w1763', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'MCoBeauty Everyday Lip Balm Keyring Lemon 7mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '7mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055320.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1772', brand: 'woolies', category: 'fruit',
      nameZh: '樱桃', nameEn: 'Maybelline Lifter Glaze Oil Lip Balm Cherry Swirl each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036645.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！樱桃超值',
    },

    {
      id: 'w1775', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'Maybelline Lifter Plump & Glow Foundation Shade 114 SPF15 30mL',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063917.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1776', brand: 'woolies', category: 'fruit',
      nameZh: '李子', nameEn: 'Maybelline Lifter Plump & Glow Foundation Shade 120 SPF15 30mL',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063916.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！李子超值',
    },

    {
      id: 'w1801', brand: 'woolies', category: 'fruit',
      nameZh: '葡萄', nameEn: 'Nature\'s Way Adult Vita Gummies 24mg Iron Grape Flavour 30 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/902958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！葡萄超值',
    },

    {
      id: 'w1802', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Nature\'s Way Adult Vita Gummies Apple Cider Vinegar Probiotic Prebiotic 50 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/913325.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1807', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Nature\'s Way Adult Vita Gummies Omega 3 Berry & Blood Orange Flavoured 100 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6044204.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1815', brand: 'woolies', category: 'fruit',
      nameZh: '覆盆子', nameEn: 'Nature\'s Way Extra Strength Magnesium Gummies Raspberry Flavour 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243378.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！覆盆子超值',
    },

    {
      id: 'w1816', brand: 'woolies', category: 'fruit',
      nameZh: 'Nature\'s Way Hair Skin Nails Adult Vita Gummies Berry 150 pack', nameEn: 'Nature\'s Way Hair Skin Nails Adult Vita Gummies Berry 150 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/898456.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Hair Skin Nails Adult Vita Gummies Berry 150 pack超值',
    },

    {
      id: 'w1831', brand: 'woolies', category: 'fruit',
      nameZh: '镁片', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Magnesium Berry Pastilles 50 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008700.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1885', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'Pentavite Multivitamin + Iron Kids Liquid Lemon Lime 200mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309876.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1886', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Renovatio Bioscience An Apple A Day Activated Phenolics Antioxidants Tablets 30 pack',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/089786.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1887', brand: 'woolies', category: 'fruit',
      nameZh: '苹果', nameEn: 'Renovatio Bioscience An Apple A Day Immunity Plus Tablets 30 pack',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141884.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！苹果超值',
    },

    {
      id: 'w1892', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Swisse Beauty Collagen Glow Gummies Strawberry & Vanilla Flavour 45 pack',
      originalPrice: 29.5, salePrice: 0, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165984.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w1894', brand: 'woolies', category: 'fruit',
      nameZh: '草莓', nameEn: 'Swisse Beauty Collagen Glow Powder Strawberry Flavour 240g',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903651.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！草莓超值',
    },

    {
      id: 'w1906', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'Swisse Ultiboost High Strength Magnesium Powder Orange 180g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/089753.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1953', brand: 'woolies', category: 'fruit',
      nameZh: '柠檬', nameEn: 'VOOST Magnesium Forte Lemon Effervescent Tablets 10 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/304198.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！柠檬超值',
    },

    {
      id: 'w1954', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'VOOST Performance Plus Effervescent Tablets Orange 20 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025747.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },

    {
      id: 'w1955', brand: 'woolies', category: 'fruit',
      nameZh: 'VOOST Sport Hydration Berry Effervescent 10 pack', nameEn: 'VOOST Sport Hydration Berry Effervescent 10 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/301156.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！VOOST Sport Hydration Berry Effervescent 10 pack超值',
    },

    {
      id: 'w1960', brand: 'woolies', category: 'fruit',
      nameZh: '橙子', nameEn: 'frank simple. Protein Water With Creatine & Electrolytes Orange Mango 28 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060291.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橙子超值',
    },


    // --- 蔬菜 (41个) ---
    {
      id: 'w0009', brand: 'woolies', category: 'vegetable',
      nameZh: '土豆', nameEn: 'Red Rock Deli Potato Chips Sea Salt 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/781396.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！土豆超值',
    },

    {
      id: 'w0033', brand: 'woolies', category: 'vegetable',
      nameZh: '土豆', nameEn: 'Red Rock Deli Potato Chips Sea Salt & Balsamic Vinegar 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/781402.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！土豆超值',
    },

    {
      id: 'w0055', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0086', brand: 'woolies', category: 'vegetable',
      nameZh: '狗粮', nameEn: 'Nature\'s Gift Adult Wet Dog Food Casserole With Kangaroo & Vegetables 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/793023.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0102', brand: 'woolies', category: 'vegetable',
      nameZh: '狗粮', nameEn: 'Nature\'s Gift Adult Wet Dog Food Loaf With Kangaroo & Vegetable 700g',
      originalPrice: 3.5, salePrice: 1.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/323269.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0114', brand: 'woolies', category: 'vegetable',
      nameZh: '沙拉', nameEn: 'The Natural Confectionery Co. Fruit Salad Soft Jellies Lollies 220g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/210601.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！沙拉超值',
    },

    {
      id: 'w0122', brand: 'woolies', category: 'vegetable',
      nameZh: '沙拉', nameEn: 'Uncle Tobys Roll Ups Rainbow Fruit Salad 94g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '94g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324233.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！沙拉超值',
    },

    {
      id: 'w0147', brand: 'woolies', category: 'vegetable',
      nameZh: '洋葱', nameEn: 'Peckish Fancies Caramelised Onion & Balsamic Vinegar Rice Crackers 90g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '90g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/084608.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洋葱超值',
    },

    {
      id: 'w0156', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Old El Paso Nachips Tortilla Nacho Corn Chips Original 300g',
      originalPrice: 5.95, salePrice: 0, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058084.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0180', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0199', brand: 'woolies', category: 'vegetable',
      nameZh: '帕尔马芝士', nameEn: 'Peckish Fancies Parmesan & Herbs Rice Crackers 90g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '90g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/084607.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！帕尔马芝士超值',
    },

    {
      id: 'w0208', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Poppin Ready To Eat Popcorn M&M\'s Minis 110g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0210', brand: 'woolies', category: 'vegetable',
      nameZh: '番茄', nameEn: 'Continental Cup A Soup Tasty Tomato 2 Pack 54g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '54g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828452.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！番茄超值',
    },

    {
      id: 'w0216', brand: 'woolies', category: 'vegetable',
      nameZh: '南瓜', nameEn: 'Continental Classics Soup Homestyle Pumpkin 61g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '61g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/433428.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！南瓜超值',
    },

    {
      id: 'w0305', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0392', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Macro Wholefoods Market Air Popped Corn Sweet & Salty 20g',
      originalPrice: 1.5, salePrice: 0.75, discount: 50, unit: '20g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/391840.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0409', brand: 'woolies', category: 'vegetable',
      nameZh: '土豆', nameEn: 'Red Rock Deli Potato Chips Spicy Chilli Sriracha 165g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '165g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6021802.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！土豆超值',
    },

    {
      id: 'w0431', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0453', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Poppin Ready To Eat Popcorn Mars 110g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029827.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0459', brand: 'woolies', category: 'vegetable',
      nameZh: '甜椒', nameEn: 'Optimum Chilled Dog Food Roll Adult Kangaroo & Capsicum 1kg',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029090.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！甜椒超值',
    },

    {
      id: 'w0485', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Poppin Ready To Eat Popcorn Snickers 110g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030379.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0525', brand: 'woolies', category: 'vegetable',
      nameZh: '洋葱', nameEn: 'Bryne Co White Pickled Onions 500g',
      originalPrice: 3.8, salePrice: 1.9, discount: 50, unit: '500g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/920566.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洋葱超值',
    },

    {
      id: 'w0556', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0576', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Poppin Ready To Eat Popcorn Twix 110g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030670.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0637', brand: 'woolies', category: 'vegetable',
      nameZh: '洋葱', nameEn: 'Nongshim Onion Rings 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057974.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洋葱超值',
    },

    {
      id: 'w0644', brand: 'woolies', category: 'vegetable',
      nameZh: '玉米', nameEn: 'Whole Kids Organic Meltaway Sticks Corn 10g',
      originalPrice: 2.5, salePrice: 1.25, discount: 50, unit: '10g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/116470.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！玉米超值',
    },

    {
      id: 'w0680', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0685', brand: 'woolies', category: 'vegetable',
      nameZh: '土豆', nameEn: 'Rafferty\'s Garden Broccoli Sweet Potato & Carrot 120g',
      originalPrice: 2.5, salePrice: 1.25, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909516.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！土豆超值',
    },

    {
      id: 'w0719', brand: 'woolies', category: 'vegetable',
      nameZh: '土豆', nameEn: 'Rafferty\'s Garden Veggie Patch Spinach Sweet Potato Carrot & Corn 120g',
      originalPrice: 2.5, salePrice: 1.25, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909362.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！土豆超值',
    },

    {
      id: 'w0739', brand: 'woolies', category: 'vegetable',
      nameZh: '洋葱', nameEn: 'Nongshim Onion Rings Hot & Spicy 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058156.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洋葱超值',
    },

    {
      id: 'w0743', brand: 'woolies', category: 'vegetable',
      nameZh: '食用油', nameEn: 'Farmers Harvest Vegetable Oil 4L',
      originalPrice: 34, salePrice: 17, discount: 50, unit: '4L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/135496.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0775', brand: 'woolies', category: 'vegetable',
      nameZh: '高汤', nameEn: 'Nuttelex Vegetable Stock 1L',
      originalPrice: 3.9, salePrice: 1.95, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6015087.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！高汤超值',
    },

    {
      id: 'w0804', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0901', brand: 'woolies', category: 'vegetable',
      nameZh: '香草', nameEn: 'Swizzels Love Hearts Sherbet Flavour Slush Pouch 250mL',
      originalPrice: 3.5, salePrice: 1.35, discount: 61, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/947800.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！香草超值',
    },

    {
      id: 'w0927', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Echinacea Garlic Zinc & Vitamin C For Immune Support 125 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w0932', brand: 'woolies', category: 'vegetable',
      nameZh: '胡萝卜', nameEn: 'Whole Kids Teething Wafers Carrot Chia & Quinoa 6 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907489.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！胡萝卜超值',
    },

    {
      id: 'w1191', brand: 'woolies', category: 'vegetable',
      nameZh: '番茄', nameEn: 'Al\'Fez Shakshuka Tomato Sauce Mild 425g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '425g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033167.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！番茄超值',
    },

    {
      id: 'w1363', brand: 'woolies', category: 'vegetable',
      nameZh: '豆类', nameEn: 'frank simple. Gut Restore Prebiotic Collagen Vanilla Bean Tub 260g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '260g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309682.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！豆类超值',
    },

    {
      id: 'w1559', brand: 'woolies', category: 'vegetable',
      nameZh: '姜', nameEn: 'Blackmores Travel Calm Ginger Anti-Nausea Vitamin Tablets 45 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/073124.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！姜超值',
    },

    {
      id: 'w1572', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Cenovis Garlic Horseradish + Vitamin C Complex For Immune Support 120 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/233149.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },

    {
      id: 'w1823', brand: 'woolies', category: 'vegetable',
      nameZh: '大蒜', nameEn: 'Nature\'s Way Immunity Defense Garlic & Horseradish 200 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/169114.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大蒜超值',
    },


    // --- 谷物粮食 (60个) ---
    {
      id: 'w0005', brand: 'woolies', category: 'grain',
      nameZh: '饼干', nameEn: 'Arnott\'s Shapes Barbecue Cracker Biscuits 175g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/485436.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0023', brand: 'woolies', category: 'grain',
      nameZh: '饼干', nameEn: 'Arnott\'s Shapes Pizza Cracker Biscuits 190g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/515173.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0053', brand: 'woolies', category: 'grain',
      nameZh: '饼干', nameEn: 'Arnott\'s Shapes Cheddar Cracker Biscuits 175g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384244.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0056', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0070', brand: 'woolies', category: 'grain',
      nameZh: '面条', nameEn: 'Fantastic Fresh Noodles Hokkien 450g',
      originalPrice: 3.5, salePrice: 1.72, discount: 51, unit: '450g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/145566.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！面条超值',
    },

    {
      id: 'w0083', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Quick Sachets Classic Variety Porridge 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/148976.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0115', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Rolled Oats Traditional Porridge 500g',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '500g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/037678.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0116', brand: 'woolies', category: 'grain',
      nameZh: '面条', nameEn: 'Continental Classics Cup A Soup Laksa With Noodles 65g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '65g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/142839.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！面条超值',
    },

    {
      id: 'w0124', brand: 'woolies', category: 'grain',
      nameZh: '饼干', nameEn: 'Arnott\'s Shapes Savoury Cracker Biscuits 185g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '185g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384246.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0148', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Quick Sachets Original Porridge 340g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '340g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/204987.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0152', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Nestle Milo Breakfast Cereal 620g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '620g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387352.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0165', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Vege Chips Rice Crackers Honey Soy 75g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/117737.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0178', brand: 'woolies', category: 'grain',
      nameZh: '意面', nameEn: 'Continental Classics Cup A Soup Italian Minestrone With Pasta 75g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054157.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！意面超值',
    },

    {
      id: 'w0181', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0198', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Continental Classics Cup A Soup Dutch Curry With Rice 55g',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '55g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257657.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0217', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Rolled Oats Quick Porridge 500g',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '500g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/031129.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0224', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Darrell Lea Allsorts Liquorice 270g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '270g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/804275.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0230', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Darrell Lea Batch 37 Liquorice 260g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '260g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0280', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Uncle Tobys Plus Iron Cereal 630g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '630g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387015.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0283', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Sunrice Australian Calrose Rice Medium Grain 10kg',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '10kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/075816.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0286', brand: 'woolies', category: 'grain',
      nameZh: '面条', nameEn: 'Fantastic Fresh Noodles Thin Hokkien 450g',
      originalPrice: 3.5, salePrice: 1.72, discount: 51, unit: '450g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/145567.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！面条超值',
    },

    {
      id: 'w0306', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0320', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Sachets Brown Sugar & Cinnamon 10 pack 350g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '350g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/148885.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0321', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Uncle Tobys Plus Protein Cereal 620g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '620g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387025.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0323', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Nesquik Cereal Bars Double Choc 120g 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '120g 6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056168.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0326', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Darrell Lea Dark Chocolate Liquorice Bullets 204g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '204g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532537.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0330', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Nestle Milo Protein Cereal 535g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '535g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387014.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0333', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Nestle Milo Duo Cereal 580g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '580g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387274.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0360', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Protein Quick Sachets Cinnamon Scroll 8 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055742.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0391', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Darrell Lea Liquorice Twists 280g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '280g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815735.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0403', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Sunrice Hinata Short Grain Rice 5kg',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '5kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/117602.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0411', brand: 'woolies', category: 'grain',
      nameZh: '大米', nameEn: 'Darrell Lea Twists Dark Chocolate Liquorice 200g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815731.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！大米超值',
    },

    {
      id: 'w0430', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Nesquik Choco Crunchy Breakfast Cereal 600g',
      originalPrice: 8.8, salePrice: 4.4, discount: 50, unit: '600g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6018784.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0432', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0437', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Uncle Tobys Plus Fibre Cereal 700g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387492.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0472', brand: 'woolies', category: 'grain',
      nameZh: '麦片', nameEn: 'Uncle Tobys Plus Muesli Flakes Cereal 705g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '705g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387305.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片超值',
    },

    {
      id: 'w0522', brand: 'woolies', category: 'grain',
      nameZh: '饼干', nameEn: 'Tucker\'s Artisan Crackers Rosemary Linseed & Rock Salt 100g',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '100g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/488239.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0539', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Uncle Tobys Oats Sachets Protein Variety 8 pack 280g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '280g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6014649.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0557', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0681', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0805', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w0928', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1016', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'True Blue Freeze Dry Raw Coated Dry Dog Food Grain Free With Kangaroo 2.5kg',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '2.5kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056985.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1045', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1167', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1291', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1415', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1446', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Hask Argan Gloss Coat High Shine Hair Glaze 147mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '147mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064401.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1514', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Nature\'s Way Daily Multivitamin With Antioxidants Coated Tablets 250 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903736.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1539', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1555', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Blackmores Super Magnesium+ Coated Tablets 180 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905571.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1586', brand: 'woolies', category: 'grain',
      nameZh: '甜椒', nameEn: 'Life Botanics Debloat Gummies Peppermint Flavour 60 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030167.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！甜椒超值',
    },

    {
      id: 'w1610', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Nature\'s Way High Strength Magnesium Coated Tablets 250 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/901844.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1663', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1744', brand: 'woolies', category: 'grain',
      nameZh: '卷饼', nameEn: 'Hair Wrap & Scrunchies Set Pink each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049139.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！卷饼超值',
    },

    {
      id: 'w1787', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1811', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Nature\'s Way Beauty Collagen Mature Skin Film Coated Tablets 120 pack',
      originalPrice: 63, salePrice: 31.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/506578.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1845', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'Nature\'s Way Magnesium + Ashwagandha Film Coated Tablets 50 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058750.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1911', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },

    {
      id: 'w1974', brand: 'woolies', category: 'grain',
      nameZh: '燕麦', nameEn: 'DermaVeen Hair + Scalp Soothing Oatmeal Conditioner 1L',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/601558.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！燕麦超值',
    },


    // --- 调味料/干货 (113个) ---
    {
      id: 'w0012', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0050', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Armada BBQ Foil Trays Medium 3 pack',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/075770.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0079', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Marine Splash Toilet Cleaner 700mL',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/622215.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0103', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Whitening Toothpaste Advanced Whiten Tartar Control 200g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197044.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0138', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0197', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'icare 100% Recycled Luxury 3 Ply Toilet Tissue 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/847655.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0219', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Armada BBQ Foil Trays Small 4 pack',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/055498.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0250', brand: 'woolies', category: 'pantry',
      nameZh: '橄榄油', nameEn: 'Ohlio Canola Oil & Moro Extra Virgin Olive Oil Blend 1L',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/439753.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橄榄油超值',
    },

    {
      id: 'w0259', brand: 'woolies', category: 'pantry',
      nameZh: '咖喱', nameEn: 'Continental Cup A Soup Asian Thai Red Curry 30g x 2 pack',
      originalPrice: 2.8, salePrice: 1.4, discount: 50, unit: '30g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/167443.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖喱超值',
    },

    {
      id: 'w0263', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0293', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Armada BBQ Foil Trays Mini 4 pack',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165478.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0302', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Max Fresh Toothpaste With Mini Breath Strips Cool Mint 200g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197046.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0362', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Deluxe Delicate Magnolia Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/095186.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0367', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Power Active Ocean Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/026919.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0381', brand: 'woolies', category: 'pantry',
      nameZh: '橄榄油', nameEn: 'Monini Delicato Extra Virgin Olive Oil 250mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6002829.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橄榄油超值',
    },

    {
      id: 'w0388', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0419', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Blue Power Atlantic Burst Toilet Cleaner Block 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/689201.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0463', brand: 'woolies', category: 'pantry',
      nameZh: '橄榄油', nameEn: 'Monini Classico Extra Virgin Olive Oil 250mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6002880.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！橄榄油超值',
    },

    {
      id: 'w0471', brand: 'woolies', category: 'pantry',
      nameZh: '调料', nameEn: 'Nescafe Spiced Chai Coffee Latte 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6071623.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调料超值',
    },

    {
      id: 'w0499', brand: 'woolies', category: 'pantry',
      nameZh: '调料', nameEn: 'Shan Seasoning Mix Biryani 50g',
      originalPrice: 2.2, salePrice: 1.1, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/437364.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调料超值',
    },

    {
      id: 'w0506', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Advanced Whitening Toothpaste 200g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197043.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0513', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0527', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Air Wick VIPoo Fruity Pin Up Toilet Spray 55mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '55mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/552526.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0530', brand: 'woolies', category: 'pantry',
      nameZh: '调料', nameEn: 'Shan Seasoning Mix Special Bombay Biryani 60g',
      originalPrice: 2.2, salePrice: 1.1, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/437355.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调料超值',
    },

    {
      id: 'w0542', brand: 'woolies', category: 'pantry',
      nameZh: '调料', nameEn: 'Shan Seasoning Mix Tandoori Masala 50g',
      originalPrice: 2.2, salePrice: 1.1, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/437356.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调料超值',
    },

    {
      id: 'w0566', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'White Glo Professional Whitening Toothpaste 115g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '115g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197388.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0585', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Toilet Cleaning Tabs 6 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906620.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0603', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Elvive Extraordinary Oil Nourishing Conditioner 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008706.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0625', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Advanced Whitening Toothpaste Charcoal 180g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197045.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0639', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0648', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Toilet Cleaning Tabs Mountain Pine 6 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906308.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0663', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Blue Active Eucalyptus Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134075.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0664', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Blue Active Flower Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/805171.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0677', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Power Active Hawaii Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/232302.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0699', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'White Glo Professional Whitening Toothpaste 205g',
      originalPrice: 9, salePrice: 0, discount: 50, unit: '205g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/207247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0721', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Spa Moments Harmony Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/320688.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0722', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Tropical Blossom Toilet Cleaner Block 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/689202.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0723', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Farmers Harvest Sunflower Oil 4L',
      originalPrice: 34, salePrice: 17, discount: 50, unit: '4L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/135573.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0759', brand: 'woolies', category: 'pantry',
      nameZh: '沙拉酱', nameEn: 'Sistema To Go Dressing Food Container 35mL x 4 pack',
      originalPrice: 6.65, salePrice: 3.32, discount: 50, unit: '35mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/748141.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！沙拉酱超值',
    },

    {
      id: 'w0762', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0772', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Hygenic & Fresh Sticker Adhesive Toilet Block Lily 2 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907275.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0773', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Hygenic & Fresh Sticker Adhesive Toilet Block Marine 2 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907208.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0782', brand: 'woolies', category: 'pantry',
      nameZh: '蜂蜜', nameEn: 'Nongshim Honey Flavoured Twist Snack 75g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/612793.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蜂蜜超值',
    },

    {
      id: 'w0786', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Spa Moments Vitality Toilet Cleaner Block 50g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '50g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/321446.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0800', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Advanced Whitening Toothpaste Purple 120g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '120g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/256420.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0803', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Jack The Barber Paste Mens Hair Styler Firm Hold Matte Finish 95g',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/820036.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0813', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Conditioner For Dry & Damaged Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725754.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0832', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Farmers Harvest Canola Oil 4L',
      originalPrice: 34, salePrice: 17, discount: 50, unit: '4L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/136022.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0837', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Blue Power Floral Sensations Toilet Cleaner Block each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/022782.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0841', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'White Glo Charcoal Deep Stain Remover Whitening Toothpaste 205g',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '205g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/207784.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0844', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Advanced Whitening Toothpaste With Baking Soda 180g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6003429.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w0877', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Blue Power Atlantic Burst Toilet Cleaner Block each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165304.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0879', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'L\'Oreal Paris Extraordinary Oil Mask 300mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/858504.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0884', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0890', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Hydrate & Nourish Conditioner Abyssinian Oil For Dry Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152914.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0894', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Rose Caged Toilet Cleaner Block 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/322688.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0895', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Tropical Blossom Toilet Cleaner Block each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/622350.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0908', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Turquoise Power Tropical Lagoon Toilet Cleaner Block each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/699977.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0909', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Argan Hair Oil 100mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064441.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0910', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'L\'Oreal Paris Treatment Elvive Extra Ordinary Oil 100mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/726125.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0925', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Argan Oil Repairing Conditioner 355mL',
      originalPrice: 17, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684146.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0926', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Extra Penetrating Hair Oil 100mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085346.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0954', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Bref Brilliant Gel Arctic Ocean Toilet Cleaner Block 42g x 2 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '42g x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905482.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0959', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'L\'Oreal Paris Paris Elvive Extraordinary Oil Hair Treatment 100mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/856309.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0988', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Garnier Skin Active Micellar Cleansing Water in Oil All-In-1 400mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/820279.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w0990', brand: 'woolies', category: 'pantry',
      nameZh: '调料', nameEn: 'Jack The Barber Shower Gel Whisky & Spice 1L',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6070782.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！调料超值',
    },

    {
      id: 'w0992', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Extra Strength Conditioner For Damaged Hair 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486575.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1010', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1020', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Jack The Barber Nourishing Beard Oil 30mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141219.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1058', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Penetrating Hair Oil 100mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725607.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1067', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Repair Strengthen Conditioner Hemp Seed Oil For Damaged Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153053.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1085', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Hydrate & Repair Hair Mask 300mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/271043.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1118', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Hair Perfume With Argan Oil 80mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '80mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063032.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1126', brand: 'woolies', category: 'pantry',
      nameZh: '高汤', nameEn: 'Bonds Instatan Sheer Stockings Slim Tight Light Brown Large each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/431221.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！高汤超值',
    },

    {
      id: 'w1131', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1179', brand: 'woolies', category: 'pantry',
      nameZh: '蜂蜜', nameEn: 'MCoBeauty Flawless Glow Foundation Stick 9 Honey 9g',
      originalPrice: 28, salePrice: 11.2, discount: 60, unit: '9g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054591.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蜂蜜超值',
    },

    {
      id: 'w1216', brand: 'woolies', category: 'pantry',
      nameZh: '高汤', nameEn: 'Bonds Instatan Sheer Stockings Slim Tight Light Brown Medium each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/431197.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！高汤超值',
    },

    {
      id: 'w1228', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Essano Collagen Boost Cleansing Oil 150mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1238', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Argan Oil Lightweight Conditioner 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/590324.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1249', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak Pure Magnesium Sulphate 3kg',
      originalPrice: 25, salePrice: 0, discount: 50, unit: '3kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246895.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1255', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1271', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Argan Oil 5 In 1 Leave-In Spray 175mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '175mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197013.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1325', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Repair & Protect Hair Mask Hemp Seed Oil 225mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '225mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004376.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1326', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Smooth & Control Anti-Frizz Keratin & Marula Hair Oil 50mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062586.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1328', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1342', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Essano Collagen Boost Facial Oil 20mL',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '20mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/034475.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1348', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Argan Oil Repairing Deep Conditioner 236mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '236mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6021897.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1349', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Curl Care Moisturising Hair Oil 100mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064429.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1350', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'L\'Oreal Paris Extraordinary Oil Midnight Serum 100mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/424988.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1379', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1386', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Sensitive Toothpaste Pro-Relief Multi Protection 110g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/706711.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w1392', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Keratin Smooth Hair Oil 100mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064354.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1426', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Hair & Scalp Fortifying Oil Mint & Rosemary 50mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004366.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1441', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Essano Rosehip Oil Certified Organic 20mL',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '20mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/772384.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1491', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Hask Weightless Repair & Argan Oil Hair Mist 100mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064198.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1503', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1517', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Reviving Dry Oil Spray 118mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '118mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004760.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1519', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Rimmel London Oh My Gloss Lip Oil Clear Cloud 4.5mL',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '4.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025968.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1524', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Schwarzkopf Nordic Blonde Hair Colour G1 Argan Oil Lightening Spray 125mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '125mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/160265.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1533', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Shine & Shimmer Mist Niacinamide & Macadamia Oil 60mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062966.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1540', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Blackmores Evening Primrose Oil Skin Health Vitamin Capsules 125 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/200718.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1562', brand: 'woolies', category: 'pantry',
      nameZh: '高汤', nameEn: 'Bonds Instatan Sheer Stockings Slim Tight Light Brown Small each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/431186.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！高汤超值',
    },

    {
      id: 'w1583', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Tropical Blossom Toilet Cleaner 700mL',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/622217.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1627', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1644', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Thanks To Nature Revitaplex Bond Repair #5 Oil 45mL',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '45mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004141.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1727', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Sensitive Toothpaste Pro-Relief Enamel Repair 110g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/730950.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w1728', brand: 'woolies', category: 'pantry',
      nameZh: '酱膏', nameEn: 'Colgate Sensitive Toothpaste Pro-Relief Whitening 110g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '110g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/352411.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！酱膏超值',
    },

    {
      id: 'w1745', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Harpic Fresh Power Sparkling Citrus Toilet Cleaner 700mL',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/666210.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1751', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1869', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'OGX Biotin & Collagen Volumising Weightless Oil Mist 118mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '118mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/270373.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1875', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1944', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Toiletries Bag each',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049134.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },

    {
      id: 'w1968', brand: 'woolies', category: 'pantry',
      nameZh: '食用油', nameEn: 'Amazing Oils Epsom Salts Detox Bath Soak 1kg',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/246634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！食用油超值',
    },


    // --- 饮料酒水 (155个) ---
    {
      id: 'w0002', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0006', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Zero Sugar Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/623034.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0008', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Mint Slice Chocolate Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/036215.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0010', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Cappuccino Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/195108.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0016', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Classic  Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/032731.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0017', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Rokeby Protein Snack Chocolate 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6039963.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0018', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Golden Crumpets Round 6 pack',
      originalPrice: 4.8, salePrice: 2.4, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/049622.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0028', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Chocolate Scotch Finger Biscuits 250g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '250g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/046808.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0030', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Mars Chocolate Bar with Nougat & Caramel 47g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '47g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/160905.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0031', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Milo Malt Drinking Chocolate Powder Hot Or Cold 460g',
      originalPrice: 10.75, salePrice: 5.35, discount: 50, unit: '460g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/875162.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0040', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'KitKat Chocolate Bar 42g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '42g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006115.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0051', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Caffeine Free Zero Sugar Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/137848.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0060', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Diet Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/094493.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0061', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Old El Paso Original Taco Shells 12 pack',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038264.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0067', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Vanilla  Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/180941.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0068', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Caramel Crown Chocolate Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/000025.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0069', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Snickers Chocolate Bar Peanuts Caramel Nougat 44g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '44g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206890.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0075', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Golden Crumpets Round Wholemeal 6 pack',
      originalPrice: 4.8, salePrice: 2.4, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/031560.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0076', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Tee Vee Snacks Malt Sticks Chocolate Biscuits 175g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/117822.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0077', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Kinder Chocolate Treats 16 pack',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/839689.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0105', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Pascall Eclairs Chocolate Lollies 160g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/697802.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0112', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Bounty Chocolate Bar 50g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055209.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0123', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Celebrations Chocolate Party Gift Box 320g',
      originalPrice: 15.5, salePrice: 7.75, discount: 50, unit: '320g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054408.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0128', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0133', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Chocolate Teddy Bear Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/036064.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0135', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Wagon Wheels Original Mini Chocolate Biscuits 190g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/212875.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0136', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Favourites Chocolate Gift Box 700g',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '700g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031592.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0142', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Tee Vee Snacks Original Chocolate Biscuits 175g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/188562.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0145', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Gaiety Chocolate Wafer Biscuits 160g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/036058.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0149', brand: 'woolies', category: 'drinks',
      nameZh: '可口可乐', nameEn: 'Coca-Cola Vanilla Zero Sugar Soft Drink Bottle 1.25L',
      originalPrice: 4.2, salePrice: 2.1, discount: 50, unit: '1.25L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/803078.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！可口可乐超值',
    },

    {
      id: 'w0150', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Cappuccino Strong Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/259079.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0158', brand: 'woolies', category: 'drinks',
      nameZh: '能量饮料', nameEn: 'Optimum Nutrition Amino Energy Drink Tropical Sunrise 355mL',
      originalPrice: 3, salePrice: 0, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065602.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！能量饮料超值',
    },

    {
      id: 'w0161', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Caramel Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/226908.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0185', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Morning Fresh Dishwashing Liquid Original 900mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208112.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0187', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Vanilla Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/226906.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0190', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Arnott\'s Monte Chocolate Biscuits 200g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/036216.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0209', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Ferrero Rocher Chocolate Gift Box 30 pack',
      originalPrice: 32, salePrice: 0, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/009023.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0211', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Violet Crumble Bites 150g',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0212', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Hazelnut Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/226666.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0221', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Mocha Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/226106.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0226', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Nestle Crunch Chocolate Bar 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/232223.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0229', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Milo Frothy Instant Hot Chocolate Sachets 8 pack',
      originalPrice: 8.6, salePrice: 4.3, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6021265.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0253', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0257', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Milo 30% Less Added Sugar Chocolate Drinking Powder Hot or Cold 395g',
      originalPrice: 10.75, salePrice: 5.35, discount: 50, unit: '395g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/875163.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0267', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'KitKat Chunky Hazelnut Chocolate Bar 41g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '41g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037258.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0285', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Nivea Original Care Moisturising Lip Balm 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/567595.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0315', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Double Shot Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/242067.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0319', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Uncle Tobys Chewy Muesli Bars Mint Chocolate 6 Pack 185g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '185g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004001.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0338', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Cappuccino Decaf Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/022780.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0351', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe 98% Sugar Free Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/115138.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0364', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Bubly Sparkling Water Cans Tropical Bliss 375mL x 10 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '375mL x 10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022858.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w0371', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Milo Protein Chocolate Malt Powder Hot or Cold Drink 440g',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '440g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023218.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0372', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Velvety White Choc Mocha Coffee Sachets 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6018781.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0378', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0383', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Pascall Chocolate Caramels Lollies Snack & Share Bag 160g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828973.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0393', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/022823.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0400', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Reese\'s Sticks Chocolate Bar 42g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '42g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/325742.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0416', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe 98% Sugar Free Hazelnut Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/642038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0420', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Favourites Marvellous Creations Chocolate Box 264g',
      originalPrice: 14, salePrice: 0, discount: 50, unit: '264g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029321.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0427', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Fairy Platinum Plus Dish Liquid Original 495mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '495mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6050690.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0429', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Snickers White Chocolate Bar Caramel Peanuts 42g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '42g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055207.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0440', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe 98% Sugar Free Caramel Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/115795.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0441', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Caramel Latte Decaf Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/641344.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0448', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Milo Restore Overnight Chocolate Malt Powder Hot Drink 440g',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '440g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6020525.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0452', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Europe Summer Roll Minis Chocolate Bites Snack & Share Bag 150g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/255112.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0466', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe 98% Sugar Free Mocha Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/115794.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0477', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Avalanche 99% Sugar Free Coffee Sachets Strong Cappuccino 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026633.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0489', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Dove Women Advanced 72hr Deodorant Aerosol Original 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905185.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0493', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Snickers Loaded Chocolate Bar Peanuts Caramel 45g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '45g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037286.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0497', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Mocha Decaf Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6016055.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0498', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Kit Kat Mocha Coffee Sachets 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6018774.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0503', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0517', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Nescafe Double Shot Caramel Latte Coffee Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6016157.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0523', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Brut Original 24Hr Antiperspirant 130g',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/227732.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0526', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Cleansing Water All-In-1 125mL',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '125mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/892601.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w0534', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Cleansing Water All-In-1 400mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/779445.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w0574', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Vittoria Espressotoria Espresso Coffee Capsules 12 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/829318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0601', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Brut Original Body Spray 130g',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/227733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0629', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0635', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'The Better Baking Co. Mini Cakes Chocolate 10 pack',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027908.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0666', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Swizzels Squashies Drumstick Freeze & Squeeze Slush Original 250mL',
      originalPrice: 3.5, salePrice: 1.35, discount: 61, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037817.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0688', brand: 'woolies', category: 'drinks',
      nameZh: '咖啡', nameEn: 'Vittoria Espressotoria Italian Coffee Capsules 12 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/829332.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！咖啡超值',
    },

    {
      id: 'w0728', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Dream White Chocolate Balls Snack & Share Bag 127g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '127g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6041238.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0737', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Muscle Nation Sour Protein Water Cola 1kg',
      originalPrice: 60, salePrice: 0, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065160.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0752', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0801', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Cleansing Rose Water 400mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/073490.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w0802', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Cleansing Water All-In-1 700mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/611753.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w0809', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'L\'Oreal Paris Elvive Growth Booster Scalp Serum 102mL',
      originalPrice: 33, salePrice: 16.5, discount: 50, unit: '102mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6051898.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0831', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Brut Original 72Hr Antiperspirant 130g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/227360.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0834', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Growth Bomb Hair Supercharge Leave-In Serum 185mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '185mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267059.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0839', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Palmolive Squeeze It Dishwashing Liquid Ultra Original 500mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6055339.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w0863', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Garnier Vitamin C Brightening Serum 30mL',
      originalPrice: 37, salePrice: 18.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033066.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0874', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0906', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Garnier Skin Active Pro Retinol Smoothing Serum Mask each',
      originalPrice: 8, salePrice: 4, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6001508.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w0921', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Darrell Lea Rocklea Road Chocolate 290g',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '290g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/215201.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w0937', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Growth Bomb Booster Serum Strength & Volume 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571030.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1000', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1005', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Elvive Glycolic Gloss Leave-In Serum 150mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/566499.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1018', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Botanica Origins Madagascan Vanilla Candle 250g',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '250g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905307.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1048', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Renovatio Bioscience Original Activated Phenolics Powder 150g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '150g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/091654.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1057', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Maybelline Studio Grippy Serum Primer 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031590.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1091', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Botanica Origins Scented Candle Pine & Spanish Sage 250g',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '250g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058625.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1092', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Men Daily Multivitamin Supplements 60 pack',
      originalPrice: 22.5, salePrice: 11.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/750905.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1097', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Maybelline Lash Sensational Waterproof Mascara Very Black 9mL',
      originalPrice: 25, salePrice: 0, discount: 50, unit: '9mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877441.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1104', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Vital All-In-One Daily Health Supplement Powder Original 240g',
      originalPrice: 59, salePrice: 29.5, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909272.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1111', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Men 50+ Daily Multivitamin Supplements 60 pack',
      originalPrice: 22.5, salePrice: 11.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780010.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1121', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1135', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Elvive Bond Repair Leave-In Serum 150mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/276976.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1161', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Bonds Sports Leggings Black Medium- Large each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162366.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1162', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Favourites Marvellous Creations Chocolate Box 680g',
      originalPrice: 30, salePrice: 0, discount: 50, unit: '680g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031593.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1163', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Women Daily Multivitamin Supplements 60 pack',
      originalPrice: 22.5, salePrice: 11.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/750906.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1170', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Vitamin C Cleansing Water 125mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '125mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/947820.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1172', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'L\'Oreal Paris Elvive Hyaluron Pure Hair Serum 102mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '102mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6014604.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1204', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'MCoBeauty All In One Colour Corrector Serum Medium 30mL',
      originalPrice: 26, salePrice: 0, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6054266.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1223', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Botanica Origins French Clary Sage Candle 250g',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '250g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905497.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1236', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Maybelline The Colossal Mascara Waterproof Glam Black 10mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/399583.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1245', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1273', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'MCoBeauty 3 In 1 Massaging Hair Brush each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/912073.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1280', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'OGX Bond Protein Repair Sealing Serum 50mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/105161.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1306', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Women 50+ Daily Multivitamin Supplements 60 pack',
      originalPrice: 22.5, salePrice: 11.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780021.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1310', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Vitamin C Cleansing Water 400mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/196593.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1313', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'L\'Oreal Paris Elvive Dream Lengths Frizz Killer Serum each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/203371.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1322', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Musashi Plant Protein Chocolate 320g',
      originalPrice: 24.5, salePrice: 0, discount: 50, unit: '320g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/097266.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1333', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Bonds Flex Leggings Black Large/Extra Large each',
      originalPrice: 24, salePrice: 12, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162730.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1341', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Bonds Sports Leggings Black Size Large/X Large each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164032.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1351', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Maybelline Lash Sensational Sky High Mascara Very Black Waterproof 6mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '6mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/137686.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1353', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'OGX ProGrowth & Peptide Scalp Serum 10mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064066.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1365', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: '19 Crimes Calimocho Cocktail Cola Bottles 750mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '750mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027172.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1369', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1387', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Essano Collagen Boost Serum 30mL',
      originalPrice: 34, salePrice: 17, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/966792.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1391', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Garnier Skin Active Vitamin C Brightening Night Serum 30mL',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/316676.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1397', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'John Frieda Frizz Ease Miraculous Recovery Silk Drench Smoothing Water 200mL',
      originalPrice: 21, salePrice: 0, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004924.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1404', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Maybelline Serum Lipstick Maybe It\'s Soft each',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064545.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1430', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Bonds Flex Leggings Black Medium- Large each',
      originalPrice: 24, salePrice: 12, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162569.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1451', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Life-Space Broad Spectrum Probiotic 40 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/086556.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1488', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Vitamin C Cleansing Water 700mL',
      originalPrice: 26.5, salePrice: 13.25, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/443271.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1493', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1501', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'MCoBeauty All In One Colour Corrector Serum Deep 30mL',
      originalPrice: 26, salePrice: 10.4, discount: 60, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059687.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1576', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Advance 50+ Daily Multivitamin Supplements 120 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/702125.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1600', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Maybelline Matte Serum Lipstick Open Late each',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062946.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1602', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Maybelline The Falsies Surreal Waterproof Mascara 10mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/313907.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1617', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1647', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Toblerone White Chocolate Bar 360g',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '360g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/053340.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1701', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Bonds Fashion Skinny Leggings 150D L/XL each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108773.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1725', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Centrum Advance Daily Multivitamin Supplements 120 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/702124.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1734', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Garnier Skin Active Micellar Hyaluronic Aloe Water 400mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/256985.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1735', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Glen 20 24H Protection Original Disinfectant Spray 300g',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/236072.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1736', brand: 'woolies', category: 'drinks',
      nameZh: '金酒', nameEn: 'Glen 20 All In One Original Disinfectant Spray 375g',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '375g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/156543.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！金酒超值',
    },

    {
      id: 'w1741', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1754', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'Life-Space Broad Spectrum Probiotic Capsules 90 pack',
      originalPrice: 74, salePrice: 37, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309639.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1762', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'MCoBeauty Everyday Glow Radiance Niacinamide Serum 50mL',
      originalPrice: 49, salePrice: 24.5, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034286.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1771', brand: 'woolies', category: 'drinks',
      nameZh: '水', nameEn: 'Maybelline Lash Sensational Fireworks Waterproof each',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906710.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！水超值',
    },

    {
      id: 'w1865', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },

    {
      id: 'w1871', brand: 'woolies', category: 'drinks',
      nameZh: '朗姆酒', nameEn: 'OGX ProGrowth & Peptide Serum Mist 193mL',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '193mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064037.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！朗姆酒超值',
    },

    {
      id: 'w1964', brand: 'woolies', category: 'drinks',
      nameZh: '汽水', nameEn: 'Cadbury Curlywurly Squirlies Chocolate Snack & Share Bag 130g',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/299417.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！汽水超值',
    },


    // --- 零食糖果 (39个) ---
    {
      id: 'w0034', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Rokeby Protein Snack Pot Choc Hazelnut 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062520.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0038', brand: 'woolies', category: 'snacks',
      nameZh: '零食', nameEn: 'Rokeby Protein Snack Pot Salted Caramel 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060269.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！零食超值',
    },

    {
      id: 'w0062', brand: 'woolies', category: 'snacks',
      nameZh: '零食', nameEn: 'Rokeby Protein Snack Pot Vanilla 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6061814.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！零食超值',
    },

    {
      id: 'w0081', brand: 'woolies', category: 'snacks',
      nameZh: '零食', nameEn: 'Rokeby Protein Snack Double Espresso 160g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '160g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6040113.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！零食超值',
    },

    {
      id: 'w0095', brand: 'woolies', category: 'snacks',
      nameZh: '薯片', nameEn: 'Uncle Tobys Muesli Bars Chewy Choc Chip 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248249.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！薯片超值',
    },

    {
      id: 'w0132', brand: 'woolies', category: 'snacks',
      nameZh: '饼干', nameEn: 'Kinder Happy Hippo Cocoa Biscuit 5 pack',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141691.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0191', brand: 'woolies', category: 'snacks',
      nameZh: '薯片', nameEn: 'Uncle Tobys Muesli Bars Chewy White Choc Chip 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/254169.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！薯片超值',
    },

    {
      id: 'w0205', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Muesli Bars Chewy Apricot 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248250.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0247', brand: 'woolies', category: 'snacks',
      nameZh: '薯片', nameEn: 'BSc Crispy High Protein Bar Caramel Peanut Fudge 60g',
      originalPrice: 3.2, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065407.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！薯片超值',
    },

    {
      id: 'w0299', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Muesli Bar Crunch 5 Pack 145g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '145g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004360.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0310', brand: 'woolies', category: 'snacks',
      nameZh: '薯片', nameEn: 'BSc Crispy High Protein Bar Vanilla White Choc 60g',
      originalPrice: 3.2, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065373.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！薯片超值',
    },

    {
      id: 'w0313', brand: 'woolies', category: 'snacks',
      nameZh: '饼干', nameEn: 'Hershey\'s Cookies \'N\' Creme Bar 40g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/277295.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0328', brand: 'woolies', category: 'snacks',
      nameZh: '薯片', nameEn: 'BSc Crispy High Protein Bar Choc Chip 60g',
      originalPrice: 3.2, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065580.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！薯片超值',
    },

    {
      id: 'w0369', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Nice & Natural Dark Choc Nut Bars Apricot 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/954210.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0386', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Muesli Bars Inspired By Golden Rough 5 Pack 145g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '145g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004124.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0397', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Nice & Natural Dark Choc Nut Bars Salted Caramel 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164566.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0449', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Nescafe Krispy Kreme Doughnut Latte Sachets 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059364.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0456', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Muesli Bar Chokito 5 Pack 145g',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '145g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004090.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0476', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Famous Nutrition Sport Protein & Creatine Bar Salted Caramel 60g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/065859.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0481', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Chewy Oh My Choc Muesli Bars 6 pack',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: '6 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/953393.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0488', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Optimum Nutrition Protein Bar Dark Choc Hazelnut 60g',
      originalPrice: 3.4, salePrice: 0, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064872.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0490', brand: 'woolies', category: 'snacks',
      nameZh: '零食', nameEn: 'Sistema To Go Snacks Food Container Assorted 400mL each',
      originalPrice: 6.65, salePrice: 3.32, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/757630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！零食超值',
    },

    {
      id: 'w0518', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Nutella Muffins 4 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023129.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0570', brand: 'woolies', category: 'snacks',
      nameZh: '麦片棒', nameEn: 'Uncle Tobys Muesli Bar Chewy Caramel Choc 6 Pack 185g',
      originalPrice: 5.5, salePrice: 0, discount: 50, unit: '185g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6003817.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！麦片棒超值',
    },

    {
      id: 'w0582', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Optimum Nutrition Creatine Unflavoured 270g',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '270g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065161.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0712', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Famous Nutrition Creatine + Protein Bar Choc Peanut Energy 60g',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6041498.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0744', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'L\'Oreal Paris Elvive Glycolic Gloss 5 Minute Lamination Rinse Off 200mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571372.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0769', brand: 'woolies', category: 'snacks',
      nameZh: '饼干', nameEn: 'Ben & Jerry\'s Sundae Cookie Vermont-ster Tub 427mL',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '427mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/488238.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0781', brand: 'woolies', category: 'snacks',
      nameZh: '饼干', nameEn: 'Nescafe Iced Latte Sachets Cookie Dough 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049180.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！饼干超值',
    },

    {
      id: 'w0857', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Nescafe Iced Latte Sachets Hazelnut Praline 8 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049181.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0924', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Famous Nutrition Protein Creatine Powder Vanilla 400g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '400g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/072281.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w0977', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Optimum Nutrition Energy & Electrolytes Tangerine 190g',
      originalPrice: 20, salePrice: 8, discount: 60, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064972.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1022', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'OGX Bond Protein Repair 1 Minute Treatment Mask 200mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/109965.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1041', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Optimum Nutrition Whey Protein Vanilla 525g',
      originalPrice: 39.9, salePrice: 0, discount: 50, unit: '525g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065181.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1269', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Famous Nutrition Sport Creatine Monohydrate Powder Unflavoured 300g',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/081603.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1444', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Famous Nutrition Sport Shred + Carnitine Thermogenic Pine Passion 175g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '175g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/074182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1523', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Schwarzkopf Live Colour Brown Hair Dye Hazelnut Semi Permanent each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/122436.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1625', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Swisse Ultiboost Hair Nutrition For Men Soft Capsules 60 pack',
      originalPrice: 33.5, salePrice: 16.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008916.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },

    {
      id: 'w1895', brand: 'woolies', category: 'snacks',
      nameZh: '坚果', nameEn: 'Swisse Beauty Hair Nutrition For Women Soft Capsules 60 pack',
      originalPrice: 33.5, salePrice: 16.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6009500.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！坚果超值',
    },


    // --- 冷冻食品 (2个) ---
    {
      id: 'w0042', brand: 'woolies', category: 'frozen',
      nameZh: '冷冻食品', nameEn: 'Patties Party Pies Frozen 12 pack',
      originalPrice: 9.7, salePrice: 4.85, discount: 50, unit: '12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/077888.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！冷冻食品超值',
    },

    {
      id: 'w1312', brand: 'woolies', category: 'frozen',
      nameZh: '派', nameEn: 'Jack The Barber Mens 7 Piece Grooming Kit each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/107495.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！派超值',
    },


    // --- 日用品 (133个) ---
    {
      id: 'w0047', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0063', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Rinse & Shine Dishwashing Aid 500mL',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/260703.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0090', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0172', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0196', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Lucent Globe Laundry Detergent Sheets Ocean Breeze 35 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '35 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6039782.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0215', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0220', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Radiant Mixed Colours Laundry Liquid Detergent 2L',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/143227.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0240', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Comfort Laundry Fabric Conditioner Liquid Pure 900mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205696.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0297', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0314', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Morning Fresh Summer Berries Dishwashing Liquid Washing Up Dish Wash 900mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/282626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0337', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Palmolive Body Wash Shower Gel Naturals Anti Stress 500mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/210811.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0340', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0343', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Comfort Laundry Fabric Conditioner Liquid Sky Blue 900mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '900mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/204827.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0344', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Ultimate Laundry Liquid Detergent 2L',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208873.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0346', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Sunsilk Conditioner Longer & Stronger 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463186.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0349', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Radiant Whites Or Colours Laundry Detergent Washing Powder 2kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141938.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0355', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Dishwasher Cleaner Tabs 3 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/037181.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0375', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Radiant Whites Or Colours Laundry Liquid Detergent 2L',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/143353.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0399', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Dream Lengths Detangling Conditioner 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008702.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0413', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Radiant Mixed Colours Laundry Detergent Washing Powder 2kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/142359.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0423', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0425', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Earthwise Sensitive Clean Laundry Liquid Washing Detergent 2L',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905143.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0436', brand: 'woolies', category: 'household',
      nameZh: '清洁用品', nameEn: 'OzKleen Shower Power Citrus Cleaner Squeeze Pack 750mL',
      originalPrice: 7.3, salePrice: 3.65, discount: 50, unit: '750mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/057247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！清洁用品超值',
    },

    {
      id: 'w0444', brand: 'woolies', category: 'household',
      nameZh: '牙刷', nameEn: 'Colgate Toothbrush Zig Zag Soft Daily Clean Value 3 pack',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/211365.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牙刷超值',
    },

    {
      id: 'w0445', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Rinse & Shine Dishwashing Aid 250mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/034222.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0455', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Vileda Dishwashing Cloth 3-Pack 3 pack',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/888591.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0458', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Ultimate Laundry Powder Detergent 2kg',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208058.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0465', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0480', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Ultimate Sensitive Laundry Liquid Detergent 2L',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205508.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0482', brand: 'woolies', category: 'household',
      nameZh: '牙刷', nameEn: 'Colgate Toothbrush Zig Zag Medium Daily Clean Value 3 pack',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/211366.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牙刷超值',
    },

    {
      id: 'w0501', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Radiant Active Clean Liquid Laundry Capsules Detergent Washing 28 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208904.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0507', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Glycolic Gloss Conditioner 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6061699.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0520', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Arfum Laundry Detergent Liquid Beautiful Life 2L',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043128.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0548', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0554', brand: 'woolies', category: 'household',
      nameZh: '除臭剂', nameEn: 'Dove Men+Care Advanced 72hr Deodorant Aerosol Clean Comfort 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905100.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0555', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Sunsilk Conditioner Addictive Brilliant Shine 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463191.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0563', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Sunsilk Conditioner Longer & Stronger 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/486428.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0573', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Sunsilk Conditioner Soft & Smooth 700mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '700mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/463180.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0591', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0604', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Ultimate 0% Dishwashing Tablets 46 pack',
      originalPrice: 49, salePrice: 24.5, discount: 50, unit: '46 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/618638.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0605', brand: 'woolies', category: 'household',
      nameZh: '纸巾', nameEn: 'Garnier Skinactive Hydra Bomb Tissue Face Mask Sakura each',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/071404.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！纸巾超值',
    },

    {
      id: 'w0610', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Clearasil Rapid Action Face Cleanser Gel Wash for Clearer Skin 200mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/231929.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0611', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Palmolive Men\'s Body Wash Shower Gel Deep Clean 500mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/839868.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0615', brand: 'woolies', category: 'household',
      nameZh: '除臭剂', nameEn: 'Dove Women Advanced 72hr Deodorant Aerosol Invisible 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0619', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Expert Odour Eliminator Liquid Laundry Detergent 2L',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208437.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0622', brand: 'woolies', category: 'household',
      nameZh: '除臭剂', nameEn: 'Dove Women Advanced 72hr Deodorant Aerosol Pomegranate 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905071.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0647', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Collagen Repair & Protect Daily Intensive Conditioner 350mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/574611.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0655', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Sunsilk Conditioner Addictive Brilliant Shine 350mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/490137.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0667', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Arfum Laundry Detergent Liquid Royal Rose 2L',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043844.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0672', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0690', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Garnier Skin Active Daily Pore Scrub Wash 150mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/159458.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0693', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Intensive Repair + Ceramide Conditioner 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060468.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0695', brand: 'woolies', category: 'household',
      nameZh: '牙刷', nameEn: 'Jordans Cleaning Baby Toothbrush Assorted each',
      originalPrice: 5.5, salePrice: 2.75, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/352834.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牙刷超值',
    },

    {
      id: 'w0703', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Expert Wonder Wash Laundry Liquid Detergent Speed Clean 1.18L',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '1.18L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0704', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Aveeno Daily Moisturising Body Wash Normal + Dry Sensitive Skin 1L',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/688097.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0714', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0734', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Earthwise Sensitive Clean Laundry Capsules Washing Detergent 26 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '26 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660832.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0736', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Maybelline Lash Sensational Sky High Mascara Black Washable each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/137908.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0749', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Elvive Color Protect Conditioner 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008514.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0756', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Expert Wonder Wash Laundry Liquid Detergent Odour Refresh 1.18L',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '1.18L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026221.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0771', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Intensive Repair + Ceramide Conditioner 850mL',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059899.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0779', brand: 'woolies', category: 'household',
      nameZh: '除臭剂', nameEn: 'Dove Men+Care Advanced 72hr Deodorant Aerosol Invisible Dry 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905069.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0791', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Hyaluron Pure Conditioner 340mL',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6015145.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0796', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0811', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Garnier Pure Active 3-In-1 Clay Wash Scrub & Mask 150mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/312446.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0812', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Glycolic Gloss Conditioner 150mL',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/567554.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0814', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'TRESemme Conditioner Purple Toning 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/265136.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0824', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Hask Curl Care Conditioner 355mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/174180.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0826', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Ultimate Sensitive Laundry Liquid Capsules Detergent 28 pack',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904903.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0828', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Daily Moisture Renew Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059971.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0836', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0845', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Volume Boost + Collagen Conditioner 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059949.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0848', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Smooth & Sleek Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059973.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0854', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Bond Repair Conditioner 150mL',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/277592.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0862', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature Cool Curls Conditioner With Aloe Vera For Curly Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/562230.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0866', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Growth Booster Conditioner 150mL',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6051624.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0892', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0893', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Growth Bomb Supercharge Conditioner 300mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267923.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0896', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0904', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Wash Wild Floor Cleaner 1L',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/199462.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0919', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0922', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Bond Strength + Biotin Conditioner 350mL',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062234.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0923', brand: 'woolies', category: 'household',
      nameZh: '除臭剂', nameEn: 'Dove Men+Care Advanced 72hr Deodorant Aerosol Extra Fresh 250mL',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905142.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！除臭剂超值',
    },

    {
      id: 'w0943', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature Volume Thickening Conditioner Biotin Collagen for  Fine Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0947', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'OGX ProGrowth & Peptide Conditioner 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059968.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0948', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'OMO Expert OdourEliminator Laundry Liquid Capsules Detergent 28 pack',
      originalPrice: 36, salePrice: 0, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904922.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w0949', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Classic Clean Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059970.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0962', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Smooth & Silky Anti-Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/138418.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0963', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'OGX Biotin & Collagen Conditioner For Fine Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/699862.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0966', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Colour Protect Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064344.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0967', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature Smooth & Control Conditioner With Ketatin For Frizzy Hair 500mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152930.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0975', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Head & Shoulders Clean & Balanced Anti Dandruff Conditioner 660mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '660mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153217.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0978', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Sheer Volume Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064339.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w0987', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Ultimate Plus Material Care Dishwashing Tablets 80 pack',
      originalPrice: 84, salePrice: 42, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6066300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1008', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Hask Keratin Smoothing Conditioner 355mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '355mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684147.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1021', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'L\'Oreal Paris Elvive Total Repair 5 Restoring Conditioner 340mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '340mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008513.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1023', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Biotin Daily Intensive Conditioner 350mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573722.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1024', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Ultimate 10 Repair & Protect Conditioner 290mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '290mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059972.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1025', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'TRESemme Conditioner Keratin Smooth 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267202.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1026', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature Anti Dandruff Conditioner With Salicylic Acid 450mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '450mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004331.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1033', brand: 'woolies', category: 'household',
      nameZh: '清洁用品', nameEn: 'Essano Hydration Gel Cleanser 140mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '140mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/335462.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！清洁用品超值',
    },

    {
      id: 'w1036', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Jack The Barber Mens 3 In 1 Hemp Seed Shower Gel Body Wash 1L',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141001.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1043', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1059', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'OGX Brazilian Keratin Therapy Conditioner For Dull Hair 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/376591.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1087', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Hyaluron Daily Intensive Conditioner 350mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004561.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1094', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Hask Keratin Smooth Deep Conditioner 236mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '236mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6021898.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1112', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'DermaVeen Daily Nourish Soap Free Wash 250mL',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771752.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1117', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pantene Keratin Daily Intensive Conditioner 350mL',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: '350mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571569.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1119', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature Hydrate & Nourish Leave In Conditioner For Dry Hair 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004127.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1165', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1168', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Bond Strength + Biotin Conditioner 850mL',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059901.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1229', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Jack The Barber Beard & Face Foaming Wash 150mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6069598.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1231', brand: 'woolies', category: 'household',
      nameZh: '清洁用品', nameEn: 'Maison & Muse Car Cleaning Wipes Aloe & Eucalyptus 25 pack',
      originalPrice: 12, salePrice: 0, discount: 50, unit: '25 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！清洁用品超值',
    },

    {
      id: 'w1277', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Maybelline Lash Sensational Washable Mascara - Blackest Black 9.5mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '9.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877390.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1279', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'OGX Bond Protein Repair Conditioner 385mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104159.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1289', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1307', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Dove Damage Therapy Volume Boost + Collagen Conditioner 850mL',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '850mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059900.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1344', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Ultimate Plus Material Care Dishwashing Tablets 46 pack',
      originalPrice: 58, salePrice: 29, discount: 50, unit: '46 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6065971.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1354', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Pro:Voke Brighten & Repair Conditioner 200mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/857439.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1389', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'Finish Ultimate Plus Material Care Dishwashing Tablets 56 pack',
      originalPrice: 68, salePrice: 34, discount: 50, unit: '56 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064945.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1413', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1439', brand: 'woolies', category: 'household',
      nameZh: '清洁用品', nameEn: 'Clearasil Rapid Action Pimple Face Cleanser Pads 65 pack',
      originalPrice: 14.8, salePrice: 0, discount: 50, unit: '65 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/231930.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！清洁用品超值',
    },

    {
      id: 'w1440', brand: 'woolies', category: 'household',
      nameZh: '牙刷', nameEn: 'Colgate Toothbrush Brilliant Star White Medium 3 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056404.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！牙刷超值',
    },

    {
      id: 'w1465', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'OGX Refreshing Scalp Rosemary Mint Conditioner 385mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '385mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006947.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1487', brand: 'woolies', category: 'household',
      nameZh: '清洁用品', nameEn: 'Garnier Pure Active Hydrating Cleanser 250mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/453141.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！清洁用品超值',
    },

    {
      id: 'w1532', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'Thanks To Nature REVITAPLEX Bond Repair #4 Hair Conditioner 250mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004440.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1537', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1661', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1785', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1909', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1939', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'TREsemme Bond Repair & UV Filters Conditioner 500mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6051662.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },

    {
      id: 'w1943', brand: 'woolies', category: 'household',
      nameZh: '洗衣液', nameEn: 'The Fox Tan One-Night Only Instant Tan Wash-Off 200mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038846.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！洗衣液超值',
    },

    {
      id: 'w1972', brand: 'woolies', category: 'household',
      nameZh: '护发素', nameEn: 'DermaVeen Hair Scalp + Extra Hydration Conditioner 500mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/573701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！护发素超值',
    },


    // --- 保健品 (223个) ---
    {
      id: 'w0045', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0170', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0295', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0421', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0475', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Mega Vitamin C 1000mg Chewable Tablets For Immune Support 60 pack',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/168814.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0510', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin D Capsules 250 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705800.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0535', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Vitamin C 250mg Tablets For Immune Support 150 pack',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828923.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0546', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0670', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0724', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Kids Smart Probiotic Choc Balls 50 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725423.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w0789', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Garnier Vitamin C Brightening Eye Mask each',
      originalPrice: 6, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/453143.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0794', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0820', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Little Swisse Prebiotic + Probiotic Gummies For Kids 100 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022621.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w0849', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium + Sleep Tablets 100 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/106244.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w0851', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Garnier Skin Active Vitamin C Sheet Mask each',
      originalPrice: 8, salePrice: 4, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/256987.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0869', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Swisse Probiotic + Prebiotic Gummies For Gut Health 45 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/204688.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w0900', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Swisse Probiotic + Prebiotic Gummies For Adults 90 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905040.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w0917', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w0931', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Spatone Iron Supplement 28 pack',
      originalPrice: 35.65, salePrice: 17.8, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828519.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w0946', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Vitamin B3 500mg Tablets For Energy 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/678276.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w0960', brand: 'woolies', category: 'health',
      nameZh: '蛋白粉', nameEn: 'Musashi Plant Protein Vanilla 320g',
      originalPrice: 24.5, salePrice: 0, discount: 50, unit: '320g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/008049.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蛋白粉超值',
    },

    {
      id: 'w1004', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Executive Vitamin B Stress Support Tablets 125 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/192702.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1049', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Gummies 120 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025728.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1050', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Gummies 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243935.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1083', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vita Gummies Vitamin D 120 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/733388.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1090', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Blackmores Bio Iron Advanced Energy Support Tablets 30 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/059321.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1098', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Adult Vita Gummies Probiotic & Prebiotic 100 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028341.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1115', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Probiotic Powder For Children 40g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/140218.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1116', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Probiotic & Prebiotic 90 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1143', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Adult Vita Gummies Probiotic & Prebiotic 65 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '65 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/235578.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1145', brand: 'woolies', category: 'health',
      nameZh: '蛋白粉', nameEn: 'OGX Bond Protein Repair Multitasker Spray 193mL',
      originalPrice: 35, salePrice: 0, discount: 50, unit: '193mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059569.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！蛋白粉超值',
    },

    {
      id: 'w1147', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D Chewable D3 Tablets Bones + Immunity 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751016.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1193', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Nails Hair & Skin Beauty Vitamin Tablets 60 pack',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/228483.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1224', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Cenovis Magnesium Tablets Muscle Health Supplement 120 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153979.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1278', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own Magnesium+ Muscle Effervescent With High Strength Magnesium 20 pack',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/301149.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1305', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Caltrate Bone & Muscle 50 Plus With Calcium & Vitamin D3 100 pack',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/805415.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1315', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Probiotic For 60+ Years 40 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/087398.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1317', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Little Swisse Prebiotic + Probiotic Gummies For Kids 50 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023050.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1323', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Tablets 60 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345785.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1324', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Women\'s 50+ Multivitamin Tablets 90 pack',
      originalPrice: 64, salePrice: 32, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/244315.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1330', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Bio C 500mg Chewable Vitamin Immune Support Tablets 125 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/086565.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1352', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Vitamin B12 1000mcg Vitamin B Tablets For Energy 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1358', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Tablets 200 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/805948.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1359', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin D Capsules 400 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243774.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1360', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Women\'s Multivitamin Tablets 100 pack',
      originalPrice: 59.5, salePrice: 29.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306612.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1366', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Blackmores Bio C 1000mg Echinacea + Zinc Effervescent Tablets 10 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/819600.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1372', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Probiotics+ Immune Defence Gut Health Vitamin Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/572424.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1373', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Probiotics+ Women\'s Flora Balance Vitamin Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/804279.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1374', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin C 500mg Immune Support Tablets 120 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085697.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1402', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'MagZorb Magnesium Glycinate 500mg Hard Capsules 100 pack',
      originalPrice: 33, salePrice: 16.5, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905823.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1407', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Calcium Magnesium & Vitamin D Tablets For Bone Health 120 pack',
      originalPrice: 24.5, salePrice: 12.25, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205356.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1409', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own Magnesium+ Sleep Effervescent With Passionflower 20 pack',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/300878.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1428', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin D3 1000IU Bone Health Immunity Capsules 200 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771858.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1438', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Mega Vitamin B Tablets With B3 B6 B12 + Biotin For Energy 200 pack',
      originalPrice: 25.9, salePrice: 12.95, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/233147.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1445', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Garnier Skin Active Vitamin C Daily UV Brightening Fluid Glow 40mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '40mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/944639.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1452', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Triple Strength Probiotic Capsules 20 pack',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/244827.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1459', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own High Strength Magnesium Muscle Health Tablets 150 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306602.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1460', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Vitamin B12 1000mcg Tablets For Energy 150 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/308733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1462', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium Glycinate Tablets 130 pack',
      originalPrice: 44, salePrice: 22, discount: 50, unit: '130 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027587.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1463', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium Tablets 150 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306793.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1468', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium + Sleep Tablets 60 pack',
      originalPrice: 35, salePrice: 0, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905037.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1469', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Glycinate Tablets 120 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008917.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1470', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s 65+ Multivitamin Tablets 60 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725108.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1471', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s Multivitamin Tablets 100 pack',
      originalPrice: 59.5, salePrice: 29.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306382.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1474', brand: 'woolies', category: 'health',
      nameZh: '保健品', nameEn: 'Blackmores CoQ10 150mg Heart & Blood Lipid Health Capsules 90 pack',
      originalPrice: 60, salePrice: 30, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905817.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！保健品超值',
    },

    {
      id: 'w1476', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Lyp Sine Cold Sore Relief Vitamin Tablets 30 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/008595.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1477', brand: 'woolies', category: 'health',
      nameZh: '鱼油', nameEn: 'Blackmores Omega Mini Double Concentrate Capsules 200 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/894475.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼油超值',
    },

    {
      id: 'w1479', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Pregnancy & Breastfeeding Gold Vitamin Capsules 120 pack',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/258736.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1499', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Little Swisse Multivitamin Gummies 100 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022512.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1513', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Magnesium+ Energy Effervescent With B Vitamins & Caffeine 20 pack',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/301051.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1516', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitamin K2 + D3 30 Tablets each',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6007297.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1528', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin C Chewable Tablets 110 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '110 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/089455.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1529', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Swisse Ultiboost Zinc+ Tablets 120 pack',
      originalPrice: 29.5, salePrice: 0, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1530', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s 50+ Multivitamin Tablets 90 pack',
      originalPrice: 64, salePrice: 32, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/244015.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1531', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Multivitamin Gummies 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/187426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1534', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Vitaceuticals Iron Supplement Ferrous + C Hard Capsules 30 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157513.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1543', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Blackmores Immune Zinc Tablets 120 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029067.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1544', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Blackmores Iron Rapi Melt Tablets 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028515.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1550', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Lutein Defence Eye Care Vitamin Tablets 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771942.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1553', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Blackmores Probiotics+ Daily Health Hard Capsules 55 pack',
      originalPrice: 55, salePrice: 27.5, discount: 50, unit: '55 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904769.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1554', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Probiotics+ Daily Health Vitamin Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/572423.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1556', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Super Magnesium+ Muscle Health Vitamin Tablets 100 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/884137.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1557', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Super Strength CoQ10 300mg Heart Health Vitamin Tablets 30 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/059366.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1558', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Total Calcium Magnesium + D3 Bone Health Vitamin Tablets 125 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206378.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1560', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin E 1000IU Cholesterol Health Capsules 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134174.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1571', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Caltrate Bone & Muscle With Calcium & Vitamin D3 60 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/787245.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1573', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Cenovis Magnesium Tablets Muscle Health Supplement 200 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1575', brand: 'woolies', category: 'health',
      nameZh: '保健品', nameEn: 'Cenovis Turmeric 3100 Capsules With Curcuminoids For Joint Health 80 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/940032.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！保健品超值',
    },

    {
      id: 'w1581', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Garnier Vitamin C Brightening Liquid Care 120mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '120mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031393.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1605', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own Magnesium Chelate 500mg Muscle Health Capsules 300 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '300 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/244292.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1606', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own Magnesium Glycinate 1150mg Tablets For Muscle Health 120 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029731.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1612', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium + Calcium Muscle & Bones 150 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243672.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1613', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Restore Probiotic 30 Billion Capsules 30 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780065.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1614', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Restore Probiotic Daily Health Hard Capsules 120 pack',
      originalPrice: 66, salePrice: 33, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/899815.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1615', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D3 + K2 Tablets 60 pack',
      originalPrice: 44.5, salePrice: 22.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6000487.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1635', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Calcium + D3 Tablets 120 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/090409.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1636', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Glycinate Tablets 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6010212.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1637', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Tablets 120 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725175.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1640', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin B3 Nicotinamide Tablets 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025920.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1641', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin C Chewable Tablets 310 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '310 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/659391.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1642', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Swisse Ultiboost Zinc+ Tablets For Immune System Support 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725119.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1648', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'VOOST Effervescent Magnesium Tablets 40 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/058869.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1649', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'VOOST Effervescent Multivitamin Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/674972.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1658', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Bio C 1000mg Vitamin C Immune Support Tablets 62 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '62 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006571.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1659', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Blackmores Bio Magnesium Muscle Health Tablets 150 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/571823.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1664', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Blackmores Bio Magnesium Muscle Health Tablets 50 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/049220.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1665', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Bio Zinc Skin Health Immune Support Vitamin Tablets 84 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '84 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006354.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1666', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Blackmores Bio Zinc Tablets 168 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '168 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/172777.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1667', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores CoQ10 150mg Heart Health Vitamin Capsules 30 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725625.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1668', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Conceive Well Gold Preconception Vitamin 56 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '56 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/294622.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1676', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Echinacea ACE + Zinc Vitamin C Immune Support Tablets 60 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085715.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1681', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Glucosamine Sulfate 1500mg Joint Health Vitamin Tablets 150 pack',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/188008.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1682', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Blackmores Immune Zinc Tablets 60 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029185.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1683', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Macu Vision Eye Care Vitamin Tablets 125 pack',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/572399.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1684', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Mega B Complex Energy Support Vitamin B12 Tablets 75 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '75 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006370.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1686', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Multivitamin + Antioxidants Sustained Release Tablets 125 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '125 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206033.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1691', brand: 'woolies', category: 'health',
      nameZh: '鱼油', nameEn: 'Blackmores Omega Mini Double Concentrate Capsules 400 pack',
      originalPrice: 80, salePrice: 40, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905768.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼油超值',
    },

    {
      id: 'w1692', brand: 'woolies', category: 'health',
      nameZh: '鱼油', nameEn: 'Blackmores Omega Mini Double Concentrate Soft Capsules 100 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058448.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼油超值',
    },

    {
      id: 'w1694', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Pregnancy & Breastfeeding Gold Vitamin Capsules 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/092206.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1695', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Blackmores Probiotics+ Immune Defence Capsules 55 pack',
      originalPrice: 55, salePrice: 27.5, discount: 50, unit: '55 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904884.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1697', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin B12 150 Tablets each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006847.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1698', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin B12 Energy Support Tablets 75 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '75 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1699', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Blackmores Vitamin D3 1000IU Tablets 130 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '130 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1709', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Caltrate Bone & Muscle With Calcium & Vitamin D3 100 pack',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/787247.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1711', brand: 'woolies', category: 'health',
      nameZh: '保健品', nameEn: 'Caltrate Joint Health With UC-II® Collagen Tablets 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/901675.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！保健品超值',
    },

    {
      id: 'w1712', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis 50+ Multivitamin Capsules Multi Vitamin For Energy 100 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532342.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1713', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Cenovis Iron Plus Tablets For Women\'s Health 80 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460962.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1714', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Mega Vitamin C 1000mg Chewable Tablets For Immune Support 100 pack',
      originalPrice: 21.5, salePrice: 10.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085594.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1715', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Mega Vitamin C 1000mg Chewable Tablets For Immune Support 150 pack',
      originalPrice: 24.5, salePrice: 12.25, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/398188.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1716', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Men\'s Multi Vitamin Capsules For Energy 100 pack',
      originalPrice: 29.5, salePrice: 0, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/301068.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1717', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Men\'s Multi Vitamin Capsules For Energy 50 pack',
      originalPrice: 18.5, salePrice: 9.25, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/304172.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1718', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Men\'s Multivitamin Capsules + PerFormance Multi Vitamin 100 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085592.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1719', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Sugarless Vitamin C Chewable 500mg Tablets Immune Support 160 pack',
      originalPrice: 18.5, salePrice: 9.25, discount: 50, unit: '160 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085593.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1720', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Sugarless Vitamin C Chewable Tablets For Immune Support 320 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '320 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029149.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1721', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Vitamin D 1000IU Tablets D3 For Bone Health 200 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/375733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1722', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Women\'s Multivitamin Capsules Multi Vitamin For Energy 100 pack',
      originalPrice: 29.5, salePrice: 0, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/061135.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1723', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Cenovis Women\'s Multivitamin Capsules Multi Vitamin For Energy 50 pack',
      originalPrice: 18.5, salePrice: 9.25, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532118.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1724', brand: 'woolies', category: 'health',
      nameZh: '锌片', nameEn: 'Cenovis Zinc Plus Tablets For General Wellbeing + Skin Health 150 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/460958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！锌片超值',
    },

    {
      id: 'w1748', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Iron Melts Chewable Tablet 50 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1755', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Double Strength Probiotic Capsules 20 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/140967.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1756', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Urogen Probiotic For Women Capsules 40 pack',
      originalPrice: 44, salePrice: 22, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/139040.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1757', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Life-Space Women\'s Microflora Probiotic Hard Capsules 40 pack',
      originalPrice: 44, salePrice: 22, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309696.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1758', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Little Swisse Iron + Vitamin C Gummies For Kids 40 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022646.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1791', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Own Magnesium Glycinate 1150mg Tablets For Muscle Health 200 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029044.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1793', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Super Vitamin B Complex Tablets 150 pack',
      originalPrice: 44.5, salePrice: 22.25, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243789.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1798', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Own Vitamin D 1000IU D3 Capsules For Bone Health + Immunity 400 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '400 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243816.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1804', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Adult Vita Gummies Magnesium 120 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029857.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1806', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Adult Vita Gummies Multivitamin 180 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027804.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1808', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Adult Vita Gummies Vitamin C 180 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028075.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1809', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Adult Vita Gummies Women\'s Multivitamin 100 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/826885.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1814', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Calcium + Vitamin D3 Tablets 150 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028062.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1818', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way High Strength Calcium + Vitamin D Adult Gummies 60 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/236522.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1819', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way High Strength Iron + Vitamin C & B12 Tablets 30 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/149296.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1820', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way High Strength Multivitamins & Minerals Adult Gummies 65 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '65 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/235596.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1822', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way High Strength Vitamin C + Vitamin D Adult Vita Gummies 65 pack',
      originalPrice: 28, salePrice: 0, discount: 50, unit: '65 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/235141.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1824', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Nature\'s Way Iron Daily Tablets 120 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/899867.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1829', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Iron + Vitamin C 60 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/151133.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1830', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Iron + Vitamin C Pastilles 120 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059940.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1832', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Multi Vitamin Pastilles 120 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903811.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1833', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Multi-Vitamin Plus 60 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/360600.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1834', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Multivit + Iron Pastilles 40 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/303953.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1835', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Multivitamin Plus 170 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '170 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028061.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1836', brand: 'woolies', category: 'health',
      nameZh: '鱼油', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Omega 120 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/057344.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！鱼油超值',
    },

    {
      id: 'w1837', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Vitamin C + Zinc 170 pack',
      originalPrice: 42, salePrice: 0, discount: 50, unit: '170 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028178.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1838', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Vitamin C + Zinc 60 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/360599.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1839', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Vitamin C Plus Zinc 120 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/057343.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1840', brand: 'woolies', category: 'health',
      nameZh: '钙片', nameEn: 'Nature\'s Way Kids Smart Vita-Gummies Calcium 60 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705869.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！钙片超值',
    },

    {
      id: 'w1841', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Kids Smart Vita-Gummies Multivitamin 120 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705837.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1844', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium & Turmeric Tablets 150 pack',
      originalPrice: 44, salePrice: 22, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/155581.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1846', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium Gummies With L Theanine 60 pack',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028044.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1847', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium Vita Gummies 80 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/642325.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1848', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Nature\'s Way Magnesium+ Sleep Well Tablets 60 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027816.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1850', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Restore Probiotic 30 Billion Capsules 60 pack',
      originalPrice: 52, salePrice: 26, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1851', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Restore Probiotic Daily Health & Prebiotic 90 pack',
      originalPrice: 53, salePrice: 26.5, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780054.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1852', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Nature\'s Way Restore Probiotics Women\'s Flora Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059228.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1854', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitagummies For Adults Multi-Vitamin 120 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/711547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1855', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitagummies For Adults Vitamin C 120 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/711536.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1856', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitagummies Mens Multivitamin 100 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/826884.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1857', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitamin B Energy Boost Tablets 200 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/192538.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1858', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitamin C & Zinc & Echinacea Immune support 100 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815335.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1859', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitamin C 500mg Chewable Tablets 320 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '320 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/901831.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1860', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Vitamin D3 1000IU Soft Capsules 300 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243355.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1863', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Nature\'s Way Women\'s 50+ Multivitamin Adult Vita Gummies 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/899838.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1872', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D Tablets With D3 For Bones + Immunity 130 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '130 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705839.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1873', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D3 + Magnesium Tablets 100 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903690.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1878', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D3 Chewable Citrus Flavour Tablets 120 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6010728.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1879', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Calcium & Vitamin D3 Tablets 250 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/963676.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1880', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Ostelin Iron & B+ Energy Tablets For Women\'s Health 30 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029316.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1881', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Vitamin D 1000IU D3 Capsules For Bone Health + Immunity 60 pack',
      originalPrice: 14.5, salePrice: 7.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705239.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1882', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Vitamin D 1000iu D3 Capsules For Bone Health + Immunity 130 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '130 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705838.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1883', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Vitamin D3 & K2 High Strength 60 pack',
      originalPrice: 34.5, salePrice: 17.25, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058472.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1884', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Ostelin Vitamin D3 1000IU Capsules 250 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '250 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/963680.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1899', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Swisse Ultibiotic Daily Digestive Probiotic Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/805945.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1901', brand: 'woolies', category: 'health',
      nameZh: '钙片', nameEn: 'Swisse Ultiboost Calcium + D3 + K2 Tablets 60 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025930.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！钙片超值',
    },

    {
      id: 'w1902', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Calcium + Vitamin D Tablets 150 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751249.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1903', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Calcium + Vitamin D Tablets 90 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/711578.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1907', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost High Strength Vitamin B12 Tablets 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/679055.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1912', brand: 'woolies', category: 'health',
      nameZh: '益生菌', nameEn: 'Swisse Ultiboost Iron + Probiotic Capsules 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153232.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！益生菌超值',
    },

    {
      id: 'w1913', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Swisse Ultiboost Iron Gummies Helps Relieve Fatigue 50 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243975.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1914', brand: 'woolies', category: 'health',
      nameZh: '铁片', nameEn: 'Swisse Ultiboost Iron Tablets Helps Relieve Fatigue 30 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345778.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！铁片超值',
    },

    {
      id: 'w1915', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium + Sleep Powder 180g',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/125653.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1916', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Calcium + D3 Tablets 180 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1917', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Glycinate & Ashwagandha Tablets 60 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058331.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1922', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Glycinate Powder 140g',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '140g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6044036.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1923', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Swisse Ultiboost Magnesium Glycinate Relax L-Theanine Tablets 60 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062869.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1924', brand: 'woolies', category: 'health',
      nameZh: '保健品', nameEn: 'Swisse Ultiboost Menopause Balance Women\'s Health Tablets 60 pack',
      originalPrice: 46, salePrice: 23, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780349.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！保健品超值',
    },

    {
      id: 'w1929', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin D Gummies 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205538.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1930', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultiboost Vitamin K2 Capsules 30 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/391743.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1931', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s 50+ Multivitamin Tablets 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/307049.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1932', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s High Potency Multivitamin Tablets 40 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780348.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1933', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s Multivitamin Tablets 30 pack',
      originalPrice: 25, salePrice: 0, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/805287.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1934', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Men\'s Multivitamin Tablets 60 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/307062.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1935', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Multivitamin Gummies 120 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025910.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1936', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Women\'s 50+ Multivitamin Tablets 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/307048.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1937', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Women\'s 65+ Multivitamin Tablets 60 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725204.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1938', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'Swisse Ultivite Women\'s Multivitamin Tablets 60 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/307061.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1948', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'VOOST Effervescent Magnesium Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/674983.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1950', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'VOOST Effervescent Multivitamin 40 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815573.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1951', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'VOOST Effervescent Vitamin C 40 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/815572.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1952', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'VOOST Effervescent Vitamin C Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/674971.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },

    {
      id: 'w1957', brand: 'woolies', category: 'health',
      nameZh: '保健品', nameEn: 'Vitaceuticals Magzorb K2 + D3 Bone Health Capsules 60 pack',
      originalPrice: 39, salePrice: 19.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！保健品超值',
    },

    {
      id: 'w1958', brand: 'woolies', category: 'health',
      nameZh: '镁片', nameEn: 'Vitaceuticals Magzorb Magnesium Glycinate 1000mg Powder 240g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '240g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/305607.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！镁片超值',
    },

    {
      id: 'w1962', brand: 'woolies', category: 'health',
      nameZh: '维生素', nameEn: 'frank simple. Matcha Latte With Collagen & Vitamin C 28 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059564.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！维生素超值',
    },


    // --- 婴儿用品 (4个) ---
    {
      id: 'w1498', brand: 'woolies', category: 'baby',
      nameZh: '婴儿用品', nameEn: 'Life-Space Probiotic Powder For Baby 40g',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '40g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/140511.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！婴儿用品超值',
    },

    {
      id: 'w1545', brand: 'woolies', category: 'baby',
      nameZh: '奶粉', nameEn: 'Blackmores Joint Formula Tablets 120 pack',
      originalPrice: 80, salePrice: 40, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/271249.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！奶粉超值',
    },

    {
      id: 'w1677', brand: 'woolies', category: 'baby',
      nameZh: '奶粉', nameEn: 'Blackmores Executive B Stress Formula 62 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '62 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/006444.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！奶粉超值',
    },

    {
      id: 'w1765', brand: 'woolies', category: 'baby',
      nameZh: '奶粉', nameEn: 'MagZorb Magnesium Sleep Formula 60 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/305115.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！奶粉超值',
    },


    // --- 宠物用品 (9个) ---
    {
      id: 'w0106', brand: 'woolies', category: 'pet',
      nameZh: '猫粮', nameEn: 'Whiskas Adult 1 + Years Wet Cat Food Mixed Favourites In Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/784320.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猫粮超值',
    },

    {
      id: 'w0192', brand: 'woolies', category: 'pet',
      nameZh: '猫粮', nameEn: 'Whiskas Senior 7+ Years Wet Cat Food Mixed Favourites In Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/088204.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猫粮超值',
    },

    {
      id: 'w0234', brand: 'woolies', category: 'pet',
      nameZh: '猫粮', nameEn: 'Whiskas 1+ Years Mixed Favourites In Gravy Wet Cat Food 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/786433.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猫粮超值',
    },

    {
      id: 'w0236', brand: 'woolies', category: 'pet',
      nameZh: '狗粮', nameEn: 'Bow Wow Pig Ears Dog Treats 5 pack',
      originalPrice: 16.8, salePrice: 8.4, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/323774.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0274', brand: 'woolies', category: 'pet',
      nameZh: '猫粮', nameEn: 'Whiskas Kitten 2-12 Months Wet Cat Food Mixed Favourites In Jelly 85g x 12 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '85g x 12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/087727.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！猫粮超值',
    },

    {
      id: 'w0543', brand: 'woolies', category: 'pet',
      nameZh: '狗粮', nameEn: 'True Blue Aussie Kangaroo Fillets Dog Treats 5 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6008555.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0593', brand: 'woolies', category: 'pet',
      nameZh: '狗粮', nameEn: 'Open Paddock Calming Dog Treats 200g',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034871.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0827', brand: 'woolies', category: 'pet',
      nameZh: '狗粮', nameEn: 'Open Paddock Mobility Dog Treats 200g',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034343.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },

    {
      id: 'w0952', brand: 'woolies', category: 'pet',
      nameZh: '狗粮', nameEn: 'True Blue Aussie Kangaroo Cubes Dog Treats 60g',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6057770.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！狗粮超值',
    },


    // --- 其他 (542个) ---
    {
      id: 'w0007', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Snakes Lollies 230g', nameEn: 'The Natural Confectionery Co. Snakes Lollies 230g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '230g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/211973.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Snakes Lollies 230g超值',
    },

    {
      id: 'w0024', brand: 'woolies', category: 'other',
      nameZh: 'Pascall Marshmallows Pink & White 280g', nameEn: 'Pascall Marshmallows Pink & White 280g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '280g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828996.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pascall Marshmallows Pink & White 280g超值',
    },

    {
      id: 'w0025', brand: 'woolies', category: 'other',
      nameZh: 'Monster Energy Ultra Cans 500mL x 4 pack', nameEn: 'Monster Energy Ultra Cans 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/511504.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Monster Energy Ultra Cans 500mL x 4 pack超值',
    },

    {
      id: 'w0036', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Party Mix Lollies 220g', nameEn: 'The Natural Confectionery Co. Party Mix Lollies 220g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/211982.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Party Mix Lollies 220g超值',
    },

    {
      id: 'w0054', brand: 'woolies', category: 'other',
      nameZh: 'Kinder Bueno White 39g', nameEn: 'Kinder Bueno White 39g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '39g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532344.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Kinder Bueno White 39g超值',
    },

    {
      id: 'w0058', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0071', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Fruity Chews Lollies 180g', nameEn: 'The Natural Confectionery Co. Fruity Chews Lollies 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/250746.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Fruity Chews Lollies 180g超值',
    },

    {
      id: 'w0082', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Sour Squirms Lollies 220g', nameEn: 'The Natural Confectionery Co. Sour Squirms Lollies 220g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/210630.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Sour Squirms Lollies 220g超值',
    },

    {
      id: 'w0088', brand: 'woolies', category: 'other',
      nameZh: 'Allen\'s Big Red Frogs Lollies 64g', nameEn: 'Allen\'s Big Red Frogs Lollies 64g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '64g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/816113.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Allen\'s Big Red Frogs Lollies 64g超值',
    },

    {
      id: 'w0089', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0093', brand: 'woolies', category: 'other',
      nameZh: 'KitKat Chunky Bar 48g', nameEn: 'KitKat Chunky Bar 48g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '48g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/018862.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！KitKat Chunky Bar 48g超值',
    },

    {
      id: 'w0097', brand: 'woolies', category: 'other',
      nameZh: 'Multix Kitchen Tidy Bags Large Colour Scents Rose 60 pack', nameEn: 'Multix Kitchen Tidy Bags Large Colour Scents Rose 60 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/360701.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Multix Kitchen Tidy Bags Large Colour Scents Rose 60 pack超值',
    },

    {
      id: 'w0121', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Rainbow Snakes Lollies 220g', nameEn: 'The Natural Confectionery Co. Rainbow Snakes Lollies 220g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166974.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Rainbow Snakes Lollies 220g超值',
    },

    {
      id: 'w0125', brand: 'woolies', category: 'other',
      nameZh: 'Sour Patch Kids Lollies 190g', nameEn: 'Sour Patch Kids Lollies 190g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/234699.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sour Patch Kids Lollies 190g超值',
    },

    {
      id: 'w0146', brand: 'woolies', category: 'other',
      nameZh: 'Monster Energy Green Cans 500mL x 4 pack', nameEn: 'Monster Energy Green Cans 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/361734.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Monster Energy Green Cans 500mL x 4 pack超值',
    },

    {
      id: 'w0183', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0184', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Smoothie Chews Lollies 180g', nameEn: 'The Natural Confectionery Co. Smoothie Chews Lollies 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/233004.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Smoothie Chews Lollies 180g超值',
    },

    {
      id: 'w0206', brand: 'woolies', category: 'other',
      nameZh: 'Monster Energy Zero Sugar Cans 500mL x 4 pack', nameEn: 'Monster Energy Zero Sugar Cans 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/690722.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Monster Energy Zero Sugar Cans 500mL x 4 pack超值',
    },

    {
      id: 'w0214', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0218', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Dinosaurs Lollies 220g', nameEn: 'The Natural Confectionery Co. Dinosaurs Lollies 220g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '220g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/232517.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Dinosaurs Lollies 220g超值',
    },

    {
      id: 'w0225', brand: 'woolies', category: 'other',
      nameZh: 'Monster Energy Ultra Violet Cans 500mL x 4 pack', nameEn: 'Monster Energy Ultra Violet Cans 500mL x 4 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '500mL x 4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059390.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Monster Energy Ultra Violet Cans 500mL x 4 pack超值',
    },

    {
      id: 'w0227', brand: 'woolies', category: 'other',
      nameZh: 'Pascall Jubes Lollies 300g', nameEn: 'Pascall Jubes Lollies 300g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/232981.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pascall Jubes Lollies 300g超值',
    },

    {
      id: 'w0233', brand: 'woolies', category: 'other',
      nameZh: 'KitKat Chunky Gooey Caramel 48g', nameEn: 'KitKat Chunky Gooey Caramel 48g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '48g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/385175.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！KitKat Chunky Gooey Caramel 48g超值',
    },

    {
      id: 'w0270', brand: 'woolies', category: 'other',
      nameZh: 'Uncle Tobys Plus Antioxidant 675g', nameEn: 'Uncle Tobys Plus Antioxidant 675g',
      originalPrice: 9.5, salePrice: 4.75, discount: 50, unit: '675g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387462.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Uncle Tobys Plus Antioxidant 675g超值',
    },

    {
      id: 'w0292', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Gummy Bears Lollies 180g', nameEn: 'The Natural Confectionery Co. Gummy Bears Lollies 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031443.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Gummy Bears Lollies 180g超值',
    },

    {
      id: 'w0301', brand: 'woolies', category: 'other',
      nameZh: 'TRESemme Hairspray Extra Hold 360g', nameEn: 'TRESemme Hairspray Extra Hold 360g',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '360g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/227552.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！TRESemme Hairspray Extra Hold 360g超值',
    },

    {
      id: 'w0308', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0322', brand: 'woolies', category: 'other',
      nameZh: 'Sour Patch Kids Layers Lollies 190g', nameEn: 'Sour Patch Kids Layers Lollies 190g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '190g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/068550.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sour Patch Kids Layers Lollies 190g超值',
    },

    {
      id: 'w0331', brand: 'woolies', category: 'other',
      nameZh: 'Skittles Minis Tube 30g', nameEn: 'Skittles Minis Tube 30g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '30g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/917816.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skittles Minis Tube 30g超值',
    },

    {
      id: 'w0339', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0350', brand: 'woolies', category: 'other',
      nameZh: 'Dynamo Professional Laundry Liquid Odour Eliminator 4L', nameEn: 'Dynamo Professional Laundry Liquid Odour Eliminator 4L',
      originalPrice: 41, salePrice: 20.5, discount: 50, unit: '4L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/385684.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dynamo Professional Laundry Liquid Odour Eliminator 4L超值',
    },

    {
      id: 'w0353', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Soft Moisturiser For Face & Body Mini Tub 50mL', nameEn: 'Nivea Soft Moisturiser For Face & Body Mini Tub 50mL',
      originalPrice: 4.5, salePrice: 2.25, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/787572.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Soft Moisturiser For Face & Body Mini Tub 50mL超值',
    },

    {
      id: 'w0357', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Mega Snakes 170g', nameEn: 'The Natural Confectionery Co. Mega Snakes 170g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '170g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6073819.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Mega Snakes 170g超值',
    },

    {
      id: 'w0374', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Hydrocare Lip Balm SPF 15 4.8g', nameEn: 'Nivea Hydrocare Lip Balm SPF 15 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/273110.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Hydrocare Lip Balm SPF 15 4.8g超值',
    },

    {
      id: 'w0376', brand: 'woolies', category: 'other',
      nameZh: 'Vanish Gold Pro Turbo Stain Remover Powder 2kg', nameEn: 'Vanish Gold Pro Turbo Stain Remover Powder 2kg',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/618646.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vanish Gold Pro Turbo Stain Remover Powder 2kg超值',
    },

    {
      id: 'w0398', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. 50% Less Sugar Lollies Snakes 130g', nameEn: 'The Natural Confectionery Co. 50% Less Sugar Lollies Snakes 130g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/908449.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. 50% Less Sugar Lollies Snakes 130g超值',
    },

    {
      id: 'w0405', brand: 'woolies', category: 'other',
      nameZh: 'Bosisto\'s Sensitive Laundry Capsules 20 pack', nameEn: 'Bosisto\'s Sensitive Laundry Capsules 20 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907303.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bosisto\'s Sensitive Laundry Capsules 20 pack超值',
    },

    {
      id: 'w0410', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Mini Bites Food Container 130mL x 3 pack', nameEn: 'Sistema To Go Mini Bites Food Container 130mL x 3 pack',
      originalPrice: 7.75, salePrice: 3.87, discount: 50, unit: '130mL x 3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/850092.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Mini Bites Food Container 130mL x 3 pack超值',
    },

    {
      id: 'w0417', brand: 'woolies', category: 'other',
      nameZh: 'Vileda SuperMocio 3 Action Mop Refill each', nameEn: 'Vileda SuperMocio 3 Action Mop Refill each',
      originalPrice: 13.9, salePrice: 6.95, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/161749.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda SuperMocio 3 Action Mop Refill each超值',
    },

    {
      id: 'w0434', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0442', brand: 'woolies', category: 'other',
      nameZh: 'The Natural Confectionery Co. Sour Gummy Bears 180g', nameEn: 'The Natural Confectionery Co. Sour Gummy Bears 180g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '180g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6063004.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Natural Confectionery Co. Sour Gummy Bears 180g超值',
    },

    {
      id: 'w0443', brand: 'woolies', category: 'other',
      nameZh: 'Pine O Cleen Powerful Bathroom Foamer 500mL', nameEn: 'Pine O Cleen Powerful Bathroom Foamer 500mL',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030637.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pine O Cleen Powerful Bathroom Foamer 500mL超值',
    },

    {
      id: 'w0450', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Sandwich Food Container Assorted 450mL each', nameEn: 'Sistema To Go Sandwich Food Container Assorted 450mL each',
      originalPrice: 6.65, salePrice: 3.32, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/711918.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Sandwich Food Container Assorted 450mL each超值',
    },

    {
      id: 'w0460', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Repair & Protect Lip Balm SPF 15 4.8g', nameEn: 'Nivea Repair & Protect Lip Balm SPF 15 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/188405.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Repair & Protect Lip Balm SPF 15 4.8g超值',
    },

    {
      id: 'w0462', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche 99% Sugar Free Cappucinno 10 pack', nameEn: 'Avalanche 99% Sugar Free Cappucinno 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/700134.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche 99% Sugar Free Cappucinno 10 pack超值',
    },

    {
      id: 'w0464', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0467', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche 99% Sugar Free Caramel Latte 10 pack', nameEn: 'Avalanche 99% Sugar Free Caramel Latte 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/700136.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche 99% Sugar Free Caramel Latte 10 pack超值',
    },

    {
      id: 'w0468', brand: 'woolies', category: 'other',
      nameZh: 'Dynamo Professional Laundry Liquid 7 In 1 Action 4L', nameEn: 'Dynamo Professional Laundry Liquid 7 In 1 Action 4L',
      originalPrice: 41, salePrice: 20.5, discount: 50, unit: '4L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/385232.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dynamo Professional Laundry Liquid 7 In 1 Action 4L超值',
    },

    {
      id: 'w0474', brand: 'woolies', category: 'other',
      nameZh: 'Sard Super Power Stain Remover Powder Soaker 1.8kg', nameEn: 'Sard Super Power Stain Remover Powder Soaker 1.8kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '1.8kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/540343.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sard Super Power Stain Remover Powder Soaker 1.8kg超值',
    },

    {
      id: 'w0478', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack Plus Eliminator 2L', nameEn: 'Biozet Attack Attack Plus Eliminator 2L',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/803466.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack Plus Eliminator 2L超值',
    },

    {
      id: 'w0483', brand: 'woolies', category: 'other',
      nameZh: 'Ka Pod 4 In 1 Antibacterial Laundry Capsules 45 pack', nameEn: 'Ka Pod 4 In 1 Antibacterial Laundry Capsules 45 pack',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/177240.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Ka Pod 4 In 1 Antibacterial Laundry Capsules 45 pack超值',
    },

    {
      id: 'w0496', brand: 'woolies', category: 'other',
      nameZh: 'Allen\'s Sour Mix Lollies 60g', nameEn: 'Allen\'s Sour Mix Lollies 60g',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '60g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6072868.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Allen\'s Sour Mix Lollies 60g超值',
    },

    {
      id: 'w0500', brand: 'woolies', category: 'other',
      nameZh: 'Always Fresh Pickled Turnips Lebanese Style 210g', nameEn: 'Always Fresh Pickled Turnips Lebanese Style 210g',
      originalPrice: 4, salePrice: 2, discount: 50, unit: '210g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028343.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Always Fresh Pickled Turnips Lebanese Style 210g超值',
    },

    {
      id: 'w0508', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Hyaluronic Acid & Collagen Face Mask each', nameEn: 'Skin Republic Hyaluronic Acid & Collagen Face Mask each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/688926.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Hyaluronic Acid & Collagen Face Mask each超值',
    },

    {
      id: 'w0519', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Breakfast Food Container 530mL each', nameEn: 'Sistema To Go Breakfast Food Container 530mL each',
      originalPrice: 6.65, salePrice: 3.32, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/360161.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Breakfast Food Container 530mL each超值',
    },

    {
      id: 'w0521', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack Plus Eliminator 2kg', nameEn: 'Biozet Attack Attack Plus Eliminator 2kg',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/802923.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack Plus Eliminator 2kg超值',
    },

    {
      id: 'w0529', brand: 'woolies', category: 'other',
      nameZh: 'Jols Sugar Free Pastilles Forest Berries 23g', nameEn: 'Jols Sugar Free Pastilles Forest Berries 23g',
      originalPrice: 2.5, salePrice: 1.25, discount: 50, unit: '23g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194854.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jols Sugar Free Pastilles Forest Berries 23g超值',
    },

    {
      id: 'w0532', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Collagen Infusion Face Mask each', nameEn: 'Skin Republic Collagen Infusion Face Mask each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/404165.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Collagen Infusion Face Mask each超值',
    },

    {
      id: 'w0537', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Lip Care & Protection SPF 50+ 4.8g', nameEn: 'Nivea Lip Care & Protection SPF 50+ 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/938949.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Lip Care & Protection SPF 50+ 4.8g超值',
    },

    {
      id: 'w0540', brand: 'woolies', category: 'other',
      nameZh: 'Dettol Concentrated Sanitiser 1.5L', nameEn: 'Dettol Concentrated Sanitiser 1.5L',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '1.5L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/133145.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dettol Concentrated Sanitiser 1.5L超值',
    },

    {
      id: 'w0559', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0562', brand: 'woolies', category: 'other',
      nameZh: 'Nescafe 98% Sugar Free Vanilla Latte Sachets 10 pack', nameEn: 'Nescafe 98% Sugar Free Vanilla Latte Sachets 10 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058143.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nescafe 98% Sugar Free Vanilla Latte Sachets 10 pack超值',
    },

    {
      id: 'w0564', brand: 'woolies', category: 'other',
      nameZh: 'Vileda Supermocio 3 Action Mop With Telescopic Handle each', nameEn: 'Vileda Supermocio 3 Action Mop With Telescopic Handle each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/212293.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda Supermocio 3 Action Mop With Telescopic Handle each超值',
    },

    {
      id: 'w0565', brand: 'woolies', category: 'other',
      nameZh: 'OMO Ultimate Laundry Capsules 3 in 1 28 pack', nameEn: 'OMO Ultimate Laundry Capsules 3 in 1 28 pack',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/209102.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！OMO Ultimate Laundry Capsules 3 in 1 28 pack超值',
    },

    {
      id: 'w0571', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Portion Pod Food Container Assorted 210mL x 2 pack', nameEn: 'Sistema To Go Portion Pod Food Container Assorted 210mL x 2 pack',
      originalPrice: 8.85, salePrice: 4.42, discount: 50, unit: '210mL x 2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/687066.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Portion Pod Food Container Assorted 210mL x 2 pack超值',
    },

    {
      id: 'w0577', brand: 'woolies', category: 'other',
      nameZh: 'Norsca Anti-Perspirant Forest Fresh 130g', nameEn: 'Norsca Anti-Perspirant Forest Fresh 130g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/default.png',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Norsca Anti-Perspirant Forest Fresh 130g超值',
    },

    {
      id: 'w0578', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche 99% Sugar Free Latte 10 pack', nameEn: 'Avalanche 99% Sugar Free Latte 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/223005.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche 99% Sugar Free Latte 10 pack超值',
    },

    {
      id: 'w0579', brand: 'woolies', category: 'other',
      nameZh: 'Decor Vent & Seal Glass Container Round 750mL each', nameEn: 'Decor Vent & Seal Glass Container Round 750mL each',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/105956.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Decor Vent & Seal Glass Container Round 750mL each超值',
    },

    {
      id: 'w0581', brand: 'woolies', category: 'other',
      nameZh: 'Comfort Laundry Fragrance Booster Beads Paris 200g', nameEn: 'Comfort Laundry Fragrance Booster Beads Paris 200g',
      originalPrice: 14, salePrice: 0, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6018689.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Comfort Laundry Fragrance Booster Beads Paris 200g超值',
    },

    {
      id: 'w0584', brand: 'woolies', category: 'other',
      nameZh: 'Vileda Glitzi Non Scratch Foam Sponge Scourer 2 pack', nameEn: 'Vileda Glitzi Non Scratch Foam Sponge Scourer 2 pack',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/363793.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda Glitzi Non Scratch Foam Sponge Scourer 2 pack超值',
    },

    {
      id: 'w0590', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0598', brand: 'woolies', category: 'other',
      nameZh: 'Botanica Vanilla & Himalayan Magnolia Reed Diffuser 80mL', nameEn: 'Botanica Vanilla & Himalayan Magnolia Reed Diffuser 80mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '80mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/078659.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Botanica Vanilla & Himalayan Magnolia Reed Diffuser 80mL超值',
    },

    {
      id: 'w0600', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Collagen Hydro Under Eye Patch each', nameEn: 'Skin Republic Collagen Hydro Under Eye Patch each',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/409977.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Collagen Hydro Under Eye Patch each超值',
    },

    {
      id: 'w0612', brand: 'woolies', category: 'other',
      nameZh: 'Sard Whiter & Brighter Stain Remover Powder Soaker 2kg', nameEn: 'Sard Whiter & Brighter Stain Remover Powder Soaker 2kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/612388.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sard Whiter & Brighter Stain Remover Powder Soaker 2kg超值',
    },

    {
      id: 'w0618', brand: 'woolies', category: 'other',
      nameZh: 'Ka Pod 4 In 1 Anti Dust Mites Laundry Capsules 45 pack', nameEn: 'Ka Pod 4 In 1 Anti Dust Mites Laundry Capsules 45 pack',
      originalPrice: 36, salePrice: 18, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/178838.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Ka Pod 4 In 1 Anti Dust Mites Laundry Capsules 45 pack超值',
    },

    {
      id: 'w0621', brand: 'woolies', category: 'other',
      nameZh: 'Compostic Compostable Sandwich Bags 20 pack', nameEn: 'Compostic Compostable Sandwich Bags 20 pack',
      originalPrice: 4.9, salePrice: 2.45, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6027900.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Compostic Compostable Sandwich Bags 20 pack超值',
    },

    {
      id: 'w0624', brand: 'woolies', category: 'other',
      nameZh: 'Vanish Gold Pro Turbo Stain Remover Powder 1kg', nameEn: 'Vanish Gold Pro Turbo Stain Remover Powder 1kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/502077.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vanish Gold Pro Turbo Stain Remover Powder 1kg超值',
    },

    {
      id: 'w0627', brand: 'woolies', category: 'other',
      nameZh: 'The Better Baking Co. Mini Cakes Vanilla 10 pack', nameEn: 'The Better Baking Co. Mini Cakes Vanilla 10 pack',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028060.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Better Baking Co. Mini Cakes Vanilla 10 pack超值',
    },

    {
      id: 'w0632', brand: 'woolies', category: 'other',
      nameZh: 'Vanish Gold Pro Turbo White Stain Remover Powder 2kg', nameEn: 'Vanish Gold Pro Turbo White Stain Remover Powder 2kg',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/618645.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vanish Gold Pro Turbo White Stain Remover Powder 2kg超值',
    },

    {
      id: 'w0633', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack Laundry Powder With Softener 2kg', nameEn: 'Biozet Attack Attack Laundry Powder With Softener 2kg',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/595410.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack Laundry Powder With Softener 2kg超值',
    },

    {
      id: 'w0645', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack Plus Stain Power 2L', nameEn: 'Biozet Attack Attack Plus Stain Power 2L',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/141377.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack Plus Stain Power 2L超值',
    },

    {
      id: 'w0650', brand: 'woolies', category: 'other',
      nameZh: 'Vileda Glitzi Heavy Duty Foam Sponge Scourer 2 pack', nameEn: 'Vileda Glitzi Heavy Duty Foam Sponge Scourer 2 pack',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/363832.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda Glitzi Heavy Duty Foam Sponge Scourer 2 pack超值',
    },

    {
      id: 'w0651', brand: 'woolies', category: 'other',
      nameZh: 'Woolworths Whole Green Olives 450g', nameEn: 'Woolworths Whole Green Olives 450g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '450g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/534878.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Woolworths Whole Green Olives 450g超值',
    },

    {
      id: 'w0652', brand: 'woolies', category: 'other',
      nameZh: 'Comfort Laundry Fragrance Booster Beads Tahiti 200g', nameEn: 'Comfort Laundry Fragrance Booster Beads Tahiti 200g',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '200g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6018668.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Comfort Laundry Fragrance Booster Beads Tahiti 200g超值',
    },

    {
      id: 'w0653', brand: 'woolies', category: 'other',
      nameZh: 'Vileda Recycled 100% Microfibre Cloth 3 pack', nameEn: 'Vileda Recycled 100% Microfibre Cloth 3 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/240449.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda Recycled 100% Microfibre Cloth 3 pack超值',
    },

    {
      id: 'w0661', brand: 'woolies', category: 'other',
      nameZh: 'Air Wick Pure Candle Celebrations Cake Delights 105g', nameEn: 'Air Wick Pure Candle Celebrations Cake Delights 105g',
      originalPrice: 8, salePrice: 0, discount: 50, unit: '105g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/925732.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Air Wick Pure Candle Celebrations Cake Delights 105g超值',
    },

    {
      id: 'w0662', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack+ Sensitive Laundry Liquid 2L', nameEn: 'Biozet Attack Attack+ Sensitive Laundry Liquid 2L',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/270638.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack+ Sensitive Laundry Liquid 2L超值',
    },

    {
      id: 'w0668', brand: 'woolies', category: 'other',
      nameZh: 'Redheads Turbo Gasmatch each', nameEn: 'Redheads Turbo Gasmatch each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/347644.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Redheads Turbo Gasmatch each超值',
    },

    {
      id: 'w0669', brand: 'woolies', category: 'other',
      nameZh: 'Vileda SuperMocio Bucket & Wringer each', nameEn: 'Vileda SuperMocio Bucket & Wringer each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/192695.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vileda SuperMocio Bucket & Wringer each超值',
    },

    {
      id: 'w0674', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Pomegranate Shine Lip Balm 4.8g', nameEn: 'Nivea Pomegranate Shine Lip Balm 4.8g',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '4.8g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/229472.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Pomegranate Shine Lip Balm 4.8g超值',
    },

    {
      id: 'w0676', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Slimming Sheer Tights Black Lge each', nameEn: 'Bonds Comfy Tops Slimming Sheer Tights Black Lge each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828720.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Slimming Sheer Tights Black Lge each超值',
    },

    {
      id: 'w0683', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0692', brand: 'woolies', category: 'other',
      nameZh: 'Biozet Attack Attack Liquid With Softener 2L', nameEn: 'Biozet Attack Attack Liquid With Softener 2L',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/682037.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Biozet Attack Attack Liquid With Softener 2L超值',
    },

    {
      id: 'w0702', brand: 'woolies', category: 'other',
      nameZh: 'Brut Endurance 48Hr Ultra Dry Antiperspirant 130g', nameEn: 'Brut Endurance 48Hr Ultra Dry Antiperspirant 130g',
      originalPrice: 8.5, salePrice: 4.25, discount: 50, unit: '130g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/227361.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Brut Endurance 48Hr Ultra Dry Antiperspirant 130g超值',
    },

    {
      id: 'w0713', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0715', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Maxi Fold Lunch Cooler Bag Assorted 4.5L each', nameEn: 'Sistema To Go Maxi Fold Lunch Cooler Bag Assorted 4.5L each',
      originalPrice: 12.75, salePrice: 6.37, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/310586.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Maxi Fold Lunch Cooler Bag Assorted 4.5L each超值',
    },

    {
      id: 'w0718', brand: 'woolies', category: 'other',
      nameZh: 'L\'Oreal Paris Elnett Hairspray Normal Hold 75mL', nameEn: 'L\'Oreal Paris Elnett Hairspray Normal Hold 75mL',
      originalPrice: 7.5, salePrice: 3.75, discount: 50, unit: '75mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/803843.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！L\'Oreal Paris Elnett Hairspray Normal Hold 75mL超值',
    },

    {
      id: 'w0720', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Low Cut Socks Size 3-8 Assorted 3 pack', nameEn: 'Bonds Ladies Low Cut Socks Size 3-8 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/253620.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Low Cut Socks Size 3-8 Assorted 3 pack超值',
    },

    {
      id: 'w0726', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Low Cut Socks Size 6-10 Assorted 3 pack', nameEn: 'Bonds Mens Low Cut Socks Size 6-10 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/253619.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Low Cut Socks Size 6-10 Assorted 3 pack超值',
    },

    {
      id: 'w0729', brand: 'woolies', category: 'other',
      nameZh: 'Dynamo Professional Laundry Capsules Odour Eliminator 29 pack', nameEn: 'Dynamo Professional Laundry Capsules Odour Eliminator 29 pack',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: '29 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026147.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dynamo Professional Laundry Capsules Odour Eliminator 29 pack超值',
    },

    {
      id: 'w0730', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Hair Spray Glued Blasting Freeze Hairspray 300mL', nameEn: 'Got2B Hair Spray Glued Blasting Freeze Hairspray 300mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/803895.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Hair Spray Glued Blasting Freeze Hairspray 300mL超值',
    },

    {
      id: 'w0731', brand: 'woolies', category: 'other',
      nameZh: 'Vanish Gold Pro Turbo White Stain Remover Powder 1kg', nameEn: 'Vanish Gold Pro Turbo White Stain Remover Powder 1kg',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '1kg',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/503712.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vanish Gold Pro Turbo White Stain Remover Powder 1kg超值',
    },

    {
      id: 'w0733', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Sport 1/4 Socks Size 6-10 Assorted 3 pack', nameEn: 'Bonds Mens Sport 1/4 Socks Size 6-10 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/282533.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Sport 1/4 Socks Size 6-10 Assorted 3 pack超值',
    },

    {
      id: 'w0738', brand: 'woolies', category: 'other',
      nameZh: 'Garnier Skin Active Hydra Bomb Sheet Face Mask Pomegranate each', nameEn: 'Garnier Skin Active Hydra Bomb Sheet Face Mask Pomegranate each',
      originalPrice: 8, salePrice: 4, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/056452.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Garnier Skin Active Hydra Bomb Sheet Face Mask Pomegranate each超值',
    },

    {
      id: 'w0745', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Explorer Socks Mens Black Size 11-14 each', nameEn: 'Bonds Explorer Socks Mens Black Size 11-14 each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/358119.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Explorer Socks Mens Black Size 11-14 each超值',
    },

    {
      id: 'w0746', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Explorer Socks Mens Black Size 6-10 each', nameEn: 'Bonds Explorer Socks Mens Black Size 6-10 each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/056134.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Explorer Socks Mens Black Size 6-10 each超值',
    },

    {
      id: 'w0747', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Sport 1/4 Socks Size 11-14 Assorted 3 pack', nameEn: 'Bonds Mens Sport 1/4 Socks Size 11-14 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/361096.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Sport 1/4 Socks Size 11-14 Assorted 3 pack超值',
    },

    {
      id: 'w0748', brand: 'woolies', category: 'other',
      nameZh: 'Clearasil 5 In 1 Pimple Fighter Exfoliating Scrub 150mL', nameEn: 'Clearasil 5 In 1 Pimple Fighter Exfoliating Scrub 150mL',
      originalPrice: 14.8, salePrice: 7.4, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/436924.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Clearasil 5 In 1 Pimple Fighter Exfoliating Scrub 150mL超值',
    },

    {
      id: 'w0750', brand: 'woolies', category: 'other',
      nameZh: 'Radiant Mixed Colour Laundry Capsules 28 pack', nameEn: 'Radiant Mixed Colour Laundry Capsules 28 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6040119.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Radiant Mixed Colour Laundry Capsules 28 pack超值',
    },

    {
      id: 'w0755', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cushioned 1/4 Crew Socks Size 3-8 Assorted 3 pack', nameEn: 'Bonds Ladies Cushioned 1/4 Crew Socks Size 3-8 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/282756.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cushioned 1/4 Crew Socks Size 3-8 Assorted 3 pack超值',
    },

    {
      id: 'w0760', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Foot Peel each', nameEn: 'Skin Republic Foot Peel each',
      originalPrice: 18, salePrice: 9, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/684628.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Foot Peel each超值',
    },

    {
      id: 'w0767', brand: 'woolies', category: 'other',
      nameZh: 'Quantum Super Alkaline AA Batteries 16 pack', nameEn: 'Quantum Super Alkaline AA Batteries 16 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/223427.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Quantum Super Alkaline AA Batteries 16 pack超值',
    },

    {
      id: 'w0776', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Retinol Under Eye Patch 9.6g', nameEn: 'Skin Republic Retinol Under Eye Patch 9.6g',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '9.6g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/821369.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Retinol Under Eye Patch 9.6g超值',
    },

    {
      id: 'w0777', brand: 'woolies', category: 'other',
      nameZh: 'got2b Curlz Flexible Curl Mousse 200mL', nameEn: 'got2b Curlz Flexible Curl Mousse 200mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062298.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！got2b Curlz Flexible Curl Mousse 200mL超值',
    },

    {
      id: 'w0783', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Bento Create Lunch Box Container Assorted 1.48L each', nameEn: 'Sistema To Go Bento Create Lunch Box Container Assorted 1.48L each',
      originalPrice: 16.3, salePrice: 8.15, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/387000.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Bento Create Lunch Box Container Assorted 1.48L each超值',
    },

    {
      id: 'w0784', brand: 'woolies', category: 'other',
      nameZh: 'Skin Republic Spot Clear Salicylic Acid Patch 48 pack', nameEn: 'Skin Republic Spot Clear Salicylic Acid Patch 48 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '48 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/238369.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Skin Republic Spot Clear Salicylic Acid Patch 48 pack超值',
    },

    {
      id: 'w0785', brand: 'woolies', category: 'other',
      nameZh: 'Botanica Island Rose & African Geranium Reed Diffuser 80mL', nameEn: 'Botanica Island Rose & African Geranium Reed Diffuser 80mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '80mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/079095.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Botanica Island Rose & African Geranium Reed Diffuser 80mL超值',
    },

    {
      id: 'w0788', brand: 'woolies', category: 'other',
      nameZh: 'Fiji Kava Noble Root Powder Instant Mix 50g', nameEn: 'Fiji Kava Noble Root Powder Instant Mix 50g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030376.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Fiji Kava Noble Root Powder Instant Mix 50g超值',
    },

    {
      id: 'w0793', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Knee Hi Pantyhose Natural One Size 2 pack', nameEn: 'Razzamatazz Knee Hi Pantyhose Natural One Size 2 pack',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/032354.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Knee Hi Pantyhose Natural One Size 2 pack超值',
    },

    {
      id: 'w0799', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Very Comfy Crew Socks Size 11-14 Assorted 3 pack', nameEn: 'Bonds Mens Very Comfy Crew Socks Size 11-14 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/361088.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Very Comfy Crew Socks Size 11-14 Assorted 3 pack超值',
    },

    {
      id: 'w0807', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0810', brand: 'woolies', category: 'other',
      nameZh: 'Earthwise Laundry Liquid Floral Fields 2L', nameEn: 'Earthwise Laundry Liquid Floral Fields 2L',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023035.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Earthwise Laundry Liquid Floral Fields 2L超值',
    },

    {
      id: 'w0817', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Sport 1/4 Socks Size 8-11 Assorted 3 pack', nameEn: 'Bonds Ladies Sport 1/4 Socks Size 8-11 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/361121.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Sport 1/4 Socks Size 8-11 Assorted 3 pack超值',
    },

    {
      id: 'w0821', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair & Brow Magic Wand 10mL', nameEn: 'MCoBeauty Hair & Brow Magic Wand 10mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/198497.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair & Brow Magic Wand 10mL超值',
    },

    {
      id: 'w0822', brand: 'woolies', category: 'other',
      nameZh: 'Cenovis Echinacea 5000 Capsules For Immune Support 60 pack', nameEn: 'Cenovis Echinacea 5000 Capsules For Immune Support 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205649.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Cenovis Echinacea 5000 Capsules For Immune Support 60 pack超值',
    },

    {
      id: 'w0823', brand: 'woolies', category: 'other',
      nameZh: 'Dynamo Professional Laundry Capsules Oxi 29 pack', nameEn: 'Dynamo Professional Laundry Capsules Oxi 29 pack',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: '29 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026758.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dynamo Professional Laundry Capsules Oxi 29 pack超值',
    },

    {
      id: 'w0829', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Cool Curls Gel With Aloe Vera For Curly Hair 150mL', nameEn: 'Thanks To Nature Cool Curls Gel With Aloe Vera For Curly Hair 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/554626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Cool Curls Gel With Aloe Vera For Curly Hair 150mL超值',
    },

    {
      id: 'w0830', brand: 'woolies', category: 'other',
      nameZh: 'Bonds No Show Footlets Nude (3-8 & 8-11) each', nameEn: 'Bonds No Show Footlets Nude (3-8 & 8-11) each',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/130581.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds No Show Footlets Nude (3-8 & 8-11) each超值',
    },

    {
      id: 'w0833', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Hair Heat Protection & Frizz Control Spray 200mL', nameEn: 'Got2B Hair Heat Protection & Frizz Control Spray 200mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/683617.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Hair Heat Protection & Frizz Control Spray 200mL超值',
    },

    {
      id: 'w0835', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0838', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Mens Volume Hair Styling Powder Natural Matte Finish 30g', nameEn: 'Jack The Barber Mens Volume Hair Styling Powder Natural Matte Finish 30g',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '30g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/901845.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Mens Volume Hair Styling Powder Natural Matte Finish 30g超值',
    },

    {
      id: 'w0840', brand: 'woolies', category: 'other',
      nameZh: 'Swizzels Slush Pouch Sour Blackcurrant 250mL', nameEn: 'Swizzels Slush Pouch Sour Blackcurrant 250mL',
      originalPrice: 3.5, salePrice: 1.35, discount: 61, unit: '250mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/965179.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swizzels Slush Pouch Sour Blackcurrant 250mL超值',
    },

    {
      id: 'w0842', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche Cappuccino Sachets 10 pack', nameEn: 'Avalanche Cappuccino Sachets 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/529559.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche Cappuccino Sachets 10 pack超值',
    },

    {
      id: 'w0843', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Semi Opaque Knee High Black 1 Size each', nameEn: 'Bonds Comfy Tops Semi Opaque Knee High Black 1 Size each',
      originalPrice: 6, salePrice: 3, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828610.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Semi Opaque Knee High Black 1 Size each超值',
    },

    {
      id: 'w0846', brand: 'woolies', category: 'other',
      nameZh: 'Dynamo Professional Laundry Capsules 7 In 1 Action 29 pack', nameEn: 'Dynamo Professional Laundry Capsules 7 In 1 Action 29 pack',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: '29 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6026178.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dynamo Professional Laundry Capsules 7 In 1 Action 29 pack超值',
    },

    {
      id: 'w0850', brand: 'woolies', category: 'other',
      nameZh: 'Air Wick Pure Spring Delight Plug-In Diffuser 19mL', nameEn: 'Air Wick Pure Spring Delight Plug-In Diffuser 19mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '19mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/816969.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Air Wick Pure Spring Delight Plug-In Diffuser 19mL超值',
    },

    {
      id: 'w0852', brand: 'woolies', category: 'other',
      nameZh: 'Glade Sense & Spray Automatic Air Freshener Limited Edition each', nameEn: 'Glade Sense & Spray Automatic Air Freshener Limited Edition each',
      originalPrice: 17.5, salePrice: 8.75, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/137008.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Glade Sense & Spray Automatic Air Freshener Limited Edition each超值',
    },

    {
      id: 'w0853', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Sea Salt Mens Hair Styling Spray Natural Textured Look 150mL', nameEn: 'Jack The Barber Sea Salt Mens Hair Styling Spray Natural Textured Look 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/902504.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Sea Salt Mens Hair Styling Spray Natural Textured Look 150mL超值',
    },

    {
      id: 'w0855', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Fragrance Mist No.0 Violet Orchid & Sandalwood 90mL', nameEn: 'MCoBeauty Fragrance Mist No.0 Violet Orchid & Sandalwood 90mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '90mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6016608.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Fragrance Mist No.0 Violet Orchid & Sandalwood 90mL超值',
    },

    {
      id: 'w0856', brand: 'woolies', category: 'other',
      nameZh: 'Muscle Tech Creatine Chews Citrus Burst 90 pack', nameEn: 'Muscle Tech Creatine Chews Citrus Burst 90 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6000348.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Muscle Tech Creatine Chews Citrus Burst 90 pack超值',
    },

    {
      id: 'w0859', brand: 'woolies', category: 'other',
      nameZh: 'OMO Active Laundry Capsules 3 in 1 17 pack', nameEn: 'OMO Active Laundry Capsules 3 in 1 17 pack',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '17 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/221587.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！OMO Active Laundry Capsules 3 in 1 17 pack超值',
    },

    {
      id: 'w0861', brand: 'woolies', category: 'other',
      nameZh: 'Quantum Super Alkaline AAA Batteries 16 pack', nameEn: 'Quantum Super Alkaline AAA Batteries 16 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '16 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/223429.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Quantum Super Alkaline AAA Batteries 16 pack超值',
    },

    {
      id: 'w0865', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Fibre Mens Hair Styler Strong Hold Matte Finish 95g', nameEn: 'Jack The Barber Fibre Mens Hair Styler Strong Hold Matte Finish 95g',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/820121.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Fibre Mens Hair Styler Strong Hold Matte Finish 95g超值',
    },

    {
      id: 'w0868', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Max To Go Lunch Cube Container Assorted 2L each', nameEn: 'Sistema Max To Go Lunch Cube Container Assorted 2L each',
      originalPrice: 12.15, salePrice: 6.07, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/777289.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Max To Go Lunch Cube Container Assorted 2L each超值',
    },

    {
      id: 'w0870', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Very Comfy Crew Socks Size 6-10 Assorted 3 pack', nameEn: 'Bonds Mens Very Comfy Crew Socks Size 6-10 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/007394.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Very Comfy Crew Socks Size 6-10 Assorted 3 pack超值',
    },

    {
      id: 'w0871', brand: 'woolies', category: 'other',
      nameZh: 'Glade Sense & Spray Automatic Air Freshener Sheer Vanilla 12g', nameEn: 'Glade Sense & Spray Automatic Air Freshener Sheer Vanilla 12g',
      originalPrice: 17.5, salePrice: 8.75, discount: 50, unit: '12g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660344.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Glade Sense & Spray Automatic Air Freshener Sheer Vanilla 12g超值',
    },

    {
      id: 'w0887', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Knee Hi Pantyhose Tan One Size 2 pack', nameEn: 'Razzamatazz Knee Hi Pantyhose Tan One Size 2 pack',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/032350.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Knee Hi Pantyhose Tan One Size 2 pack超值',
    },

    {
      id: 'w0897', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Clay Mens Hair Styler Brutal Hold Matte Finish 95g', nameEn: 'Jack The Barber Clay Mens Hair Styler Brutal Hold Matte Finish 95g',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/820122.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Clay Mens Hair Styler Brutal Hold Matte Finish 95g超值',
    },

    {
      id: 'w0905', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Low Cut Socks Size 11-14 Assorted 3 pack', nameEn: 'Bonds Mens Low Cut Socks Size 11-14 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/283176.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Low Cut Socks Size 11-14 Assorted 3 pack超值',
    },

    {
      id: 'w0912', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Pantyhose Control Brazen X-Tall 2 pack', nameEn: 'Razzamatazz Pantyhose Control Brazen X-Tall 2 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/339811.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Pantyhose Control Brazen X-Tall 2 pack超值',
    },

    {
      id: 'w0916', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight No Show Socks Size 8-11 Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight No Show Socks Size 8-11 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/511499.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight No Show Socks Size 8-11 Assorted 4 pack超值',
    },

    {
      id: 'w0930', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w0933', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Bikini Size 14 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Bikini Size 14 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108462.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Bikini Size 14 Assorted 2 pack超值',
    },

    {
      id: 'w0935', brand: 'woolies', category: 'other',
      nameZh: 'Elvive Dream Lengths Saviour Mask 300mL', nameEn: 'Elvive Dream Lengths Saviour Mask 300mL',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/082253.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Elvive Dream Lengths Saviour Mask 300mL超值',
    },

    {
      id: 'w0936', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0938', brand: 'woolies', category: 'other',
      nameZh: 'Life Botanics Pure Collagen Peptides Unflavoured 300g', nameEn: 'Life Botanics Pure Collagen Peptides Unflavoured 300g',
      originalPrice: 50, salePrice: 0, discount: 50, unit: '300g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029873.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Life Botanics Pure Collagen Peptides Unflavoured 300g超值',
    },

    {
      id: 'w0939', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Brow Ultra Slim Eyebrow Pencil - Deep Brown each', nameEn: 'Maybelline Brow Ultra Slim Eyebrow Pencil - Deep Brown each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/062298.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Brow Ultra Slim Eyebrow Pencil - Deep Brown each超值',
    },

    {
      id: 'w0940', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Hydrate Active Shaker Bottle 750mL each', nameEn: 'Sistema Hydrate Active Shaker Bottle 750mL each',
      originalPrice: 13.5, salePrice: 6.75, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/207399.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Hydrate Active Shaker Bottle 750mL each超值',
    },

    {
      id: 'w0941', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Hydrate Tritan Active Bottle Assorted 800mL each', nameEn: 'Sistema Hydrate Tritan Active Bottle Assorted 800mL each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/532375.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Hydrate Tritan Active Bottle Assorted 800mL each超值',
    },

    {
      id: 'w0944', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Low Cut Socks Size 8-11 Assorted 3 pack', nameEn: 'Bonds Ladies Low Cut Socks Size 8-11 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/283174.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Low Cut Socks Size 8-11 Assorted 3 pack超值',
    },

    {
      id: 'w0945', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Instant Age Rewind Concealer Light 01 each', nameEn: 'Maybelline Instant Age Rewind Concealer Light 01 each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/716125.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Instant Age Rewind Concealer Light 01 each超值',
    },

    {
      id: 'w0958', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Double Edge Mens Stainless Steel Safety Razor Blades 12 pack', nameEn: 'Jack The Barber Double Edge Mens Stainless Steel Safety Razor Blades 12 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '12 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/090711.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Double Edge Mens Stainless Steel Safety Razor Blades 12 pack超值',
    },

    {
      id: 'w0961', brand: 'woolies', category: 'other',
      nameZh: 'Gillette After Shave Splash Refreshing Breeze 50mL', nameEn: 'Gillette After Shave Splash Refreshing Breeze 50mL',
      originalPrice: 6.9, salePrice: 3.45, discount: 50, unit: '50mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/157318.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette After Shave Splash Refreshing Breeze 50mL超值',
    },

    {
      id: 'w0970', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Bikini Size 10 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Bikini Size 10 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108413.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Bikini Size 10 Assorted 2 pack超值',
    },

    {
      id: 'w0971', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Singlet Mens Chesty White Size 16 each', nameEn: 'Bonds Singlet Mens Chesty White Size 16 each',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/038403.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Singlet Mens Chesty White Size 16 each超值',
    },

    {
      id: 'w0973', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w0974', brand: 'woolies', category: 'other',
      nameZh: 'Hask Curl Care 5 In 1 Leave In Spray 175mL', nameEn: 'Hask Curl Care 5 In 1 Leave In Spray 175mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '175mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/271012.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Hask Curl Care 5 In 1 Leave In Spray 175mL超值',
    },

    {
      id: 'w0981', brand: 'woolies', category: 'other',
      nameZh: 'Ambi Pur Car Air Freshener Premium Clip Aqua 7.5ml', nameEn: 'Ambi Pur Car Air Freshener Premium Clip Aqua 7.5ml',
      originalPrice: 8.8, salePrice: 4.4, discount: 50, unit: '7.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/503678.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Ambi Pur Car Air Freshener Premium Clip Aqua 7.5ml超值',
    },

    {
      id: 'w0983', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Opaque Tights 70D Black L/XL each', nameEn: 'Bonds Comfy Opaque Tights 70D Black L/XL each',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/110293.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Opaque Tights 70D Black L/XL each超值',
    },

    {
      id: 'w0984', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Slimming Sheer Tights Black Med each', nameEn: 'Bonds Comfy Tops Slimming Sheer Tights Black Med each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828724.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Slimming Sheer Tights Black Med each超值',
    },

    {
      id: 'w0985', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Very Opaque Tights 120D Lg/XL each', nameEn: 'Bonds Comfy Very Opaque Tights 120D Lg/XL each',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/027666.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Very Opaque Tights 120D Lg/XL each超值',
    },

    {
      id: 'w0989', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Glued 4 Brows & Edges Hair Wand 16mL', nameEn: 'Got2B Glued 4 Brows & Edges Hair Wand 16mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '16mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/199820.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Glued 4 Brows & Edges Hair Wand 16mL超值',
    },

    {
      id: 'w0991', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lash Sensational Sky High Brown Mascara 7mL', nameEn: 'Maybelline Lash Sensational Sky High Brown Mascara 7mL',
      originalPrice: 28, salePrice: 0, discount: 50, unit: '7mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/258797.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lash Sensational Sky High Brown Mascara 7mL超值',
    },

    {
      id: 'w0995', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Liver Detox Tablets 120 pack', nameEn: 'Swisse Ultiboost Liver Detox Tablets 120 pack',
      originalPrice: 46, salePrice: 23, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Liver Detox Tablets 120 pack超值',
    },

    {
      id: 'w0998', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche Strong Cappuccino Sachets 10 pack', nameEn: 'Avalanche Strong Cappuccino Sachets 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6074252.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche Strong Cappuccino Sachets 10 pack超值',
    },

    {
      id: 'w1006', brand: 'woolies', category: 'other',
      nameZh: 'Growth Bomb Strengthening Leave-In Hair Mask 235mL', nameEn: 'Growth Bomb Strengthening Leave-In Hair Mask 235mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '235mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/659003.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Growth Bomb Strengthening Leave-In Hair Mask 235mL超值',
    },

    {
      id: 'w1014', brand: 'woolies', category: 'other',
      nameZh: 'Pantene Instant Smooth Detangling Mist 180mL', nameEn: 'Pantene Instant Smooth Detangling Mist 180mL',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '180mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/240186.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pantene Instant Smooth Detangling Mist 180mL超值',
    },

    {
      id: 'w1015', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Lunch Box Cutlery Set Assorted each', nameEn: 'Sistema To Go Lunch Box Cutlery Set Assorted each',
      originalPrice: 8.85, salePrice: 4.42, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/340278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Lunch Box Cutlery Set Assorted each超值',
    },

    {
      id: 'w1017', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Semi Opaque Tights Black Sml-Med each', nameEn: 'Bonds Comfy Tops Semi Opaque Tights Black Sml-Med each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828673.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Semi Opaque Tights Black Sml-Med each超值',
    },

    {
      id: 'w1027', brand: 'woolies', category: 'other',
      nameZh: 'Avalanche Caramel Latte Sachets 10 pack', nameEn: 'Avalanche Caramel Latte Sachets 10 pack',
      originalPrice: 6, salePrice: 3, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/529636.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Avalanche Caramel Latte Sachets 10 pack超值',
    },

    {
      id: 'w1028', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Semi Opaque Knee High Nude 1 Size each', nameEn: 'Bonds Comfy Tops Semi Opaque Knee High Nude 1 Size each',
      originalPrice: 6, salePrice: 3, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828655.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Semi Opaque Knee High Nude 1 Size each超值',
    },

    {
      id: 'w1029', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Girls Underwear Bikini Briefs Size 12-14 Or 14-16 Assorted 4 pack', nameEn: 'Bonds Girls Underwear Bikini Briefs Size 12-14 Or 14-16 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/756215.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Girls Underwear Bikini Briefs Size 12-14 Or 14-16 Assorted 4 pack超值',
    },

    {
      id: 'w1030', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Sport 1/4 Socks Size 2-8 Assorted 3 pack', nameEn: 'Bonds Kids Sport 1/4 Socks Size 2-8 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384681.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Sport 1/4 Socks Size 2-8 Assorted 3 pack超值',
    },

    {
      id: 'w1031', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Bikini Size 12 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Bikini Size 12 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108349.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Bikini Size 12 Assorted 2 pack超值',
    },

    {
      id: 'w1037', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Peptide Lip Treatment Cupcake 15g', nameEn: 'MCoBeauty Peptide Lip Treatment Cupcake 15g',
      originalPrice: 18, salePrice: 7.2, discount: 60, unit: '15g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6003628.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Peptide Lip Treatment Cupcake 15g超值',
    },

    {
      id: 'w1038', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline The Falsies Mascara Blackest Black 10mL', nameEn: 'Maybelline The Falsies Mascara Blackest Black 10mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/430980.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline The Falsies Mascara Blackest Black 10mL超值',
    },

    {
      id: 'w1046', brand: 'woolies', category: 'other',
      nameZh: 'Philips Led 1400Lm Cool Bc 2 pack', nameEn: 'Philips Led 1400Lm Cool Bc 2 pack',
      originalPrice: 18.8, salePrice: 9.4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/871596.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Philips Led 1400Lm Cool Bc 2 pack超值',
    },

    {
      id: 'w1047', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Knee Hi Pairs & Spares Beige 4 pack', nameEn: 'Razzamatazz Knee Hi Pairs & Spares Beige 4 pack',
      originalPrice: 7, salePrice: 3.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/178511.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Knee Hi Pairs & Spares Beige 4 pack超值',
    },

    {
      id: 'w1051', brand: 'woolies', category: 'other',
      nameZh: 'Ambi Pur Premium Clip Car Air Freshener Vanilla Voyage 7.5ml', nameEn: 'Ambi Pur Premium Clip Car Air Freshener Vanilla Voyage 7.5ml',
      originalPrice: 8.8, salePrice: 4.4, discount: 50, unit: '7.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/210226.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Ambi Pur Premium Clip Car Air Freshener Vanilla Voyage 7.5ml超值',
    },

    {
      id: 'w1053', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1055', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1056', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Fit Me Matte & Poreless Foundation - Classic Ivory 120 30mL', nameEn: 'Maybelline Fit Me Matte & Poreless Foundation - Classic Ivory 120 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877391.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Fit Me Matte & Poreless Foundation - Classic Ivory 120 30mL超值',
    },

    {
      id: 'w1063', brand: 'woolies', category: 'other',
      nameZh: 'Pantene Moisture Renewal Refill each', nameEn: 'Pantene Moisture Renewal Refill each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/265220.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pantene Moisture Renewal Refill each超值',
    },

    {
      id: 'w1064', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Double Walled Stainless Steel Bottle Assorted 500mL each', nameEn: 'Sistema Double Walled Stainless Steel Bottle Assorted 500mL each',
      originalPrice: 22.75, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/689576.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Double Walled Stainless Steel Bottle Assorted 500mL each超值',
    },

    {
      id: 'w1065', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature 5 Blade Razor & 2 Cartridge Set each', nameEn: 'Thanks To Nature 5 Blade Razor & 2 Cartridge Set each',
      originalPrice: 24, salePrice: 12, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/318731.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature 5 Blade Razor & 2 Cartridge Set each超值',
    },

    {
      id: 'w1066', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Cool Curls Balm With Aloe Vera For Curly Hair 150mL', nameEn: 'Thanks To Nature Cool Curls Balm With Aloe Vera For Curly Hair 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/577768.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Cool Curls Balm With Aloe Vera For Curly Hair 150mL超值',
    },

    {
      id: 'w1068', brand: 'woolies', category: 'other',
      nameZh: 'The Han Kitchen Pocha Ramyun 4 pack', nameEn: 'The Han Kitchen Pocha Ramyun 4 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/235055.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Han Kitchen Pocha Ramyun 4 pack超值',
    },

    {
      id: 'w1070', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Opaque Tights Black Sml-Med each', nameEn: 'Bonds Comfy Tops Opaque Tights Black Sml-Med each',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751436.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Opaque Tights Black Sml-Med each超值',
    },

    {
      id: 'w1071', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Slimming Sheer Tights Black Sml each', nameEn: 'Bonds Comfy Tops Slimming Sheer Tights Black Sml each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828726.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Slimming Sheer Tights Black Sml each超值',
    },

    {
      id: 'w1072', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Low Cut Socks Size 13-3 Assorted 3 pack', nameEn: 'Bonds Kids Low Cut Socks Size 13-3 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/253625.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Low Cut Socks Size 13-3 Assorted 3 pack超值',
    },

    {
      id: 'w1073', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Sport 1/4 Socks Size 13-3 Assorted 3 pack', nameEn: 'Bonds Kids Sport 1/4 Socks Size 13-3 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/282581.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Sport 1/4 Socks Size 13-3 Assorted 3 pack超值',
    },

    {
      id: 'w1074', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight No Show Socks Size 2-8 Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight No Show Socks Size 2-8 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/511530.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight No Show Socks Size 2-8 Assorted 4 pack超值',
    },

    {
      id: 'w1075', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack', nameEn: 'Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/106590.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack超值',
    },

    {
      id: 'w1076', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Hipster Brief Underwear X Large Assorted 5 pack', nameEn: 'Bonds Mens Hipster Brief Underwear X Large Assorted 5 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257601.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Hipster Brief Underwear X Large Assorted 5 pack超值',
    },

    {
      id: 'w1081', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Grip Makeup Set & Refresh Spray 100mL', nameEn: 'MCoBeauty Grip Makeup Set & Refresh Spray 100mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/507601.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Grip Makeup Set & Refresh Spray 100mL超值',
    },

    {
      id: 'w1082', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Colossal Big Shot Volumizing Mascara - Baddest Black 9.5mL', nameEn: 'Maybelline Colossal Big Shot Volumizing Mascara - Baddest Black 9.5mL',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '9.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/558977.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Colossal Big Shot Volumizing Mascara - Baddest Black 9.5mL超值',
    },

    {
      id: 'w1086', brand: 'woolies', category: 'other',
      nameZh: 'Pantene Daily Moisture Renewal Refill 1.1L', nameEn: 'Pantene Daily Moisture Renewal Refill 1.1L',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '1.1L',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Pantene Daily Moisture Renewal Refill 1.1L超值',
    },

    {
      id: 'w1088', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Tan Anklet One Size 2 pack', nameEn: 'Razzamatazz Tan Anklet One Size 2 pack',
      originalPrice: 3, salePrice: 1.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/100303.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Tan Anklet One Size 2 pack超值',
    },

    {
      id: 'w1093', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Glued Wax Stick 50g', nameEn: 'Got2B Glued Wax Stick 50g',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '50g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6005433.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Glued Wax Stick 50g超值',
    },

    {
      id: 'w1099', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Hydrate Twist N Sip Bottle Assorted 800mL each', nameEn: 'Sistema Hydrate Twist N Sip Bottle Assorted 800mL each',
      originalPrice: 11.5, salePrice: 5.75, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/747133.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Hydrate Twist N Sip Bottle Assorted 800mL each超值',
    },

    {
      id: 'w1100', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Double Edge Razor Blades 10 pack', nameEn: 'Thanks To Nature Double Edge Razor Blades 10 pack',
      originalPrice: 12.5, salePrice: 6.25, discount: 50, unit: '10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/318943.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Double Edge Razor Blades 10 pack超值',
    },

    {
      id: 'w1101', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Double Edge Safety Razor & Blade each', nameEn: 'Thanks To Nature Double Edge Safety Razor & Blade each',
      originalPrice: 24, salePrice: 12, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/318932.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Double Edge Safety Razor & Blade each超值',
    },

    {
      id: 'w1103', brand: 'woolies', category: 'other',
      nameZh: 'Vitaceuticals Advanced L-Theanine Plus Capsules 30 pack', nameEn: 'Vitaceuticals Advanced L-Theanine Plus Capsules 30 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060035.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vitaceuticals Advanced L-Theanine Plus Capsules 30 pack超值',
    },

    {
      id: 'w1105', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Opaque Tights Black Med-Lge each', nameEn: 'Bonds Comfy Tops Opaque Tights Black Med-Lge each',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751437.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Opaque Tights Black Med-Lge each超值',
    },

    {
      id: 'w1106', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Bikini Size 16 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Bikini Size 16 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108432.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Bikini Size 16 Assorted 2 pack超值',
    },

    {
      id: 'w1107', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight Sneaker Socks Size 3-8 Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight Sneaker Socks Size 3-8 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660316.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight Sneaker Socks Size 3-8 Assorted 4 pack超值',
    },

    {
      id: 'w1108', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Hipster Brief Underwear Large Assorted 5 pack', nameEn: 'Bonds Mens Hipster Brief Underwear Large Assorted 5 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257600.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Hipster Brief Underwear Large Assorted 5 pack超值',
    },

    {
      id: 'w1109', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Hipster Brief Underwear Medium Assorted 5 pack', nameEn: 'Bonds Mens Hipster Brief Underwear Medium Assorted 5 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257599.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Hipster Brief Underwear Medium Assorted 5 pack超值',
    },

    {
      id: 'w1110', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Underwear Guy Front Trunk Size Large Assorted each', nameEn: 'Bonds Mens Underwear Guy Front Trunk Size Large Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Underwear Guy Front Trunk Size Large Assorted each超值',
    },

    {
      id: 'w1113', brand: 'woolies', category: 'other',
      nameZh: 'Essano Hydration+ Daily Facial Moisturiser 100mL', nameEn: 'Essano Hydration+ Daily Facial Moisturiser 100mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/333795.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Essano Hydration+ Daily Facial Moisturiser 100mL超值',
    },

    {
      id: 'w1114', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Clay Spray Liquid Styler Strong Hold 150mL', nameEn: 'Jack The Barber Clay Spray Liquid Styler Strong Hold 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6069823.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Clay Spray Liquid Styler Strong Hold 150mL超值',
    },

    {
      id: 'w1124', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Slimming Sheer Tights Black XL each', nameEn: 'Bonds Comfy Tops Slimming Sheer Tights Black XL each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108175.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Slimming Sheer Tights Black XL each超值',
    },

    {
      id: 'w1125', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size XL each', nameEn: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size XL each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Insta Tan Slim Sheer Tights Medium Brown Size XL each超值',
    },

    {
      id: 'w1127', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Low Cut Socks Size 3-8 Assorted 3 pack', nameEn: 'Bonds Kids Low Cut Socks Size 3-8 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/384682.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Low Cut Socks Size 3-8 Assorted 3 pack超值',
    },

    {
      id: 'w1128', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 16 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 16 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024459.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 16 Assorted 2 pack超值',
    },

    {
      id: 'w1129', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Boyleg Size 14 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Boyleg Size 14 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/106531.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Boyleg Size 14 Assorted 2 pack超值',
    },

    {
      id: 'w1134', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack', nameEn: 'Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack',
      originalPrice: 16, salePrice: 0, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/109913.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Cushioned Crew Socks Size 6-10 Assorted 3 pack超值',
    },

    {
      id: 'w1136', brand: 'woolies', category: 'other',
      nameZh: 'Essano Hydration+ Micellar Make Up Remover 400mL', nameEn: 'Essano Hydration+ Micellar Make Up Remover 400mL',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '400mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/394976.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Essano Hydration+ Micellar Make Up Remover 400mL超值',
    },

    {
      id: 'w1137', brand: 'woolies', category: 'other',
      nameZh: 'Hask Keratin 5 In 1 Leave In Spray 175mL', nameEn: 'Hask Keratin 5 In 1 Leave In Spray 175mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '175mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/197015.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Hask Keratin 5 In 1 Leave In Spray 175mL超值',
    },

    {
      id: 'w1139', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Strong Pomade Mens Hair Styler High Shine Finish 95g', nameEn: 'Jack The Barber Strong Pomade Mens Hair Styler High Shine Finish 95g',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/820120.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Strong Pomade Mens Hair Styler High Shine Finish 95g超值',
    },

    {
      id: 'w1141', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Fragrance Mist Rose Garden 90mL', nameEn: 'MCoBeauty Fragrance Mist Rose Garden 90mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '90mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037084.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Fragrance Mist Rose Garden 90mL超值',
    },

    {
      id: 'w1142', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair Elastics Rope Neutrals 5 pack', nameEn: 'MCoBeauty Hair Elastics Rope Neutrals 5 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/230107.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair Elastics Rope Neutrals 5 pack超值',
    },

    {
      id: 'w1144', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Super Foods Green Boost 100g', nameEn: 'Nature\'s Way Super Foods Green Boost 100g',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '100g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780051.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Super Foods Green Boost 100g超值',
    },

    {
      id: 'w1149', brand: 'woolies', category: 'other',
      nameZh: 'Philips Led 1400Lm Warm Es 2 pack', nameEn: 'Philips Led 1400Lm Warm Es 2 pack',
      originalPrice: 18.8, salePrice: 9.4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/871609.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Philips Led 1400Lm Warm Es 2 pack超值',
    },

    {
      id: 'w1150', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Pantyhose Control Brazen Tall 2 pack', nameEn: 'Razzamatazz Pantyhose Control Brazen Tall 2 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/339810.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Pantyhose Control Brazen Tall 2 pack超值',
    },

    {
      id: 'w1151', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Sport Insoles Small Pair each', nameEn: 'Scholl Gel Activ Sport Insoles Small Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/547215.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Sport Insoles Small Pair each超值',
    },

    {
      id: 'w1152', brand: 'woolies', category: 'other',
      nameZh: 'Schwarzkopf Nordic Blonde Hair Colour M1 Streaking Highlight Kit each', nameEn: 'Schwarzkopf Nordic Blonde Hair Colour M1 Streaking Highlight Kit each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/697273.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schwarzkopf Nordic Blonde Hair Colour M1 Streaking Highlight Kit each超值',
    },

    {
      id: 'w1154', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Crystal Hair Remover each', nameEn: 'Thanks To Nature Crystal Hair Remover each',
      originalPrice: 30, salePrice: 15, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/918149.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Crystal Hair Remover each超值',
    },

    {
      id: 'w1156', brand: 'woolies', category: 'other',
      nameZh: 'Ambi Pur Car Refill Aqua 7.5ml', nameEn: 'Ambi Pur Car Refill Aqua 7.5ml',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '7.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/507554.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Ambi Pur Car Refill Aqua 7.5ml超值',
    },

    {
      id: 'w1157', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Explorer Socks Mens Navy Size 6-10 each', nameEn: 'Bonds Explorer Socks Mens Navy Size 6-10 each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/356187.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Explorer Socks Mens Navy Size 6-10 each超值',
    },

    {
      id: 'w1158', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Boyleg Size 12 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Boyleg Size 12 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/106438.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Boyleg Size 12 Assorted 2 pack超值',
    },

    {
      id: 'w1159', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Pantyhose Control Support Beige Extra Tall each', nameEn: 'Bonds Sheer Relief Pantyhose Control Support Beige Extra Tall each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/004646.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Pantyhose Control Support Beige Extra Tall each超值',
    },

    {
      id: 'w1160', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Pantyhose Control Support M/ Beige Tall each', nameEn: 'Bonds Sheer Relief Pantyhose Control Support M/ Beige Tall each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/035291.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Pantyhose Control Support M/ Beige Tall each超值',
    },

    {
      id: 'w1171', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Venus Extra Smooth Swirl Razor each', nameEn: 'Gillette Venus Extra Smooth Swirl Razor each',
      originalPrice: 24.5, salePrice: 12.25, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037273.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Venus Extra Smooth Swirl Razor each超值',
    },

    {
      id: 'w1173', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Bouncy Jelly Cheek & Lip Tint Red Pop 7g', nameEn: 'MCoBeauty Bouncy Jelly Cheek & Lip Tint Red Pop 7g',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '7g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054070.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Bouncy Jelly Cheek & Lip Tint Red Pop 7g超值',
    },

    {
      id: 'w1175', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1177', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1178', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Everyday Hair Elastics Assorted 35 pack', nameEn: 'MCoBeauty Everyday Hair Elastics Assorted 35 pack',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '35 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166810.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Everyday Hair Elastics Assorted 35 pack超值',
    },

    {
      id: 'w1181', brand: 'woolies', category: 'other',
      nameZh: 'Nivea Glowy Lips Magnolia Extract Clear Lip Balm 10mL', nameEn: 'Nivea Glowy Lips Magnolia Extract Clear Lip Balm 10mL',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6032570.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nivea Glowy Lips Magnolia Extract Clear Lip Balm 10mL超值',
    },

    {
      id: 'w1184', brand: 'woolies', category: 'other',
      nameZh: 'Philips Led 1400Lm Warm Bc 2 pack', nameEn: 'Philips Led 1400Lm Warm Bc 2 pack',
      originalPrice: 18.8, salePrice: 9.4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/871611.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Philips Led 1400Lm Warm Bc 2 pack超值',
    },

    {
      id: 'w1185', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Work & Boot Insoles Large Pair each', nameEn: 'Scholl Gel Activ Work & Boot Insoles Large Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/547489.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Work & Boot Insoles Large Pair each超值',
    },

    {
      id: 'w1186', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Stainless Steel Double Wall Bottle Assorted 1L each', nameEn: 'Sistema Stainless Steel Double Wall Bottle Assorted 1L each',
      originalPrice: 33.5, salePrice: 16.75, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/056843.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Stainless Steel Double Wall Bottle Assorted 1L each超值',
    },

    {
      id: 'w1187', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Stainless Steel Double Walled Bottle Assorted 600mL each', nameEn: 'Sistema Stainless Steel Double Walled Bottle Assorted 600mL each',
      originalPrice: 26, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/154379.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Stainless Steel Double Walled Bottle Assorted 600mL each超值',
    },

    {
      id: 'w1188', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Anti Dandruff Scalp Scrub With Sea Salt & Salicylic Acid 235g', nameEn: 'Thanks To Nature Anti Dandruff Scalp Scrub With Sea Salt & Salicylic Acid 235g',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '235g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004125.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Anti Dandruff Scalp Scrub With Sea Salt & Salicylic Acid 235g超值',
    },

    {
      id: 'w1189', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Blow Dry Elixir Spray With Heat Protect 150mL', nameEn: 'Thanks To Nature Blow Dry Elixir Spray With Heat Protect 150mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/200875.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Blow Dry Elixir Spray With Heat Protect 150mL超值',
    },

    {
      id: 'w1194', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Sport 1/4 Socks Size 9-12 Assorted 3 pack', nameEn: 'Bonds Kids Sport 1/4 Socks Size 9-12 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/282583.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Sport 1/4 Socks Size 9-12 Assorted 3 pack超值',
    },

    {
      id: 'w1195', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Comfy Crop Size M Assorted each', nameEn: 'Bonds Ladies Comfy Crop Size M Assorted each',
      originalPrice: 18, salePrice: 9, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017481.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Comfy Crop Size M Assorted each超值',
    },

    {
      id: 'w1196', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 18 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 18 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024460.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 18 Assorted 2 pack超值',
    },

    {
      id: 'w1197', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 20 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 20 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024463.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 20 Assorted 2 pack超值',
    },

    {
      id: 'w1198', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight Sneaker Socks Size 8-11 Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight Sneaker Socks Size 8-11 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660320.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight Sneaker Socks Size 8-11 Assorted 4 pack超值',
    },

    {
      id: 'w1199', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Work Crew Socks Size 6+ 3 pack', nameEn: 'Bonds Mens Work Crew Socks Size 6+ 3 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/881352.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Work Crew Socks Size 6+ 3 pack超值',
    },

    {
      id: 'w1200', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Singlet Mens Chesty White Size 18 each', nameEn: 'Bonds Singlet Mens Chesty White Size 18 each',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/038404.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Singlet Mens Chesty White Size 18 each超值',
    },

    {
      id: 'w1201', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Womens Ultimate Comfort Lowcut Socks Size 8+ Assorted 2 pack', nameEn: 'Bonds Womens Ultimate Comfort Lowcut Socks Size 8+ Assorted 2 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030628.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Womens Ultimate Comfort Lowcut Socks Size 8+ Assorted 2 pack超值',
    },

    {
      id: 'w1202', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Medium Pomade Mens Hair Styler Natural Shine 95g', nameEn: 'Jack The Barber Medium Pomade Mens Hair Styler Natural Shine 95g',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/089824.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Medium Pomade Mens Hair Styler Natural Shine 95g超值',
    },

    {
      id: 'w1205', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Medium Hair Claw 2 pack', nameEn: 'MCoBeauty Medium Hair Claw 2 pack',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166934.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Medium Hair Claw 2 pack超值',
    },

    {
      id: 'w1206', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Mini Hair Scrunchies Assorted 5 pack', nameEn: 'MCoBeauty Mini Hair Scrunchies Assorted 5 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/167192.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Mini Hair Scrunchies Assorted 5 pack超值',
    },

    {
      id: 'w1208', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Super Lock Brow Glue each', nameEn: 'Maybelline Super Lock Brow Glue each',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/918080.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Super Lock Brow Glue each超值',
    },

    {
      id: 'w1209', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline The Colossal Mascara Classic Black 9.2mL', nameEn: 'Maybelline The Colossal Mascara Classic Black 9.2mL',
      originalPrice: 21, salePrice: 0, discount: 50, unit: '9.2mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/399901.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline The Colossal Mascara Classic Black 9.2mL超值',
    },

    {
      id: 'w1210', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Sport Insoles Large Pair each', nameEn: 'Scholl Gel Activ Sport Insoles Large Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/546004.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Sport Insoles Large Pair each超值',
    },

    {
      id: 'w1211', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Fibre Boost Gummies 45 pack', nameEn: 'Swisse Fibre Boost Gummies 45 pack',
      originalPrice: 29.5, salePrice: 0, discount: 50, unit: '45 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058388.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Fibre Boost Gummies 45 pack超值',
    },

    {
      id: 'w1212', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Very Opaque Tights Black Med-Lge each', nameEn: 'Bonds Comfy Tops Very Opaque Tights Black Med-Lge each',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828683.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Very Opaque Tights Black Med-Lge each超值',
    },

    {
      id: 'w1213', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Very Opaque Tights Black Sml-Med each', nameEn: 'Bonds Comfy Tops Very Opaque Tights Black Sml-Med each',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828686.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Very Opaque Tights Black Sml-Med each超值',
    },

    {
      id: 'w1214', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size L each', nameEn: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size L each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/431228.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Insta Tan Slim Sheer Tights Medium Brown Size L each超值',
    },

    {
      id: 'w1215', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Insta Tan Slimming Sheer Tights Light XL each', nameEn: 'Bonds Insta Tan Slimming Sheer Tights Light XL each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108200.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Insta Tan Slimming Sheer Tights Light XL each超值',
    },

    {
      id: 'w1217', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Boyleg Size 10 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Boyleg Size 10 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/106530.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Boyleg Size 10 Assorted 2 pack超值',
    },

    {
      id: 'w1218', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Full Brief Size 16 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Full Brief Size 16 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660185.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Full Brief Size 16 Assorted 2 pack超值',
    },

    {
      id: 'w1219', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Men\'s Xtemp Trunk L Assorted each', nameEn: 'Bonds Men\'s Xtemp Trunk L Assorted each',
      originalPrice: 25, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/103185.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Men\'s Xtemp Trunk L Assorted each超值',
    },

    {
      id: 'w1220', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Guy Front Trunk Size Medium Assorted each', nameEn: 'Bonds Mens Guy Front Trunk Size Medium Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205584.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Guy Front Trunk Size Medium Assorted each超值',
    },

    {
      id: 'w1221', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Pantyhose Control Support Black Avg each', nameEn: 'Bonds Sheer Relief Pantyhose Control Support Black Avg each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/035222.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Pantyhose Control Support Black Avg each超值',
    },

    {
      id: 'w1222', brand: 'woolies', category: 'other',
      nameZh: 'Botanica Auto Air Freshener Vanilla & Himalayan Magnolia 228mL', nameEn: 'Botanica Auto Air Freshener Vanilla & Himalayan Magnolia 228mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '228mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/264159.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Botanica Auto Air Freshener Vanilla & Himalayan Magnolia 228mL超值',
    },

    {
      id: 'w1225', brand: 'woolies', category: 'other',
      nameZh: 'Comvita Olive Leaf Extract High Strength Capsules 60 pack', nameEn: 'Comvita Olive Leaf Extract High Strength Capsules 60 pack',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/476961.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Comvita Olive Leaf Extract High Strength Capsules 60 pack超值',
    },

    {
      id: 'w1230', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair Claw Jumbo Assorted each', nameEn: 'MCoBeauty Hair Claw Jumbo Assorted each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/229411.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair Claw Jumbo Assorted each超值',
    },

    {
      id: 'w1232', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Brow Ultra Slim Eyebrow Pencil - Soft Brown each', nameEn: 'Maybelline Brow Ultra Slim Eyebrow Pencil - Soft Brown each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/062251.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Brow Ultra Slim Eyebrow Pencil - Soft Brown each超值',
    },

    {
      id: 'w1233', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Define A Lash Mascara Very Black 6.5mL', nameEn: 'Maybelline Define A Lash Mascara Very Black 6.5mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '6.5mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/297376.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Define A Lash Mascara Very Black 6.5mL超值',
    },

    {
      id: 'w1234', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lash Sensational Sky High Mascara Cosmic Black each', nameEn: 'Maybelline Lash Sensational Sky High Mascara Cosmic Black each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/198626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lash Sensational Sky High Mascara Cosmic Black each超值',
    },

    {
      id: 'w1235', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lasting Drama Eyeliner Blackout each', nameEn: 'Maybelline Lasting Drama Eyeliner Blackout each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/918225.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lasting Drama Eyeliner Blackout each超值',
    },

    {
      id: 'w1240', brand: 'woolies', category: 'other',
      nameZh: 'Razzamatazz Pantyhose Control Brazen Medium 2 pack', nameEn: 'Razzamatazz Pantyhose Control Brazen Medium 2 pack',
      originalPrice: 8, salePrice: 4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/339809.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Razzamatazz Pantyhose Control Brazen Medium 2 pack超值',
    },

    {
      id: 'w1241', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Glucosamine Sulfate Tablets 180 pack', nameEn: 'Swisse Ultiboost Glucosamine Sulfate Tablets 180 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/941963.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Glucosamine Sulfate Tablets 180 pack超值',
    },

    {
      id: 'w1242', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature 5 Blade Razor Refill 4 pack', nameEn: 'Thanks To Nature 5 Blade Razor Refill 4 pack',
      originalPrice: 17.5, salePrice: 8.75, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/318605.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature 5 Blade Razor Refill 4 pack超值',
    },

    {
      id: 'w1243', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Root Concealer Wand Chic Cocoa Dark Brown 3g', nameEn: 'Thanks To Nature Root Concealer Wand Chic Cocoa Dark Brown 3g',
      originalPrice: 30, salePrice: 0, discount: 50, unit: '3g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033699.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Root Concealer Wand Chic Cocoa Dark Brown 3g超值',
    },

    {
      id: 'w1248', brand: 'woolies', category: 'other',
      nameZh: 'got2b Curlz Moisturising Detangler 200mL', nameEn: 'got2b Curlz Moisturising Detangler 200mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '200mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062296.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！got2b Curlz Moisturising Detangler 200mL超值',
    },

    {
      id: 'w1250', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Briefs Size 4-6 Or 6-8 Assorted 4 pack', nameEn: 'Bonds Boys Briefs Size 4-6 Or 6-8 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/058683.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Briefs Size 4-6 Or 6-8 Assorted 4 pack超值',
    },

    {
      id: 'w1251', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Girls Underwear Bikini Briefs Size 4-6 Or 6-8 Assorted 4 pack', nameEn: 'Bonds Girls Underwear Bikini Briefs Size 4-6 Or 6-8 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660263.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Girls Underwear Bikini Briefs Size 4-6 Or 6-8 Assorted 4 pack超值',
    },

    {
      id: 'w1252', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Comfy Crop Size L Assorted each', nameEn: 'Bonds Ladies Comfy Crop Size L Assorted each',
      originalPrice: 18, salePrice: 9, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017508.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Comfy Crop Size L Assorted each超值',
    },

    {
      id: 'w1253', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight 1/4 Crew Socks Size 2-8 Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight 1/4 Crew Socks Size 2-8 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909757.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight 1/4 Crew Socks Size 2-8 Assorted 4 pack超值',
    },

    {
      id: 'w1258', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Lightweight 1/4 Crew Socks Size 8+ Assorted 4 pack', nameEn: 'Bonds Ladies Lightweight 1/4 Crew Socks Size 8+ Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909793.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Lightweight 1/4 Crew Socks Size 8+ Assorted 4 pack超值',
    },

    {
      id: 'w1259', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Chafe Off Trunks Extra Extra Large Assorted each', nameEn: 'Bonds Mens Chafe Off Trunks Extra Extra Large Assorted each',
      originalPrice: 26, salePrice: 13, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906371.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Chafe Off Trunks Extra Extra Large Assorted each超值',
    },

    {
      id: 'w1260', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Guy Front Trunk Size Small Assorted each', nameEn: 'Bonds Mens Guy Front Trunk Size Small Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/533575.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Guy Front Trunk Size Small Assorted each超值',
    },

    {
      id: 'w1261', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Lightweight No Show Socks Size 11-14 Assorted 4 pack', nameEn: 'Bonds Mens Lightweight No Show Socks Size 11-14 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/311505.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Lightweight No Show Socks Size 11-14 Assorted 4 pack超值',
    },

    {
      id: 'w1262', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Lightweight No Show Socks Size 6-10 Assorted 4 pack', nameEn: 'Bonds Mens Lightweight No Show Socks Size 6-10 Assorted 4 pack',
      originalPrice: 16, salePrice: 8, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/311187.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Lightweight No Show Socks Size 6-10 Assorted 4 pack超值',
    },

    {
      id: 'w1263', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Xtemp Trunk XLarge Assorted each', nameEn: 'Bonds Mens Xtemp Trunk XLarge Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/103189.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Xtemp Trunk XLarge Assorted each超值',
    },

    {
      id: 'w1264', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Trouser Sock Black 1 Size each', nameEn: 'Bonds Sheer Relief Trouser Sock Black 1 Size each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/100286.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Trouser Sock Black 1 Size each超值',
    },

    {
      id: 'w1265', brand: 'woolies', category: 'other',
      nameZh: 'Clear Cosmetic Travel Bag Pink each', nameEn: 'Clear Cosmetic Travel Bag Pink each',
      originalPrice: 12, salePrice: 5, discount: 58, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049153.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Clear Cosmetic Travel Bag Pink each超值',
    },

    {
      id: 'w1266', brand: 'woolies', category: 'other',
      nameZh: 'Disney Princess Cookbook each', nameEn: 'Disney Princess Cookbook each',
      originalPrice: 6, salePrice: 3, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6064634.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Disney Princess Cookbook each超值',
    },

    {
      id: 'w1274', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Fragrance Mist Floral Memories 90mL', nameEn: 'MCoBeauty Fragrance Mist Floral Memories 90mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '90mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6056662.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Fragrance Mist Floral Memories 90mL超值',
    },

    {
      id: 'w1275', brand: 'woolies', category: 'other',
      nameZh: 'Maison & Muse Air Fragrance Mist Spray Wild Vanilla & Caramel 25mL', nameEn: 'Maison & Muse Air Fragrance Mist Spray Wild Vanilla & Caramel 25mL',
      originalPrice: 12, salePrice: 0, discount: 50, unit: '25mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037718.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maison & Muse Air Fragrance Mist Spray Wild Vanilla & Caramel 25mL超值',
    },

    {
      id: 'w1276', brand: 'woolies', category: 'other',
      nameZh: 'Maison & Muse Glass & Screen Car Wipes 25 pack', nameEn: 'Maison & Muse Glass & Screen Car Wipes 25 pack',
      originalPrice: 12, salePrice: 0, discount: 50, unit: '25 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037983.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maison & Muse Glass & Screen Car Wipes 25 pack超值',
    },

    {
      id: 'w1281', brand: 'woolies', category: 'other',
      nameZh: 'Philips Led 1400Lm Cool Es 2 pack', nameEn: 'Philips Led 1400Lm Cool Es 2 pack',
      originalPrice: 18.8, salePrice: 9.4, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/871612.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Philips Led 1400Lm Cool Es 2 pack超值',
    },

    {
      id: 'w1282', brand: 'woolies', category: 'other',
      nameZh: 'Schick Silk Hydro Moisture Care Razor Heads 8 pack', nameEn: 'Schick Silk Hydro Moisture Care Razor Heads 8 pack',
      originalPrice: 42, salePrice: 0, discount: 50, unit: '8 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/918632.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schick Silk Hydro Moisture Care Razor Heads 8 pack超值',
    },

    {
      id: 'w1283', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Hydrate Quick Flip Bottle Assorted 800mL each', nameEn: 'Sistema Hydrate Quick Flip Bottle Assorted 800mL each',
      originalPrice: 13.25, salePrice: 6.6, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/686151.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Hydrate Quick Flip Bottle Assorted 800mL each超值',
    },

    {
      id: 'w1284', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Hydration Twist & Sip Bottle Assorted 480mL each', nameEn: 'Sistema Hydration Twist & Sip Bottle Assorted 480mL each',
      originalPrice: 6.5, salePrice: 3.25, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/159087.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Hydration Twist & Sip Bottle Assorted 480mL each超值',
    },

    {
      id: 'w1286', brand: 'woolies', category: 'other',
      nameZh: 'The Fox Tan Rapid Elixir 120mL', nameEn: 'The Fox Tan Rapid Elixir 120mL',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '120mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038903.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Fox Tan Rapid Elixir 120mL超值',
    },

    {
      id: 'w1287', brand: 'woolies', category: 'other',
      nameZh: 'White Glo Accelerator Kit each', nameEn: 'White Glo Accelerator Kit each',
      originalPrice: 39, salePrice: 19.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6006348.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！White Glo Accelerator Kit each超值',
    },

    {
      id: 'w1292', brand: 'woolies', category: 'other',
      nameZh: 'White Glo Teeth Whitening Kit each', nameEn: 'White Glo Teeth Whitening Kit each',
      originalPrice: 60, salePrice: 30, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206811.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！White Glo Teeth Whitening Kit each超值',
    },

    {
      id: 'w1295', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Semi Opaque Tights Black Med-Lge each', nameEn: 'Bonds Comfy Tops Semi Opaque Tights Black Med-Lge each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/828671.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Semi Opaque Tights Black Med-Lge each超值',
    },

    {
      id: 'w1296', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Girls Underwear Bikini Briefs Size 8-10 Or 10-12 Assorted 4 pack', nameEn: 'Bonds Girls Underwear Bikini Briefs Size 8-10 Or 10-12 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/756234.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Girls Underwear Bikini Briefs Size 8-10 Or 10-12 Assorted 4 pack超值',
    },

    {
      id: 'w1297', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size M each', nameEn: 'Bonds Insta Tan Slim Sheer Tights Medium Brown Size M each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/431232.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Insta Tan Slim Sheer Tights Medium Brown Size M each超值',
    },

    {
      id: 'w1299', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1301', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1302', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Bikini Size 12 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Bikini Size 12 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660242.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Bikini Size 12 Assorted 2 pack超值',
    },

    {
      id: 'w1303', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Chafe Off Trunks Extra Large Assorted each', nameEn: 'Bonds Mens Chafe Off Trunks Extra Large Assorted each',
      originalPrice: 26, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906771.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Chafe Off Trunks Extra Large Assorted each超值',
    },

    {
      id: 'w1304', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Chafe Off Trunks Size Large Assorted each', nameEn: 'Bonds Mens Chafe Off Trunks Size Large Assorted each',
      originalPrice: 26, salePrice: 13, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/907396.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Chafe Off Trunks Size Large Assorted each超值',
    },

    {
      id: 'w1308', brand: 'woolies', category: 'other',
      nameZh: 'Du\'It Foot & Heel Balm Plus 75g', nameEn: 'Du\'It Foot & Heel Balm Plus 75g',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '75g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345828.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Du\'It Foot & Heel Balm Plus 75g超值',
    },

    {
      id: 'w1311', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Farewell Fly Aways 16mL', nameEn: 'Got2B Farewell Fly Aways 16mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '16mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6005480.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Farewell Fly Aways 16mL超值',
    },

    {
      id: 'w1316', brand: 'woolies', category: 'other',
      nameZh: 'Little Swisse Fussy Eater Greens Gummies 80 pack', nameEn: 'Little Swisse Fussy Eater Greens Gummies 80 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6043896.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Little Swisse Fussy Eater Greens Gummies 80 pack超值',
    },

    {
      id: 'w1318', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hyaluronic Lip Balm Rose Pink each', nameEn: 'MCoBeauty Hyaluronic Lip Balm Rose Pink each',
      originalPrice: 18, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/902860.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hyaluronic Lip Balm Rose Pink each超值',
    },

    {
      id: 'w1319', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Luxe Everyday Smoothing Hair Brush each', nameEn: 'MCoBeauty Luxe Everyday Smoothing Hair Brush each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022426.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Luxe Everyday Smoothing Hair Brush each超值',
    },

    {
      id: 'w1320', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Hypersharp Eyeliner Black each', nameEn: 'Maybelline Hypersharp Eyeliner Black each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877442.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Hypersharp Eyeliner Black each超值',
    },

    {
      id: 'w1321', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Instant Age Rewind Concealer Nude 02 each', nameEn: 'Maybelline Instant Age Rewind Concealer Nude 02 each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/716191.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Instant Age Rewind Concealer Nude 02 each超值',
    },

    {
      id: 'w1327', brand: 'woolies', category: 'other',
      nameZh: 'The Fox Tan Rapid Sun Tanning Mist 120mL', nameEn: 'The Fox Tan Rapid Sun Tanning Mist 120mL',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '120mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038974.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Fox Tan Rapid Sun Tanning Mist 120mL超值',
    },

    {
      id: 'w1331', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Underwear Trunks Size 12-14 Or 14-16 Assorted 3 pack', nameEn: 'Bonds Boys Underwear Trunks Size 12-14 Or 14-16 Assorted 3 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/756261.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Underwear Trunks Size 12-14 Or 14-16 Assorted 3 pack超值',
    },

    {
      id: 'w1332', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Underwear Trunks Size 8-10 Or 10-12 Assorted 3 pack', nameEn: 'Bonds Boys Underwear Trunks Size 8-10 Or 10-12 Assorted 3 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/756216.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Underwear Trunks Size 8-10 Or 10-12 Assorted 3 pack超值',
    },

    {
      id: 'w1334', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Comfy Crop Size XL Assorted each', nameEn: 'Bonds Ladies Comfy Crop Size XL Assorted each',
      originalPrice: 18, salePrice: 9, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017480.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Comfy Crop Size XL Assorted each超值',
    },

    {
      id: 'w1335', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 14 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 14 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024458.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 14 Assorted 2 pack超值',
    },

    {
      id: 'w1336', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Bikini Size 8 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Bikini Size 8 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/107711.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Bikini Size 8 Assorted 2 pack超值',
    },

    {
      id: 'w1337', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Bikini Size 14 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Bikini Size 14 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660244.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Bikini Size 14 Assorted 2 pack超值',
    },

    {
      id: 'w1338', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Hipster Brief Underwear XX Large Assorted 5 pack', nameEn: 'Bonds Mens Hipster Brief Underwear XX Large Assorted 5 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '5 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/257602.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Hipster Brief Underwear XX Large Assorted 5 pack超值',
    },

    {
      id: 'w1339', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Total Package Trunk Large Assorted each', nameEn: 'Bonds Mens Total Package Trunk Large Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/196034.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Total Package Trunk Large Assorted each超值',
    },

    {
      id: 'w1340', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Compression Hosiery 40 Denier Size T/XT each', nameEn: 'Bonds Sheer Relief Compression Hosiery 40 Denier Size T/XT each',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030389.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Compression Hosiery 40 Denier Size T/XT each超值',
    },

    {
      id: 'w1343', brand: 'woolies', category: 'other',
      nameZh: 'Essano Hydration Toning Mist 120mL', nameEn: 'Essano Hydration Toning Mist 120mL',
      originalPrice: 14, salePrice: 0, discount: 50, unit: '120mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/334709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Essano Hydration Toning Mist 120mL超值',
    },

    {
      id: 'w1355', brand: 'woolies', category: 'other',
      nameZh: 'Schick 6 High Performance Razor Blades 4 pack', nameEn: 'Schick 6 High Performance Razor Blades 4 pack',
      originalPrice: 34, salePrice: 17, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/320922.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schick 6 High Performance Razor Blades 4 pack超值',
    },

    {
      id: 'w1357', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Daily Immune Support Tablets 60 pack', nameEn: 'Swisse Ultiboost Daily Immune Support Tablets 60 pack',
      originalPrice: 19.5, salePrice: 9.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/088341.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Daily Immune Support Tablets 60 pack超值',
    },

    {
      id: 'w1361', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Root Concealer Wand Caramel Kiss Light Brown 3g', nameEn: 'Thanks To Nature Root Concealer Wand Caramel Kiss Light Brown 3g',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '3g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033983.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Root Concealer Wand Caramel Kiss Light Brown 3g超值',
    },

    {
      id: 'w1362', brand: 'woolies', category: 'other',
      nameZh: 'The Fox Tan Gradual Glow Body Lotion 300mL', nameEn: 'The Fox Tan Gradual Glow Body Lotion 300mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6038909.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！The Fox Tan Gradual Glow Body Lotion 300mL超值',
    },

    {
      id: 'w1364', brand: 'woolies', category: 'other',
      nameZh: 'got2b Curlz Defining Jelly 150mL', nameEn: 'got2b Curlz Defining Jelly 150mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062297.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！got2b Curlz Defining Jelly 150mL超值',
    },

    {
      id: 'w1375', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Underwear Trunks Size 4-6 Or 6-8 Assorted 3 pack', nameEn: 'Bonds Boys Underwear Trunks Size 4-6 Or 6-8 Assorted 3 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/659826.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Underwear Trunks Size 4-6 Or 6-8 Assorted 3 pack超值',
    },

    {
      id: 'w1376', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Explorer Socks Mens Navy Size 11-14 each', nameEn: 'Bonds Explorer Socks Mens Navy Size 11-14 each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/357765.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Explorer Socks Mens Navy Size 11-14 each超值',
    },

    {
      id: 'w1377', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 22 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 22 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024465.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 22 Assorted 2 pack超值',
    },

    {
      id: 'w1382', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Full Brief Size 10 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Full Brief Size 10 Assorted 2 pack',
      originalPrice: 26, salePrice: 0, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660225.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Full Brief Size 10 Assorted 2 pack超值',
    },

    {
      id: 'w1383', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Legendary Crew Socks Size 11-14 2 pack', nameEn: 'Bonds Mens Legendary Crew Socks Size 11-14 2 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108028.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Legendary Crew Socks Size 11-14 2 pack超值',
    },

    {
      id: 'w1384', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Legendary Crew Socks Size 6-10 2 pack', nameEn: 'Bonds Mens Legendary Crew Socks Size 6-10 2 pack',
      originalPrice: 14, salePrice: 0, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/107865.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Legendary Crew Socks Size 6-10 2 pack超值',
    },

    {
      id: 'w1385', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Work Crew Socks Size 11+ 3 pack', nameEn: 'Bonds Mens Work Crew Socks Size 11+ 3 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/881608.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Work Crew Socks Size 11+ 3 pack超值',
    },

    {
      id: 'w1388', brand: 'woolies', category: 'other',
      nameZh: 'Essano Hydration+ Pink Clay Exfoliator 100mL', nameEn: 'Essano Hydration+ Pink Clay Exfoliator 100mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '100mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/334178.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Essano Hydration+ Pink Clay Exfoliator 100mL超值',
    },

    {
      id: 'w1390', brand: 'woolies', category: 'other',
      nameZh: 'Garnier Pure Active Pimple Patches 22 pack', nameEn: 'Garnier Pure Active Pimple Patches 22 pack',
      originalPrice: 11, salePrice: 0, discount: 50, unit: '22 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6011572.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Garnier Pure Active Pimple Patches 22 pack超值',
    },

    {
      id: 'w1394', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Beard & Mo Facial Hair Balm Nourish 95g', nameEn: 'Jack The Barber Beard & Mo Facial Hair Balm Nourish 95g',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '95g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/905509.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Beard & Mo Facial Hair Balm Nourish 95g超值',
    },

    {
      id: 'w1395', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Double Edge Mens Chrome Safety Razor each', nameEn: 'Jack The Barber Double Edge Mens Chrome Safety Razor each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054939.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Double Edge Mens Chrome Safety Razor each超值',
    },

    {
      id: 'w1396', brand: 'woolies', category: 'other',
      nameZh: 'John Frieda Air Dry Waves 147mL', nameEn: 'John Frieda Air Dry Waves 147mL',
      originalPrice: 21, salePrice: 0, discount: 50, unit: '147mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/845626.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！John Frieda Air Dry Waves 147mL超值',
    },

    {
      id: 'w1399', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Fragrance Mist Coasting The Blue 90mL', nameEn: 'MCoBeauty Fragrance Mist Coasting The Blue 90mL',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '90mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036148.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Fragrance Mist Coasting The Blue 90mL超值',
    },

    {
      id: 'w1400', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair Claw Large Assorted each', nameEn: 'MCoBeauty Hair Claw Large Assorted each',
      originalPrice: 9, salePrice: 4.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/166855.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair Claw Large Assorted each超值',
    },

    {
      id: 'w1401', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Xtend Brows Micro Tip Pencil Light/Medium each', nameEn: 'MCoBeauty Xtend Brows Micro Tip Pencil Light/Medium each',
      originalPrice: 12, salePrice: 6, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6021949.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Xtend Brows Micro Tip Pencil Light/Medium each超值',
    },

    {
      id: 'w1403', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Fit Me Matte & Poreless Foundation - Ivory 115 30mL', nameEn: 'Maybelline Fit Me Matte & Poreless Foundation - Ivory 115 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877451.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Fit Me Matte & Poreless Foundation - Ivory 115 30mL超值',
    },

    {
      id: 'w1405', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Superstay Lumi 30H Matte Foundation 115 each', nameEn: 'Maybelline Superstay Lumi 30H Matte Foundation 115 each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104176.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Superstay Lumi 30H Matte Foundation 115 each超值',
    },

    {
      id: 'w1406', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline The Colossal Mascara Glam Black 9.2mL', nameEn: 'Maybelline The Colossal Mascara Glam Black 9.2mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '9.2mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/398127.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline The Colossal Mascara Glam Black 9.2mL超值',
    },

    {
      id: 'w1411', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Stainless Steel Double Walled Bottle Assorted 280mL each', nameEn: 'Sistema Stainless Steel Double Walled Bottle Assorted 280mL each',
      originalPrice: 16.75, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/117322.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Stainless Steel Double Walled Bottle Assorted 280mL each超值',
    },

    {
      id: 'w1418', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty High Strength Marine Collagen Tablets 60 pack', nameEn: 'Swisse Beauty High Strength Marine Collagen Tablets 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243924.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty High Strength Marine Collagen Tablets 60 pack超值',
    },

    {
      id: 'w1419', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Co-Enzyme Q10 Capsules 50 pack', nameEn: 'Swisse Ultiboost Co-Enzyme Q10 Capsules 50 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771449.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Co-Enzyme Q10 Capsules 50 pack超值',
    },

    {
      id: 'w1421', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Memory + Focus Tablets 50 pack', nameEn: 'Swisse Ultiboost Memory + Focus Tablets 50 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324904.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Memory + Focus Tablets 50 pack超值',
    },

    {
      id: 'w1423', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1425', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1429', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Comfy Tops Fleecy Tights Black Tl-Xt each', nameEn: 'Bonds Comfy Tops Fleecy Tights Black Tl-Xt each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/829049.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Comfy Tops Fleecy Tights Black Tl-Xt each超值',
    },

    {
      id: 'w1431', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Hipster Boyleg Size 16 Assorted 2 pack', nameEn: 'Bonds Ladies Hipster Boyleg Size 16 Assorted 2 pack',
      originalPrice: 24, salePrice: 12, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/108392.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Hipster Boyleg Size 16 Assorted 2 pack超值',
    },

    {
      id: 'w1432', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Full Brief Size 14 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Full Brief Size 14 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660182.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Full Brief Size 14 Assorted 2 pack超值',
    },

    {
      id: 'w1433', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Men\'s Xtemp Trunk M Assorted each', nameEn: 'Bonds Men\'s Xtemp Trunk M Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/102972.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Men\'s Xtemp Trunk M Assorted each超值',
    },

    {
      id: 'w1434', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Total Package Trunk Medium Assorted each', nameEn: 'Bonds Mens Total Package Trunk Medium Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/196452.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Total Package Trunk Medium Assorted each超值',
    },

    {
      id: 'w1435', brand: 'woolies', category: 'other',
      nameZh: 'Bonds No Show Footlets Black (3-8 & 8-11) each', nameEn: 'Bonds No Show Footlets Black (3-8 & 8-11) each',
      originalPrice: 5, salePrice: 2.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/370990.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds No Show Footlets Black (3-8 & 8-11) each超值',
    },

    {
      id: 'w1436', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Singlet Mens Chesty White Size 20 each', nameEn: 'Bonds Singlet Mens Chesty White Size 20 each',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/038423.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Singlet Mens Chesty White Size 20 each超值',
    },

    {
      id: 'w1437', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Womens Ultimate Comfort Lowcut Socks Size 3+ Assorted 2 pack', nameEn: 'Bonds Womens Ultimate Comfort Lowcut Socks Size 3+ Assorted 2 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030843.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Womens Ultimate Comfort Lowcut Socks Size 3+ Assorted 2 pack超值',
    },

    {
      id: 'w1449', brand: 'woolies', category: 'other',
      nameZh: 'Jack The Barber Hair & Beard Brush each', nameEn: 'Jack The Barber Hair & Beard Brush each',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/901838.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Jack The Barber Hair & Beard Brush each超值',
    },

    {
      id: 'w1455', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Instant Erase Concealer Ivory 6mL', nameEn: 'MCoBeauty Instant Erase Concealer Ivory 6mL',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '6mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134160.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Instant Erase Concealer Ivory 6mL超值',
    },

    {
      id: 'w1456', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Jumbo Everyday Paddle Brush each', nameEn: 'MCoBeauty Jumbo Everyday Paddle Brush each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6023242.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Jumbo Everyday Paddle Brush each超值',
    },

    {
      id: 'w1458', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Superstay Lumi 30H Matte Foundation 98 each', nameEn: 'Maybelline Superstay Lumi 30H Matte Foundation 98 each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104881.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Superstay Lumi 30H Matte Foundation 98 each超值',
    },

    {
      id: 'w1461', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Glucosamine Tablets 1500Mg 180 pack', nameEn: 'Nature\'s Way Glucosamine Tablets 1500Mg 180 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '180 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306795.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Glucosamine Tablets 1500Mg 180 pack超值',
    },

    {
      id: 'w1466', brand: 'woolies', category: 'other',
      nameZh: 'Schick Hydro Silk TrimStyle Razor With 5 Cartridges each', nameEn: 'Schick Hydro Silk TrimStyle Razor With 5 Cartridges each',
      originalPrice: 44, salePrice: 22, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/175543.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schick Hydro Silk TrimStyle Razor With 5 Cartridges each超值',
    },

    {
      id: 'w1467', brand: 'woolies', category: 'other',
      nameZh: 'Schwarzkopf Nordic Blonde Hair Colour T1 Anti Yellow Mousse Toner 92g', nameEn: 'Schwarzkopf Nordic Blonde Hair Colour T1 Anti Yellow Mousse Toner 92g',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '92g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/160814.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schwarzkopf Nordic Blonde Hair Colour T1 Anti Yellow Mousse Toner 92g超值',
    },

    {
      id: 'w1472', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Hair Chalk 2 pack', nameEn: 'Thanks To Nature Hair Chalk 2 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6033204.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Hair Chalk 2 pack超值',
    },

    {
      id: 'w1480', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Chesty Bond Size 12-14 2 pack', nameEn: 'Bonds Kids Chesty Bond Size 12-14 2 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909229.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Chesty Bond Size 12-14 2 pack超值',
    },

    {
      id: 'w1481', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Low Cut Socks Size 9-12 Assorted 3 pack', nameEn: 'Bonds Kids Low Cut Socks Size 9-12 Assorted 3 pack',
      originalPrice: 14, salePrice: 7, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/253621.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Low Cut Socks Size 9-12 Assorted 3 pack超值',
    },

    {
      id: 'w1482', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Cottontails Underwear Size 12 Assorted 2 pack', nameEn: 'Bonds Ladies Cottontails Underwear Size 12 Assorted 2 pack',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/024456.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Cottontails Underwear Size 12 Assorted 2 pack超值',
    },

    {
      id: 'w1483', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Under Short Size 14-16 Assorted each', nameEn: 'Bonds Ladies Seamless Under Short Size 14-16 Assorted each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164120.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Under Short Size 14-16 Assorted each超值',
    },

    {
      id: 'w1484', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Action Brief Extra Large Assorted 4 pack', nameEn: 'Bonds Mens Action Brief Extra Large Assorted 4 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/510002.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Action Brief Extra Large Assorted 4 pack超值',
    },

    {
      id: 'w1485', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Action Brief Medium Assorted 4 pack', nameEn: 'Bonds Mens Action Brief Medium Assorted 4 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/510030.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Action Brief Medium Assorted 4 pack超值',
    },

    {
      id: 'w1486', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Sheer Relief Compression Hosiery 40 Denier Size Ave/T each', nameEn: 'Bonds Sheer Relief Compression Hosiery 40 Denier Size Ave/T each',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030624.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Sheer Relief Compression Hosiery 40 Denier Size Ave/T each超值',
    },

    {
      id: 'w1497', brand: 'woolies', category: 'other',
      nameZh: 'KIND Collective Skin Beam Liquid Blush Blushing Rose 10mL', nameEn: 'KIND Collective Skin Beam Liquid Blush Blushing Rose 10mL',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6048221.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！KIND Collective Skin Beam Liquid Blush Blushing Rose 10mL超值',
    },

    {
      id: 'w1500', brand: 'woolies', category: 'other',
      nameZh: 'Little Swisse Sleep Gummies For Kids 50 pack', nameEn: 'Little Swisse Sleep Gummies For Kids 50 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022583.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Little Swisse Sleep Gummies For Kids 50 pack超值',
    },

    {
      id: 'w1506', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Brow Ultra Slim Blonde each', nameEn: 'Maybelline Brow Ultra Slim Blonde each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/064236.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Brow Ultra Slim Blonde each超值',
    },

    {
      id: 'w1507', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Falsies Lash Lift Mascara Ultra Black 9.6mL', nameEn: 'Maybelline Falsies Lash Lift Mascara Ultra Black 9.6mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '9.6mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/137912.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Falsies Lash Lift Mascara Ultra Black 9.6mL超值',
    },

    {
      id: 'w1508', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Fit Me Matte & Poreless Foundation - Light Beige 118 30mL', nameEn: 'Maybelline Fit Me Matte & Poreless Foundation - Light Beige 118 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/819980.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Fit Me Matte & Poreless Foundation - Light Beige 118 30mL超值',
    },

    {
      id: 'w1509', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Fit Me Matte & Poreless Foundation - Natural Beige 30mL', nameEn: 'Maybelline Fit Me Matte & Poreless Foundation - Natural Beige 30mL',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/877393.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Fit Me Matte & Poreless Foundation - Natural Beige 30mL超值',
    },

    {
      id: 'w1510', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Instant Age Rewind Concealer Sand 6.8mL', nameEn: 'Maybelline Instant Age Rewind Concealer Sand 6.8mL',
      originalPrice: 23, salePrice: 11.5, discount: 50, unit: '6.8mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104958.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Instant Age Rewind Concealer Sand 6.8mL超值',
    },

    {
      id: 'w1511', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Poreless Jelly Primer 30mL', nameEn: 'Maybelline Poreless Jelly Primer 30mL',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '30mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6031043.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Poreless Jelly Primer 30mL超值',
    },

    {
      id: 'w1512', brand: 'woolies', category: 'other',
      nameZh: 'Muslin Plush Throw Green each', nameEn: 'Muslin Plush Throw Green each',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6049122.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Muslin Plush Throw Green each超值',
    },

    {
      id: 'w1515', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Sleeping Tablets 60 pack', nameEn: 'Nature\'s Way Sleeping Tablets 60 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/120063.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Sleeping Tablets 60 pack超值',
    },

    {
      id: 'w1520', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Casual Insoles Small Pair each', nameEn: 'Scholl Gel Activ Casual Insoles Small Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/520570.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Casual Insoles Small Pair each超值',
    },

    {
      id: 'w1521', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Work & Boot Insoles Small Pair each', nameEn: 'Scholl Gel Activ Work & Boot Insoles Small Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/547223.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Work & Boot Insoles Small Pair each超值',
    },

    {
      id: 'w1522', brand: 'woolies', category: 'other',
      nameZh: 'Schwarzkopf Live Aztec Copper Hair Dye Colour Semi Permanent each', nameEn: 'Schwarzkopf Live Aztec Copper Hair Dye Colour Semi Permanent each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/160936.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schwarzkopf Live Aztec Copper Hair Dye Colour Semi Permanent each超值',
    },

    {
      id: 'w1525', brand: 'woolies', category: 'other',
      nameZh: 'Sistema To Go Bento Lunch Bag Assorted 4L each', nameEn: 'Sistema To Go Bento Lunch Bag Assorted 4L each',
      originalPrice: 14.95, salePrice: 7.47, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/812571.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema To Go Bento Lunch Bag Assorted 4L each超值',
    },

    {
      id: 'w1526', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Prebiotic Fibre Powder Unflavoured 210g', nameEn: 'Swisse Prebiotic Fibre Powder Unflavoured 210g',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '210g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058585.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Prebiotic Fibre Powder Unflavoured 210g超值',
    },

    {
      id: 'w1535', brand: 'woolies', category: 'other',
      nameZh: 'frank simple. Collagen Beauty Boost Pomegranate Sachets 28 pack', nameEn: 'frank simple. Collagen Beauty Boost Pomegranate Sachets 28 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/309472.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！frank simple. Collagen Beauty Boost Pomegranate Sachets 28 pack超值',
    },

    {
      id: 'w1542', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Immune Rapi Melt Tablets 60 pack', nameEn: 'Blackmores Immune Rapi Melt Tablets 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029195.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Immune Rapi Melt Tablets 60 pack超值',
    },

    {
      id: 'w1547', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1549', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1561', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Briefs Size 12-14 or 14-16 Assorted 4 pack', nameEn: 'Bonds Boys Briefs Size 12-14 or 14-16 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017876.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Briefs Size 12-14 or 14-16 Assorted 4 pack超值',
    },

    {
      id: 'w1563', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Chesty Bond Size 8-10 2 pack', nameEn: 'Bonds Kids Chesty Bond Size 8-10 2 pack',
      originalPrice: 15, salePrice: 7.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/909782.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Chesty Bond Size 8-10 2 pack超值',
    },

    {
      id: 'w1564', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Comfy Crop Size S Assorted each', nameEn: 'Bonds Ladies Comfy Crop Size S Assorted each',
      originalPrice: 18, salePrice: 9, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017504.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Comfy Crop Size S Assorted each超值',
    },

    {
      id: 'w1565', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Full Brief Size 12 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Full Brief Size 12 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/660239.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Full Brief Size 12 Assorted 2 pack超值',
    },

    {
      id: 'w1566', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Under Short Size 10-12 Assorted each', nameEn: 'Bonds Ladies Seamless Under Short Size 10-12 Assorted each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/162367.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Under Short Size 10-12 Assorted each超值',
    },

    {
      id: 'w1567', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Under Short Size 12-14 Assorted each', nameEn: 'Bonds Ladies Seamless Under Short Size 12-14 Assorted each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164052.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Under Short Size 12-14 Assorted each超值',
    },

    {
      id: 'w1568', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Ultimate Comfort Lowcut Socks Size 11+ Assorted 2 pack', nameEn: 'Bonds Mens Ultimate Comfort Lowcut Socks Size 11+ Assorted 2 pack',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Ultimate Comfort Lowcut Socks Size 11+ Assorted 2 pack超值',
    },

    {
      id: 'w1569', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Ultimate Comfort Lowcut Socks Size 6+ Assorted 2 pack', nameEn: 'Bonds Mens Ultimate Comfort Lowcut Socks Size 6+ Assorted 2 pack',
      originalPrice: 13, salePrice: 0, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030586.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Ultimate Comfort Lowcut Socks Size 6+ Assorted 2 pack超值',
    },

    {
      id: 'w1570', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Underwear Guy Front Trunk Size X Large Assorted each', nameEn: 'Bonds Mens Underwear Guy Front Trunk Size X Large Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/205586.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Underwear Guy Front Trunk Size X Large Assorted each超值',
    },

    {
      id: 'w1574', brand: 'woolies', category: 'other',
      nameZh: 'Cenovis Once Daily Women\'s Multi + Energy Boost Capsules 100 pack', nameEn: 'Cenovis Once Daily Women\'s Multi + Energy Boost Capsules 100 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/085596.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Cenovis Once Daily Women\'s Multi + Energy Boost Capsules 100 pack超值',
    },

    {
      id: 'w1577', brand: 'woolies', category: 'other',
      nameZh: 'Clairol Nice \'N Easy Frost & Tip Blonde Highlighting Kit each', nameEn: 'Clairol Nice \'N Easy Frost & Tip Blonde Highlighting Kit each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/358113.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Clairol Nice \'N Easy Frost & Tip Blonde Highlighting Kit each超值',
    },

    {
      id: 'w1578', brand: 'woolies', category: 'other',
      nameZh: 'Clairol Root Touch Up % Medium Brown each', nameEn: 'Clairol Root Touch Up % Medium Brown each',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/414363.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Clairol Root Touch Up % Medium Brown each超值',
    },

    {
      id: 'w1582', brand: 'woolies', category: 'other',
      nameZh: 'Got2B Got Gloss Shine Primer 150mL', nameEn: 'Got2B Got Gloss Shine Primer 150mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6004815.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Got2B Got Gloss Shine Primer 150mL超值',
    },

    {
      id: 'w1585', brand: 'woolies', category: 'other',
      nameZh: 'KIND Collective Skin Beam Liquid Illuminator 10mL', nameEn: 'KIND Collective Skin Beam Liquid Illuminator 10mL',
      originalPrice: 10, salePrice: 5, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6048112.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！KIND Collective Skin Beam Liquid Illuminator 10mL超值',
    },

    {
      id: 'w1588', brand: 'woolies', category: 'other',
      nameZh: 'Life Botanics Vitality Greens Powder 450g', nameEn: 'Life Botanics Vitality Greens Powder 450g',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '450g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/304262.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Life Botanics Vitality Greens Powder 450g超值',
    },

    {
      id: 'w1589', brand: 'woolies', category: 'other',
      nameZh: 'Little Swisse Fussy Eater Greens Gummies 40 pack', nameEn: 'Little Swisse Fussy Eater Greens Gummies 40 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6044199.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Little Swisse Fussy Eater Greens Gummies 40 pack超值',
    },

    {
      id: 'w1591', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair Claw Midi Combo Tortoise Mix 2 pack', nameEn: 'MCoBeauty Hair Claw Midi Combo Tortoise Mix 2 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/912085.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair Claw Midi Combo Tortoise Mix 2 pack超值',
    },

    {
      id: 'w1592', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Hair Clips Assorted Terracotta 3 pack', nameEn: 'MCoBeauty Hair Clips Assorted Terracotta 3 pack',
      originalPrice: 12, salePrice: 6, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/912104.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Hair Clips Assorted Terracotta 3 pack超值',
    },

    {
      id: 'w1593', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Instant Erase Concealer Light 6mL', nameEn: 'MCoBeauty Instant Erase Concealer Light 6mL',
      originalPrice: 20, salePrice: 0, discount: 50, unit: '6mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/078204.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Instant Erase Concealer Light 6mL超值',
    },

    {
      id: 'w1594', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Overnight Lip Mask Deluxe 3 pack', nameEn: 'MCoBeauty Overnight Lip Mask Deluxe 3 pack',
      originalPrice: 25, salePrice: 0, discount: 50, unit: '3 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/502339.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Overnight Lip Mask Deluxe 3 pack超值',
    },

    {
      id: 'w1595', brand: 'woolies', category: 'other',
      nameZh: 'Maison & Muse Air Fragrance Mist Spray Bergamot Citrus & Amberwood 25mL', nameEn: 'Maison & Muse Air Fragrance Mist Spray Bergamot Citrus & Amberwood 25mL',
      originalPrice: 12, salePrice: 0, discount: 50, unit: '25mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6037727.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maison & Muse Air Fragrance Mist Spray Bergamot Citrus & Amberwood 25mL超值',
    },

    {
      id: 'w1596', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Instant Age Rewind Concealer Ivory 00 each', nameEn: 'Maybelline Instant Age Rewind Concealer Ivory 00 each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/818759.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Instant Age Rewind Concealer Ivory 00 each超值',
    },

    {
      id: 'w1597', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lash Sensational Body Mascara each', nameEn: 'Maybelline Lash Sensational Body Mascara each',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062945.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lash Sensational Body Mascara each超值',
    },

    {
      id: 'w1598', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lash Sensational Fireworks each', nameEn: 'Maybelline Lash Sensational Fireworks each',
      originalPrice: 29, salePrice: 14.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/906709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lash Sensational Fireworks each超值',
    },

    {
      id: 'w1601', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Superstay Lumi 30H Matte Foundation 119 each', nameEn: 'Maybelline Superstay Lumi 30H Matte Foundation 119 each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/104286.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Superstay Lumi 30H Matte Foundation 119 each超值',
    },

    {
      id: 'w1607', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Adult Vita Gummies Triple Immune Support Pastilles 50 pack', nameEn: 'Nature\'s Way Adult Vita Gummies Triple Immune Support Pastilles 50 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/304364.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Adult Vita Gummies Triple Immune Support Pastilles 50 pack超值',
    },

    {
      id: 'w1608', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Beauty Collagen Tablets 120 pack', nameEn: 'Nature\'s Way Beauty Collagen Tablets 120 pack',
      originalPrice: 54, salePrice: 27, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/243654.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Beauty Collagen Tablets 120 pack超值',
    },

    {
      id: 'w1609', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Beauty Hair Scalp Skin & Nail Tablets 100 pack', nameEn: 'Nature\'s Way Beauty Hair Scalp Skin & Nail Tablets 100 pack',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059444.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Beauty Hair Scalp Skin & Nail Tablets 100 pack超值',
    },

    {
      id: 'w1611', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Smart Vita Gummies Calm & Sleep 50 pack', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Calm & Sleep 50 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/236186.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Smart Vita Gummies Calm & Sleep 50 pack超值',
    },

    {
      id: 'w1620', brand: 'woolies', category: 'other',
      nameZh: 'Scholl Gel Activ Casual Insoles Large Pair each', nameEn: 'Scholl Gel Activ Casual Insoles Large Pair each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/562976.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Scholl Gel Activ Casual Insoles Large Pair each超值',
    },

    {
      id: 'w1621', brand: 'woolies', category: 'other',
      nameZh: 'Schwarzkopf Live Colour Purple Hair Dye Rich Burgundy Semi Permanent each', nameEn: 'Schwarzkopf Live Colour Purple Hair Dye Rich Burgundy Semi Permanent each',
      originalPrice: 14, salePrice: 7, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/122694.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Schwarzkopf Live Colour Purple Hair Dye Rich Burgundy Semi Permanent each超值',
    },

    {
      id: 'w1622', brand: 'woolies', category: 'other',
      nameZh: 'Sistema Lunch Slimline Quaddie Food Container Assorted 1.5L each', nameEn: 'Sistema Lunch Slimline Quaddie Food Container Assorted 1.5L each',
      originalPrice: 11.05, salePrice: 5.52, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/250091.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Sistema Lunch Slimline Quaddie Food Container Assorted 1.5L each超值',
    },

    {
      id: 'w1623', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty Hair Skin Nails Gummies 50 pack', nameEn: 'Swisse Beauty Hair Skin Nails Gummies 50 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/165985.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty Hair Skin Nails Gummies 50 pack超值',
    },

    {
      id: 'w1624', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Ashwagandha Calm+ Tablets 100 pack', nameEn: 'Swisse Ultiboost Ashwagandha Calm+ Tablets 100 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6025950.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Ashwagandha Calm+ Tablets 100 pack超值',
    },

    {
      id: 'w1630', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost High Strength C Tablets 150 pack', nameEn: 'Swisse Ultiboost High Strength C Tablets 150 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/061703.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost High Strength C Tablets 150 pack超值',
    },

    {
      id: 'w1634', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Liver Detox Tablets 60 pack', nameEn: 'Swisse Ultiboost Liver Detox Tablets 60 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/345775.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Liver Detox Tablets 60 pack超值',
    },

    {
      id: 'w1638', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Mega B+ Tablets 60 pack', nameEn: 'Swisse Ultiboost Mega B+ Tablets 60 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153386.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Mega B+ Tablets 60 pack超值',
    },

    {
      id: 'w1643', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Pre-Shave Exfoliating Scrub 180mL', nameEn: 'Thanks To Nature Pre-Shave Exfoliating Scrub 180mL',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '180mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/917855.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Pre-Shave Exfoliating Scrub 180mL超值',
    },

    {
      id: 'w1652', brand: 'woolies', category: 'other',
      nameZh: 'Vitaceuticals Advanced Berberine + Capsules 60 pack', nameEn: 'Vitaceuticals Advanced Berberine + Capsules 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030746.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vitaceuticals Advanced Berberine + Capsules 60 pack超值',
    },

    {
      id: 'w1655', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Ashwagandha+ 60 pack', nameEn: 'Blackmores Ashwagandha+ 60 pack',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/229556.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Ashwagandha+ 60 pack超值',
    },

    {
      id: 'w1656', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Ashwagandha+ Tablets 120 pack', nameEn: 'Blackmores Ashwagandha+ Tablets 120 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6007793.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Ashwagandha+ Tablets 120 pack超值',
    },

    {
      id: 'w1657', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Bio C 1000mg Support Tablets 150 pack', nameEn: 'Blackmores Bio C 1000mg Support Tablets 150 pack',
      originalPrice: 50, salePrice: 25, discount: 50, unit: '150 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/771770.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Bio C 1000mg Support Tablets 150 pack超值',
    },

    {
      id: 'w1669', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Concentrated Curcumin Tablets 30 pack', nameEn: 'Blackmores Concentrated Curcumin Tablets 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/393606.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Concentrated Curcumin Tablets 30 pack超值',
    },

    {
      id: 'w1671', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1673', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1674', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Daily Immune Action 60 pack', nameEn: 'Blackmores Daily Immune Action 60 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/229534.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Daily Immune Action 60 pack超值',
    },

    {
      id: 'w1675', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Deep Sleep Capsules 30 pack', nameEn: 'Blackmores Deep Sleep Capsules 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/300864.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Deep Sleep Capsules 30 pack超值',
    },

    {
      id: 'w1678', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Fall Asleep 30 pack', nameEn: 'Blackmores Fall Asleep 30 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/296727.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Fall Asleep 30 pack超值',
    },

    {
      id: 'w1680', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Glucosamine Sulfate 1500 One-A-Day Vanilla Tablets 90 pack', nameEn: 'Blackmores Glucosamine Sulfate 1500 One-A-Day Vanilla Tablets 90 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '90 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/248709.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Glucosamine Sulfate 1500 One-A-Day Vanilla Tablets 90 pack超值',
    },

    {
      id: 'w1685', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Mega B Complex Tablets 200 pack', nameEn: 'Blackmores Mega B Complex Tablets 200 pack',
      originalPrice: 80, salePrice: 40, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/904816.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Mega B Complex Tablets 200 pack超值',
    },

    {
      id: 'w1688', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Nails Hair & Skin Tablets 120 pack', nameEn: 'Blackmores Nails Hair & Skin Tablets 120 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/296181.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Nails Hair & Skin Tablets 120 pack超值',
    },

    {
      id: 'w1696', brand: 'woolies', category: 'other',
      nameZh: 'Blackmores Valerian Forte Tablets 60 pack', nameEn: 'Blackmores Valerian Forte Tablets 60 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/134175.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Blackmores Valerian Forte Tablets 60 pack超值',
    },

    {
      id: 'w1700', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Boys Briefs Size 8-10 or 10-12 Assorted 4 pack', nameEn: 'Bonds Boys Briefs Size 8-10 or 10-12 Assorted 4 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/017858.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Boys Briefs Size 8-10 or 10-12 Assorted 4 pack超值',
    },

    {
      id: 'w1702', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Fashion Skinny Legs Medium/ Large each', nameEn: 'Bonds Fashion Skinny Legs Medium/ Large each',
      originalPrice: 22, salePrice: 11, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/109300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Fashion Skinny Legs Medium/ Large each超值',
    },

    {
      id: 'w1703', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Performance Crop Size 10-12 Assorted each', nameEn: 'Bonds Kids Performance Crop Size 10-12 Assorted each',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/231241.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Performance Crop Size 10-12 Assorted each超值',
    },

    {
      id: 'w1704', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Kids Performance Crop Size 12-14 Assorted each', nameEn: 'Bonds Kids Performance Crop Size 12-14 Assorted each',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/231596.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Kids Performance Crop Size 12-14 Assorted each超值',
    },

    {
      id: 'w1705', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Bikini Size 16 Assorted 2 pack', nameEn: 'Bonds Ladies Seamless Bikini Size 16 Assorted 2 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '2 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/164545.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Bikini Size 16 Assorted 2 pack超值',
    },

    {
      id: 'w1706', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Ladies Seamless Under Short Size 16-18 Assorted each', nameEn: 'Bonds Ladies Seamless Under Short Size 16-18 Assorted each',
      originalPrice: 16, salePrice: 8, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/229371.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Ladies Seamless Under Short Size 16-18 Assorted each超值',
    },

    {
      id: 'w1707', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Action Brief Large Assorted 4 pack', nameEn: 'Bonds Mens Action Brief Large Assorted 4 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '4 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/510031.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Action Brief Large Assorted 4 pack超值',
    },

    {
      id: 'w1708', brand: 'woolies', category: 'other',
      nameZh: 'Bonds Mens Total Package Trunk Extra Large Assorted each', nameEn: 'Bonds Mens Total Package Trunk Extra Large Assorted each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/195995.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Bonds Mens Total Package Trunk Extra Large Assorted each超值',
    },

    {
      id: 'w1710', brand: 'woolies', category: 'other',
      nameZh: 'Caltrate Bone Muscle & Joint Tablets 60 pack', nameEn: 'Caltrate Bone Muscle & Joint Tablets 60 pack',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060311.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Caltrate Bone Muscle & Joint Tablets 60 pack超值',
    },

    {
      id: 'w1726', brand: 'woolies', category: 'other',
      nameZh: 'Clairol Natural Instincts Root Touch Up 4 Dark Brown each', nameEn: 'Clairol Natural Instincts Root Touch Up 4 Dark Brown each',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/407733.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Clairol Natural Instincts Root Touch Up 4 Dark Brown each超值',
    },

    {
      id: 'w1729', brand: 'woolies', category: 'other',
      nameZh: 'Comvita Natural Olive Leaf Extract 500mL', nameEn: 'Comvita Natural Olive Leaf Extract 500mL',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '500mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/779370.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Comvita Natural Olive Leaf Extract 500mL超值',
    },

    {
      id: 'w1730', brand: 'woolies', category: 'other',
      nameZh: 'Crampeze Night Cramps Capsules 60 pack', nameEn: 'Crampeze Night Cramps Capsules 60 pack',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/799742.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Crampeze Night Cramps Capsules 60 pack超值',
    },

    {
      id: 'w1731', brand: 'woolies', category: 'other',
      nameZh: 'Dr.Scholl\'s 24 Hour Energy Multipurpose Insoles Large each', nameEn: 'Dr.Scholl\'s 24 Hour Energy Multipurpose Insoles Large each',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029190.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Dr.Scholl\'s 24 Hour Energy Multipurpose Insoles Large each超值',
    },

    {
      id: 'w1737', brand: 'woolies', category: 'other',
      nameZh: 'Glen 20 All-In-One Country Scent Disinfectant Spray 375g', nameEn: 'Glen 20 All-In-One Country Scent Disinfectant Spray 375g',
      originalPrice: 13, salePrice: 6.5, discount: 50, unit: '375g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/319745.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Glen 20 All-In-One Country Scent Disinfectant Spray 375g超值',
    },

    {
      id: 'w1760', brand: 'woolies', category: 'other',
      nameZh: 'Little Swisse Sleep Gummies For Kids 100 pack', nameEn: 'Little Swisse Sleep Gummies For Kids 100 pack',
      originalPrice: 49.5, salePrice: 24.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022554.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Little Swisse Sleep Gummies For Kids 100 pack超值',
    },

    {
      id: 'w1761', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Creme Matte Luxe Lipstick each', nameEn: 'MCoBeauty Creme Matte Luxe Lipstick each',
      originalPrice: 20, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/267118.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Creme Matte Luxe Lipstick each超值',
    },

    {
      id: 'w1764', brand: 'woolies', category: 'other',
      nameZh: 'MCoBeauty Metallic Hair Tie Gold each', nameEn: 'MCoBeauty Metallic Hair Tie Gold each',
      originalPrice: 10, salePrice: 5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6022428.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！MCoBeauty Metallic Hair Tie Gold each超值',
    },

    {
      id: 'w1766', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Cloudtopia Blush Cheek & Lip Mouse Coral Illusion each', nameEn: 'Maybelline Cloudtopia Blush Cheek & Lip Mouse Coral Illusion each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062209.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Cloudtopia Blush Cheek & Lip Mouse Coral Illusion each超值',
    },

    {
      id: 'w1767', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Colossal Bubble Mascara each', nameEn: 'Maybelline Colossal Bubble Mascara each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034325.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Colossal Bubble Mascara each超值',
    },

    {
      id: 'w1768', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Colossal Bubble Mascara each', nameEn: 'Maybelline Colossal Bubble Mascara each',
      originalPrice: 28, salePrice: 14, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6029978.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Colossal Bubble Mascara each超值',
    },

    {
      id: 'w1769', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Falsies Lashlift Blackest Black each', nameEn: 'Maybelline Falsies Lashlift Blackest Black each',
      originalPrice: 26, salePrice: 13, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/074217.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Falsies Lashlift Blackest Black each超值',
    },

    {
      id: 'w1770', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Instant Age Rewind Concealer Fair 03 each', nameEn: 'Maybelline Instant Age Rewind Concealer Fair 03 each',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/716193.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Instant Age Rewind Concealer Fair 03 each超值',
    },

    {
      id: 'w1773', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lifter Lip Glaze Pink Drip each', nameEn: 'Maybelline Lifter Lip Glaze Pink Drip each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6036646.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lifter Lip Glaze Pink Drip each超值',
    },

    {
      id: 'w1774', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Lifter Lip Gloss Ice 5.4mL', nameEn: 'Maybelline Lifter Lip Gloss Ice 5.4mL',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: '5.4mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/139456.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Lifter Lip Gloss Ice 5.4mL超值',
    },

    {
      id: 'w1777', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Master Precise All Day Liquid Eye Liner Black each', nameEn: 'Maybelline Master Precise All Day Liquid Eye Liner Black each',
      originalPrice: 20, salePrice: 10, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/054927.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Master Precise All Day Liquid Eye Liner Black each超值',
    },

    {
      id: 'w1778', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Super Lock Brow Glue Tint Deep Brown each', nameEn: 'Maybelline Super Lock Brow Glue Tint Deep Brown each',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034329.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Super Lock Brow Glue Tint Deep Brown each超值',
    },

    {
      id: 'w1779', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Superstay Teddy Tint Cool Grunge each', nameEn: 'Maybelline Superstay Teddy Tint Cool Grunge each',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6013053.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Superstay Teddy Tint Cool Grunge each超值',
    },

    {
      id: 'w1780', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline The Falsies Surreal Mascara 10mL', nameEn: 'Maybelline The Falsies Surreal Mascara 10mL',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/313902.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline The Falsies Surreal Mascara 10mL超值',
    },

    {
      id: 'w1781', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline The Falsies Surreal Mascara Meta Black 10mL', nameEn: 'Maybelline The Falsies Surreal Mascara Meta Black 10mL',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '10mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/461043.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline The Falsies Surreal Mascara Meta Black 10mL超值',
    },

    {
      id: 'w1782', brand: 'woolies', category: 'other',
      nameZh: 'Maybelline Ultra Slim Express Brow Ash Brown each', nameEn: 'Maybelline Ultra Slim Express Brow Ash Brown each',
      originalPrice: 19, salePrice: 9.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/313912.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Maybelline Ultra Slim Express Brow Ash Brown each超值',
    },

    {
      id: 'w1788', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Own Complete Sleep Advanced Tablets For Stress Relief 30 pack', nameEn: 'Nature\'s Own Complete Sleep Advanced Tablets For Stress Relief 30 pack',
      originalPrice: 23.5, salePrice: 11.75, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153407.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Own Complete Sleep Advanced Tablets For Stress Relief 30 pack超值',
    },

    {
      id: 'w1789', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Own Glucosamine Sulfate & Chondroitin Tablets For Joints 200 pack', nameEn: 'Nature\'s Own Glucosamine Sulfate & Chondroitin Tablets For Joints 200 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '200 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/155345.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Own Glucosamine Sulfate & Chondroitin Tablets For Joints 200 pack超值',
    },

    {
      id: 'w1790', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Own Lysine 1000mg Tablets For Collagen Support 50 pack', nameEn: 'Nature\'s Own Lysine 1000mg Tablets For Collagen Support 50 pack',
      originalPrice: 16.5, salePrice: 8.25, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/780031.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Own Lysine 1000mg Tablets For Collagen Support 50 pack超值',
    },

    {
      id: 'w1795', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1797', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1799', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Activated Curcumin 30 pack', nameEn: 'Nature\'s Way Activated Curcumin 30 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/531547.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Activated Curcumin 30 pack超值',
    },

    {
      id: 'w1800', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Adult Gummies B12 80 pack', nameEn: 'Nature\'s Way Adult Gummies B12 80 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/152282.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Adult Gummies B12 80 pack超值',
    },

    {
      id: 'w1803', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Adult Vita Gummies Hair Skin & Nails 60 pack', nameEn: 'Nature\'s Way Adult Vita Gummies Hair Skin & Nails 60 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/942010.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Adult Vita Gummies Hair Skin & Nails 60 pack超值',
    },

    {
      id: 'w1805', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Adult Vita Gummies Metabolism + Energy 70 pack', nameEn: 'Nature\'s Way Adult Vita Gummies Metabolism + Energy 70 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '70 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6028084.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Adult Vita Gummies Metabolism + Energy 70 pack超值',
    },

    {
      id: 'w1810', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Ashwagandha Hard Capsules 50 pack', nameEn: 'Nature\'s Way Ashwagandha Hard Capsules 50 pack',
      originalPrice: 27, salePrice: 13.5, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/206486.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Ashwagandha Hard Capsules 50 pack超值',
    },

    {
      id: 'w1812', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Beauty Collagen Oral Shots 50mL x 10 pack', nameEn: 'Nature\'s Way Beauty Collagen Oral Shots 50mL x 10 pack',
      originalPrice: 38, salePrice: 19, discount: 50, unit: '50mL x 10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/913328.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Beauty Collagen Oral Shots 50mL x 10 pack超值',
    },

    {
      id: 'w1813', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Beauty Collagen Tablets 60 pack', nameEn: 'Nature\'s Way Beauty Collagen Tablets 60 pack',
      originalPrice: 33, salePrice: 16.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/642324.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Beauty Collagen Tablets 60 pack超值',
    },

    {
      id: 'w1817', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way High Strength Adult Mega B Complex Vita Gummies 50 pack', nameEn: 'Nature\'s Way High Strength Adult Mega B Complex Vita Gummies 50 pack',
      originalPrice: 28, salePrice: 0, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306435.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way High Strength Adult Mega B Complex Vita Gummies 50 pack超值',
    },

    {
      id: 'w1821', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way High Strength Sleep Ashwagandha Adult Vita Gummies 40 pack', nameEn: 'Nature\'s Way High Strength Sleep Ashwagandha Adult Vita Gummies 40 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/236116.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way High Strength Sleep Ashwagandha Adult Vita Gummies 40 pack超值',
    },

    {
      id: 'w1826', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Smart High Strength Vita Gummies Triple Immune Support 50 pack', nameEn: 'Nature\'s Way Kids Smart High Strength Vita Gummies Triple Immune Support 50 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '50 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306658.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Smart High Strength Vita Gummies Triple Immune Support 50 pack超值',
    },

    {
      id: 'w1827', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Smart Vita Gummies Attention & Concentration 40 pack', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Attention & Concentration 40 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '40 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6045994.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Smart Vita Gummies Attention & Concentration 40 pack超值',
    },

    {
      id: 'w1828', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Smart Vita Gummies Immune Support 120 pack', nameEn: 'Nature\'s Way Kids Smart Vita Gummies Immune Support 120 pack',
      originalPrice: 32, salePrice: 16, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306710.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Smart Vita Gummies Immune Support 120 pack超值',
    },

    {
      id: 'w1842', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Smart Vita-Gummies Sugar Free Multi Trio 75 pack', nameEn: 'Nature\'s Way Kids Smart Vita-Gummies Sugar Free Multi Trio 75 pack',
      originalPrice: 22, salePrice: 11, discount: 50, unit: '75 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/674888.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Smart Vita-Gummies Sugar Free Multi Trio 75 pack超值',
    },

    {
      id: 'w1843', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Kids Vita Gummies Immunity 60 pack', nameEn: 'Nature\'s Way Kids Vita Gummies Immunity 60 pack',
      originalPrice: 18, salePrice: 9, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751259.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Kids Vita Gummies Immunity 60 pack超值',
    },

    {
      id: 'w1849', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Mature Skin Collagen Liquid Shots 50mL x 10 pack', nameEn: 'Nature\'s Way Mature Skin Collagen Liquid Shots 50mL x 10 pack',
      originalPrice: 42, salePrice: 21, discount: 50, unit: '50mL x 10 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059095.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Mature Skin Collagen Liquid Shots 50mL x 10 pack超值',
    },

    {
      id: 'w1853', brand: 'woolies', category: 'other',
      nameZh: 'Nature\'s Way Vitagummies For Adults Daily Fibre 110 pack', nameEn: 'Nature\'s Way Vitagummies For Adults Daily Fibre 110 pack',
      originalPrice: 28, salePrice: 14, discount: 50, unit: '110 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725413.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Nature\'s Way Vitagummies For Adults Daily Fibre 110 pack超值',
    },

    {
      id: 'w1868', brand: 'woolies', category: 'other',
      nameZh: 'Naturopathica Curcumax Turmeric Daily Curcumin 3100Mg Tablets 80 pack', nameEn: 'Naturopathica Curcumax Turmeric Daily Curcumin 3100Mg Tablets 80 pack',
      originalPrice: 26, salePrice: 13, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/150790.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Naturopathica Curcumax Turmeric Daily Curcumin 3100Mg Tablets 80 pack超值',
    },

    {
      id: 'w1870', brand: 'woolies', category: 'other',
      nameZh: 'OGX Brazilian Keratine Smooth Hair Mask 300mL', nameEn: 'OGX Brazilian Keratine Smooth Hair Mask 300mL',
      originalPrice: 25, salePrice: 12.5, discount: 50, unit: '300mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6005982.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！OGX Brazilian Keratine Smooth Hair Mask 300mL超值',
    },

    {
      id: 'w1888', brand: 'woolies', category: 'other',
      nameZh: 'Renovatio Bioscience Mental Resilience Plus Capsules 30 pack', nameEn: 'Renovatio Bioscience Mental Resilience Plus Capsules 30 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/208392.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Renovatio Bioscience Mental Resilience Plus Capsules 30 pack超值',
    },

    {
      id: 'w1889', brand: 'woolies', category: 'other',
      nameZh: 'Revlon ColorStay Eyeliner Pencil 212 Bronze each', nameEn: 'Revlon ColorStay Eyeliner Pencil 212 Bronze each',
      originalPrice: 26, salePrice: 0, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062568.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Revlon ColorStay Eyeliner Pencil 212 Bronze each超值',
    },

    {
      id: 'w1890', brand: 'woolies', category: 'other',
      nameZh: 'Revlon Colourstay Eyeliner Pencil 215 White 0.28g', nameEn: 'Revlon Colourstay Eyeliner Pencil 215 White 0.28g',
      originalPrice: 26, salePrice: 0, discount: 50, unit: '0.28g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062557.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Revlon Colourstay Eyeliner Pencil 215 White 0.28g超值',
    },

    {
      id: 'w1891', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty Collagen + Hyaluronic Acid Booster Tablets 80 pack', nameEn: 'Swisse Beauty Collagen + Hyaluronic Acid Booster Tablets 80 pack',
      originalPrice: 45, salePrice: 0, discount: 50, unit: '80 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/207264.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty Collagen + Hyaluronic Acid Booster Tablets 80 pack超值',
    },

    {
      id: 'w1893', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty Collagen Glow Peptides Tablets 120 pack', nameEn: 'Swisse Beauty Collagen Glow Peptides Tablets 120 pack',
      originalPrice: 59.5, salePrice: 0, discount: 50, unit: '120 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/903705.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty Collagen Glow Peptides Tablets 120 pack超值',
    },

    {
      id: 'w1896', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty Hair Skin Nails+ Tablets 100 pack', nameEn: 'Swisse Beauty Hair Skin Nails+ Tablets 100 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/725183.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty Hair Skin Nails+ Tablets 100 pack超值',
    },

    {
      id: 'w1897', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Beauty Hair Skin Nails+ Tablets 60 pack', nameEn: 'Swisse Beauty Hair Skin Nails+ Tablets 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/324905.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Beauty Hair Skin Nails+ Tablets 60 pack超值',
    },

    {
      id: 'w1898', brand: 'woolies', category: 'other',
      nameZh: 'Swisse High Strength Biotin 5000Mcg Tablets 100 pack', nameEn: 'Swisse High Strength Biotin 5000Mcg Tablets 100 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6058365.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse High Strength Biotin 5000Mcg Tablets 100 pack超值',
    },

    {
      id: 'w1900', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Ashwagandha Calm+ Tablets 60 pack', nameEn: 'Swisse Ultiboost Ashwagandha Calm+ Tablets 60 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153259.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Ashwagandha Calm+ Tablets 60 pack超值',
    },

    {
      id: 'w1904', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Calm + Sleep Gummies 60 pack', nameEn: 'Swisse Ultiboost Calm + Sleep Gummies 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/187398.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Calm + Sleep Gummies 60 pack超值',
    },

    {
      id: 'w1905', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost High Strength Co-Enzyme Q10 Capsules 30 pack', nameEn: 'Swisse Ultiboost High Strength Co-Enzyme Q10 Capsules 30 pack',
      originalPrice: 39.5, salePrice: 19.75, discount: 50, unit: '30 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/187300.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost High Strength Co-Enzyme Q10 Capsules 30 pack超值',
    },

    {
      id: 'w1919', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1921', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },

    {
      id: 'w1926', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Relax + Sleep Tablets 60 pack', nameEn: 'Swisse Ultiboost Relax + Sleep Tablets 60 pack',
      originalPrice: 35, salePrice: 17.5, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/751314.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Relax + Sleep Tablets 60 pack超值',
    },

    {
      id: 'w1927', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Sleep Tablets 100 pack', nameEn: 'Swisse Ultiboost Sleep Tablets 100 pack',
      originalPrice: 45, salePrice: 22.5, discount: 50, unit: '100 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/705773.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Sleep Tablets 100 pack超值',
    },

    {
      id: 'w1928', brand: 'woolies', category: 'other',
      nameZh: 'Swisse Ultiboost Sleep Tablets 60 pack', nameEn: 'Swisse Ultiboost Sleep Tablets 60 pack',
      originalPrice: 29.5, salePrice: 14.75, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/321622.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Swisse Ultiboost Sleep Tablets 60 pack超值',
    },

    {
      id: 'w1942', brand: 'woolies', category: 'other',
      nameZh: 'Thanks To Nature Root Concealer Wand Midnight Black 3g', nameEn: 'Thanks To Nature Root Concealer Wand Midnight Black 3g',
      originalPrice: 30, salePrice: 15, discount: 50, unit: '3g',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6034080.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Thanks To Nature Root Concealer Wand Midnight Black 3g超值',
    },

    {
      id: 'w1945', brand: 'woolies', category: 'other',
      nameZh: 'VOOST Effervescent Collagen Tablets 20 pack', nameEn: 'VOOST Effervescent Collagen Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/058863.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！VOOST Effervescent Collagen Tablets 20 pack超值',
    },

    {
      id: 'w1946', brand: 'woolies', category: 'other',
      nameZh: 'VOOST Effervescent Energy Tablets 20 pack', nameEn: 'VOOST Effervescent Energy Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/674967.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！VOOST Effervescent Energy Tablets 20 pack超值',
    },

    {
      id: 'w1947', brand: 'woolies', category: 'other',
      nameZh: 'VOOST Effervescent Immunity Blackcurrant 20 pack', nameEn: 'VOOST Effervescent Immunity Blackcurrant 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/151870.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！VOOST Effervescent Immunity Blackcurrant 20 pack超值',
    },

    {
      id: 'w1949', brand: 'woolies', category: 'other',
      nameZh: 'VOOST Effervescent Mega B Complex Tablets 20 pack', nameEn: 'VOOST Effervescent Mega B Complex Tablets 20 pack',
      originalPrice: 11, salePrice: 5.5, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/153288.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！VOOST Effervescent Mega B Complex Tablets 20 pack超值',
    },

    {
      id: 'w1956', brand: 'woolies', category: 'other',
      nameZh: 'Vitaceuticals MagZorb Joint Ease With Nem Hard Capsules 60 pack', nameEn: 'Vitaceuticals MagZorb Joint Ease With Nem Hard Capsules 60 pack',
      originalPrice: 39.95, salePrice: 19.95, discount: 50, unit: '60 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6060045.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Vitaceuticals MagZorb Joint Ease With Nem Hard Capsules 60 pack超值',
    },

    {
      id: 'w1959', brand: 'woolies', category: 'other',
      nameZh: 'frank simple. Gutsy Greens Daily Prebiotic Collagen 28 pack', nameEn: 'frank simple. Gutsy Greens Daily Prebiotic Collagen 28 pack',
      originalPrice: 40, salePrice: 20, discount: 50, unit: '28 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6059416.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！frank simple. Gutsy Greens Daily Prebiotic Collagen 28 pack超值',
    },

    {
      id: 'w1961', brand: 'woolies', category: 'other',
      nameZh: 'got2b Un-Glued Styling Remover Foam 150mL', nameEn: 'got2b Un-Glued Styling Remover Foam 150mL',
      originalPrice: 17, salePrice: 8.5, discount: 50, unit: '150mL',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6062295.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！got2b Un-Glued Styling Remover Foam 150mL超值',
    },

    {
      id: 'w1976', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack', nameEn: 'Gillette Blue Ii Disposable Shaving Razor Plus 20 pack',
      originalPrice: 20, salePrice: 10, discount: 50, unit: '20 pack',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/194278.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Blue Ii Disposable Shaving Razor Plus 20 pack超值',
    },

    {
      id: 'w1978', brand: 'woolies', category: 'other',
      nameZh: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each', nameEn: 'Gillette Solo3 Sensitive Handle & 10 Razor Blades each',
      originalPrice: 21, salePrice: 10.5, discount: 50, unit: 'each',
      image: 'https://cdn0.woolworths.media/content/wowproductimages/medium/6030038.jpg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '半价！Gillette Solo3 Sensitive Handle & 10 Razor Blades each超值',
    },


    // ==================== Aldi 特价（10个） ====================
    {
      id: 's033', brand: 'aldi', category: 'meat',
      nameZh: '五花肉', nameEn: 'Aldi Pork Belly',
      originalPrice: 11.00, salePrice: 7.99, discount: 27, unit: 'kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 五花肉性价比高，做红烧肉必备',
    },

    {
      id: 's034', brand: 'aldi', category: 'meat',
      nameZh: '鸡腿肉', nameEn: 'Aldi Chicken Thigh Fillet',
      originalPrice: 8.50, salePrice: 5.99, discount: 29, unit: 'kg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 鸡腿肉新鲜，价格实惠',
    },

    {
      id: 's035', brand: 'aldi', category: 'veggie',
      nameZh: '小白菜/白菜', nameEn: 'Aldi Bok Choy',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: 'bunch',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 亚洲蔬菜种类多，价格低',
    },

    {
      id: 's036', brand: 'aldi', category: 'veggie',
      nameZh: '西兰花', nameEn: 'Aldi Broccoli',
      originalPrice: 3.50, salePrice: 2.19, discount: 37, unit: 'each',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 西兰花新鲜度不错',
    },

    {
      id: 's037', brand: 'aldi', category: 'dairy',
      nameZh: '黄油', nameEn: 'Aldi Dairy Star Butter 250g',
      originalPrice: 3.50, salePrice: 2.49, discount: 29, unit: '250g',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 自营黄油，烘焙必备',
    },

    {
      id: 's038', brand: 'aldi', category: 'dairy',
      nameZh: '牛奶', nameEn: 'Aldi Farmdale Full Cream Milk 2L',
      originalPrice: 3.20, salePrice: 2.49, discount: 22, unit: '2L',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 自营牛奶，每天必备',
    },

    {
      id: 's039', brand: 'aldi', category: 'frozen',
      nameZh: '冷冻蔬菜拼盘', nameEn: 'Aldi Frozen Mixed Vegetables 1kg',
      originalPrice: 2.99, salePrice: 1.79, discount: 40, unit: '1kg',
      isHot: true,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '冷冻蔬菜耐放，Aldi 价格最低',
    },

    {
      id: 's040', brand: 'aldi', category: 'frozen',
      nameZh: '冷冻薯条', nameEn: 'Aldi Frozen Chips 1kg',
      originalPrice: 3.50, salePrice: 2.29, discount: 35, unit: '1kg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: '空气炸锅必备，Aldi 性价比最高',
    },

    {
      id: 's041', brand: 'aldi', category: 'pantry',
      nameZh: '白米', nameEn: 'Aldi Solaro Jasmine Rice 5kg',
      originalPrice: 8.99, salePrice: 6.49, discount: 28, unit: '5kg',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 自营大米，囤货首选',
    },

    {
      id: 's042', brand: 'aldi', category: 'pantry',
      nameZh: '意面', nameEn: 'Aldi Pasta 500g',
      originalPrice: 1.99, salePrice: 1.29, discount: 35, unit: '500g',
      isHot: false,
      validFrom: '2026-05-28', validTo: '2026-06-03',
      notes: 'Aldi 意面超便宜，保质期长',
    },

  ],

  // 辅助方法：按品牌筛选
  getByBrand(brand) {
    return this.specials.filter(s => s.brand === brand);
  },

  // 辅助方法：按分类筛选
  getByCategory(category) {
    return this.specials.filter(s => s.category === category);
  },

  // 辅助方法：获取热门特价
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
