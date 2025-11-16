import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ onShop }) {
  const [open, setOpen] = useState(false)
  return (
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
          <button onClick={onShop} className="px-3 py-1 rounded-full bg-black text-white text-sm">Bag (0)</button>
          <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu"><Menu size={20} /></button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#featured" onClick={() => setOpen(false)} className="hover:text-black">Featured</a>
            <a href="#catalog" onClick={() => setOpen(false)} className="hover:text-black">Shop</a>
            <a href="#" onClick={() => setOpen(false)} className="hover:text-black">About</a>
          </div>
        </div>
      )}
    </header>
  )
}
