export default function About() {
    const skills = [
        ['🐍', 'Python', 'Core language'],
        ['🌿', 'Django', 'Web framework'],
        ['🔌', 'Django REST Framework', 'REST APIs'],
        ['☕', 'Java', 'Backend development'],
        ['🍃', 'Spring Boot', 'REST services'],
        ['⚛️', 'React', 'Frontend development'],
        ['🗄️', 'MySQL', 'Database design'],
        ['🔐', 'JWT', 'Authentication'],
    ]

    return (
        <section className="py-28 bg-[#0F172A]" id="about">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-14 lg:gap-20 items-center">
                    <div className="relative flex justify-center lg:justify-start" data-aos="fade-right">
                        <div className="absolute inset-[-20px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }} />
                        <img src="/developer_profile.webp" alt="Chandra Shekar - Full Stack Developer" className="w-full max-w-[400px] rounded-3xl border-2 border-blue-500/35 relative z-10 shadow-[0_16px_48px_rgba(0,0,0,0.6)] object-cover" style={{ aspectRatio: '4/5' }} />
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-400 p-4 px-5 rounded-2xl text-center z-20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                            <span className="block text-3xl font-extrabold leading-none">5+</span>
                            <span className="text-[0.7rem] font-semibold opacity-90 leading-tight">Featured<br />Projects</span>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">About Me</p>
                        <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold leading-tight mb-5">
                            Building <span className="gradient-text">Practical Software</span> From Idea to API
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed mb-5">
                            I'm <strong className="text-white">Chandra Shekar</strong>, a Full-Stack Developer focused on building real-world web applications and REST APIs. My work spans both the Python and Java ecosystems, with a strong focus on backend development, API design, databases, authentication, and complete application workflows.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-7">
                            I enjoy turning business requirements into clean, maintainable, secure, and user-friendly applications — from database models and APIs to responsive React interfaces.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                            {skills.map(([icon, title, subtitle]) => (
                                <div key={title} className="bg-[#1A2540] border border-white/[0.08] rounded-xl p-3 hover:border-blue-500/35 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-xl mb-1">{icon}</div>
                                    <strong className="block text-xs text-white leading-tight">{title}</strong>
                                    <span className="text-[0.65rem] text-slate-500">{subtitle}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2.5 mb-8">
                            {['REST APIs', 'JWT Authentication', 'Git & GitHub', 'Postman', 'SQL'].map(tech => (
                                <span key={tech} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold">{tech}</span>
                            ))}
                        </div>

                        <a href="#portfolio" onClick={e => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                            Explore My Projects →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
