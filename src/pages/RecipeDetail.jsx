import { useParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import recipesData from '../data/recipes';
import ingredientsData from '../data/ingredients';
import categoriesData from '../data/categories';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === id);
  const [showIngredients, setShowIngredients] = useState({});

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

  // Build ingredient detail map
  const ingredientDetails = useMemo(() => {
    return recipe.ingredients.map(ing => {
      const detail = ingredientsData.ingredients.find(d => d.id === ing.id);
      return { ...ing, detail };
    });
  }, [recipe.ingredients]);

  const toggleIngredient = (ingId) => {
    setShowIngredients(prev => ({ ...prev, [ingId]: !prev[ingId] }));
  };

  // Build ingredient list text for copy
  const ingredientListText = recipe.ingredients
    .map(ing => {
      const d = ingredientsData.ingredients.find(d => d.id === ing.id);
      const name = d ? `${d.name}（${d.nameEn}）` : ing.name;
      return `- ${name}：${ing.amount}`;
    })
    .join('\n');

  const copyIngredients = () => {
    navigator.clipboard.writeText(ingredientListText).then(() => {
      // Simple toast would go here — for now just log
      console.log('Copied!');
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6">
        <Link to="/" className="no-underline text-gray-400 hover:text-primary">首页</Link>
        <span className="mx-2">/</span>
        <Link to="/recipes" className="no-underline text-gray-400 hover:text-primary">菜谱</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{recipe.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Image Placeholder */}
          <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center text-8xl mb-6">
            {catInfo?.icon || '🍽️'}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{recipe.name}</h1>
          <p className="text-gray-500 mb-6 leading-relaxed">{recipe.description}</p>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-3 mb-8">
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
            <div className="flex flex-wrap gap-2 mb-8">
              {recipe.tags.map(tag => (
                <span key={tag} className="text-sm bg-primary-50 text-primary px-3 py-1 rounded-full">
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
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2 rounded-2xl mb-8 no-underline hover:bg-red-100"
            >
              📕 参考小红书原帖 ↗
            </a>
          )}

          {/* Steps */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">👨‍🍳 烹饪步骤</h2>
            <div className="space-y-4">
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1 text-gray-700 leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          {recipe.tips && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-2xl mb-10">
              <div className="font-bold text-yellow-800 mb-2">💡 小贴士</div>
              <p className="text-yellow-700 leading-relaxed">{recipe.tips}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            {/* Ingredients Card */}
            <div className="card p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">🛒 食材清单</h3>
                <button
                  onClick={copyIngredients}
                  className="text-xs text-primary font-semibold hover:underline"
                >
                  📋 复制
                </button>
              </div>

              <div className="space-y-3">
                {ingredientDetails.map(({ id: ingId, amount, detail }) => (
                  <div key={ingId}>
                    <div
                      className="flex items-center justify-between py-2 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded px-2 -mx-2"
                      onClick={() => detail && toggleIngredient(ingId)}
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-gray-800">
                          {detail ? detail.name : ingId}
                          {detail && <span className="text-gray-400 font-normal ml-1">（{detail.nameEn}）</span>}
                        </div>
                        <div className="text-xs text-gray-500">{amount}</div>
                      </div>
                      {detail && (
                        <span className="text-xs text-primary">
                          {showIngredients[ingId] ? '收起 ▲' : '价格 ▼'}
                        </span>
                      )}
                    </div>

                    {/* Expanded price info */}
                    {showIngredients[ingId] && detail && (
                      <div className="mt-2 ml-2 p-3 bg-gray-50 rounded-2xl text-xs space-y-1">
                        {detail.prices.coles && (
                          <div className="flex justify-between">
                            <span className="text-[#E31E24] font-bold">Coles</span>
                            <span>${detail.prices.coles.toFixed(2)}</span>
                          </div>
                        )}
                        {detail.prices.woolies && (
                          <div className="flex justify-between">
                            <span className="text-[#1C7A3C] font-bold">Woolies</span>
                            <span>${detail.prices.woolies.toFixed(2)}</span>
                          </div>
                        )}
                        {detail.prices.aldi && (
                          <div className="flex justify-between">
                            <span className="text-[#004C9B] font-bold">Aldi</span>
                            <span>${detail.prices.aldi.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="text-gray-400 mt-1">{detail.notes}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Supermarket Links */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3">🛍️ 去超市买食材</h3>
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
                    className={`${s.color} text-white text-sm font-bold px-4 py-2.5 rounded-xl no-underline flex items-center justify-between hover:opacity-80`}
                  >
                    {s.name} Online ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
