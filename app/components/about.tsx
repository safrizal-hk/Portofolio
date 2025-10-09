import { GraduationCap, Code, Trophy } from "lucide-react"
import ScrollFloat from '@/app/components/ScrollFloat/ScrollFloat';

export default function About() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Informatics Engineering Student",
      institution: "Airlangga University",
      description:
        "Focusing on software development, algorithms, and data structures. Actively involved in various campus projects and organizations.",
    },
    {
      year: "2020 - 2023",
      title: "High School",
      institution: "SMA NEGERI 1 PURI MOJOKERTO",
      description: "Graduated with good achievements and became interested in the world of programming.",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know my journey and passion in the world of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Introduction */}
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Introduction</h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am an Informatics Engineering student at Airlangga University, passionate about software and technology development. 
                With a strong enthusiasm for learning, I always strive to keep up with the latest technological advancements.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I have a special interest in web development, mobile development, and artificial intelligence. 
                Always ready to face new challenges and contribute to meaningful projects.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  GPA: 3.47 (Semester 5)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  [Achievement or award received]
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Organization: HIMA Teknik Informatika 2024-2025
                </li>
              </ul>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gray-800 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-700"></div>
                    )}

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{item.year}</span>
                        </div>

                        <p className="text-gray-300 font-medium mb-2">{item.institution}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}