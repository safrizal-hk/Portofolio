import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Blog Article Website",
      description:
        "Full-stack blog article website and admin dashboard. Built using Laravel and MySQL.",
      image: "/blog.png",
      technologies: ["Laravel", "MySQL"],
      githubUrl: "https://github.com/safrizal-hk/UAS-Framework-Blog",
      liveUrl: "#",
      date: "Dec 2023", // Diubah
      category: "Web Development",
    },
    {
      title: "Task Productivity App",
      description:
        "Mobile application for task management with features like reminders and team collaboration. Built using Flutter and Supabase.",
      image: "/mobile.png",
      technologies: ["Flutter", "Supabase"],
      githubUrl: "https://github.com/safrizal-hk/UAS-Mobile-ProductivityApp",
      liveUrl: "#",
      date: "Nov 2023",
      category: "Mobile Development",
    },
    {
      title: "UI Bicycle Shop",
      description:
        "E-commerce UI for a bicycle shop with features like storefront, cart, payment, tracking, and history.",
      image: "/UI.jpg",
      technologies: ["HTML"],
      githubUrl: "https://github.com/safrizal-hk/UAS-UI-TokoSepedaCycle",
      liveUrl: "#",
      date: "Oct 2023", // Diubah
      category: "UI",
    },
    {
      title: "Kataka - Shoe Laundry",
      description: "Landing page for the Kataka shoe laundry store.",
      image: "/kataka.png",
      technologies: ["Next.JS", "Typescript", "React"],
      githubUrl: "https://github.com/safrizal-hk/LandingPageKataka",
      liveUrl: "https://kataka-cucisepatu.vercel.app/",
      date: "Oct 2023", // Diubah
      category: "UI",
    },
  ];

  // const categories = ["All", "Web Development", "Mobile Development", "Machine Learning", "Artificial Intelligence"]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {/* Diubah ke Bahasa Inggris */}
            Some of the projects I&apos;ve worked on during my college and
            self-learning.
          </p>
        </div>

        {/* Filter Kategori (Opsional)
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                index === 0 ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Grid Project */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Project thumbnail for ${project.title}`} // Diubah
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800/80 backdrop-blur-sm text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {/* GitHub Link */}
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Link>

                    {/* Live Demo Link (only if available) */}
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Link>
                    ) : (
                      <span className="flex items-center text-gray-600 text-sm cursor-not-allowed">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Tambahan (opsional) - Diubah ke Bahasa Inggris */}
        {/* <div className="text-center mt-16">
          <div className="bg-b  lack/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to Collaborate?
            </h3>
            <p className="text-gray-300 mb-6">
              I am always open to new projects, collaborations, or just
              discussing technology. Let's create something amazing together!
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}