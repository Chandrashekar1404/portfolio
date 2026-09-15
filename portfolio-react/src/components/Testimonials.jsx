const highlights = [
    { icon: '🚀', title: 'Real-World Projects', desc: 'Hands-on work across e-commerce, job portals, restaurant systems, banking and AI-focused applications.' },
    { icon: '🔌', title: 'API First Mindset', desc: 'Strong interest in REST API design, authentication, database integration and complete application workflows.' },
    { icon: '📚', title: 'Continuous Learning', desc: 'Actively improving backend engineering, architecture, testing, databases and production development practices.' },
]

export default function Testimonials() {
    return (
        <section className="py-28 bg-[#0F172A]" id="testimonials">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Developer Snapshot</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">Beyond the <span className="gradient-text">Code</span></h2>
                    <p className="text-slate-400 text-base mt-4 max-w-2xl mx-auto">Instead of placeholder client reviews, this section highlights the work, engineering mindset and learning focus visible across my projects.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, i) => (
                        <div key={item.title} data-aos="fade-up" data-aos-delay={i * 150} className="relative bg-[#1A2540] border border-white/[0.08] rounded-2xl p-9 transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)]">
                            <div className="text-4xl mb-5">{item.icon}</div>
                            <h3 className="font-['Poppins'] text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
