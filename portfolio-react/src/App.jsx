import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyMe from './components/WhyMe'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import BackToTop from './components/BackToTop'

export default function App() {
  // AOS observer
  useEffect(() => {
    const els = document.querySelectorAll('[data-aos]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-aos-delay') || 0)
          setTimeout(() => entry.target.classList.add('aos-animate'), delay)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <StickyCTA />
      <BackToTop />
    </>
  )
}
