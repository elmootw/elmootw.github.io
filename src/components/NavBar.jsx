import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">
          Portfolio
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/cyber-security" className="text-gray-700 hover:text-blue-600">Cyber Security</Link>
          <Link to="/photography" className="text-gray-700 hover:text-blue-600">Photography</Link>
        </div>
      </div>
    </nav>
  );
}
