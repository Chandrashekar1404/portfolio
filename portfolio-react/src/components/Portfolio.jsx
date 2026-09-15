import { useState } from 'react'

const projects = [
    {
        id: 'ai-resume', emoji: '🤖', label: 'AI Resume Builder',
        bg: 'linear-gradient(135deg, #312e81 0%, #0f172a 100%)',
        tags: ['React', 'Django', 'REST API', 'AI'],
        title: 'AI Resume Builder',
        desc: 'AI-powered full-stack application designed to help users create professional resumes.',
        modalDesc: 'A full-stack resume-building application combining a React frontend with a Django backend and AI-oriented functionality.',
        features: ['Resume creation workflow', 'React-based interface', 'Django REST API backend', 'AI-assisted resume features'],
        url: 'https://github.com/Chandrashekar1404/AI-Resume-Builder-fullstack',
    },
    {
        id: 'job-portal', emoji: '💼', label: 'Job Portal',
        bg: 'linear-gradient(135deg, #0f3d56 0%, #0f172a 100%)',
        tags: ['React', 'Django', 'DRF', 'MySQL'],
        title: 'Job Portal',
        desc: 'Full-stack job portal with authentication, job listings, applications, and role-based workflows.',
        modalDesc: 'A React and Django REST Framework application covering job discovery, authentication, applications, and database-backed workflows.',
        features: ['User registration and login', 'Job listing APIs', 'Job application workflow', 'JWT/token authentication'],
        url: 'https://github.com/Chandrashekar1404/job-portal-fullstack',
    },
    {
        id: 'restaurant', emoji: '🍽️', label: 'NexaDine',
        bg: 'linear-gradient(135deg, #164e63 0%, #0f172a 100%)',
        tags: ['React', 'Spring Boot', 'MySQL', 'Razorpay'],
        title: 'NexaDine Restaurant System',
        desc: 'Restaurant management and food ordering platform with customer and admin workflows.',
        modalDesc: 'A production-style restaurant application built with React, Spring Boot, MySQL and JWT, with ordering, reservations, administration and Razorpay integration.',
        features: ['Customer and admin workflows', 'Food menu and order management', 'JWT authentication', 'Razorpay Test Mode payments'],
        url: 'https://github.com/Chandrashekar1404/restaurant-fullstack',
    },
    {
        id: 'megavault', emoji: '🛒', label: 'MegaVault',
        bg: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
        tags: ['React', 'Spring Boot', 'MySQL', 'Razorpay'],
        title: 'MegaVault E-Commerce',
        desc: 'Modern full-stack e-commerce platform with authentication, cart, wishlist, coupons, checkout and payments.',
        modalDesc: 'A React + Spring Boot + MySQL e-commerce platform demonstrating authentication, product discovery, cart and wishlist management, coupons, checkout, email features and Razorpay Test Mode integration.',
        features: ['JWT authentication and OTP verification', 'Cart, wishlist and coupons', 'Admin product/order workflows', 'Razorpay Test Mode integration'],
        url: 'https://github.com/Chandrashekar1404/ecom-fullstack',
    },
    {
        id: 'banking', emoji: '🏦', label: 'Banking App',
        bg: 'linear-gradient(135deg, #14532d 0%, #0f172a 100%)',
        tags: ['Full Stack', 'Backend', 'Database'],
        title: 'Banking Application',
        desc: 'Banking-focused full-stack application demonstrating backend workflows and data management.',
        modalDesc: 'A banking application project focused on application workflows, backend functionality, data management and full-stack development.',
        features: ['Banking workflow implementation', 'Backend functionality', 'Data management', 'Full-stack architecture'],
        url: 'https://github.com/Chandrashekar1404/bank-fullstack',
    },
    {
        id: 'weather', emoji: '🌤️', label: 'Live Weather',
        bg: 'linear-gradient(135deg, #075985 0%, #0f172a 100%)',
        tags: ['JavaScript', 'REST API'],
        title: 'Live Weather App',
        desc: 'Weather application demonstrating API integration and responsive frontend development.',
        modalDesc: 'A weather-focused application demonstrating REST API consumption, frontend state handling and responsive UI patterns.',
        features: ['REST API integration', 'Location-based weather data', 'Responsive interface', 'Client-side application logic'],
        url: 'https://github.com/Chandrashekar1404/ChandraShekar_livewheather',
    },
]

function Modal({ project, onClose }) {
    if (!project) return null
    return (
        <div className="modal-overlay active fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-6 backdrop-blur-[8px]" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-box bg-[#1E293B] border border-blue-500/35 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <button onClick={onClose} className="absolute top-4 right-4 bg-[#1A2540] hover:bg-blue-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-sm z-10 transition-all duration-300">✕</button>
                <div className="h-48 rounded-t-3xl flex items-center justify-center text-6xl" style={{ background: project.bg }}>{project.emoji}</div>
                <div className="p-7">
                    <div className="flex gap-2 flex-wrap mb-3">{project.tags.map(t => <span key={t} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full uppercase">{t}</span>)}</div>
                    <h2 className="font-['Poppins'] text-2xl font-bold my-3">{project.title}</h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.modalDesc}</p>
                    <ul className="mb-6 divide-y divide-white/[0.08]">{project.features.map(f => <li key={f} className="text-slate-300 text-sm py-1.5">✔ {f}</li>)}</ul>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">View on GitHub ↗</a>
                </div>
            </div>
        </div>
    )
}

export default function Portfolio() {
    const [activeModal, setActiveModal] = useState(null)
    const active = projects.find(p => p.id === activeModal)

    return (
        <section className="py-28 bg-[#1E293B]" id="portfolio">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">GitHub Projects</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">Selected <span className="gradient-text">Real-World Work</span></h2>
                    <p className="text-slate-400 text-base mt-4 max-w-2xl mx-auto">A selection of full-stack applications and practical projects from my GitHub profile, spanning Python/Django and Java/Spring Boot.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((p, i) => (
                        <article key={p.id} data-aos="fade-up" data-aos-delay={i * 100} className="bg-[#1A2540] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] group">
                            <div className="relative h-[190px] overflow-hidden" style={{ background: p.bg }}>
                                <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-30 group-hover:scale-110 transition-transform duration-500">{p.emoji}</div>
                                <span className="absolute top-4 left-4 bg-black/25 border border-white/10 rounded-full px-3 py-1 text-[0.7rem] font-bold text-white/80">{p.label}</span>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 flex-wrap mb-3">{p.tags.map(t => <span key={t} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full uppercase">{t}</span>)}</div>
                                <h3 className="font-['Poppins'] text-lg font-bold mb-2">{p.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setActiveModal(p.id)} className="text-blue-400 font-semibold text-sm hover:text-cyan-400 transition-colors">Details →</button>
                                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-slate-300 font-semibold text-sm hover:text-white transition-colors">GitHub ↗</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-10"><a href="https://github.com/Chandrashekar1404?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-cyan-400 transition-colors">Explore all repositories on GitHub ↗</a></div>
            </div>
            <Modal project={active} onClose={() => setActiveModal(null)} />
        </section>
    )
}
