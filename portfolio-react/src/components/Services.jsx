const services = [
    {
        icon: '🖥️',
        title: 'Full Stack Web Development',
        desc: 'Custom web applications using Java, Spring Boot, and React — from backend APIs to polished frontends.',
        features: ['Java + Spring Boot Backend', 'React Frontend', 'MySQL Database Design', 'REST API Integration'],
        price: '₹10,000',
        featured: false,
    },
    {
        icon: '⚛️',
        title: 'Frontend Development',
        desc: 'Modern, responsive UIs using React, Tailwind CSS, and JavaScript that look stunning on all devices.',
        features: ['Responsive Design', 'React Components', 'Tailwind CSS Styling', 'Cross-browser Compatible'],
        price: '₹5,000',
        featured: true,
    },
    {
        icon: '⚙️',
        title: 'Backend API Development',
        desc: 'Secure, scalable backend systems using Spring Boot and MySQL with clean RESTful architecture.',
        features: ['Spring Boot APIs', 'MySQL / JPA', 'Authentication & Security', 'API Documentation'],
        price: '₹8,000',
        featured: false,
    },
    {
        icon: '🚀',
        title: 'Website Optimization',
        desc: 'Improve your existing application\'s performance, speed, and SEO for better user experience and ranking.',
        features: ['Performance Audit', 'SEO Optimization', 'Core Web Vitals Fix', 'Code Refactoring'],
        price: '₹3,000',
        featured: false,
    },
]

export default function Services() {
    return (
        <section className="py-28 bg-[#1E293B] relative" id="services">
            <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)' }} />
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">What I Offer</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        Services Built to <span className="gradient-text">Scale Your Business</span>
                    </h2>
                    <p className="text-slate-400 text-base mt-4 max-w-xl mx-auto">End-to-end development solutions tailored to your needs and budget.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <div
                            key={s.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className={`card-accent relative bg-[#1A2540] border rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:border-blue-500/35 group ${s.featured ? 'border-blue-500/35 shadow-[0_8px_30px_rgba(59,130,246,0.25)]' : 'border-white/[0.08]'}`}
                            style={s.featured ? { background: 'linear-gradient(135deg, #1A2540 0%, rgba(59,130,246,0.08) 100%)' } : {}}
                        >
                            {s.featured && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[0.6rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-4xl mb-4">{s.icon}</div>
                            <h3 className="font-['Poppins'] text-[1.1rem] font-bold mb-2.5">{s.title}</h3>
                            <p className="text-slate-400 text-[0.85rem] leading-relaxed mb-5">{s.desc}</p>
                            <ul className="mb-6 divide-y divide-white/[0.08]">
                                {s.features.map(f => (
                                    <li key={f} className="flex items-center gap-2 text-slate-300 text-[0.8rem] py-1.5">
                                        <span className="text-blue-400 font-bold">→</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-slate-400 mb-4">Starting at <strong className="text-blue-400 text-base">{s.price}</strong></p>
                            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                                className="inline-flex items-center gap-1 text-blue-400 font-semibold text-sm hover:gap-2 hover:text-cyan-400 transition-all duration-300">
                                Get Started →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
