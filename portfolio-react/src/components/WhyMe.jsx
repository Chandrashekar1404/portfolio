const cards = [
    { icon: '🐍', title: 'Python + Django', desc: 'Build practical web applications and REST APIs with Django and Django REST Framework.' },
    { icon: '☕', title: 'Java + Spring Boot', desc: 'Develop structured backend services with Spring Boot, JPA/Hibernate and REST architecture.' },
    { icon: '⚛️', title: 'React Development', desc: 'Create responsive component-based interfaces and integrate them with backend APIs.' },
    { icon: '🔐', title: 'Secure APIs', desc: 'Work with JWT authentication, authorization and protected application workflows.' },
    { icon: '🗄️', title: 'Database Driven', desc: 'Design and connect applications to MySQL with clean data models and persistence.' },
]

export default function WhyMe() {
    return (
        <section className="py-28 bg-[#0F172A]" id="why">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">My Approach</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">What I Bring to a <span className="gradient-text">Project</span></h2>
                    <p className="text-slate-400 text-base mt-4 max-w-2xl mx-auto">A practical full-stack approach grounded in the technologies and real-world projects on my GitHub profile.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {cards.map((c, i) => (
                        <div key={c.title} data-aos="fade-up" data-aos-delay={i * 100} className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-7 text-center transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)] group">
                            <span className="block text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">{c.icon}</span>
                            <h3 className="font-['Poppins'] text-sm font-semibold mb-2.5">{c.title}</h3>
                            <p className="text-slate-400 text-[0.83rem] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
