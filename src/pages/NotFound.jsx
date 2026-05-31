import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-6">🍳</div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">404</h1>
      <p className="text-lg text-gray-500 mb-2">页面找不到了</p>
      <p className="text-sm text-gray-400 mb-8">可能菜谱还没写到这里，回首页看看吧</p>
      <Link
        to="/"
        className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all no-underline"
      >
        回首页
      </Link>
    </div>
  );
}
