import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Expertise from './sections/Expertise'
import Journey from './sections/Journey'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Journey />
        <Projects />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
