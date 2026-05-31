import { Link } from 'react-router-dom';
import recipesData from '../data/recipes';
import specialsData from '../data/specials';
import categoriesData from '../data/categories';

const featured = recipesData.slice(0, 6);
const weekSpecials = specialsData.specials
  .filter(s => s.isHot && s.image)
  .slice(0, 6);

// 如果有图片的热门商品不够6个，用有图片的补上
if (weekSpecials.length < 6) {
  const extra = specialsData.specials
    .filter(s => s.image && !s.isHot && !weekSpecials.find(w => w.id === s.id))
    .slice(0, 6 - weekSpecials.length);
  weekSpecials.push(...extra);
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-orange-400 to-secondary text-white py-14 sm:py-20 px-4 overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              澳洲留子
              <br />
              <span className="text-yellow-200">快手菜</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Coles · Woolworths · Aldi 能买到的食材
              <br className="hidden md:inline" />
              10分钟搞定一顿好饭
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Link to="/recipes" className="bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 active:scale-95 transition-all no-underline shadow-lg">
                逛菜谱
              </Link>
              <Link to="/specials" className="bg-white/20 text-white border-2 border-white/40 font-bold px-6 py-3 rounded-xl hover:bg-white/30 active:scale-95 transition-all no-underline backdrop-blur-sm">
                本周半价
              </Link>
            </div>
          </div>

          {/* Hero Visual — Feature highlights */}
          <div className="flex-1 w-full max-w-sm md:max-w-md">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl sm:text-4xl mb-2">⚡</div>
                <div className="text-sm font-bold">10分钟</div>
                <div className="text-xs text-white/70">快手搞定</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl sm:text-4xl mb-2">💰</div>
                <div className="text-sm font-bold">低成本</div>
                <div className="text-xs text-white/70">超市食材</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl sm:text-4xl mb-2">🇦🇺</div>
                <div className="text-sm font-bold">本地超市</div>
                <div className="text-xs text-white/70">随时买到</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="text-3xl sm:text-4xl mb-2">🔥</div>
                <div className="text-sm font-bold">每周半价</div>
                <div className="text-xs text-white/70">比价省更多</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Bar */}
      <section className="bg-white border-y border-gray-100 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <span className="text-gray-400 text-xs sm:text-sm font-semibold">数据来源</span>
          {[
            { name: 'Coles',       bg: 'bg-[#E31E24]', url: 'https://www.coles.com.au' },
            { name: 'Woolworths',  bg: 'bg-[#1C7A3C]', url: 'https://www.woolworths.com.au' },
            { name: 'Aldi',        bg: 'bg-[#004C9B]', url: 'https://www.aldi.com.au' },
          ].map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener"
              className={`${s.bg} text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-80 active:opacity-70 no-underline`}
            >
              {s.name}
            </a>
          ))}
          <span className="text-gray-400 text-xs ml-1 sm:ml-2">半价每周自动更新</span>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="section-title text-center">选择分类</h2>
        <p className="section-subtitle text-center">想吃什么？点进去看看</p>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {categoriesData.recipeCategories.filter(c => c.id !== 'all').map(cat => (
            <Link
              key={cat.id}
              to={`/recipes?category=${cat.id}`}
              className="card p-3 sm:p-5 text-center active:scale-95 hover:-translate-y-1 transition-transform no-underline group"
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="font-bold text-xs sm:text-sm text-gray-800">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-0.5 sm:mt-1 hidden sm:block">{cat.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="section-title">热门菜谱</h2>
            <p className="section-subtitle">留子们都在做</p>
          </div>
          <Link to="/recipes" className="text-primary font-semibold text-sm hover:underline no-underline">
            全部 →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featured.map(recipe => {
            const catInfo = categoriesData.recipeCategories.find(c => c.id === recipe.category);
            const diffColor = recipe.difficulty === 'easy'
              ? 'bg-green-500' : recipe.difficulty === 'medium'
              ? 'bg-yellow-500' : 'bg-red-500';
            const diffLabel = recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难';
            return (
              <Link
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                className="card no-underline text-inherit active:scale-[0.98] hover:-translate-y-1 transition-transform group"
              >
                {/* Image area with category icon */}
                <div className="h-28 sm:h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl sm:text-7xl relative overflow-hidden">
                  <span className="group-hover:scale-110 transition-transform">{catInfo?.icon || '🍽️'}</span>
                  {/* Difficulty badge overlay */}
                  <span className={`absolute top-2 right-2 sm:top-3 sm:right-3 ${diffColor} text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full`}>
                    {diffLabel}
                  </span>
                </div>
                <div className="p-2.5 sm:p-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1">{recipe.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>⏱️ {recipe.cookTime}分钟</span>
                    <span>·</span>
                    <span>👤 {recipe.servings}人份</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-1 hidden sm:block">{recipe.description}</p>
                  {recipe.tags && (
                    <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1">
                      {recipe.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] sm:text-xs bg-primary-50 text-primary px-1.5 sm:px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Weekly Specials Preview */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6 sm:mb-8">
            <div>
              <h2 className="section-title">本周半价</h2>
              <p className="section-subtitle">Coles & Woolworths 优惠速递</p>
            </div>
            <Link to="/specials" className="text-primary font-semibold text-sm hover:underline no-underline">
              全部 →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {weekSpecials.map(s => {
              const sStore = s.store || s.brand;
              const discount = s.originalPrice > s.salePrice
                ? Math.round((1 - s.salePrice / s.originalPrice) * 100)
                : 0;
              return (
                <div key={s.id} className="card p-2 sm:p-3 flex flex-col items-center text-center group">
                  {/* Real product image */}
                  <div className="w-full h-20 sm:h-24 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden mb-2">
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.nameZh || s.nameEn}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform"
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl">🛒</span>
                    )}
                  </div>
                  {/* Store + discount badges */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white ${
                      sStore === 'coles' ? 'bg-[#E31E24]' : sStore === 'woolworths' || sStore === 'woolies' ? 'bg-[#1C7A3C]' : 'bg-[#004C9B]'
                    }`}>
                      {sStore === 'coles' ? 'Coles' : sStore === 'woolworths' || sStore === 'woolies' ? 'Woolies' : 'Aldi'}
                    </span>
                    {discount > 0 && (
                      <span className="text-[9px] sm:text-[10px] font-bold text-red-500 bg-red-50 px-1 py-0.5 rounded">
                        -{discount}%
                      </span>
                    )}
                  </div>
                  {/* Name */}
                  <div className="font-semibold text-[10px] sm:text-xs text-gray-800 line-clamp-2 mb-1 min-h-[2rem] sm:min-h-[2.5rem]">
                    {s.nameZh || s.nameEn || s.name}
                  </div>
                  {/* Price */}
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm font-extrabold text-primary">${s.salePrice.toFixed(2)}</span>
                    {s.originalPrice > s.salePrice && (
                      <span className="text-[9px] text-gray-400 line-through">${s.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cocktail Teaser — simplified */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <div className="card bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6 sm:p-10 text-center">
          <div className="text-4xl sm:text-5xl mb-4">🍸</div>
          <h2 className="text-xl sm:text-2xl font-extrabold mb-2">居家调酒版块</h2>
          <p className="text-white/80 mb-6 max-w-full sm:max-w-lg mx-auto text-sm sm:text-base">
            用 Coles / Woolies 能买到的酒和配料，在家调出酒吧同款
          </p>
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl backdrop-blur active:bg-white/30">
            即将上线 · 欢迎投稿调酒配方
          </span>
        </div>
      </section>
    </div>
  );
}
