import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Home
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-600 font-medium transition-colors">Home</Link>
            <Link to="/cybersecurity" className="text-gray-700 hover:text-gray-600 font-medium transition-colors">資安履歷</Link>
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
            <Link to="/cybersecurity" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-600 py-2 font-medium">資安履歷</Link>
            <Link to="/photography" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-600 py-2 font-medium">攝影作品</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
