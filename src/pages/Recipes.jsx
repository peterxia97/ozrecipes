import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import recipesData from '../data/recipes';
import categoriesData from '../data/categories';

const difficultyMap = { easy: '简单', medium: '中等', hard: '困难' };

export default function Recipes() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get('category') || 'all';
  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = recipesData;
    if (activeCat !== 'all') {
      list = list.filter(r => r.category === activeCat);
    }
    if (search.trim()) {
      const kw = search.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(kw) ||
        r.description.toLowerCase().includes(kw) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(kw))
      );
    }
    return list;
  }, [activeCat, search]);

  const handleCatChange = (catId) => {
    setActiveCat(catId);
    if (catId === 'all') {
      setParams({});
    } else {
      setParams({ category: catId });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
      {/* Header */}
      <h1 className="section-title">📖 全部菜谱</h1>
      <p className="section-subtitle">用本地超市食材，做熟悉的好味道</p>

      {/* Search */}
      <div className="relative mb-5">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜索菜名、食材..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none text-sm"
        />
      </div>

      {/* Category Filter — horizontal scroll on mobile */}
      <div className="relative mb-6 -mx-4 px-4">
        <div className="flex gap-2 overflow-x-auto scroll-mobile pb-2">
          {categoriesData.recipeCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCatChange(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                activeCat === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary active:bg-gray-50'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-5">
        共找到 <span className="text-primary font-bold">{filtered.length}</span> 道菜谱
      </p>

      {/* Recipe Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">🍽️</div>
          <p>没有找到相关菜谱，换个关键词试试？</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filtered.map(recipe => {
            const catInfo = categoriesData.recipeCategories.find(c => c.id === recipe.category);
            return (
              <Link
                key={recipe.id}
                to={`/recipes/${recipe.id}`}
                className="card no-underline text-inherit active:scale-[0.98] hover:-translate-y-1 transition-transform"
              >
                <div className="h-28 sm:h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl sm:text-7xl">
                  {catInfo?.icon || '🍽️'}
                </div>
                <div className="p-2.5 sm:p-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <span className={`tag text-[10px] sm:text-xs ${
                      recipe.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      recipe.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {difficultyMap[recipe.difficulty]}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400">⏱️{recipe.cookTime}min</span>
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-0.5 sm:mb-1 line-clamp-1 sm:line-clamp-2">{recipe.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1 sm:line-clamp-2 hidden sm:block">{recipe.description}</p>
                  {recipe.tags && (
                    <div className="mt-1.5 sm:mt-3 flex flex-wrap gap-1">
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
      )}
    </div>
  );
}
