import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProfessionCard({ title, description, image, link, accent }) {
  return (
    <Link to={link}>
      <div className={`h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-4 ${accent}`}>
        <div className="h-64 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
          ) : (
            <div className="text-gray-500 text-center">
              <p className="text-6xl mb-2">📷</p>
              <p>Add your photo here</p>
            </div>
          )}
        </div>
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center text-blue-600 font-semibold hover:text-blue-800">
            Explore <ArrowRight size={20} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
