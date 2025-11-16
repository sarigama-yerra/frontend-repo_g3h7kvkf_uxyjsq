import { useEffect, useState, forwardRef } from 'react'
import ProductCard from './ProductCard'

const API = import.meta.env.VITE_BACKEND_URL

const Catalog = forwardRef(function Catalog({ onAdd }, ref) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const q = new URLSearchParams()
        if (category) q.set('category', category)
        const res = await fetch(`${API}/api/products?${q.toString()}`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category])

  return (
    <section id="catalog" ref={ref} className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">All Products</h2>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded-full px-4 py-2 text-sm">
          <option value="">All categories</option>
          <option>Outerwear</option>
          <option>Knitwear</option>
          <option>Pants</option>
          <option>Dresses</option>
        </select>
      </div>

      {loading ? (
        <p className="text-zinc-500 mt-6">Loading...</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  )
})

export default Catalog
