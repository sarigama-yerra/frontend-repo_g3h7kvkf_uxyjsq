import { useRef } from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  const catalogRef = useRef(null)

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide">Lapiòzo</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#featured" className="hover:text-black">Featured</a>
            <a href="#catalog" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 rounded-full border hover:bg-zinc-50 text-sm">Sign in</button>
            <button className="px-3 py-1 rounded-full bg-black text-white text-sm">Bag (0)</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onShop={scrollToCatalog} />
        <Featured />
        <Catalog ref={catalogRef} />
      </main>

      <Footer />
    </div>
  )
}

export default App
