const services = [
    {
        icon: '🐍',
        title: 'Django & REST API Development',
        desc: 'Build maintainable backend systems and REST APIs with Python, Django and Django REST Framework.',
        features: ['Django applications', 'DRF REST APIs', 'Authentication & authorization', 'Database integration'],
        featured: true,
    },
    {
        icon: '☕',
        title: 'Java & Spring Boot',
        desc: 'Develop robust backend services with Java, Spring Boot, JPA/Hibernate, security and REST architecture.',
        features: ['Spring Boot APIs', 'JPA / Hibernate', 'JWT security', 'MySQL integration'],
        featured: false,
    },
    {
        icon: '⚛️',
        title: 'React Frontend Development',
        desc: 'Create responsive, component-driven interfaces that connect cleanly with backend APIs.',
        features: ['React components', 'API integration', 'Responsive UI', 'Client-side state'],
        featured: false,
    },
    {
        icon: '🔌',
        title: 'Full-Stack Applications',
        desc: 'Connect frontend, backend, database and authentication into complete real-world application workflows.',
        features: ['React + Django', 'React + Spring Boot', 'MySQL database', 'End-to-end API flows'],
        featured: false,
    },
]

export default function Services() {
    return (
        <section className="py-28 bg-[#1E293B] relative" id="services">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)' }} />
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">What I Build</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">Development <span className="gradient-text">Capabilities</span></h2>
                    <p className="text-slate-400 text-base mt-4 max-w-2xl mx-auto">Focused on backend engineering, API development and complete full-stack applications using the technologies I actively build with.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div key={s.title} data-aos="fade-up" data-aos-delay={i * 100} className={`card-accent relative bg-[#1A2540] border rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:border-blue-500/35 group ${s.featured ? 'border-blue-500/35 shadow-[0_8px_30px_rgba(59,130,246,0.25)]' : 'border-white/[0.08]'}`} style={s.featured ? { background: 'linear-gradient(135deg, #1A2540 0%, rgba(59,130,246,0.08) 100%)' } : {}}>
                            {s.featured && <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[0.6rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Core Focus</div>}
                            <div className="text-4xl mb-4">{s.icon}</div>
                            <h3 className="font-['Poppins'] text-[1.1rem] font-bold mb-2.5">{s.title}</h3>
                            <p className="text-slate-400 text-[0.85rem] leading-relaxed mb-5">{s.desc}</p>
                            <ul className="divide-y divide-white/[0.08]">
                                {s.features.map(f => <li key={f} className="flex items-center gap-2 text-slate-300 text-[0.8rem] py-1.5"><span className="text-blue-400 font-bold">→</span>{f}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
