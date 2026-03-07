const testimonials = [
    {
        text: '"Chandra delivered our project on time with clean and efficient code. Communication was excellent and the application works perfectly. Would definitely work with him again!"',
        name: 'Startup Founder',
        sub: 'Tech Startup, Bangalore',
        initials: 'SF',
        featured: false,
    },
    {
        text: '"Very professional developer. The application he built for our business exceeded expectations. Highly recommend for web development projects — fast, clean, and reliable."',
        name: 'Small Business Owner',
        sub: 'E-Commerce Business',
        initials: 'BO',
        featured: true,
    },
    {
        text: '"Outstanding work! Chandra understood our requirements quickly and delivered a scalable backend that handles our traffic perfectly. The code quality is excellent."',
        name: 'Product Manager',
        sub: 'SaaS Company',
        initials: 'PM',
        featured: false,
    },
]

export default function Testimonials() {
    return (
        <section className="py-28 bg-[#0F172A]" id="testimonials">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Client Reviews</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        What Clients <span className="gradient-text">Say About Me</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className={`relative bg-[#1A2540] border rounded-2xl p-9 transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,130,246,0.25)] ${t.featured ? 'border-blue-500/35' : 'border-white/[0.08]'}`}
                            style={t.featured ? { background: 'linear-gradient(135deg, #1A2540 0%, rgba(59,130,246,0.06) 100%)' } : {}}
                        >
                            {/* Big quote */}
                            <span className="absolute top-5 right-6 text-[5rem] font-['Poppins'] text-blue-400 opacity-10 leading-none select-none">"</span>
                            <div className="text-lg mb-4">⭐⭐⭐⭐⭐</div>
                            <p className="text-slate-300 text-[0.9rem] leading-relaxed italic mb-6">{t.text}</p>
                            <div className="flex items-center gap-3.5">
                                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <strong className="block text-sm font-semibold">{t.name}</strong>
                                    <span className="text-[0.76rem] text-slate-400">{t.sub}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
