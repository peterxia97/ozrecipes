import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/',           label: '首页',    icon: '🏠' },
  { to: '/recipes',    label: '菜谱',    icon: '📖' },
  { to: '/specials',   label: '本周特价', icon: '🔥' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const isActive = (to) => pathname === to;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🍳</span>
          <span className="font-extrabold text-lg text-primary hidden sm:inline">
            澳洲留子快手菜
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {links.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-colors no-underline ${
                isActive(to)
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-primary-50 hover:text-primary'
              }`}
            >
              <span className="sm:hidden">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>

        {/* Future: 调酒入口 */}
        <Link
          to="/specials"
          className="text-xs bg-secondary text-white px-3 py-1.5 rounded-full font-semibold hover:bg-secondary-600 transition-colors no-underline hidden md:inline-block"
        >
          🍸 调酒版块即将上线
        </Link>
      </div>
    </nav>
  );
}
