const cards = [
    { icon: '🏗️', title: 'Clean Code Architecture', desc: 'Well-structured, maintainable code for long-term scalability and easy future updates.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient development process ensuring quick turnaround without compromising quality.' },
    { icon: '🎯', title: 'Client Focused', desc: 'Every project is tailored to your specific needs, goals, and business requirements.' },
    { icon: '🛠️', title: 'Modern Technologies', desc: 'Using industry-standard frameworks and tools for future-proof applications.' },
    { icon: '🤝', title: 'Post-Delivery Support', desc: 'Support and updates after project completion to ensure everything keeps running smoothly.' },
]

export default function WhyMe() {
    return (
        <section className="py-28 bg-[#0F172A]" id="why">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Why Choose Me</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        The Developer Who <span className="gradient-text">Delivers Results</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {cards.map((c, i) => (
                        <div
                            key={c.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-8 text-center transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)] group"
                        >
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
