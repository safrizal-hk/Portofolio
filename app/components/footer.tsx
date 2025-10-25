// import Link from "next/link";
import { Heart } from "lucide-react"

export default function Footer() {
  const productLinks = [
    "Website Development",
    "App Development",
    "UI/UX Design",
  ];

  const socialMediaLinks = [
    { name: "Instagram", href: "https://instagram.com/safrizalhudaa" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
    { name: "GitHub", href: "https://github.com/safrizal-hk" },
  ];

  return (
    <footer className="w-full bg-black/50 backdrop-blur-sm text-gray-300 px-6 md:px-12 lg:px-16 py-10 border-t border-gray-800 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-800 pb-10">
          
          {/* Bagian Kiri */}
          <div className="md:w-1/2 flex flex-col md:flex-row md:pr-10">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h1 className="text-lg font-semibold text-white mb-6 text-center md:text-left tracking-tight">SHK</h1>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-center md:text-left text-white tracking-wide">Ready to get started?</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md text-center md:text-left tracking-wide">
                Hi, I&apos;m Safrizal Huda Kurniawan, a web development and design enthusiast. Let&apos;s work together to bring your ideas to life with innovative and user focused solutions.
              </p>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div className="md:w-1/2 flex mt-10 md:mt-0 md:pl-10 md:border-l border-gray-800">
            <div className="grid grid-cols-2 gap-x-10 w-full max-w-md mx-auto md:mx-0">
              
              {/* Kolom Product */}
              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold text-sm mb-2 text-white tracking-wide">Product</h3>
                {productLinks.map((product) => (
                  <span key={product} className="text-sm text-gray-400 tracking-wide hover:text-white">
                    {product}
                  </span>
                ))}
              </div>

              {/* Kolom Social Media */}
              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold text-sm mb-2 text-white tracking-wide">Social Media</h3>
                {socialMediaLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-400 tracking-wide hover:text-white hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-sm tracking-wide">
          <div className="flex space-x-4 order-1 md:order-1">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>—</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <p className="flex space-x-4 order-1 md:order-2">
            <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>by safrizal © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
