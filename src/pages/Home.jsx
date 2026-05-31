import { Link } from 'react-router-dom';
import recipesData from '../data/recipes';
import specialsData from '../data/specials';
import categoriesData from '../data/categories';

const featured = recipesData.slice(0, 6);
const weekSpecials = specialsData.specials.slice(0, 6);
const categoryIcons = {
  breakfast: '🌅', lunch: '🍱', dinner: '🍳',
  supper: '🌙', hotpot: '🫕', dessert: '🍮',
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-orange-400 to-secondary text-white py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              澳洲留子
              <br />
              <span className="text-yellow-200">快手菜</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Coles / Woolworths / Aldi 能买到的食材
              <br className="hidden md:inline" />
              10分钟搞定一顿好饭 🇦🇺
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/recipes" className="btn-primary bg-white text-primary hover:bg-yellow-50">
                📖 逛菜谱
              </Link>
              <Link to="/specials" className="btn-secondary border-white text-white hover:bg-white/20">
                🔥 本周特价
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
              <div className="relative text-[180px] md:text-[220px] leading-none select-none">
                🍳
              </div>
              {/* Floating badges */}
              <span className="absolute top-4 right-4 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ⏱️ 10min
              </span>
              <span className="absolute bottom-8 left-0 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                💰 低成本
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Bar */}
      <section className="bg-white border-y border-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8 flex-wrap">
          <span className="text-gray-400 text-sm font-semibold">合作超市</span>
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
              className={`${s.bg} text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-80 no-underline`}
            >
              {s.name}
            </a>
          ))}
          <span className="text-gray-400 text-xs ml-2">数据每周更新 ↗</span>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="section-title text-center">选择分类</h2>
        <p className="section-subtitle text-center">想吃什么？点进去看看 👇</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categoriesData.recipeCategories.filter(c => c.id !== 'all').map(cat => (
            <Link
              key={cat.id}
              to={`/recipes?category=${cat.id}`}
              className="card p-5 text-center hover:-translate-y-1 transition-transform no-underline"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="font-bold text-sm text-gray-800">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-1">{cat.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">🔥 热门菜谱</h2>
            <p className="section-subtitle">留子们都在做</p>
          </div>
          <Link to="/recipes" className="text-primary font-semibold text-sm hover:underline no-underline">
            查看全部 →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(recipe => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="card no-underline text-inherit hover:-translate-y-1 transition-transform"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-7xl">
                {categoryIcons[recipe.category] || '🍽️'}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`tag ${
                    recipe.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {recipe.difficulty === 'easy' ? '简单' : recipe.difficulty === 'medium' ? '中等' : '困难'}
                  </span>
                  <span className="text-xs text-gray-400">⏱️ {recipe.cookTime}分钟</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{recipe.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{recipe.description}</p>
                {/* Ingredient price hint */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {recipe.ingredients.slice(0, 3).map(ing => (
                    <span key={ing.id} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {ing.name}
                    </span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="text-xs text-gray-400">+{recipe.ingredients.length - 3}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly Specials Preview */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">🔥 本周特价</h2>
              <p className="section-subtitle">Coles & Woolworths 优惠速递</p>
            </div>
            <Link to="/specials" className="text-primary font-semibold text-sm hover:underline no-underline">
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {weekSpecials.map(s => (
              <div key={s.id} className="card p-4 flex gap-4 items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-3xl shrink-0">
                  🛒
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${
                      s.brand === 'coles' ? 'bg-[#E31E24]' : s.brand === 'woolies' ? 'bg-[#1C7A3C]' : 'bg-[#004C9B]'
                    }`}>
                      {s.brand === 'coles' ? 'Coles' : s.brand === 'woolies' ? 'Woolies' : 'Aldi'}
                    </span>
                    {s.isHot && <span className="text-xs">🔥</span>}
                  </div>
                  <div className="font-semibold text-sm text-gray-900 truncate">{s.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-extrabold">${s.salePrice.toFixed(2)}</span>
                    {s.originalPrice > s.salePrice && (
                      <>
                        <span className="text-xs text-gray-400 line-through">${s.originalPrice.toFixed(2)}</span>
                        <span className="text-xs text-red-500 font-bold">-{Math.round((1 - s.salePrice / s.originalPrice) * 100)}%</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future: Cocktail Teaser */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="card bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-10 text-center">
          <div className="text-5xl mb-4">🍸</div>
          <h2 className="text-2xl font-extrabold mb-2">居家调酒版块</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            用 Coles / Woollies 能买到的酒和配料，
            <br />
            在家调出酒吧同款 🍹 即将上线，敬请期待！
          </p>
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-6 py-3 rounded-2xl backdrop-blur">
            🚧 开发中… 欢迎投稿调酒配方！
          </span>
        </div>
      </section>
    </div>
  );
}
