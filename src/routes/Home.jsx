import { Link } from "react-router-dom"
import LogoWeb from "../images/gala-cracks-web.jpg"
import LogoMobile from "../images/gala-cracks-mobile.jpg"


const Home = () => {
  return (
    <div className="h-screen grid place-items-center
    bg-gradient-to-b from-slate-900 to-slate-800">

      <a className="hover:animate-buttonActive" target="_blank" href="https://www.youtube.com/live/CKHBWXffPlg">

        <div className="w-auto mx-6 rounded-3xl overflow-hidden
        shadow-2xl shadow-slate-900/80">
          <img className="hidden md:block" src={LogoWeb} />
          <img className="block md:hidden" src={LogoMobile} />
        </div>

      </a>
    </div>
  )
}

export default Home