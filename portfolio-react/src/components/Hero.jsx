export default function Hero() {
    const scrollTo = (href) => {
        const el = document.querySelector(href)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-[calc(100vh-58px)] flex items-center overflow-hidden py-20" id="home">
            {/* Grid bg */}
            <div className="absolute inset-0"
                style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            {/* Glows */}
            <div className="glow-1 absolute w-[600px] h-[600px] rounded-full -top-36 -left-24 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(100px)' }} />
            <div className="glow-2 absolute w-[400px] h-[400px] rounded-full -bottom-24 right-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(100px)' }} />

            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                {/* Content */}
                <div data-aos="fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/35 px-4 py-2 rounded-full text-xs font-semibold text-blue-400 mb-6">
                        <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full"></span>
                        Available for Projects
                    </div>

                    <h1 className="font-['Poppins'] text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-5">
                        Building Scalable Web Applications That{' '}
                        <span className="gradient-text">Power Modern Businesses</span>
                    </h1>

                    <p className="text-slate-300 text-lg leading-relaxed mb-7 max-w-xl">
                        Freelance Full-Stack Developer specializing in Java, Spring Boot, React, and modern web technologies. I help startups and businesses build reliable, high-performance applications.
                    </p>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap gap-5 mb-9">
                        {['35+ Projects Delivered', 'Java Full Stack Specialist', 'Fast & Clean Code'].map(t => (
                            <span key={t} className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <span className="text-green-400 font-bold">✔</span> {t}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => scrollTo('#contact')}
                            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all duration-300 relative overflow-hidden">
                            <span>Book a Free Consultation</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                        <button onClick={() => scrollTo('#portfolio')}
                            className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-[13px] rounded-full border border-blue-500/35 hover:bg-blue-500/12 hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-300">
                            View My Work
                        </button>
                    </div>
                </div>

                {/* Code Window Visual */}
                <div className="flex justify-center items-center" data-aos="fade-left">
                    <div className="hero-float relative">
                        {/* Code window */}
                        <div className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-5 w-[350px] lg:w-[380px] shadow-[0_16px_48px_rgba(0,0,0,0.6),0_0_60px_rgba(59,130,246,0.1)] font-mono text-[0.82rem] leading-relaxed">
                            <div className="flex gap-1.5 mb-4">
                                <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
                            </div>
                            <div className="text-slate-100 space-y-0.5">
                                <div><span className="text-purple-300">@RestController</span></div>
                                <div><span className="text-purple-300">@RequestMapping</span><span className="text-green-300">("/api")</span></div>
                                <div><span className="text-purple-300">public class</span> <span className="text-blue-300">AppController</span> {'{'}</div>
                                <div className="pl-5"><span className="text-purple-300">@GetMapping</span><span className="text-green-300">("/hello")</span></div>
                                <div className="pl-5"><span className="text-purple-300">public</span> <span className="text-blue-300">String</span> <span className="text-blue-300">hello</span>() {'{'}</div>
                                <div className="pl-10"><span className="text-purple-300">return</span> <span className="text-green-300">"Hello World"</span>;</div>
                                <div className="pl-5">{'}'}</div>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        {[
                            { label: 'Java', cls: 'badge-float-1 -bottom-5 -left-5' },
                            { label: 'React', cls: 'badge-float-2 -top-4 -right-2' },
                            { label: 'Spring Boot', cls: 'badge-float-3 -bottom-1 -right-8' },
                            { label: 'Node Js', cls: 'badge-float-4 -top-4 left-14' },
                            { label: 'MySQL', cls: 'badge-float-5 top-20 -right-7' },
                            { label: 'MongoDB', cls: 'badge-float-6 top-36 -left-12' },
                        ].map(b => (
                            <div key={b.label} className={`absolute ${b.cls} bg-[#1E293B] border border-blue-500/35 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-400 shadow-[0_4px_24px_rgba(0,0,0,0.4)]`}>
                                {b.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-bounce absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-slate-500 text-[0.75rem] tracking-[2px] uppercase">
                <span>Scroll</span>
                <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #3B82F6, transparent)' }}></div>
            </div>
        </section>
    )
}
