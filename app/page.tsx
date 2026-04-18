import { StockCard } from "@/components/stock-card";
import { Search, Filter, RefreshCw } from "lucide-react";

// 샘플 주식 데이터
const sampleStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.34,
    change: 2.15,
    changePercent: 1.24,
    volume: 58342900,
    marketCap: "$2.7T",
    sector: "Technology",
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 415.86,
    change: 5.32,
    changePercent: 1.30,
    volume: 25431800,
    marketCap: "$3.1T",
    sector: "Technology",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 151.23,
    change: -0.85,
    changePercent: -0.56,
    volume: 18324500,
    marketCap: "$1.9T",
    sector: "Technology",
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    price: 178.21,
    change: 3.42,
    changePercent: 1.96,
    volume: 42318700,
    marketCap: "$1.8T",
    sector: "Consumer",
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    price: 175.79,
    change: -2.15,
    changePercent: -1.21,
    volume: 102345600,
    marketCap: "$560B",
    sector: "Automotive",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 950.02,
    change: 25.48,
    changePercent: 2.76,
    volume: 48329000,
    marketCap: "$2.3T",
    sector: "Technology",
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    price: 485.75,
    change: 8.65,
    changePercent: 1.81,
    volume: 18234500,
    marketCap: "$1.2T",
    sector: "Technology",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 195.48,
    change: 1.23,
    changePercent: 0.63,
    volume: 12345600,
    marketCap: "$570B",
    sector: "Financial",
  },
  {
    symbol: "V",
    name: "Visa Inc.",
    price: 275.34,
    change: 2.89,
    changePercent: 1.06,
    volume: 8345600,
    marketCap: "$550B",
    sector: "Financial",
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    price: 151.67,
    change: -0.45,
    changePercent: -0.30,
    volume: 7234500,
    marketCap: "$380B",
    sector: "Healthcare",
  },
  {
    symbol: "WMT",
    name: "Walmart Inc.",
    price: 67.89,
    change: 0.78,
    changePercent: 1.16,
    volume: 9234500,
    marketCap: "$430B",
    sector: "Consumer",
  },
  {
    symbol: "PG",
    name: "Procter & Gamble Co.",
    price: 165.43,
    change: 0.89,
    changePercent: 0.54,
    volume: 6234500,
    marketCap: "$390B",
    sector: "Consumer",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            실시간 미국 주식 시장
          </h1>
          <p className="text-blue-100 text-lg mb-8">
            Apple, Microsoft, Google, Amazon 등 주요 미국 기업의 실시간 주식 가격을 확인하세요.
            최신 시장 데이터와 투자 인사이트를 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="주식 심볼 검색 (예: AAPL, TSLA, GOOGL)"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <RefreshCw className="h-4 w-4" />
              데이터 새로고침
            </button>
          </div>
        </div>
      </div>

      {/* 필터 섹션 */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            전체
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">
            기술주
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">
            금융주
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">
            소비재주
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium">
            의료주
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>가격순</option>
            <option>변동률순</option>
            <option>시가총액순</option>
            <option>거래량순</option>
          </select>
        </div>
      </div>

      {/* 주식 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleStocks.map((stock) => (
          <StockCard key={stock.symbol} {...stock} />
        ))}
      </div>

      {/* 정보 섹션 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          투자 정보
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              실시간 데이터
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Alpha Vantage API를 통해 15분 지연된 실시간 주식 데이터를 제공합니다.
              주요 지수와 개별 주식의 가격 변동을 확인하세요.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              시장 동향
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              기술주, 금융주, 소비재주 등 섹터별 시장 동향을 분석합니다.
              투자 포트폴리오 다각화에 도움이 되는 정보를 제공합니다.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              투자 참고사항
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              본 정보는 투자 권유가 아닙니다. 투자 결정 전 전문가 상담을 권장합니다.
              시장 변동성에 유의하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
