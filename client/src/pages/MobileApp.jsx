import React, { useState } from 'react';
import { Key, Gauge, Diamond, ShieldCheck, Zap } from 'lucide-react';
import trakioLogo from '../Assets/Images/icons/TrakioLogo.png';

const MobileApp = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setEmail('');
      setTimeout(() => setJoined(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sans selection:bg-white/20">
      
      {/* Giant Background Text Inspired by the Screenshot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col items-center justify-start pt-20 select-none opacity-80">
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/[0.04] text-[80px] sm:text-[140px] md:text-[220px] lg:text-[280px] text-center">
          THE TRAKIO
        </h1>
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/[0.04] text-[80px] sm:text-[140px] md:text-[220px] lg:text-[280px] text-center">
          MOBILE APP
        </h1>
      </div>
      
      <div className="container mx-auto px-6 py-16 lg:py-24 min-h-screen flex flex-col relative z-10">
        
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl mt-8 lg:mt-0">
            
            {/* Trakio Logo (Inverted for Dark Mode) */}
            <div className="mb-8 relative group inline-block">
              <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <img 
                src={trakioLogo} 
                alt="Trakio Logo" 
                className="h-14 sm:h-16 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105 brightness-0 invert" 
              />
            </div>
            
            {/* Badge */}
            <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
                Early Access Available
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-[1.1]">
              Join the waitlist
            </h1>
            
            <p className="text-gray-400 text-lg sm:text-xl max-w-md mb-10 font-medium leading-relaxed">
              Receive all the latest news and updates, as well as early access to the Trakio beta.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-12">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                  className="w-full bg-[#0a0a0a] border border-[#333] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/60 focus:bg-white/5 focus:ring-1 focus:ring-white/50 transition-all duration-300"
                />
              </div>
              <button 
                type="submit"
                className={`px-7 py-3.5 rounded-xl font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                  joined 
                    ? 'bg-[#111] text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]' 
                    : 'bg-white text-black hover:bg-gray-200 active:scale-95'
                }`}
              >
                {joined ? 'You\'re on the list!' : 'Join waitlist'}
              </button>
            </form>
            
            {/* Backed By */}
            <div className="w-full max-w-md flex flex-col items-center lg:items-start pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 mb-5 uppercase tracking-[0.2em] font-semibold">Backed by</p>
              <div className="flex gap-8 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-black font-bold text-xl leading-none tracking-tighter">M</span>
                </div>
                <span className="text-2xl font-serif italic tracking-tighter font-bold text-white">ventures*</span>
                <div className="flex items-center gap-1">
                  <Zap className="w-6 h-6 fill-white text-white" />
                </div>
                {/* Abstract logo lines */}
                <div className="flex gap-1 h-6 items-end">
                  <div className="w-1 h-6 bg-white rounded-full" />
                  <div className="w-1 h-4 bg-white rounded-full" />
                  <div className="w-1 h-5 bg-white rounded-full" />
                  <div className="w-1 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Mobile Mockup Area */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none perspective-[2000px] mt-12 lg:mt-0">
            {/* Subtle glow behind phone */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative group hover:-translate-y-2 transition-transform duration-700 ease-out">
              {/* Phone Frame */}
              <div className="relative w-[300px] sm:w-[320px] h-[600px] sm:h-[650px] bg-black rounded-[3rem] border-[6px] sm:border-[8px] border-[#111] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/10 z-10 flex flex-col">
                
                {/* Dynamic Island / Camera Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-[60] pointer-events-none">
                  <div className="w-28 sm:w-32 h-6 bg-[#111] rounded-b-3xl relative">
                    {/* Camera lens reflection */}
                    <div className="absolute right-3 sm:right-4 top-1.5 w-3 h-3 rounded-full bg-black/80 border border-white/5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500/20" />
                    </div>
                  </div>
                </div>
                
                {/* Iframe Content */}
                <div className="flex-1 bg-black w-full h-full relative">
                  {/* Subtle loading skeleton before iframe loads */}
                  <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse -z-10" />
                  
                  <iframe 
                    src="/track?minimal=true" 
                    className="w-full h-full border-none bg-black"
                    title="Trakio Mobile App Preview"
                  />
                  
                  {/* Bottom Home Indicator */}
                  <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none z-50">
                    <div className="w-32 h-1.5 bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Floating badges around the phone */}
              <div className="absolute -left-8 sm:-left-12 top-32 bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 flex items-center gap-3 shadow-2xl transform -rotate-6 animate-pulse-slow hidden sm:flex z-20 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-semibold text-white">Live Tracking</div>
              </div>
              
              <div className="absolute -right-6 sm:-right-8 bottom-32 bg-[#0a0a0a] border border-[#222] rounded-2xl p-3 flex items-center gap-3 shadow-2xl transform rotate-6 hidden sm:flex z-20 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="text-sm font-semibold text-white">Zero Latency</div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 lg:mt-32">
          {/* Feature 1 */}
          <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 hover:bg-[#111] transition-all duration-300 group hover:border-white/20">
            <div className="flex items-center gap-1 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-red-600 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
               ))}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Privacy Guaranteed</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Enterprise grade security measures keep your location data safely encrypted and stored locally.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 hover:bg-[#111] transition-all duration-300 group hover:border-white/20">
             <div className="flex items-center gap-1 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-red-600 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
               ))}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Exceptional Performance</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Advanced, local-first architecture ensures the highest efficiency of your tracking without draining battery.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-[#0a0a0a] border border-[#222] rounded-3xl p-8 hover:bg-[#111] transition-all duration-300 group hover:border-white/20">
             <div className="flex items-center gap-1 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-red-600 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
               ))}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Quality Design</h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium">
              Highly customisable components and instruments that seamlessly integrate into your daily commute.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MobileApp;