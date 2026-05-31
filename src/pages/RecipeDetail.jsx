import { useParams, Link } from 'react-router-dom';
import { useState, useMemo, useCallback } from 'react';
import recipesData from '../data/recipes';
import ingredientsData from '../data/ingredients';
import categoriesData from '../data/categories';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === id);
  const [copied, setCopied] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Check if recipe has real images (not placeholder)
  const hasRealImage = recipe?.image && !recipe.image.includes('placeholder');
  const recipeImages = recipe?.images?.length > 0 ? recipe.images : (hasRealImage ? [recipe.image] : []);

  const nextImage = useCallback(() => {
    if (recipeImages.length > 1) {
      setCurrentImageIndex(prev => (prev + 1) % recipeImages.length);
    }
  }, [recipeImages.length]);

  const prevImage = useCallback(() => {
    if (recipeImages.length > 1) {
      setCurrentImageIndex(prev => (prev - 1 + recipeImages.length) % recipeImages.length);
    }
  }, [recipeImages.length]);

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

  const ingredientListText = recipe.ingredients
    .map(ing => {
      const d = ingredientsData.ingredients.find(d => d.id === ing.id);
      const name = d ? `${d.name}（${d.nameEn}）` : ing.id;
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
        <h3 className="font-bold text-gray-900 text-sm sm:text-base">食材清单</h3>
        <button
          onClick={copyIngredients}
          className="text-xs sm:text-sm text-primary font-semibold px-3 py-1.5 rounded-lg active:bg-primary-50"
        >
          {copied ? '✅ 已复制' : '📋 复制'}
        </button>
      </div>

      <div className="space-y-1">
        {ingredientDetails.map(({ id: ingId, amount, detail }) => (
          <div key={ingId} className="flex items-center justify-between py-2.5 border-b border-gray-50 px-2 -mx-2">
            <div className="flex-1">
              <div className="font-semibold text-sm text-gray-800">
                {detail ? detail.name : ingId}
                {detail && <span className="text-gray-400 font-normal ml-1 text-xs">（{detail.nameEn}）</span>}
              </div>
              <div className="text-xs text-gray-500">{amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SupermarketLinks = () => (
    <div className="card p-4 sm:p-5">
      <h3 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">去买食材</h3>
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
      {/* Breadcrumb */}
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
          {/* Hero — show real image if available, otherwise gradient fallback */}
          {hasRealImage ? (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-6 bg-gray-100">
              <img
                src={recipeImages[currentImageIndex]}
                alt={recipe.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-full bg-gradient-to-br from-primary/10 via-orange-50 to-secondary/10 items-center justify-center text-6xl sm:text-8xl">
                {catInfo?.icon || '🍽️'}
              </div>
              {/* Image navigation arrows */}
              {recipeImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-lg backdrop-blur-sm transition-colors"
                  >‹</button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center text-lg backdrop-blur-sm transition-colors"
                  >›</button>
                  {/* Image indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {recipeImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-5' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}
              {/* XHS badge */}
              {recipe.xiaohongshuUrl && (
                <a
                  href={recipe.xiaohongshuUrl}
                  target="_blank"
                  rel="noopener"
                  className="absolute top-3 right-3 bg-red-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full no-underline hover:bg-red-600 backdrop-blur-sm"
                >
                  小红书 ↗
                </a>
              )}
            </div>
          ) : (
            <div className="w-full h-40 sm:h-56 bg-gradient-to-br from-primary/10 via-orange-50 to-secondary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center text-6xl sm:text-8xl mb-4 sm:mb-6 relative overflow-hidden">
              <span className="relative z-10">{catInfo?.icon || '🍽️'}</span>
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full" />
            </div>
          )}

          {/* Title + Meta */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-2 mb-2">
              {catInfo && (
                <span className="bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {catInfo.icon} {catInfo.name}
                </span>
              )}
              <span className={`text-white text-xs font-bold px-2.5 py-1 rounded-full ${
                recipe.difficulty === 'easy' ? 'bg-green-500' :
                recipe.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">{recipe.name}</h1>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{recipe.description}</p>

            {/* Quick stats */}
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">⏱️ {recipe.cookTime}分钟</span>
              <span className="flex items-center gap-1">👤 {recipe.servings}人份</span>
              {recipe.likes > 0 && (
                <span className="flex items-center gap-1">❤️ {recipe.likes}</span>
              )}
            </div>
          </div>

          {/* Tags */}
          {recipe.tags && (
            <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
              {recipe.tags.map(tag => (
                <span key={tag} className="text-xs sm:text-sm bg-primary-50 text-primary px-2.5 sm:px-3 py-1 rounded-full font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 小红书 reference (only show if no real image hero — otherwise badge is on image) */}
          {recipe.xiaohongshuUrl && !hasRealImage && (
            <a
              href={recipe.xiaohongshuUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-semibold px-4 py-2.5 rounded-2xl mb-6 sm:mb-8 no-underline hover:bg-red-100 active:bg-red-200"
            >
              参考小红书原帖 ↗
            </a>
          )}

          {/* Steps */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-4 sm:mb-6">烹饪步骤</h2>
            <div className="space-y-4 sm:space-y-5">
              {recipe.steps.map((step, i) => (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-xs sm:text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.text}</div>
                    {/* Step image */}
                    {step.image && (
                      <div className="mt-2 rounded-xl overflow-hidden bg-gray-50">
                        <img
                          src={step.image}
                          alt={`步骤 ${i + 1}`}
                          className="w-full max-h-64 object-cover"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    )}
                    {step.tip && (
                      <div className="mt-1 text-xs text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg inline-block">
                        💡 {step.tip}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips section */}
          {recipe.tips && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-5 rounded-2xl mb-8 sm:mb-10">
              <div className="font-bold text-yellow-800 mb-2 text-sm sm:text-base">小贴士</div>
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
