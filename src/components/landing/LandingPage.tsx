import { useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Youtube } from 'lucide-react';
import Features from './Features';
import Header from './Header';

const styles = `
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-600 {
    animation-delay: 600ms;
  }

  .animation-delay-2000 {
    animation-delay: 2000ms;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const LandingPage = () => {
  const navigate = useNavigate();

  // Hero Section (no orbs, just solid background)
  const Hero = () => {
    return (
      <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Floating 3D Objects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Graduation cap above the text */}
          <img 
            src="/cap.png"
            alt="3D Graduation"
            className="hidden md:block absolute top-60 left-1/2 transform -translate-x-1/2 w-60 h-50 opacity-70 animate-float"
            style={{ animationDelay: '0s' }}
          />
          
          {/* Book on the left side */}
          <img 
            src="/book.png"
            alt="3D Book"
            className="hidden md:block absolute top-1/2 left-1/4 transform -translate-y-1/2 w-60 h-50 opacity-60 animate-float-reverse"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Check mark on the right side */}
          <img 
            src="/check mark.png"
            alt="3D Check"
            className="hidden md:block absolute top-1/2 right-1/4 transform -translate-y-1/2 w-36 h-36 opacity-70 animate-float"
            style={{ animationDelay: '1s' }}
          />
        </div>
  
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
  
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Level up your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Study smarter and faster. Ace your exams with Beeka AI. Our AI-powered platform helps you master any subject with personalized learning tools.
          </p>
          
          <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105"
          onClick={() => navigate('/signup')}>
            Use Beeka AI For Free
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>
    );
  };
  
  // How It Works Section (solid background)
  const HowItWorks = () => {
    return (
      <section id="how-it-works" className="py-20 bg-[#0A0B14]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Beeka AI Works</h2>
              <p className="text-xl text-gray-300">
                Watch this quick guide to see how Beeka AI can transform your learning experience
              </p>
            </div>
            <div className="aspect-video bg-[#1a1625] rounded-xl overflow-hidden shadow-2xl border border-[#322c45]/40">
              
            </div>
            <div className="text-center mt-12">
              <button 
                onClick={() => navigate('/signup')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 opacity-0 animate-fade-in-up animation-delay-600"
              >
                Start Your Learning Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  // Testimonials Section (solid background)
  const Testimonials = () => (
    <section className="py-20 bg-[#0A0B14] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-bounce">Testimonials</h2>
        <p className="text-2xl text-gray-300 animate-pulse">Coming Soon...</p>
      </div>
    </section>
  );
  
  

  // Call to Action Section (solid background)
  const CTA = () => {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Study Habits?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join students who are already learning smarter with Beeka AI.
              </p>
              
              <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105"
              onClick={() => navigate('/signup')}>
                Start Your Learning Journey For Free
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Footer
  const Footer = () => (
    <footer className="bg-[#0A0B14] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      
        <p>&copy; 2025 Beeka AI. All rights reserved. By Sanyi Diriba</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-[#0A0B14] text-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />

      <Testimonials />
      <CTA />
      <Footer />
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1100 { animation-delay: 1.1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-1300 { animation-delay: 1.3s; }
        .animation-delay-1400 { animation-delay: 1.4s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-1600 { animation-delay: 1.6s; }
        .animation-delay-1700 { animation-delay: 1.7s; }
        .animation-delay-1800 { animation-delay: 1.8s; }
        .animation-delay-1900 { animation-delay: 1.9s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .drop-shadow-glow { text-shadow: 0 0 8px #3B82F6, 0 0 2px #fff; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;