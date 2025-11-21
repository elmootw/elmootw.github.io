import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCyberSecurityOpen, setIsCyberSecurityOpen] = useState(false);

  const cyberSecuritySections = [
    { id: 'work-experience', label: '工作經驗' },
    { id: 'speeches', label: '演講經歷' },
    { id: 'certifications', label: '專業證照' },
    { id: 'education', label: '學歷' }
  ];

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCyberSecurityOpen(false);
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Portfolio
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-600 font-medium transition-colors">Home</Link>
            
            {/* 資安履歷下拉式選單 */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-600 font-medium transition-colors">
                資安履歷
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {cyberSecuritySections.map((section) => (
                  <Link
                    key={section.id}
                    to="/cybersecurity"
                    onClick={() => handleSectionClick(section.id)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors text-sm"
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/photography" className="text-gray-700 hover:text-gray-600 font-medium transition-colors">攝影作品</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-600"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 行動版選單 */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-600 py-2 font-medium">Home</Link>
            
            {/* 行動版下拉式選單 */}
            <div>
              <button
                onClick={() => setIsCyberSecurityOpen(!isCyberSecurityOpen)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-gray-600 py-2 font-medium"
              >
                資安履歷
                <ChevronDown size={18} className={`transition-transform ${isCyberSecurityOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCyberSecurityOpen && (
                <div className="pl-4 space-y-2">
                  {cyberSecuritySections.map((section) => (
                    <Link
                      key={section.id}
                      to="/cybersecurity"
                      onClick={() => handleSectionClick(section.id)}
                      className="block text-gray-700 hover:text-gray-600 py-1 text-sm"
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/photography" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-600 py-2 font-medium">攝影作品</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
