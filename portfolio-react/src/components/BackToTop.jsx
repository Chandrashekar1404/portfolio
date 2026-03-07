import { useState, useEffect } from 'react'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', handler, { passive: true })
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className={`fixed right-6 bottom-20 md:bottom-6 w-11 h-11 bg-blue-500 hover:bg-cyan-400 text-white rounded-full flex items-center justify-center text-lg shadow-[0_4px_16px_rgba(59,130,246,0.35)] z-[998] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'} hover:-translate-y-1`}
        >
            ↑
        </button>
    )
}
