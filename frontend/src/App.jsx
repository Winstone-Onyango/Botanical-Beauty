import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function NotFound(){return <div className="container-shell section-space text-center"><h1 className="font-display text-5xl text-forest">Page not found</h1><p className="my-5 text-earth/70">The page you are looking for does not exist.</p><a href="/" className="btn-primary">Return home</a></div>}
export default function App(){return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="products" element={<Products/>}/><Route path="products/:slug" element={<ProductDetail/>}/><Route path="services" element={<Services/>}/><Route path="about" element={<About/>}/><Route path="gallery" element={<Gallery/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
