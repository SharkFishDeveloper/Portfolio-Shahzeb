
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shahzebAktr01@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patiala, India",
      description: "Open to remote work"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20"></div>
      
      <main className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intro */}
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-400" />
                  <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                {/* Response Time */}
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.label}</h3>
                        <p className="text-purple-400 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Proof */}
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-white font-semibold">Quick Response Guaranteed</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  I value your time and ensure all inquiries receive prompt, professional responses.
                </p>
              </div>
            </div>
            
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <Card className="bg-gray-800/30 backdrop-blur-sm border-gray-700 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Collaboration"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or how I can help you..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500 resize-none"
                        required
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
