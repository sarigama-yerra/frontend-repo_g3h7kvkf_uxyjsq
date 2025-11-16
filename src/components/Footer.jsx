export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-semibold">Lapiòzo</p>
          <p className="text-zinc-500 mt-2">Luxury fashion house crafting timeless essentials.</p>
        </div>
        <div>
          <p className="font-semibold">Customer Care</p>
          <ul className="mt-2 space-y-2 text-zinc-600">
            <li>Shipping & Returns</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Boutiques</p>
          <ul className="mt-2 space-y-2 text-zinc-600">
            <li>Milan</li>
            <li>Paris</li>
            <li>New York</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Newsletter</p>
          <p className="text-zinc-500 mt-2">Join to receive private previews.</p>
          <div className="mt-3 flex gap-2">
            <input placeholder="Email address" className="flex-1 border rounded-full px-4 py-2" />
            <button className="px-4 py-2 rounded-full bg-black text-white">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Lapiòzo. All rights reserved.</div>
    </footer>
  )
}
