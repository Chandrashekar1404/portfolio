import { useEffect, useRef } from 'react'

export default function About() {
    const expRef = useRef(null)

    useEffect(() => {
        if (!expRef.current) return
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let start = 0
                    const timer = setInterval(() => {
                        start += 0.2
                        if (start >= 5) { expRef.current.textContent = '5+'; clearInterval(timer); return }
                        expRef.current.textContent = Math.floor(start) + '+'
                    }, 16)
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 })
        observer.observe(expRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="py-28 bg-[#0F172A]" id="about">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">

                    {/* Image */}
                    <div className="relative flex justify-center lg:justify-start" data-aos="fade-right">
                        <div className="absolute inset-[-20px] rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }} />
                        <img
                            src="/developer_profile.webp"
                            alt="Chandra Shekar - Full Stack Developer"
                            className="w-full max-w-[400px] rounded-3xl border-2 border-blue-500/35 relative z-10 shadow-[0_16px_48px_rgba(0,0,0,0.6)] object-cover"
                            style={{ aspectRatio: '4/5' }}
                        />
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-400 p-4 px-5 rounded-2xl text-center z-20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                            <span ref={expRef} className="block text-3xl font-extrabold leading-none">5+</span>
                            <span className="text-[0.7rem] font-semibold opacity-90 leading-tight">Projects<br />Delivered</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div data-aos="fade-left">
                        <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">About Me</p>
                        <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold leading-tight mb-5">
                            Passionate Developer Building{' '}
                            <span className="gradient-text">Real-World Solutions</span>
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed mb-6">
                            Hi, I'm <strong className="text-white">Chandra Shekar</strong>, a passionate Full-Stack Developer who builds high-quality web applications using modern technologies. I focus on writing clean, maintainable code and delivering solutions that help businesses grow faster.
                        </p>

                        {/* Tech pills */}
                        <div className="flex flex-wrap gap-2.5 mb-7">
                            {['☕ Java', '🌱 Spring Boot', '⚛️ React', '🗄️ MySQL', '🔌 REST APIs'].map(tech => (
                                <span key={tech} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Approach */}
                        <div className="mb-9 divide-y divide-white/[0.08]">
                            {['Understand the problem deeply', 'Build reliable solutions', 'Deliver fast and professionally'].map(item => (
                                <div key={item} className="flex items-center gap-2.5 py-2 text-slate-300 text-sm">
                                    <span className="text-green-400 font-bold text-base">✔</span> {item}
                                </div>
                            ))}
                        </div>

                        <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all duration-300">
                            Let's Work Together
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
