import { Github, Twitter, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              US Stock Tracker
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              실시간 미국 주요 주식 가격 정보를 제공하는 웹 애플리케이션입니다.
              투자 결정을 위한 최신 시장 데이터를 확인하세요.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              빠른 링크
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  주요 지수
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  기술주
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  금융주
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  소비재주
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              연결
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Website"
              >
                <Globe className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              데이터는 Alpha Vantage API를 통해 제공됩니다.
              <br />
              실시간 데이터는 15분 지연됩니다.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 US Stock Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
