import { useState } from 'react'

export default function Banner() {
    const [visible, setVisible] = useState(true)
    if (!visible) return null
    return (
        <div className="banner-shimmer relative z-[1001] text-center py-2.5 px-14 text-sm font-medium text-white">
            🚀 Available for Freelance Projects –{' '}
            <a href="#contact" className="font-bold underline ml-2 text-white">Book a Free Consultation</a>
            <button
                onClick={() => setVisible(false)}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-[26px] h-[26px] flex items-center justify-center text-xs transition-all"
                aria-label="Close banner"
            >✕</button>
        </div>
    )
}
