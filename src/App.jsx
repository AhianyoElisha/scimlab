import React, { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import LinkHandler from './components/LinkHandler'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'
import MouseCursor from './components/MouseCursor'
import useInitPlugins from './hooks/useInitPlugins'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import Service from './pages/Service'
import ServiceDetails from './pages/ServiceDetails'
import OurProject from './pages/OurProject'
import ProjectDetails from './pages/ProjectDetails'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import ShopCart from './pages/ShopCart'
import Checkout from './pages/Checkout'
import Pricing from './pages/Pricing'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'

// Lazy-loaded (heavy Three.js dependency)
const Showroom = lazy(() => import('./pages/Showroom'))

function App() {
  const location = useLocation();
  useInitPlugins(location);

  useEffect(() => {
    document.body.classList.add('section-bg-2');
    return () => document.body.classList.remove('section-bg-2');
  }, []);

  return (
    <LinkHandler>
      <ScrollToTop />
      <Preloader />
      <BackToTop />
      <MouseCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamDetails />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/projects" element={<OurProject />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/showroom/:slug" element={<Suspense fallback={<div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading 3D Showroom…</p></div>}><Showroom /></Suspense>} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ShopDetails />} />
        <Route path="/shop-cart" element={<ShopCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LinkHandler>
  )
}

export default App
