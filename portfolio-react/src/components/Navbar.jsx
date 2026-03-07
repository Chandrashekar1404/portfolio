import { useState, useEffect } from 'react'

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = document.querySelectorAll('section[id]')
            let current = ''
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 100) current = sec.id
            })
            setActive(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const target = document.querySelector(href)
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 70
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <nav className={`sticky top-0 z-[1000] bg-[rgba(15,23,42,0.75)] backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b-[rgba(59,130,246,0.35)]' : ''}`}>
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="font-['Poppins'] text-2xl font-extrabold gradient-text" onClick={() => handleNavClick('#home')}>
                    &lt;CS/&gt;
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={e => { e.preventDefault(); handleNavClick(l.href) }}
                                className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 ${active === l.href.slice(1) ? 'text-white after:w-full' : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'}`}
                            >{l.label}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden z-[1002] p-1 flex flex-col gap-[5px]"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <ul className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-[#1E293B] border-l border-white/[0.08] flex flex-col items-start gap-6 pt-20 px-8 z-[1001] transition-all duration-300 ${menuOpen ? 'right-0' : '-right-full'}`}
                    style={{ right: menuOpen ? 0 : '-100%' }}
                >
                    {links.map(l => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={e => { e.preventDefault(); handleNavClick(l.href) }}
                                className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                            >{l.label}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(59,130,246,0.35)]">
                            Hire Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
