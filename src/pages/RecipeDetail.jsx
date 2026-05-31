import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import recipesData from '../data/recipes';
import ingredientsData from '../data/ingredients';
import categoriesData from '../data/categories';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === id);
  const [showIngredients, setShowIngredients] = useState({});
  const [copied, setCopied] = useState(false);

  if (!recipe) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-gray-400">
        <div className="text-5xl mb-4">😕</div>
        <p>菜谱不存在</p>
        <Link to="/recipes" className="text-primary no-underline">← 返回菜谱列表</Link>
      </div>
    );
  }

  const catInfo = categoriesData.recipeCategories.find(c => c.id === recipe.category);

  const ingredientDetails = useMemo(() => {
    return recipe.ingredients.map(ing => {
      const detail = ingredientsData.ingredients.find(d => d.id === ing.id);
      return { ...ing, detail };
    });
  }, [recipe.ingredients]);

  const toggleIngredient = (ingId) => {
    setShowIngredients(prev => ({ ...prev, [ingId]: !prev[ingId] }));
  };

  const ingredientListText = recipe.ingredients
    .map(ing => {
      const d = ingredientsData.ingredients.find(d => d.id === ing.id);
      const name = d ? `${d.name}（${d.nameEn}）` : ing.name;
      return `- ${name}：${ing.amount}`;
    })
    .join('\n');

  const copyIngredients = () => {
    navigator.clipboard.writeText(ingredientListText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Shared ingredient card component (used in both mobile and desktop)
  const IngredientCard = () => (
    <div className="card p-4 sm:p-5 mb-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base">🛒 食材清单</h3>
        <button
          onClick={copyIngredients}
          className="text-xs sm:text-sm text-primary font-semibold px-3 py-1.5 rounded-lg active:bg-primary-50"
        >
          {copied ? '✅ 已复制' : '📋 复制'}
        </button>
      </div>

      <div className="space-y-1">
        {ingredientDetails.map(({ id: ingId, amount, detail }) => (
          <div key={ingId}>
            <div
              className="flex items-center justify-between py-2.5 border-b border-gray-50 cursor-pointer active:bg-gray-50 rounded-lg px-2 -mx-2"
              onClick={() => detail && toggleIngredient(ingId)}
            >
              <div className="flex-1">
                <div className="font-semibold text-sm text-gray-800">
                  {detail ? detail.name : ingId}
                  {detail && <span className="text-gray-400 font-normal ml-1 text-xs">（{detail.nameEn}）</span>}
                </div>
                <div className="text-xs text-gray-500">{amount}</div>
              </div>
              {detail && (
                <span className="text-xs text-primary px-2 py-1">
                  {showIngredients[ingId] ? '收起 ▲' : '价格 ▼'}
                </span>
              )}
            </div>

            {showIngredients[ingId] && detail && (
              <div className="mt-1 ml-2 p-3 bg-gray-50 rounded-2xl text-xs space-y-1.5">
                {detail.prices.coles && (
                  <div className="flex justify-between">
                    <span className="text-[#E31E24] font-bold">Coles</span>
                    <span className="font-medium">${detail.prices.coles.toFixed(2)}</span>
                  </div>
                )}
                {detail.prices.woolies && (
                  <div className="flex justify-between">
                    <span className="text-[#1C7A3C] font-bold">Woolies</span>
                    <span className="font-medium">${detail.prices.woolies.toFixed(2)}</span>
                  </div>
                )}
                {detail.prices.aldi && (
                  <div className="flex justify-between">
                    <span className="text-[#004C9B] font-bold">Aldi</span>
                    <span className="font-medium">${detail.prices.aldi.toFixed(2)}</span>
                  </div>
                )}
                <div className="text-gray-400 mt-1 pt-1 border-t border-gray-200">{detail.notes}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const SupermarketLinks = () => (
    <div className="card p-4 sm:p-5">
      <h3 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">🛍️ 去超市买食材</h3>
      <div className="space-y-2">
        {[
          { name: 'Coles',       color: 'bg-[#E31E24]', url: 'https://www.coles.com.au' },
          { name: 'Woolworths',  color: 'bg-[#1C7A3C]', url: 'https://www.woolworths.com.au' },
          { name: 'Aldi',        color: 'bg-[#004C9B]', url: 'https://www.aldi.com.au' },
        ].map(s => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener"
            className={`${s.color} text-white text-sm font-bold px-4 py-3 rounded-xl no-underline flex items-center justify-between hover:opacity-80 active:opacity-70`}
          >
            {s.name} Online ↗
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      {/* Breadcrumb — hidden on very small screens */}
      <div className="text-sm text-gray-400 mb-4 sm:mb-6 hidden sm:block">
        <Link to="/" className="no-underline text-gray-400 hover:text-primary">首页</Link>
        <span className="mx-2">/</span>
        <Link to="/recipes" className="no-underline text-gray-400 hover:text-primary">菜谱</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{recipe.name}</span>
      </div>

      {/* Mobile: Show ingredients at top (before steps) */}
      <div className="lg:hidden mb-6">
        <IngredientCard />
        <SupermarketLinks />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Image Placeholder */}
          <div className="w-full h-48 sm:h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center text-6xl sm:text-8xl mb-4 sm:mb-6">
            {catInfo?.icon || '🍽️'}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 sm:mb-3">{recipe.name}</h1>
          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 leading-relaxed">{recipe.description}</p>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-8">
            <span className="tag bg-primary-50 text-primary">{catInfo?.icon} {catInfo?.name}</span>
            <span className="tag bg-gray-100 text-gray-700">⏱️ {recipe.cookTime}分钟</span>
            <span className="tag bg-gray-100 text-gray-700">👤 {recipe.servings}人份</span>
            <span className={`tag ${
              recipe.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
              recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}
            </span>
          </div>

          {/* Tags */}
          {recipe.tags && (
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
              {recipe.tags.map(tag => (
                <span key={tag} className="text-xs sm:text-sm bg-primary-50 text-primary px-2.5 sm:px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 小红书 reference */}
          {recipe.xiaohongshuUrl && (
            <a
              href={recipe.xiaohongshuUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2.5 rounded-2xl mb-6 sm:mb-8 no-underline hover:bg-red-100 active:bg-red-200"
            >
              📕 参考小红书原帖 ↗
            </a>
          )}

          {/* Steps */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-4 sm:mb-6">👨‍🍳 烹饪步骤</h2>
            <div className="space-y-3 sm:space-y-4">
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1 text-sm sm:text-base text-gray-700 leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          {recipe.tips && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-5 rounded-2xl mb-8 sm:mb-10">
              <div className="font-bold text-yellow-800 mb-2 text-sm sm:text-base">💡 小贴士</div>
              <p className="text-yellow-700 leading-relaxed text-sm sm:text-base">{recipe.tips}</p>
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-20">
            <IngredientCard />
            <SupermarketLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
