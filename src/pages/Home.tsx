
import { Download, Github, Linkedin, Mail, ArrowDown, Star, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {

  
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500"></div>
      
      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {/* Main heading with enhanced styling */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mt-4 mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent leading-tight">
                Shahzeb Akhtar
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            </div>
            
            {/* Enhanced subtitle */}
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-6 font-light">
              Full Stack Developer & 
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-semibold"> Creative Problem Solver</span>
            </h2>
            
            {/* Description with better typography */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting digital experiences that blend 
              <span className="text-purple-400 font-semibold"> innovation</span> with 
              <span className="text-pink-400 font-semibold"> elegance</span>. 
              Specialized in modern web technologies and user-centric design.
            </p>
            
            {/* Enhanced feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                <Code className="w-6 h-6 text-purple-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-sm">Clean Code</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 group">
                <Zap className="w-6 h-6 text-pink-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-sm">Fast Performance</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <Star className="w-6 h-6 text-blue-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-sm">Quality Design</p>
              </div>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <a
                  href="https://drive.google.com/uc?export=download&id=1GJYnsCTI2-eu69jPb7O5KDevgQjvF4rx"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-gray-700 hover:bg-gray-800 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
            
            {/* Enhanced social links */}
            <div className="flex justify-center space-x-6 mb-15">
              <a 
                href="https://github.com/SharkFishDeveloper" 
                target="_blank"
                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shahzeb-akhtar-36b584254/" 
                target="_blank"
                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&to=shahzebAktr01@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
