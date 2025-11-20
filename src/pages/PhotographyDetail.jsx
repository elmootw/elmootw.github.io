import { Camera, Zap, Image } from 'lucide-react';

export default function PhotographyDetail() {
  const equipment = [
    { category: "Camera Body", items: ["Canon EOS R5", "Canon EOS R6"] },
    { category: "Lenses", items: ["RF 24-105mm f/4L", "RF 70-200mm f/2.8L", "RF 15-35mm f/2.8L"] },
    { category: "Accessories", items: ["Tripod", "ND Filters", "Circular Polarizer"] }
  ];

  const experience = [
    { year: 2015, description: "Started photography journey" },
    { year: 2018, description: "Professional photography business established" },
    { year: 2020, description: "Expanded to product and commercial photography" },
    { year: 2023, description: "Specialized in landscape and travel photography" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Photography Portfolio</h1>

        {/* 攝影器材 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Camera className="text-purple-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Equipment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((equip, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{equip.category}</h3>
                <ul className="space-y-2">
                  {equip.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-gray-700 flex items-center">
                      <span className="text-purple-600 mr-2">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 攝影經驗 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Zap className="text-purple-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Experience Timeline</h2>
          </div>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-600 flex">
                <div className="text-purple-600 font-bold text-xl mr-6 min-w-fit">{exp.year}</div>
                <div className="text-gray-700">{exp.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 作品集連結 */}
        <section>
          <div className="flex items-center mb-6">
            <Image className="text-purple-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Photography Portfolio</h2>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md text-center border-2 border-purple-300">
            <p className="text-gray-700 mb-4 text-lg">My photography portfolio is hosted on a separate site.</p>
            <a
              href="https://your-photography-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              View Full Portfolio →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
