import ProfessionCard from '../components/ProfessionCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl text-gray-600">Cybersecurity Professional | Photographer</p>
        </div>

        {/* 左右兩個區塊 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProfessionCard
            title="Cyber Security"
            description="Information Security Professional with experience in vulnerability assessment, penetration testing, and security architecture. View my work experience, certifications, and speaking engagements."
            image={null}
            link="/cyber-security"
            accent="border-blue-500"
          />
          <ProfessionCard
            title="Photography"
            description="Professional photographer specializing in various genres. Explore my equipment, experience, and portfolio of work."
            image={null}
            link="/photography"
            accent="border-purple-500"
          />
        </div>
      </div>
    </div>
  );
}
