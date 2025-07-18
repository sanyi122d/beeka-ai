import { useState, useEffect } from 'react';
import { MessageCircle, BarChart3 } from 'lucide-react';

const Features = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2
    },
    {
      question: "What is Square root of 256?",
      options: ["24", "16", "15", "61"],
      correct: 1
    },
    {
      question: "Who wrote Romeo and Juliet?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correct: 1
    }
  ];

  const fullNoteText = "Living Things\n• All living organisms are made of cells\n• They require energy to survive\n• Growth and reproduction are key\n• Respond to environmental changes\n• Maintain homeostasis";

  // Flashcard animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Quiz animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuiz(prev => (prev + 1) % quizQuestions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Note generation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setNoteText('');
      
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullNoteText.length) {
          setNoteText(fullNoteText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setNoteText('');
          }, 2000);
        }
      }, 50);
      
      return () => clearInterval(typingInterval);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your learning experience and achieve academic success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Memorize Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2">Memorize</h3>
            <p className="text-gray-400 mb-6">Generate Flashcards</p>
            
            <div className="relative h-32 perspective-1000">
              <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                <div className="flashcard-front bg-blue-600 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Quantum</span>
                </div>
                <div className="flashcard-back bg-purple-600 rounded-lg p-4 flex items-center justify-center">
                  <span className="text-white text-sm text-center">The smallest discrete unit of any physical entity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2">Practice</h3>
            <p className="text-gray-400 mb-6">Generate Quiz</p>
            
            <div className="bg-gray-800 rounded-lg p-4 min-h-32">
              <p className="text-white font-medium mb-3">{quizQuestions[currentQuiz].question}</p>
              <div className="space-y-2">
                {quizQuestions[currentQuiz].options.map((option, index) => (
                  <div 
                    key={index}
                    className={`p-2 rounded text-sm transition-all duration-300 ${
                      index === quizQuestions[currentQuiz].correct 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2">Chat</h3>
            <p className="text-gray-400 mb-6">24/7 AI Tutor</p>
            
            <div className="flex items-center justify-center h-32">
              <div className="bg-teal-600 rounded-full p-4 animate-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <p className="text-gray-300 text-sm text-center mt-4">
              Get instant help with any question, anytime
            </p>
          </div>

          {/* Notes Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2">Notes</h3>
            <p className="text-gray-400 mb-6">Smart Note Maker</p>
            
            <div className="bg-gray-800 rounded-lg p-4 h-32 overflow-hidden">
              <div className="text-xs text-gray-300 font-mono">
                <div className="text-yellow-400 font-semibold mb-1">
                  {isTyping && <span className="animate-pulse">Generating notes...</span>}
                  {!isTyping && noteText && "Generated Notes:"}
                </div>
                <div className="whitespace-pre-line text-gray-300">
                  {noteText}
                  {isTyping && <span className="animate-pulse">|</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Structure Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">Structure</h3>
            <p className="text-gray-400 mb-6">Organize Notes</p>
            
            <div className="bg-gray-800 rounded-lg p-4 h-32">
              <div className="flex items-center justify-between mb-3">
                <BarChart3 className="w-6 h-6 text-purple-500" />
                <span className="text-purple-400 text-sm font-medium">Folders</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>📁 Math</span>
                  <span>15 Spaces</span>
                </div>
                <div className="w-full bg-gray-700 rounded h-1">
                  <div className="bg-purple-500 h-1 rounded w-[80%]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>📁 Physics</span>
                  <span>6 Spaces</span>
                </div>
                <div className="w-full bg-gray-700 rounded h-1">
                  <div className="bg-blue-500 h-1 rounded w-[40%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Speed Feature */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2">Speed</h3>
            <p className="text-gray-400 mb-6">Learning in Speed</p>
            
            <div className="bg-gray-800 rounded-lg p-4 h-32 flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">3x</div>
              <div className="text-sm text-gray-300 text-center">Faster Learning</div>
              <div className="text-xs text-gray-400 text-center mt-2">
                AI-powered acceleration
              </div>
              <div className="flex space-x-1 mt-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 