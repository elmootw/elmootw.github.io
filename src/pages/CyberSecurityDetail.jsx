import { Briefcase, Award, Mic, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CyberSecurityDetail() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [activeSection, setActiveSection] = useState('work-experience');

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
        "負責資安服務專案規劃、資源分配與成本評估",
        "主導跨產業網站 API、應用程式及行動 APP 滲透測試，服務金融、遊戲、電商及支付領域客戶",
        "使用 Google Apps Script 開發自動化報告生成系統",
        "執行資安事件緊急應變與鑑識調查",
        "領導資安服務售前流程，協助客戶制定測試範圍與方法論",
        "提供專業漏洞分析與客製化修補方案建議",
        "擔任客戶與技術團隊間的溝通橋樑"
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
    { school: "國立臺灣科技大學", degree: "資訊管理所 - 碩士", period: "2015 - 2017" },
    { school: "國立新竹教育大學", degree: "應用科學系 - 學士", period: "2009 - 2013" }
  ];

  const certifications = [
    { name: "CPENT", color: "from-gray-300 to-gray-400", image: "/images/certifications/CPENT.png", expiry: "2027/03/17" },
    { name: "LPT", color: "from-gray-300 to-gray-400", image: "/images/certifications/LPT.png", expiry: "2027/03/17" },
    { name: "ISO 27001:2022 LA", color: "from-gray-300 to-gray-400", image: "/images/certifications/ISO27001.png", expiry: "無期限" },
    { name: "CHFI", color: "from-gray-300 to-gray-400", image: "/images/certifications/CHFI.png", expiry: "2027/10/01" },
    { name: "ECSA", color: "from-gray-300 to-gray-400", image: "/images/certifications/ECSA.png", expiry: "2026/01/01" },
    { name: "CEH", color: "from-gray-300 to-gray-400", image: "/images/certifications/CEH.png", expiry: "2027/06/30" }
  ];

  const speeches = [
    { title: "How to Get Away with Hacking", event: "北科大資安社", date: "2025/05/21", link: null },
    { title: "數位轉型下的資安挑戰：企業需求與人才機會", event: "CYBERSEC 2025 臺灣資安大會", date: "2025/04/17", link: "https://cybersec.ithome.com.tw/2025/session-page/3507" },
    { title: "從滲透測試角度看身份驗證的重要性", event: "okta | Akamai | 果核 | 奧登 - 企業資安升級：從零信任架構到 API 防護", date: "2024-10-23", link: null },
    { title: "資安服務：從市場需求到人才招募", event: "第三十四屆全國資訊安全會議 CISC 2024", date: "2024-08-30", link: null },
    { title: "資安服務：從市場需求到人才招募", event: "2024 HITCON X Yourator 資安職涯論壇", date: "2024-08-17", link: null },
    { title: "簡單易行的攻擊方法：資安檢測人員的工作日常", event: "北科大資安學程", date: "2024-05-23", link: null },
    { title: "網站安全常見風險與風險管理", event: "果核數位 Hacker Talk 論壇", date: "2023-12-09", link: null },
    { title: "以資安治理角度理解 OWASP Top 10 2021", event: "CYBERSEC 2022 臺灣資安大會", date: "2022-09-20", link: "https://cybersec.ithome.com.tw/2022/session-page/833" },
    { title: "密碼學沒有入門", event: "NISRA", date: "2018-11-20", link: null },
    { title: "密碼學深入淺出", event: "HITCON GIRLS 資安萌芽推廣", date: "2017-07-08", link: "https://hitcon.kktix.cc/events/hitcongirls2017summer" },
    { title: "惡意程式分析與密碼學：你不可不知的資訊安全", event: "HITCON GIRLS 成功大學講座", date: "2016-04-28", link: "https://www.slideshare.net/slideshow/hitcon-girls-61507736/61507736" }
  ];

  const sections = [
    { id: 'work-experience', label: '工作經驗', icon: Briefcase },
    { id: 'speeches', label: '演講經歷', icon: Mic },
    { id: 'certifications', label: '專業證照', icon: Award },
    { id: 'education', label: '學歷', icon: BookOpen }
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const h2 = element.querySelector('h2');
          if (h2) {
            const rect = h2.getBoundingClientRect();
            // 檢查 h2 是否在視窗上方 150px 以內
            if (rect.top <= 150 && rect.bottom > 0) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100 py-8 px-4 md:py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-12">資安履歷</h1>

        <section className="mb-12" id="work-experience">
          <div className="flex items-center mb-8">
            <Briefcase className="text-blue-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">工作經驗</h2>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border-l-4 border-blue-800 hover:shadow-md hover:shadow-blue-800/20 transition-all">
                <button
                  onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                  className="w-full p-6 text-left flex flex-col md:flex-row md:justify-between md:items-start hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900">{job.position}</h3>
                    <p className="text-blue-700 font-semibold">{job.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0 flex items-center gap-3">
                    <div>
                      <p className="text-blue-800 text-sm font-semibold">{job.period}</p>
                      <p className="text-blue-700 text-xs">{job.duration}</p>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-blue-800 transition-transform flex-shrink-0 ${expandedJob === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {expandedJob === idx && (
                  <div className="px-6 pb-6 border-t border-blue-200">
                    <ul className="mt-4 space-y-2">
                      {job.description.map((desc, descIdx) => (
                        <li key={descIdx} className="text-blue-900 flex">
                          <span className="text-blue-600 mr-3 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="speeches">
          <div className="flex items-center mb-8">
            <Mic className="text-blue-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">演講經歷</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speeches.map((speech, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-800 hover:shadow-md hover:shadow-blue-800/20 transition-all flex flex-col">
                <h3 className="text-lg font-bold text-blue-900 mb-2 line-clamp-2">{speech.title}</h3>
                <p className="text-blue-700 font-semibold mb-1 text-sm line-clamp-2">{speech.event}</p>
                <p className="text-blue-800 text-sm mb-3">{speech.date}</p>
                {speech.link && (
                  <a
                    href={speech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-sm"
                  >
                    查看更多 <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12" id="certifications">
          <div className="flex items-center mb-8">
            <Award className="text-blue-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">專業證照</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border-t-4 border-blue-800 hover:shadow-md hover:shadow-blue-800/20 transition-all transform hover:scale-105">
                <img src={cert.image} alt={cert.name} className="w-full h-40 object-cover rounded-md mb-3" />
                <p className="text-blue-900 font-bold text-center mb-2">{cert.name}</p>
                <p className="text-blue-800 text-xs text-center">有效期限：{cert.expiry}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="flex items-center mb-8">
            <BookOpen className="text-blue-800 mr-3" size={32} />
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">學歷</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-blue-800 hover:shadow-md hover:shadow-blue-800/20 transition-all">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{edu.school}</h3>
                <p className="text-blue-700 font-semibold mb-2">{edu.degree}</p>
                <p className="text-blue-800">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
