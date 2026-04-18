import { ArrowUp, ArrowDown, TrendingUp, TrendingDown } from "lucide-react";

interface StockCardProps {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  sector: string;
}

export function StockCard({
  symbol,
  name,
  price,
  change,
  changePercent,
  volume,
  marketCap,
  sector,
}: StockCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {symbol}
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {sector}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{name}</p>
        </div>
        <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          <span className="text-sm font-medium">
            {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </p>
          <p className={`text-sm ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {isPositive ? '+' : ''}${change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">거래량</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {(volume / 1000000).toFixed(1)}M
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">시가총액</p>
            <p className="font-medium text-gray-900 dark:text-white">{marketCap}</p>
          </div>
        </div>
        
        <div className="flex gap-2 pt-4">
          <button className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
            관심 추가
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
            상세 보기
          </button>
        </div>
      </div>
    </div>
  );
}
