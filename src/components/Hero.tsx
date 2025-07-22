
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Full Stack Developer & Creative Problem Solver
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovation with elegance. 
            Specialized in modern web technologies and user-centric design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 transition-all duration-300">
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>
    </section>
  );
};
