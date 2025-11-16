import { motion } from 'framer-motion'

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="tracking-widest uppercase text-xs text-zinc-500">Lapiòzo Collection</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Timeless silhouettes. Meticulous tailoring.
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-xl">
              Discover luxury pieces crafted in Italy with sustainable materials and enduring design.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <button onClick={onShop} className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition">
                Shop New Arrivals
              </button>
              <a href="#featured" className="px-6 py-3 rounded-full border border-zinc-300 hover:border-zinc-900 transition">
                Explore Featured
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <img src="https://images.unsplash.com/photo-1684841565710-168022dfda52?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYXBpJUMzJUIyem8lMjBlZGl0b3JpYWx8ZW58MHwwfHx8MTc2MzMwNjg0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lapiòzo editorial" className="rounded-3xl shadow-2xl object-cover w-full h-[420px]" />
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur border rounded-2xl p-4 shadow-lg">
              <p className="text-sm font-medium">Spring 2025 Capsule</p>
              <p className="text-xs text-zinc-500">Limited release</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
