import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Who from './components/Who'
import Footer from './components/footer'
import { FAQ } from './components/Faq'
import Contact from './components/Contact'
import Logo from './assets/CAT.png';
import Offer from './components/Offer'
import { Process } from './components/Process'

function App() {

  return (
    <div>
      <a href = "#main" className="ring-2 ring-cyan-500 absolute rounded-full shadow-lg hover:scale-105 cursor-pointer p-1 top-1 left-3 z-[99] duration-500 max-h-ms max-w-ms lg:max-h-xxxs lg:max-w-xxxs" >
        <img src = {Logo} className=' ' />
      </a>
      <Sidenav />
      <Main />
      <Who />
      <Offer />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
