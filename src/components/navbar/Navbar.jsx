import { useNavigate } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate()
  return (
       <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
       <a className="font-bold text-xl tracking-tight" href="#" onClick={()=>navigate('/')}>Booking</a>
       <div className="flex items-center">
           <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"    onClick={()=>navigate('/hotels')}>Hotels</a>
           <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#" onClick={()=>navigate('/about')}>About</a>
           <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#" onClick={()=>navigate('/login')}>Login</a>
          
          
       </div>
   </nav>
  )
}

export default Navbar