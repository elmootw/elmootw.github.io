import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      <div className="bg-white shadow-md py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">Elmo HSIAO</h1>
          <p className="text-lg md:text-xl text-gray-600">Cybersecurity | Photographer</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Link to="/cybersecurity">
            <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 border-blue-800 bg-white transform hover:scale-105">
              <div className="h-56 md:h-64 bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                <img src="/images/profile-cybersecurity.jpg" alt="Cybersecurity" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-900">資訊安全顧問</h2>
                <p className="text-blue-800 mb-4 line-clamp-3">擁有 8+ 年資安顧問服務經驗，專精於滲透測試、應用安全與資安事件應變。目前領導資安專業團隊，致力於提升企業安全防禦。</p>
                <div className="flex items-center text-blue-700 font-semibold hover:text-blue-900">
                  查看履歷 <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/photography">
            <div className="h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 border-amber-700 bg-white transform hover:scale-105">
              <div className="h-56 md:h-64 bg-gradient-to-b from-amber-100 to-orange-200 flex items-center justify-center overflow-hidden">
                <img src="/images/profile-photography.jpg" alt="Photography" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-amber-900">攝影師</h2>
                <p className="text-amber-800 mb-4 line-clamp-3">擅長人像、風景與商業攝影。以獨特的視角捕捉每個精彩時刻。</p>
                <div className="flex items-center text-amber-800 font-semibold hover:text-amber-900">
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
