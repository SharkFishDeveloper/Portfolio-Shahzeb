
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Let's create something amazing together!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email" 
                className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
              <Input 
                placeholder="Subject" 
                className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
              <Textarea 
                placeholder="Your message..." 
                rows={5}
                className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
