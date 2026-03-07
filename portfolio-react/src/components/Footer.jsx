export default function Footer() {
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
    const services = ['Full Stack Development', 'Frontend Development', 'Backend APIs', 'Website Optimization']

    return (
        <footer className="bg-[#1E293B] border-t border-white/[0.08] pt-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#" className="inline-block font-['Poppins'] text-2xl font-extrabold gradient-text mb-4">&lt;CS/&gt;</a>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-[280px]">
                            Freelance Full-Stack Developer building scalable, high-performance web applications for businesses worldwide.
                        </p>
                        <div className="flex gap-3">
                            {/* GitHub */}
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                                className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            {/* Email */}
                            <a href="mailto:chandrashekar7414@gmail.com" aria-label="Email"
                                className="w-9 h-9 bg-[#1A2540] border border-white/[0.08] rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-4">Quick Links</h4>
                        <ul className="flex flex-col gap-2.5">
                            {links.map(l => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' }) }}
                                        className="text-sm text-slate-400 hover:text-blue-400 hover:pl-1 transition-all duration-300">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-4">Services</h4>
                        <ul className="flex flex-col gap-2.5">
                            {services.map(s => (
                                <li key={s}>
                                    <a href="#services" onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                                        className="text-sm text-slate-400 hover:text-blue-400 hover:pl-1 transition-all duration-300">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="font-['Poppins'] text-sm font-bold uppercase tracking-[1.5px] text-slate-300 mb-3">Ready to Start?</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">Let's discuss your next project over a free consultation call.</p>
                        <a href="mailto:chandrashekar7414@gmail.com?subject=Free Consultation Request"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                            Book Free Call →
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-slate-400 text-xs">© 2025 Chandra Shekar. All rights reserved. Built with ❤️ in Bangalore.</p>
                    <p className="text-slate-400 text-xs">Available for freelance projects worldwide.</p>
                </div>
            </div>
        </footer>
    )
}
