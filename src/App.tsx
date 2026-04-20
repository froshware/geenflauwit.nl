import './App.css'
import { Audience } from './components/Audience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Services } from './components/Services'

function App() {
  return (
    <div className="app">
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Audience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
