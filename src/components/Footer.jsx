export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🍳</span>
            <span className="font-extrabold text-white text-lg">澳洲留子快手菜</span>
          </div>
          <p className="leading-relaxed">
            用 Coles / Woolworths / Aldi 能买到的食材，
            <br />
            做简单好吃的留学生快手菜 🇦🇺
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-3">快速导航</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary no-underline">首页</a></li>
            <li><a href="/recipes" className="hover:text-primary no-underline">全部菜谱</a></li>
            <li><a href="/specials" className="hover:text-primary no-underline">本周特价</a></li>
            <li><a href="#" className="hover:text-primary no-underline text-gray-500 cursor-not-allowed">🍸 调酒版块（即将上线）</a></li>
          </ul>
        </div>

        {/* Supermarket Links */}
        <div>
          <h4 className="text-white font-bold mb-3">合作超市</h4>
          <div className="flex flex-wrap gap-2">
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
                className={`${s.color} text-white text-xs font-bold px-3 py-1.5 rounded-full no-underline hover:opacity-80`}
              >
                {s.name}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed">
            💡 特价信息每周手动更新，以超市实际价格为准
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs">
        © {new Date().getFullYear()} 澳洲留子快手菜 · Built with ❤️ in Brisbane
      </div>
    </footer>
  );
}
