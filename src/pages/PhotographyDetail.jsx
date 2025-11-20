import { Camera, Image, ExternalLink, Youtube, Instagram } from 'lucide-react';

export default function PhotographyDetail() {
  const equipment = [
    {
      category: "相機",
      items: ["Fujifilm X-T4"]
    },
    {
      category: "鏡頭",
      items: ["Fujifilm 16-55mm F2.8 II", "Fujifilm 56mm F1.2", "Fujifilm 23mm F2"]
    },
    {
      category: "其他器材",
      items: ["OSMO Pocket 3", "Godox 神牛 V1 圓頭閃光燈"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-8 px-4 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-12">攝影作品集</h1>

        <section className="mb-12">
          <div className="flex items-center mb-8">
            <Image className="text-amber-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-amber-900">攝影作品</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-sm text-center border-l-4 border-amber-700 hover:shadow-md transition-shadow">
              <p className="text-amber-900 mb-6 text-lg">探索我的攝影作品集，欣賞不同風格的創意攝影作品。</p>
              <a
                href="https://your-photography-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-800 text-amber-50 px-8 py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors"
              >
                查看作品集 <ExternalLink size={20} className="ml-2" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://youtube.com/@elmoisfree?si=LVwtJRf4amkyAUUs"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border-l-4 border-amber-700 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-300 transition-colors">
                    <Youtube size={48} className="text-red-600" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-1">YouTube 頻道</h3>
                      <p className="text-amber-800">觀看我的影片創作</p>
                    </div>
                    <div className="inline-flex items-center text-amber-800 group-hover:text-amber-900 font-semibold text-sm mt-3">
                      查看更多 <ExternalLink size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/elmootw/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border-l-4 border-amber-700 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-300 transition-colors">
                    <Instagram size={48} className="text-pink-600" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-1">Instagram</h3>
                      <p className="text-amber-800">追蹤我的日常攝影</p>
                    </div>
                    <div className="inline-flex items-center text-amber-800 group-hover:text-amber-900 font-semibold text-sm mt-3">
                      查看更多 <ExternalLink size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-8">
            <Camera className="text-amber-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-amber-900">攝影器材</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((equip, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-amber-700 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-amber-900 mb-4">{equip.category}</h3>
                <ul className="space-y-2">
                  {equip.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-amber-900 flex items-center">
                      <span className="text-amber-600 mr-3 flex-shrink-0">✓</span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
