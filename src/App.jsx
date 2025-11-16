import { useRef, useState } from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import BagDrawer from './components/BagDrawer'

function App() {
  const catalogRef = useRef(null)
  const [bagOpen, setBagOpen] = useState(false)
  const [bagItems, setBagItems] = useState([])

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAdd = (product) => {
    setBagItems((prev) => [...prev, product])
    setBagOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Background />
      <Navbar onShop={() => setBagOpen(true)} />
      <Marquee items={[
        'Sustainable Italian craftsmanship',
        'Limited capsule release',
        'Exclusive online preview',
        'Complimentary worldwide shipping',
      ]} />

      <main>
        <Hero onShop={scrollToCatalog} />
        <Featured />
        <Catalog ref={catalogRef} onAdd={handleAdd} />
      </main>

      <Footer />

      <BagDrawer open={bagOpen} onClose={() => setBagOpen(false)} items={bagItems} />
    </div>
  )
}

export default App
