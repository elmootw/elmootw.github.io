import { Camera, Zap, Image, ExternalLink } from 'lucide-react';

export default function PhotographyDetail() {
  const equipment = [
    {
      category: "相機",
      items: ["Fujifilm X-T4"]
    },
    {
      category: "鏡頭",
      items: ["Fujifilm 56mm F1.2", "Fujifilm 23mm F2"]
    },
    {
      category: "其他器材",
      items: ["OSMO Pocket 3"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-8 px-4 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">攝影作品集</h1>

        {/* 攝影器材 */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <Camera className="text-purple-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">攝影器材</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((equip, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{equip.category}</h3>
                <ul className="space-y-2">
                  {equip.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-700 flex items-center">
                      <span className="text-purple-600 mr-3 flex-shrink-0">✓</span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 作品集連結 */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <Image className="text-purple-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">攝影作品</h2>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md text-center border-4 border-purple-300 hover:shadow-lg transition-shadow">
            <p className="text-gray-700 mb-6 text-lg">探索我的攝影作品集，欣賞不同風格的創意攝影作品。</p>
            <a
              href="https://your-photography-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              查看作品集 <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </section>

        {/* 攝影風格 */}
        <section>
          <div className="flex items-center mb-8">
            <Zap className="text-purple-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">攝影風格</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['人像攝影', '風景攝影', '商業攝影'].map((style, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-center border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                <p className="text-gray-800 font-semibold text-lg">{style}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
