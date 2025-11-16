import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BagDrawer({ open, onClose, items }) {
  const total = items.reduce((s, it) => s + it.price, 0)
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/30" onClick={onClose} />
          <motion.aside
            className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 24, stiffness: 280 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <p className="font-medium">Your Bag</p>
              <button onClick={onClose} aria-label="Close"><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 && <p className="text-sm text-zinc-500">Your bag is empty.</p>}
              {items.map((it, idx) => (
                <div key={idx} className="flex gap-3">
                  <img src={it.images?.[0]?.url} alt={it.title} className="h-16 w-16 rounded-md object-cover bg-zinc-100" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{it.title}</p>
                    <p className="text-xs text-zinc-500">{it.category}</p>
                  </div>
                  <p className="text-sm font-semibold">${Number(it.price).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="mt-3 w-full rounded-full bg-black text-white py-3 text-sm">Checkout</button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
