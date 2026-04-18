import { TrendingUp } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              US Stock Tracker
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              실시간 미국 주식 가격
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            홈
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            관심주식
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            시장동향
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
            설정
          </a>
        </nav>
      </div>
    </header>
  );
}
