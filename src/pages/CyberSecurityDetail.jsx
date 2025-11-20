import { Briefcase, Award, Mic } from 'lucide-react';

export default function CyberSecurityDetail() {
  const experience = [
    {
      title: "Senior Security Engineer",
      company: "Company Name",
      period: "2022 - Present",
      description: "Lead penetration testing and vulnerability assessment projects"
    },
    {
      title: "Security Analyst",
      company: "Previous Company",
      period: "2020 - 2022",
      description: "Conducted security audits and compliance assessments"
    }
  ];

  const certifications = [
    "OSCP (Offensive Security Certified Professional)",
    "CEH (Certified Ethical Hacker)",
    "CISSP (Certified Information Systems Security Professional)",
    "Security+"
  ];

  const speeches = [
    {
      title: "Advanced Penetration Testing Techniques",
      event: "Security Conference 2023",
      date: "June 2023"
    },
    {
      title: "Zero Trust Architecture Implementation",
      event: "Tech Summit 2023",
      date: "April 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Cybersecurity Career</h1>

        {/* 工作經驗 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-blue-600 font-semibold">{job.company}</p>
                <p className="text-gray-600 text-sm mb-2">{job.period}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 證照 */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-400">
                <p className="text-gray-800 font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 演講經驗 */}
        <section>
          <div className="flex items-center mb-6">
            <Mic className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Speaking Engagements</h2>
          </div>
          <div className="space-y-6">
            {speeches.map((speech, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-800">{speech.title}</h3>
                <p className="text-blue-600 font-semibold">{speech.event}</p>
                <p className="text-gray-600 text-sm">{speech.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
