
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'
import FloatingContact from './Components/FloatingContact'
import Home from './Pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-royal-950">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}