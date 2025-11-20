import { Briefcase, Award, Mic, BookOpen } from 'lucide-react';

export default function CyberSecurityDetail() {
  const workExperience = [
    {
      company: "雲力橘子數位股份有限公司",
      position: "資安服務部 - 經理",
      period: "2024/04 - 至今",
      duration: "1+ 年",
      description: [
        "領導 8 人資安專業團隊，統籌管理年度預算及資源配置",
        "制定部門策略規劃與 OKR，建立標準化服務流程及審核機制",
        "監督資安專案執行，確保服務品質",
        "主導原始碼安全檢測服務，實施安全程式碼弱點誤判審核標準，擔任第三方資安專家角色判讀弱點情形",
        "維護並優化 Google Apps Script 自動化報告生成系統",
        "代表公司參與產業會議與論壇，提升品牌知名度與市場競爭力"
      ]
    },
    {
      company: "果核數位股份有限公司",
      position: "資訊安全部 - 副理",
      period: "2022/05 - 2024/03",
      duration: "1 年 11 個月",
      description: [
        "負責資安服務專案規劃、資源分配與成本評估（滲透測試、弱點掃描、資安健診、釣魚演練與資安意識培訓專案等）",
        "主導跨產業網站 API、應用程式及行動 APP 滲透測試，服務金融、遊戲、電商及支付領域客戶",
        "使用 Google Apps Script 開發自動化報告生成系統",
        "執行資安事件緊急應變與鑑識調查",
        "領導資安服務售前流程，協助客戶制定測試範圍與方法論",
        "提供專業漏洞分析與客製化修補方案建議",
        "擔任客戶與技術團隊間的溝通橋樑，協調專案需求與實施細節",
        "規劃並執行實體與線上資安意識訓練課程"
      ]
    },
    {
      company: "詮睿科技股份有限公司",
      position: "資安顧問服務處 - 資安顧問",
      period: "2019/02 - 2022/04",
      duration: "3 年 3 個月",
      description: [
        "主導網站 API、應用程式及行動 APP 滲透測試專案，涵蓋金融保險、遊戲、電商、電子票券及支付產業",
        "提供資安事件快速應變與調查服務",
        "參與專案提案、需求確認及與客戶共同制定測試範圍與方法論",
        "分析滲透測試結果並提出最適合的漏洞修補方案",
        "進行資安服務售前會議",
        "與客戶承包商和開發團隊進行技術溝通",
        "規劃並執行實體與線上資安意識訓練課程"
      ]
    },
    {
      company: "果核數位股份有限公司",
      position: "資訊安全部 - 資安工程師",
      period: "2017/11 - 2019/02",
      duration: "1 年 3 個月",
      description: [
        "執行網站 API、應用程式及行動 APP 滲透測試專案，涵蓋銀行、遊戲、電商、電子票券及支付行業",
        "使用 Django 框架開發自動化報告生成系統",
        "進行資安威脅研究並撰寫分析報告",
        "運用 Micro Focus Fortify 執行靜態應用安全測試，分析漏洞並提供客戶審核報告",
        "規劃執行釣魚演練與資安意識培訓專案"
      ]
    }
  ];

  const education = [
    {
      school: "國立臺灣科技大學",
      degree: "資訊管理所 - 碩士",
      period: "2015 - 2017"
    },
    {
      school: "國立新竹教育大學",
      degree: "應用科學系 - 學士",
      period: "2009 - 2013"
    }
  ];

  const certifications = [
    { name: "CPENT", color: "from-red-500 to-red-600" },
    { name: "LPT", color: "from-orange-500 to-orange-600" },
    { name: "ISO 27001:2022 LA", color: "from-yellow-500 to-yellow-600" },
    { name: "CHFI", color: "from-green-500 to-green-600" },
    { name: "ECSA", color: "from-blue-500 to-blue-600" },
    { name: "CEH", color: "from-purple-500 to-purple-600" }
  ];

  const speeches = [
    {
      title: "數位轉型下的資安挑戰：企業需求與人才機會",
      event: "CYBERSEC 2025 臺灣資安大會",
      date: "2025/04/17"
    },
    {
      title: "How to Get Away with Hacking",
      event: "北科大資安社",
      date: "2025/05/21"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-4 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">資訊安全職涯</h1>

        {/* 工作經驗 */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <Briefcase className="text-blue-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">工作經驗</h2>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{job.position}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 text-sm font-semibold">{job.period}</p>
                    <p className="text-gray-500 text-xs">{job.duration}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.description.map((desc, descIdx) => (
                    <li key={descIdx} className="text-gray-700 flex">
                      <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 學歷 */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <BookOpen className="text-blue-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">學歷</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.school}</h3>
                <p className="text-blue-600 font-semibold mb-2">{edu.degree}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 證照 */}
        <section className="mb-12">
          <div className="flex items-center mb-8">
            <Award className="text-blue-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">專業證照</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${cert.color} rounded-lg p-6 shadow-md text-white text-center font-bold text-lg hover:shadow-lg transition-shadow transform hover:scale-105`}
              >
                {cert.name}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4 italic">*證照詳細資訊（編號、有效日期、圖片）請另行添加</p>
        </section>

        {/* 演講經歷 */}
        <section>
          <div className="flex items-center mb-8">
            <Mic className="text-blue-600 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">演講經歷</h2>
          </div>
          <div className="space-y-6">
            {speeches.map((speech, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{speech.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{speech.event}</p>
                <p className="text-gray-600">{speech.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
