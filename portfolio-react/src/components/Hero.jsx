const socials = [
    { label: 'GitHub', href: 'https://github.com/Chandrashekar1404' },
    { label: 'LinkedIn', href: 'www.linkedin.com/in/chandra-shekar-malthumkar-745534232' },
]

export default function Hero() {
    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-[calc(100vh-58px)] flex items-center overflow-hidden py-20" id="home">
            <div className="absolute inset-0"
                style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            <div className="glow-1 absolute w-[600px] h-[600px] rounded-full -top-36 -left-24 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(100px)' }} />
            <div className="glow-2 absolute w-[400px] h-[400px] rounded-full -bottom-24 right-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(100px)' }} />

            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/35 px-4 py-2 rounded-full text-xs font-semibold text-blue-400 mb-6">
                        <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full"></span>
                        Full-Stack Developer • Open to Opportunities
                    </div>

                    <h1 className="font-['Poppins'] text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-5">
                        Hi, I'm <span className="gradient-text">Chandra Shekar</span>
                        <br />
                        I build <span className="gradient-text">real-world full-stack applications.</span>
                    </h1>

                    <p className="text-slate-300 text-lg leading-relaxed mb-7 max-w-xl">
                        Full-Stack Developer working across Python, Django, Django REST Framework, Java, Spring Boot, React, REST APIs, MySQL, JWT authentication, and database-driven applications.
                    </p>

                    <div className="flex flex-wrap gap-5 mb-9">
                        {['Python + Django', 'Java + Spring Boot', 'React + JavaScript', 'REST APIs + JWT'].map(t => (
                            <span key={t} className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <span className="text-green-400 font-bold">✓</span> {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mb-7">
                        <button onClick={() => scrollTo('#portfolio')}
                            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all duration-300">
                            <span>View My Work</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7-7" /></svg>
                        </button>
                        <button onClick={() => scrollTo('#contact')}
                            className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-[13px] rounded-full border border-blue-500/35 hover:bg-blue-500/12 hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300">
                            Contact Me
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span>Based in India</span>
                        <span className="text-slate-600">•</span>
                        {socials.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-400 transition-colors">{s.label}</a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center" data-aos="fade-left">
                    <div className="hero-float relative">
                        <div className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-5 w-[350px] lg:w-[410px] shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_60px_rgba(59,130,246,0.1)] font-mono text-[0.8rem] leading-relaxed">
                            <div className="flex gap-1.5 mb-4">
                                <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                            </div>
                            <div className="text-slate-100 space-y-0.5">
                                <div><span className="text-purple-300">const</span> stack = {'{'}</div>
                                <div className="pl-5"><span className="text-blue-300">frontend</span>: <span className="text-green-300">['React', 'JavaScript', 'HTML', 'CSS']</span>,</div>
                                <div className="pl-5"><span className="text-blue-300">backend</span>: <span className="text-green-300">['Django', 'DRF', 'Spring Boot']</span>,</div>
                                <div className="pl-5"><span className="text-blue-300">languages</span>: <span className="text-green-300">['Python', 'Java', 'SQL']</span>,</div>
                                <div className="pl-5"><span className="text-blue-300">database</span>: <span className="text-green-300">'MySQL'</span>,</div>
                                <div className="pl-5"><span className="text-blue-300">security</span>: <span className="text-green-300">'JWT Authentication'</span>,</div>
                                <div className="pl-5"><span className="text-blue-300">focus</span>: <span className="text-green-300">'Scalable APIs'</span></div>
                                <div>{'}'}</div>
                                <div className="pt-3"><span className="text-purple-300">build</span>(stack); <span className="text-slate-500">// ship useful software 🚀</span></div>
                            </div>
                        </div>

                        {[
                            { label: 'Python', cls: 'badge-float-1 -bottom-5 -left-5' },
                            { label: 'Django', cls: 'badge-float-2 -top-4 -right-2' },
                            { label: 'Java', cls: 'badge-float-3 -bottom-1 -right-8' },
                            { label: 'Spring Boot', cls: 'badge-float-4 -top-4 left-14' },
                            { label: 'React', cls: 'badge-float-5 top-20 -right-7' },
                            { label: 'MySQL', cls: 'badge-float-6 top-36 -left-12' },
                        ].map(b => (
                            <div key={b.label} className={`absolute ${b.cls} bg-[#1E293B] border border-blue-500/35 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-400 shadow-[0_4px_24px_rgba(0,0,0,0.4)]`}>
                                {b.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="scroll-bounce absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-slate-500 text-[0.75rem] tracking-[2px] uppercase">
                <span>Scroll</span>
                <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #3B82F6, transparent)' }}></div>
            </div>
        </section>
    )
}