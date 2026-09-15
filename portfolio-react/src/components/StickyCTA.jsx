import { useState, useEffect } from 'react'

export default function StickyCTA() {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 600)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[999] flex gap-3 px-5 py-3 bg-[rgba(15,23,42,0.92)] backdrop-blur-xl border-t border-blue-500/35 transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <a href="https://github.com/Chandrashekar1404?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm py-3 rounded-full text-center">🐙 GitHub</a>
            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="flex-1 border border-blue-500/35 text-white font-bold text-sm py-3 rounded-full text-center">Contact Me</a>
        </div>
    )
}
