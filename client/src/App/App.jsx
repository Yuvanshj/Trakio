import '../App.css'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Layout/Navbar'
import AppRoutes from './routes'

import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  const location = useLocation()
  const hideNavbarRoutes = ['/login', '/signup']
  const showNavbar = !hideNavbarRoutes.includes(location.pathname)

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {showNavbar && <Navbar />}
      <AppRoutes />
    </div>
  )
}

export default App
