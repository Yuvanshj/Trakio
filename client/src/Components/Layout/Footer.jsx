import { Link } from "react-router-dom";
import trakioLogoWhite from "../../Assets/Images/icons/TrakioLogoWhite.png";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ScrollVelocity from "../ScrollVelocity/ScrollVelocity";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white pt-8 pb-0 border-t border-white/10">
      
      {/* Crazy Gandfaad Gradient Orbs */}
      <div className="absolute -top-[30%] -left-[10%] w-[60vw] h-[60vw] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[20%] -right-[20%] w-[70vw] h-[70vw] bg-blue-600/30 rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '7s' }} />
      <div className="absolute -bottom-[40%] left-[20%] w-[80vw] h-[80vw] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[150px] opacity-60 animate-pulse pointer-events-none" style={{ animationDuration: '5s' }} />

      {/* Refractive Mesh / Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }} />
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 6px)' }} />
      
      {/* Gradients to seamlessly blend the video into the black background */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center">
        
        {/* Main Footer Content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 border-t border-white/10 pt-8">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={trakioLogoWhite} alt="Trakio" className="h-20 w-auto transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              <span className="text-5xl font-bold tracking-tight">Trakio</span>
            </Link>
            <p className="text-gray-400 text-center md:text-left max-w-xs leading-relaxed text-sm">
              The next generation of seamless tracking. Join us on the journey to redefine urban mobility.
            </p>
            <div className="w-full max-w-xs pt-2">
              <h4 className="text-xs font-bold text-white/50 uppercase mb-2">Subscribe to Newsletter</h4>
              <div className="flex w-full">
                <input type="email" placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 text-white" />
                <button className="bg-white/10 hover:bg-white/20 border border-l-0 border-white/10 rounded-r-lg px-4 py-2 text-sm font-semibold transition-colors">Join</button>
              </div>
            </div>
          </div>

          {/* Links Col */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/50 uppercase mb-2">Explore</h3>
            <Link to="/" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Home</Link>
            <Link to="/track" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Live Tracking</Link>
            <Link to="/about" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link>
            <Link to="/waitlist" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Waitlist</Link>
          </div>

          {/* Resources Col */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/50 uppercase mb-2">Resources</h3>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Help Center</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">API Documentation</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Community Blog</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">System Status</a>
          </div>

          {/* Socials Col */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-black tracking-[0.2em] text-white/50 uppercase mb-2">Connect</h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(236,72,153,0.2)] group">
                <FaInstagram className="text-xl text-gray-400 group-hover:text-pink-500 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(59,130,246,0.2)] group">
                <FaLinkedin className="text-xl text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,255,255,0.1)] group">
                <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(239,68,68,0.2)] group">
                <FaEnvelope className="text-xl text-gray-400 group-hover:text-red-500 transition-colors" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center md:text-left">contact@trakio.app<br/>1-800-TRAK-NOW</p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-4 mt-8 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Trakio Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Giant Trakio Marquee at the bottom */}
      <div className="w-full mt-2 select-none pointer-events-none overflow-hidden pb-0">
        <ScrollVelocity
          texts={["TRAKIO"]}
          velocity={120}
          className="text-[18vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/40 to-white/5 drop-shadow-2xl inline-block px-2"
        />
      </div>

    </footer>
  );
}
