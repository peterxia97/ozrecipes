import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useShoppingList } from '../contexts/ShoppingListContext';

const links = [
  { to: '/',           label: '首页',    icon: '🏠' },
  { to: '/recipes',    label: '菜谱',    icon: '📖' },
  { to: '/specials',   label: '本周特价', icon: '🔥' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useShoppingList();
  const isActive = (to) => pathname === to;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🍳</span>
          <span className="font-extrabold text-base sm:text-lg text-primary">
            澳洲留子快手菜
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors no-underline ${
                isActive(to)
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-primary-50 active:bg-primary-100 hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/specials"
            className="ml-2 text-xs bg-secondary text-white px-3 py-1.5 rounded-full font-semibold hover:bg-secondary-600 active:bg-secondary-700 transition-colors no-underline"
          >
            🍸 调酒版块即将上线
          </Link>
          <Link
            to="/shopping-list"
            className={`relative ml-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors no-underline ${
              isActive('/shopping-list')
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:bg-primary-50 active:bg-primary-100 hover:text-primary'
            }`}
          >
            🛒 采购清单
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalCount > 9 ? '9+' : totalCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden w-11 h-11 flex items-center justify-center rounded-xl active:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold no-underline ${
                  isActive(to)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 active:bg-gray-100'
                }`}
              >
                <span className="text-xl">{icon}</span>
                {label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <span className="text-xs text-secondary font-semibold">🍸 调酒版块即将上线</span>
            </div>
            <Link
              to="/shopping-list"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold no-underline ${
                isActive('/shopping-list')
                  ? 'bg-primary text-white'
                  : 'text-gray-700 active:bg-gray-100'
              }`}
            >
              <span className="text-xl">🛒</span>
              采购清单
              {totalCount > 0 && (
                <span className="ml-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
