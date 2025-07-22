
import { skills, aboutText } from "@/data/portfolio";
import { Rocket, BookOpen, Clock, Brain } from "lucide-react";
export const About = () => {
  const stats = [
    { icon: Rocket, label: "Projects Started", value: "10+" },
    { icon: BookOpen, label: "Technologies Learned", value: "25+" },
    { icon: Clock, label: "Hours of Practice", value: "1000+" },
    { icon: Brain, label: "Ongoing Curiosity", value: "∞" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      
      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Bio */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <h2 className="text-3xl font-semibold mb-6 text-white">My Story</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {aboutText}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the developer community.
                  I believe in continuous learning and pushing the boundaries of what's possible.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-purple-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Skills */}
            <div className="animate-scale-in">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <h3 className="text-3xl font-semibold mb-8 text-white">Skills & Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group relative"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
                <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                  "The best way to predict the future is to create it."
                </blockquote>
                <cite className="text-purple-400 font-semibold mt-2 block">- My Development Philosophy</cite>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
