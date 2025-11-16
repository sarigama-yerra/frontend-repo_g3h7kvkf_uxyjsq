import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function Catalog() {
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
    <section id="catalog" className="max-w-7xl mx-auto px-6 py-16">
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
            <article key={p.id} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
                <img src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'} alt={p.images?.[0]?.alt || p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-zinc-900">{p.title}</h3>
                <p className="text-zinc-500 text-sm">{p.category}</p>
                <p className="mt-1 font-semibold">${p.price.toFixed(2)}</p>
                <button className="mt-3 text-sm px-4 py-2 rounded-full border hover:bg-zinc-50">Add to bag</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
