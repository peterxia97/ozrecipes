export default {
  recipeCategories: [
    { id: 'all',       name: '全部',     icon: '🍽️', description: '查看所有菜谱' },
    { id: 'breakfast', name: '快手早餐', icon: '🌅', description: '10分钟搞定元气早餐' },
    { id: 'lunch',     name: '午餐便当', icon: '🍱', description: '带饭上班上课必备' },
    { id: 'dinner',    name: '晚餐',     icon: '🍳', description: '简单好吃不将就' },
    { id: 'supper',    name: '宵夜',     icon: '🌙', description: '深夜解馋小确幸' },
    { id: 'hotpot',    name: '火锅/聚餐', icon: '🫕', description: '朋友聚会一起涮' },
    { id: 'dessert',   name: '甜点',     icon: '🍮', description: '治愈系甜蜜时光' },
  ],

  specialCategories: [
    { id: 'all',       name: '全部',       icon: '📋' },
    { id: 'meat',      name: '肉类海鲜',   icon: '🥩' },
    { id: 'dairy',     name: '乳制品蛋类', icon: '🧀' },
    { id: 'fruit',     name: '水果蔬菜',   icon: '🥬' },
    { id: 'bakery',    name: '面包烘焙',   icon: '🍞' },
    { id: 'drinks',    name: '饮品饮料',   icon: '🥤' },
    { id: 'snacks',    name: '零食糖果',   icon: '🍪' },
    { id: 'grain',     name: '谷物早餐',   icon: '🥣' },
    { id: 'pantry',    name: '食品储藏',   icon: '🧂' },
    { id: 'frozen',    name: '冷冻食品',   icon: '🧊' },
    { id: 'health',    name: '健康美容',   icon: '💊' },
    { id: 'household', name: '清洁家居',   icon: '🧴' },
    { id: 'baby',      name: '母婴用品',   icon: '🍼' },
    { id: 'pet',       name: '宠物用品',   icon: '🐾' },
    { id: 'other',     name: '其他',       icon: '📦' },
  ],

  // 难度映射
  difficultyMap: {
    easy:   { label: '简单', class: 'badge-easy' },
    medium: { label: '中等', class: 'badge-medium' },
    hard:   { label: '困难', class: 'badge-hard' },
  },

  // 超市品牌映射
  brandMap: {
    coles:       { name: 'Coles',       color: '#E31E24', icon: '/images/coles-logo.png' },
    woolworths:  { name: 'Woolworths',  color: '#1C7A3C', icon: '/images/woolies-logo.png' },
    woolies:     { name: 'Woolworths',  color: '#1C7A3C', icon: '/images/woolies-logo.png' },
    aldi:        { name: 'Aldi',        color: '#004C9B', icon: '/images/aldi-logo.png' },
  },
};
