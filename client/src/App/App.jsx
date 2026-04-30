
import '../App.css'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Layout/Navbar'
import AppRoutes from './routes'

function App() {
  const location = useLocation()
  const hideNavbarRoutes = ['/login', '/signup']
  const showNavbar = !hideNavbarRoutes.includes(location.pathname)

  return (
    <div className="overflow-x-hidden">
      {showNavbar && <Navbar />}
      <AppRoutes />
    </div>
  )
}

export default App
