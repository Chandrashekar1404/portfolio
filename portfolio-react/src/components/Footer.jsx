export default function Footer() {
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
    const services = ['Django & DRF APIs', 'Java & Spring Boot', 'React Frontend', 'Full-Stack Applications']
    const github = 'https://github.com/Chandrashekar1404'
    const linkedin = 'www.linkedin.com/in/chandra-shekar-malthumkar-745534232'

    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#1E293B] border-t border-white/[0.08] pt-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-12">
                    <div>
                        <button onClick={() => scrollTo('#home')} className="font-['Poppins'] text-2xl font-extrabold gradient-text mb-4">&lt;CS/&gt;</button>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-[300px]">Full-Stack Developer building practical web applications and REST APIs with Python, Django, Java, Spring Boot, React and MySQL.</p>
                        <div className="flex gap-3">
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300">GH</a>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300">in</a>
                            <a href="mailto:chandrashekar7414@gmail.com" aria-label="Email" className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300">@</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-2.5">{links.map(l => <li key={l}><button onClick={() => scrollTo(`#${l.toLowerCase()}`)} className="text-sm text-slate-400 hover:text-blue-400 transition-all duration-300">{l}</button></li>)}</ul>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-4">Focus Areas</h4>
                        <ul className="flex flex-col gap-2.5">{services.map(s => <li key={s}><button onClick={() => scrollTo('#services')} className="text-sm text-slate-400 hover:text-blue-400 transition-all duration-300">{s}</button></li>)}</ul>
                    </div>

                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-3">Let's Connect</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">Open to development opportunities, collaborations and interesting full-stack projects.</p>
                        <a href="mailto:chandrashekar7414@gmail.com?subject=Project%20or%20Collaboration%20Opportunity" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">Get In Touch →</a>
                    </div>
                </div>

                <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-slate-400 text-xs">© 2026 Chandra Shekar. Built with React &amp; curiosity.</p>
                    <p className="text-slate-400 text-xs">Python • Django • Java • Spring Boot • React • MySQL</p>
                </div>
            </div>
        </footer>
    )
}
