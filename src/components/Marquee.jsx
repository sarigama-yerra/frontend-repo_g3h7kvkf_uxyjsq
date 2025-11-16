import { useEffect, useRef } from 'react'

export default function Marquee({ items }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const content = el.innerHTML
    el.innerHTML = content + content
  }, [])
  return (
    <div className="overflow-hidden border-y">
      <div ref={ref} className="flex gap-8 whitespace-nowrap py-3 animate-[marquee_30s_linear_infinite] text-xs tracking-[0.2em] uppercase text-zinc-500">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
