import React, { useState } from 'react';
import trakioLogo from '../Assets/Images/icons/TrakioLogo.png';
import { SiSupabase, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';
import mobileViewImg from '../Assets/Images/Mobile View Request.png';

const Waitlist = () => {
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
    <div className="h-screen w-full bg-black text-white relative overflow-hidden font-sans selection:bg-white/20 flex flex-col justify-center">
      
      {/* Giant Background Text Inspired by the Screenshot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col items-center justify-center select-none opacity-80">
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/[0.04] text-[100px] sm:text-[160px] md:text-[240px] lg:text-[320px] text-center">
          THE TRAKIO
        </h1>
        <h1 className="whitespace-nowrap font-bold leading-[0.85] tracking-[-8px] text-white/[0.04] text-[100px] sm:text-[160px] md:text-[240px] lg:text-[320px] text-center">
          MOBILE APP
        </h1>
      </div>
      
      <div className="h-full w-full max-w-[1600px] mx-auto px-6 flex flex-col justify-center relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full pt-16">
          
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
            
            {/* Trakio Logo (Inverted for Dark Mode) */}
            <div className="mb-8 relative group inline-block">
              <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <img 
                src={trakioLogo} 
                alt="Trakio Logo" 
                className="h-28 sm:h-32 lg:h-36 w-auto relative z-10 transition-transform duration-500 group-hover:scale-105 brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              />
            </div>
            
            {/* Badge */}
            <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-200">
                Early Access Available
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white leading-[1.1] [text-shadow:0_0_30px_rgba(255,255,255,0.3)]">
              Join the waitlist
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-2xl max-w-lg mb-10 font-medium leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Receive all the latest news and updates, as well as early access to the Trakio beta.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-12">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com" 
                  required
                  className="w-full h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[#444] rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/80 focus:bg-white/10 focus:ring-2 focus:ring-white/30 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                />
              </div>
              <button 
                type="submit"
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center text-lg ${
                  joined 
                    ? 'bg-[#111] text-green-400 border border-green-500/30 shadow-[0_0_25px_rgba(74,222,128,0.4)]' 
                    : 'bg-white text-black hover:bg-gray-200 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]'
                }`}
              >
                {joined ? 'You\'re on the list!' : 'Join waitlist'}
              </button>
            </form>
            
            {/* Powered By */}
            <div className="w-full max-w-lg flex flex-col items-center lg:items-start pt-8 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-6 uppercase tracking-[0.2em] font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Powered by</p>
              <div className="flex gap-8 items-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex-wrap justify-center lg:justify-start">
                <div className="flex items-center gap-2 group/tech cursor-pointer">
                  <SiSupabase className="text-2xl group-hover/tech:text-emerald-500 transition-colors group-hover/tech:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <span className="font-bold tracking-tight text-lg">Supabase</span>
                </div>
                <div className="flex items-center gap-2 group/tech cursor-pointer">
                  <SiReact className="text-2xl group-hover/tech:text-blue-400 transition-colors group-hover/tech:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                  <span className="font-bold tracking-tight text-lg">React</span>
                </div>
                <div className="flex items-center gap-2 group/tech cursor-pointer">
                  <SiNodedotjs className="text-2xl group-hover/tech:text-green-500 transition-colors group-hover/tech:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="font-bold tracking-tight text-lg">Node</span>
                </div>
                <div className="flex items-center gap-2 group/tech cursor-pointer">
                  <SiExpress className="text-2xl transition-colors group-hover/tech:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <span className="font-bold tracking-tight text-lg">Express</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Mobile Mockup Area */}
          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto perspective-[2000px] h-[60vh] sm:h-[70vh] lg:h-[80vh] max-h-[800px]">
            {/* Subtle glow behind phone */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[600px] bg-white/10 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative h-full aspect-[9/19] group hover:-translate-y-4 transition-transform duration-700 ease-out">
              {/* Phone Frame */}
              <div className="relative w-full h-full bg-black rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-[10px] border-[#111] shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden ring-1 ring-white/20 z-10 flex flex-col">
                
                {/* Dynamic Island / Camera Notch */}
                <div className="absolute top-0 inset-x-0 h-7 sm:h-8 flex justify-center z-[60] pointer-events-none">
                  <div className="w-28 sm:w-36 h-6 sm:h-7 bg-[#111] rounded-b-3xl relative">
                    {/* Camera lens reflection */}
                    <div className="absolute right-3 sm:right-4 top-1.5 w-3 h-3 rounded-full bg-black/80 border border-white/5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500/20" />
                    </div>
                  </div>
                </div>
                
                {/* Image Content */}
                <div className="flex-1 bg-black w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse -z-10" />
                  
                  <img 
                    src={mobileViewImg} 
                    alt="Trakio Mobile App Preview"
                    className="w-full h-full object-cover"
                  />

                  {/* Bottom Home Indicator */}
                  <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none z-50">
                    <div className="w-32 sm:w-40 h-1.5 bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Waitlist;