import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 標題區域 */}
      <div className="bg-white shadow-md py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">Welcome to My Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-600">Cybersecurity Professional | Photographer</p>
        </div>
      </div>

      {/* 左右兩區塊 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* 左邊 - 資安履歷 */}
          <Link to="/cyber-security">
            <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 border-blue-500 bg-white transform hover:scale-105">
              <div className="h-56 md:h-64 bg-gradient-to-b from-blue-200 to-blue-300 flex items-center justify-center overflow-hidden">
                <div className="text-center text-white">
                  <div className="text-6xl md:text-7xl mb-2">🔐</div>
                  <p className="text-xl font-semibold">Cybersecurity</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">資訊安全顧問</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  擁有 7+ 年資安顧問服務經驗，專精於滲透測試、應用安全與資安事件應變。目前領導資安專業團隊，致力於提升企業安全防禦。
                </p>
                <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800">
                  查看履歷 <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* 右邊 - 攝影履歷 */}
          <Link to="/photography">
            <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 border-purple-500 bg-white transform hover:scale-105">
              <div className="h-56 md:h-64 bg-gradient-to-b from-purple-200 to-purple-300 flex items-center justify-center overflow-hidden">
                <div className="text-center text-white">
                  <div className="text-6xl md:text-7xl mb-2">📷</div>
                  <p className="text-xl font-semibold">Photography</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">專業攝影師</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  使用 Fujifilm 專業器材進行創意攝影，擅長人像、風景與商業攝影。以獨特的視角捕捉每個精彩時刻。
                </p>
                <div className="flex items-center text-purple-600 font-semibold hover:text-purple-800">
                  查看作品 <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
