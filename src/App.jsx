import WebGLShader from './components/WebGLShader'
import Header from './components/Header'
import About from './components/About'
import Benefits from './components/Benefits'
import Work from './components/Work'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import useAnimations from './hooks/useAnimations'
import './normalize.css'
import './style.css'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

export default function App() {
  useAnimations()

  return (
    <>
      <WebGLShader />
      <MusicPlayer />
      <div className="wrapp">
      <Header />
      <main className="main">
        <About />
        <Benefits />
        <Work />
        <Testimonials />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
