import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Leaf, Instagram, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { site } from '../data/site'

const links = [
  ['Home', '/'], ['Products', '/products'], ['Services', '/services'],
  ['About', '/about'], ['Gallery', '/gallery'], ['Contact', '/contact'],
]

export function Layout() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-ivory"><Leaf size={20}/></span>
          <span><span className="block font-display text-xl font-semibold text-forest">{site.name}</span><span className="text-[10px] uppercase tracking-[.25em] text-earth/70">Our Beauty Catalogue</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `nav-link ${isActive ? 'nav-active' : ''}`}>{label}</NavLink>)}
        </nav>
        <Link to="/contact" className="btn-primary hidden lg:inline-flex">Get in touch</Link>
        <button aria-label="Toggle navigation" className="rounded-lg p-2 text-forest lg:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="border-t border-forest/10 bg-ivory px-6 py-4 lg:hidden">
        {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className="block border-b border-forest/10 py-3 font-medium text-forest">{label}</NavLink>)}
      </nav>}
    </header>
    <main><Outlet/></main>
    <footer className="bg-forest text-ivory">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        <div><Link to="/" className="font-display text-3xl">{site.name}</Link><p className="mt-3 max-w-sm text-sm leading-7 text-ivory/70">{site.description}</p></div>
        <div><h3 className="mb-4 font-semibold">Explore</h3><div className="grid grid-cols-2 gap-3 text-sm text-ivory/70">{links.map(([label,path]) => <Link key={path} to={path} className="hover:text-white">{label}</Link>)}</div></div>
        <div><h3 className="mb-4 font-semibold">Visit or connect</h3><p className="mb-3 flex items-center gap-2 text-sm text-ivory/70"><MapPin size={16}/>{site.location}</p><p className="mb-3 flex items-center gap-2 text-sm text-ivory/70"><Phone size={16}/>{site.phone}</p><a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-white"><Instagram size={16}/> Instagram</a></div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-ivory/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
    <a className="whatsapp-float" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WhatsApp</a>
  </>
}
