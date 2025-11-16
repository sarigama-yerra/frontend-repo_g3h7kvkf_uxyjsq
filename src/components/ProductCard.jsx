import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useCallback } from 'react'

export default function ProductCard({ product, onAdd }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-40, 40], [8, -8])
  const rotateY = useTransform(x, [-40, 40], [-8, 8])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    x.set(px - rect.width / 2)
    y.set(py - rect.height / 2)
  }, [x, y])

  const img = product.images?.[0]?.url || 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'
  const alt = product.images?.[0]?.alt || product.title

  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0) }}
        style={{ rotateX, rotateY }}
        className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-100 shadow-lg"
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient( 600px 250px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.2), transparent 40% )' }} />
      </motion.div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-zinc-900 line-clamp-1">{product.title}</h3>
          <p className="font-semibold">${Number(product.price).toFixed(2)}</p>
        </div>
        <p className="text-zinc-500 text-sm">{product.category}</p>
        {onAdd && (
          <button
            onClick={() => onAdd(product)}
            className="mt-3 text-sm px-4 py-2 rounded-full border border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 transition"
          >
            Add to bag
          </button>
        )}
      </div>
    </motion.article>
  )
}
