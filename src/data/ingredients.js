// 食材字典：每个食材有中英文名 + 各超市价格信息
// 这是小程序的核心差异化功能——帮助留学生在本地超市找到对应食材

export default {
  ingredients: [
    // ==================== 肉类 ====================
    
    
    
    { id: 'minced_pork', nameZh: '猪肉末', nameEn: 'Pork Mince', category: 'meat', unit: '500g',
      stores: [
        { brand: 'coles', price: 6.00, product: 'Coles Pork Mince' },
        { brand: 'woolies', price: 5.50, product: 'Woolies Pork Mince' },
        { brand: 'aldi', price: 4.99, product: 'Aldi Pork Mince' }
      ],
      searchTips: 'Pork section, look for "Mince"' },
    
    { id: 'beef_stir_fry', nameZh: '牛肉片', nameEn: 'Beef Stir Fry', category: 'meat', unit: '500g',
      stores: [
        { brand: 'coles', price: 10.00, product: 'Coles Beef Stir Fry' },
        { brand: 'woolies', price: 10.50, product: 'Woolies Beef Stir Fry' },
        { brand: 'aldi', price: 8.99, product: 'Aldi Beef Stir Fry' }
      ],
      searchTips: 'Pre-sliced beef, look for "Stir Fry" label' },
    
    
    
    
    { id: 'smoked_pork_knuckle', nameZh: '烟熏猪肘', nameEn: 'Smoked Pork Hock', category: 'meat', unit: 'kg',
      stores: [
        { brand: 'coles', price: 14.00, product: 'Coles Smoked Pork Hock' },
        { brand: 'woolies', price: 0, product: 'Not commonly stocked' },
        { brand: 'aldi', price: 12.00, product: 'Aldi Smoked Pork Hock' }
      ],
      searchTips: 'Meat/Deli section, 找 "Smoked Pork Hock"，烟熏味，适合凉拌卤制' },
    { id: 'pork_hock', nameZh: '猪肘（大）', nameEn: 'Pork Hock / Ham Hock', category: 'meat', unit: 'each',
      stores: [
        { brand: 'coles', price: 10.00, product: 'Coles Pork Hock' },
        { brand: 'woolies', price: 8.00, product: 'Woolworths Pork Hock' },
        { brand: 'aldi', price: 7.99, product: 'Aldi Pork Hock' }
      ],
      searchTips: 'Meat section, 找 "Pork Hock" 或 "Ham Hock"，Woolies的个头大' },
    { id: 'oxtail', nameZh: '牛尾骨', nameEn: 'Oxtail', category: 'meat', unit: 'kg',
      stores: [
        { brand: 'coles', price: 12.00, product: 'Coles Oxtail' },
        { brand: 'woolies', price: 13.00, product: 'Woolies Oxtail' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Meat/frozen section, Coles冷冻区常有，性价比极高' },
    { id: 'roast_chicken', nameZh: '烤鸡', nameEn: 'Whole Roast Chicken', category: 'meat', unit: 'each',
      stores: [
        { brand: 'coles', price: 11.00, product: 'Coles Hot Roast Chicken' },
        { brand: 'woolies', price: 11.00, product: 'Woolies Hot Roast Chicken' },
        { brand: 'aldi', price: 9.99, product: 'Aldi Hot Roast Chicken' }
      ],
      searchTips: 'Deli入口处，热的直接撕着吃' },
    { id: 'peri_peri_chicken', nameZh: 'Peri-Peri烤鸡', nameEn: 'Coles Peri-Peri Roast Chicken', category: 'meat', unit: 'each',
      stores: [
        { brand: 'coles', price: 12.82, product: 'Coles Peri-Peri Roast Chicken' },
        { brand: 'woolies', price: 0, product: 'Not commonly stocked' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Coles deli区冷柜，找 "Peri-Peri" 包装，微辣香料味' },
    { id: 'bread_roll', nameZh: '面包卷', nameEn: 'Bread Rolls / Burger Buns', category: 'bakery', unit: 'pack',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Bread Rolls' },
        { brand: 'woolies', price: 3.00, product: 'Woolies Bread Rolls' },
        { brand: 'aldi', price: 2.49, product: 'Aldi Bread Rolls' }
      ],
      searchTips: 'Bakery aisle, 芝麻面包卷或汉堡胚' },
    { id: 'cooked_pork_belly', nameZh: '熟五花肉', nameEn: 'Cooked Pork Belly', category: 'meat', unit: 'pack',
      stores: [
        { brand: 'coles', price: 8.00, product: 'Coles Cooked Pork Belly' },
        { brand: 'woolies', price: 9.00, product: 'Woolies Cooked Pork Belly' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Deli区，找 "Cooked Pork Belly"，已经卤好的，直接切片或爆炒' },

    // ==================== 蔬菜 ====================
    { id: 'tomato', nameZh: '番茄', nameEn: 'Tomato', category: 'veggie', unit: 'kg',
      stores: [
        { brand: 'coles', price: 4.90, product: 'Coles Tomatoes' },
        { brand: 'woolies', price: 3.50, product: 'Woolies Truss Tomatoes 250g', onSpecial: true, originalPrice: 5.90, specialLabel: '半价' },
        { brand: 'aldi', price: 3.99, product: 'Aldi Tomatoes' }
      ],
      searchTips: 'Fresh produce section' },
    
    { id: 'potato', nameZh: '土豆', nameEn: 'Potato', category: 'veggie', unit: 'kg',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Potatoes' },
        { brand: 'woolies', price: 2.20, product: 'Woolies Potatoes' },
        { brand: 'aldi', price: 1.99, product: 'Aldi Potatoes' }
      ],
      searchTips: 'Root vegetables section' },
    { id: 'onion', nameZh: '洋葱', nameEn: 'Onion', category: 'veggie', unit: 'kg',
      stores: [
        { brand: 'coles', price: 2.00, product: 'Coles Brown Onion' },
        { brand: 'woolies', price: 1.80, product: 'Woolies Brown Onion' },
        { brand: 'aldi', price: 1.49, product: 'Aldi Brown Onion' }
      ],
      searchTips: 'Root vegetables, near potatoes' },
    { id: 'garlic', nameZh: '大蒜', nameEn: 'Garlic', category: 'veggie', unit: 'pack',
      stores: [
        { brand: 'coles', price: 1.50, product: 'Coles Garlic' },
        { brand: 'woolies', price: 1.50, product: 'Woolies Garlic' },
        { brand: 'aldi', price: 1.29, product: 'Aldi Garlic' }
      ],
      searchTips: 'Near onions, or pre-packed garlic' },
    { id: 'ginger', nameZh: '生姜', nameEn: 'Ginger', category: 'veggie', unit: '200g',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Ginger' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Ginger' },
        { brand: 'aldi', price: 2.49, product: 'Aldi Ginger' }
      ],
      searchTips: 'Near garlic and herbs' },
    { id: 'spring_onion', nameZh: '葱', nameEn: 'Spring Onion', category: 'veggie', unit: 'bunch',
      stores: [
        { brand: 'coles', price: 2.00, product: 'Coles Spring Onion' },
        { brand: 'woolies', price: 1.80, product: 'Woolies Spring Onion' },
        { brand: 'aldi', price: 1.49, product: 'Aldi Spring Onion' }
      ],
      searchTips: 'Fresh herbs section' },
    
    { id: 'carrot', nameZh: '胡萝卜', nameEn: 'Carrot', category: 'veggie', unit: 'kg',
      stores: [
        { brand: 'coles', price: 1.80, product: 'Coles Carrots' },
        { brand: 'woolies', price: 1.60, product: 'Woolies Carrots' },
        { brand: 'aldi', price: 1.29, product: 'Aldi Carrots' }
      ],
      searchTips: 'Root vegetables section' },
    { id: 'capsicum', nameZh: '彩椒', nameEn: 'Capsicum', category: 'veggie', unit: 'each',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Capsicum' },
        { brand: 'woolies', price: 2.00, product: 'Woolies Capsicum' },
        { brand: 'aldi', price: 1.99, product: 'Aldi Capsicum' }
      ],
      searchTips: 'Fresh produce, near tomatoes' },
    
    { id: 'bok_choy', nameZh: '小白菜', nameEn: 'Bok Choy', category: 'veggie', unit: 'bunch',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Bok Choy' },
        { brand: 'woolies', price: 2.50, product: 'Woolies Bok Choy' },
        { brand: 'aldi', price: 2.29, product: 'Aldi Bok Choy' }
      ],
      searchTips: 'Asian vegetables section' },
    
    
    { id: 'cucumber', nameZh: '黄瓜', nameEn: 'Cucumber', category: 'veggie', unit: 'each',
      stores: [
        { brand: 'coles', price: 2.00, product: 'Coles Cucumber' },
        { brand: 'woolies', price: 1.80, product: 'Woolies Cucumber' },
        { brand: 'aldi', price: 1.49, product: 'Aldi Cucumber' }
      ],
      searchTips: 'Fresh produce section, 凉拌必备' },
    { id: 'bean_sprout', nameZh: '豆芽', nameEn: 'Bean Sprouts', category: 'veggie', unit: 'pack',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Bean Sprouts' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Bean Sprouts' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Asian vegetable section, 凉拌炒菜都可以' },
    { id: 'fungus', nameZh: '木耳', nameEn: 'Wood Ear Mushroom', category: 'veggie', unit: 'pack',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Dried Fungus' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Dried Fungus' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International aisle, 干货区，泡发后使用' },
    { id: 'peanut', nameZh: '花生米', nameEn: 'Peanuts', category: 'pantry', unit: '200g',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Roasted Peanuts' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Peanuts' },
        { brand: 'aldi', price: 1.99, product: 'Aldi Peanuts' }
      ],
      searchTips: 'Snack/nuts aisle, 凉菜点睛之笔' },

    // ==================== 乳制品 ====================
    { id: 'egg', nameZh: '鸡蛋', nameEn: 'Eggs', category: 'dairy', unit: 'dozen',
      stores: [
        { brand: 'coles', price: 4.50, product: 'Coles Free Range Eggs' },
        { brand: 'woolies', price: 4.20, product: 'Woolies Free Range Eggs' },
        { brand: 'aldi', price: 3.99, product: 'Aldi Free Range Eggs' }
      ],
      searchTips: 'Dairy section, eggs are usually on an end cap' },
    
    
    
    
    

    // ==================== 调味/干货 ====================
    { id: 'soy_sauce', nameZh: '生抽', nameEn: 'Soy Sauce', category: 'pantry', unit: '250ml',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Soy Sauce' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Soy Sauce' },
        { brand: 'aldi', price: 2.49, product: 'Aldi Soy Sauce' }
      ],
      searchTips: 'International/Aisan food aisle, look for Kikkoman' },
    { id: 'oyster_sauce', nameZh: '蚝油', nameEn: 'Oyster Sauce', category: 'pantry', unit: '250ml',
      stores: [
        { brand: 'coles', price: 3.50, product: 'Coles Oyster Sauce' },
        { brand: 'woolies', price: 3.20, product: 'Woolies Oyster Sauce' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International aisle, look for Lee Kum Kee' },
    { id: 'salt', nameZh: '盐', nameEn: 'Salt', category: 'pantry', unit: '750g',
      stores: [
        { brand: 'coles', price: 1.20, product: 'Coles Salt' },
        { brand: 'woolies', price: 1.10, product: 'Woolies Salt' },
        { brand: 'aldi', price: 0.99, product: 'Aldi Salt' }
      ],
      searchTips: 'Baking/pantry aisle' },
    { id: 'sugar', nameZh: '白砂糖', nameEn: 'White Sugar', category: 'pantry', unit: '1kg',
      stores: [
        { brand: 'coles', price: 1.80, product: 'Coles White Sugar' },
        { brand: 'woolies', price: 1.70, product: 'Woolies White Sugar' },
        { brand: 'aldi', price: 1.49, product: 'Aldi White Sugar' }
      ],
      searchTips: 'Baking aisle' },
    { id: 'cooking_oil', nameZh: '食用油', nameEn: 'Vegetable Oil', category: 'pantry', unit: '1L',
      stores: [
        { brand: 'coles', price: 3.50, product: 'Coles Vegetable Oil' },
        { brand: 'woolies', price: 3.20, product: 'Woolies Vegetable Oil' },
        { brand: 'aldi', price: 2.99, product: 'Aldi Vegetable Oil' }
      ],
      searchTips: 'Cooking oil aisle' },
    
    { id: 'sesame_oil', nameZh: '芝麻油', nameEn: 'Sesame Oil', category: 'pantry', unit: '150ml',
      stores: [
        { brand: 'coles', price: 3.80, product: 'Coles Sesame Oil' },
        { brand: 'woolies', price: 3.50, product: 'Woolies Sesame Oil' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International aisle, essential for Chinese cooking' },
    { id: 'vinegar', nameZh: '醋', nameEn: 'White Vinegar', category: 'pantry', unit: '750ml',
      stores: [
        { brand: 'coles', price: 1.50, product: 'Coles White Vinegar' },
        { brand: 'woolies', price: 1.40, product: 'Woolies White Vinegar' },
        { brand: 'aldi', price: 1.19, product: 'Aldi White Vinegar' }
      ],
      searchTips: 'Condiments aisle' },
    
    
    

    // ==================== 主食 ====================
    { id: 'rice', nameZh: '大米', nameEn: 'Jasmine Rice', category: 'pantry', unit: '5kg',
      stores: [
        { brand: 'coles', price: 13.50, product: 'Sunrice Jasmine White Rice', onSpecial: true, originalPrice: 27.00, specialLabel: '半价' },
        { brand: 'woolies', price: 7.50, product: 'Woolies Jasmine Rice' },
        { brand: 'aldi', price: 6.99, product: 'Aldi Jasmine Rice' }
      ],
      searchTips: 'Rice/grains aisle, look for Jasmine Rice' },
    { id: 'noodle', nameZh: '面条', nameEn: 'Noodles', category: 'pantry', unit: '500g',
      stores: [
        { brand: 'coles', price: 2.00, product: 'Coles Noodles' },
        { brand: 'woolies', price: 1.80, product: 'Woolies Noodles' },
        { brand: 'aldi', price: 1.49, product: 'Aldi Noodles' }
      ],
      searchTips: 'Pasta/international aisle' },
    
    
    

    // ==================== 水果 ====================
    
    
    

    // ==================== 冷冻食品 ====================
    
    
    

    // ==================== 零食/其他 ====================
    
    
    

    // ==================== 火锅/聚餐食材 ====================
    
    
    
    

    // ==================== 特殊食材（菜谱用） ====================
    
    
    
    
    
    
    
    
    
    
    
    { id: 'rice_wine', nameZh: '米酒', nameEn: 'Rice Wine / Shaoxing Wine', category: 'pantry', unit: '500ml',
      stores: [
        { brand: 'coles', price: 4.00, product: 'Coles Shaoxing Wine' },
        { brand: 'woolies', price: 3.50, product: 'Woolies Rice Wine' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Asian aisle, 去腥必备' },
    { id: 'dried_chili', nameZh: '干辣椒', nameEn: 'Dried Chili', category: 'pantry', unit: 'pack',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Dried Chilli' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Dried Chilli' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Spice aisle, 煮肉去腥增香' },
    { id: 'xiaomi_chili', nameZh: '小米辣', nameEn: 'Bird Eye Chili', category: 'veggie', unit: 'pack',
      stores: [
        { brand: 'coles', price: 3.50, product: 'Coles Bird Eye Chili' },
        { brand: 'woolies', price: 3.00, product: 'Woolies Bird Eye Chili' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Fresh produce / Asian veggie section, 凉拌炒菜提辣' },
    { id: 'frozen_okra', nameZh: '冷冻秋葵', nameEn: 'Frozen Okra', category: 'frozen', unit: '500g',
      stores: [
        { brand: 'coles', price: 4.00, product: 'Coles Frozen Okra' },
        { brand: 'woolies', price: 3.50, product: 'Woolies Frozen Okra' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Frozen food aisle, 炒蛋凉拌都好吃' },
    { id: 'frozen_wonton', nameZh: '冷冻云吞', nameEn: 'Frozen Wontons', category: 'frozen', unit: 'pack',
      stores: [
        { brand: 'coles', price: 6.00, product: 'Coles Frozen Wontons' },
        { brand: 'woolies', price: 5.50, product: 'Woolies Prawn & Pork Wontons' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Frozen food aisle, Woolies鲜虾猪肉云吞最好吃' },
    { id: 'wide_noodle', nameZh: '宽面条', nameEn: 'Wide Noodles / Udon', category: 'pantry', unit: 'pack',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Udon Noodles' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Udon Noodles' },
        { brand: 'aldi', price: 1.99, product: 'Aldi Udon Noodles' }
      ],
      searchTips: 'International aisle or fridge section, 乌冬面或宽挂面' },
    { id: 'peri_peri_sauce', nameZh: 'Peri-Peri酱', nameEn: 'Peri-Peri Sauce', category: 'pantry', unit: '250ml',
      stores: [
        { brand: 'coles', price: 4.00, product: 'Nandos Peri-Peri Sauce' },
        { brand: 'woolies', price: 3.80, product: 'Woolies Peri-Peri Sauce' },
        { brand: 'aldi', price: 2.99, product: 'Aldi Peri-Peri Style Sauce' }
      ],
      searchTips: 'Condiments/Sauce aisle, Nandos品牌最正宗' },
    { id: 'chili_oil', nameZh: '辣椒油', nameEn: 'Chili Oil', category: 'pantry', unit: '250ml',
      stores: [
        { brand: 'coles', price: 3.50, product: 'Coles Chili Oil' },
        { brand: 'woolies', price: 3.20, product: 'Woolies Chili Oil' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International aisle, 红油凉拌抄手必备' },
    { id: 'sesame_paste', nameZh: '芝麻酱', nameEn: 'Sesame Paste / Tahini', category: 'pantry', unit: '250g',
      stores: [
        { brand: 'coles', price: 4.00, product: 'Coles Sesame Paste' },
        { brand: 'woolies', price: 3.80, product: 'Woolies Tahini' },
        { brand: 'aldi', price: 2.99, product: 'Aldi Tahini' }
      ],
      searchTips: 'International aisle, 找芝麻酱或用Tahini代替' },
    { id: 'sichuan_pepper_oil', nameZh: '花椒油', nameEn: 'Sichuan Pepper Oil', category: 'pantry', unit: '150ml',
      stores: [
        { brand: 'coles', price: 4.50, product: 'Coles Sichuan Pepper Oil' },
        { brand: 'woolies', price: 4.00, product: 'Woolies Sichuan Pepper Oil' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Asian aisle, 麻辣抄手灵魂调料' },
    { id: 'dark_soy_sauce', nameZh: '老抽', nameEn: 'Dark Soy Sauce', category: 'pantry', unit: '250ml',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Dark Soy Sauce' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Dark Soy Sauce' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Asian aisle, 找 "Dark Soy Sauce"，上色用' },
    { id: 'chili_powder', nameZh: '辣椒粉', nameEn: 'Chili Powder / Chili Flakes', category: 'pantry', unit: '100g',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Chili Flakes' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Chili Flakes' },
        { brand: 'aldi', price: 1.99, product: 'Aldi Chili Flakes' }
      ],
      searchTips: 'Spices aisle, 油泼面必备' },
    { id: 'doubanjiang', nameZh: '郫县豆瓣', nameEn: 'Doubanjiang / Chili Bean Paste', category: 'pantry', unit: '250g',
      stores: [
        { brand: 'coles', price: 4.50, product: 'Coles Chili Bean Paste' },
        { brand: 'woolies', price: 4.00, product: 'Woolies Chili Bean Paste' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Asian aisle, 湖南菜川菜灵魂调料' },
    { id: 'star_anise', nameZh: '八角', nameEn: 'Star Anise', category: 'pantry', unit: '50g',
      stores: [
        { brand: 'coles', price: 2.50, product: 'Coles Star Anise' },
        { brand: 'woolies', price: 2.30, product: 'Woolies Star Anise' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'Spices aisle, 炖肉去腥增香' },
    { id: 'bay_leaf', nameZh: '香叶', nameEn: 'Bay Leaves', category: 'pantry', unit: '10g',
      stores: [
        { brand: 'coles', price: 2.00, product: 'Coles Bay Leaves' },
        { brand: 'woolies', price: 1.80, product: 'Woolies Bay Leaves' },
        { brand: 'aldi', price: 1.49, product: 'Aldi Bay Leaves' }
      ],
      searchTips: 'Spices aisle, 炖肉煲汤提香' },
    { id: 'rock_sugar', nameZh: '冰糖', nameEn: 'Rock Sugar', category: 'pantry', unit: '200g',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Rock Sugar' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Rock Sugar' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: 'International/Asian aisle, 炖肉红烧上色提鲜' },
    { id: 'tomato_paste', nameZh: '番茄酱', nameEn: 'Tomato Paste', category: 'pantry', unit: '200g',
      stores: [
        { brand: 'coles', price: 1.50, product: 'Coles Tomato Paste' },
        { brand: 'woolies', price: 1.30, product: 'Woolies Tomato Paste' },
        { brand: 'aldi', price: 0.99, product: 'Aldi Tomato Paste' }
      ],
      searchTips: 'Pasta/sauce aisle, 炖肉增色增酸' },
    { id: 'leek', nameZh: '韭菜', nameEn: 'Leek / Chinese Chives', category: 'veggie', unit: 'bunch',
      stores: [
        { brand: 'coles', price: 3.00, product: 'Coles Leek' },
        { brand: 'woolies', price: 2.80, product: 'Woolies Leek' },
        { brand: 'aldi', price: 2.49, product: 'Aldi Leek' }
      ],
      searchTips: 'Fresh produce section, 亚超有中国韭菜更正宗' },
    { id: 'dried_porcini', nameZh: '干牛肝菌', nameEn: 'Dried Porcini Mushrooms', category: 'pantry', unit: '20g',
      stores: [
        { brand: 'coles', price: 0, product: 'Not commonly stocked' },
        { brand: 'woolies', price: 0, product: 'Not commonly stocked' },
        { brand: 'aldi', price: 0, product: 'Not commonly stocked' }
      ],
      searchTips: '亚超/华人超市干货区，约$4/袋，焖饭煲汤都鲜' },

    // ==================== 调酒/饮品食材 ====================
    
    
    
  ],

  // 快速查找表：按 id 索引
  get ingredientMap() {
    const map = {};
    this.ingredients.forEach(i => { map[i.id] = i; });
    return map;
  }
};
