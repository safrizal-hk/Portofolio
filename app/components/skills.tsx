import LogoLoop from './LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  // // Alternative with image sources (optional)
  // const imageLogos = [
  //   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  //   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  //   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  // ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The technology and tools that I have mastered in my learning journey as an informatics engineering student
          </p>
        </div>
      </div>

      {/* Logo loop container */}
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={96}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0a"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
