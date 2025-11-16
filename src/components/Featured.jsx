import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function Featured() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/products/featured`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return (
    <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold">Featured</h2>
      <p className="text-zinc-500 mt-2">Loading...</p>
    </section>
  )

  return (
    <section id="featured" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Pieces</h2>
        <a href="#catalog" className="text-sm text-zinc-600 hover:text-black">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((p) => (
          <article key={p.id} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
              <img src={p.images?.[0]?.url || 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'} alt={p.images?.[0]?.alt || p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <div className="mt-3">
              <h3 className="font-medium text-zinc-900">{p.title}</h3>
              <p className="text-zinc-500 text-sm">{p.category}</p>
              <p className="mt-1 font-semibold">${p.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
