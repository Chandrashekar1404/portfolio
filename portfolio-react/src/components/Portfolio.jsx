import { useState } from 'react'

const projects = [
    {
        id: 'modal1',
        emoji: '🛒',
        label: 'E-Commerce',
        bg: 'linear-gradient(135deg, #1a2a4a 0%, #0d1b35 100%)',
        tags: ['HTML', 'CSS', 'JavaScript'],
        title: 'E-Commerce Website',
        desc: 'A fully responsive e-commerce platform with product listing, shopping cart UI, and modern design.',
        modalDesc: 'A fully responsive e-commerce platform featuring product listing pages, shopping cart functionality, and modern UI. Built with pure HTML, CSS, and JavaScript.',
        features: ['Product listing with grid/list view', 'Shopping cart with add/remove items', 'Fully responsive design', 'Filter and search functionality'],
    },
    {
        id: 'modal2',
        emoji: '🌤️',
        label: 'Weather App',
        bg: 'linear-gradient(135deg, #0a1f3f 0%, #0d2040 100%)',
        tags: ['JavaScript', 'REST API'],
        title: 'Weather Tracking App',
        desc: 'Live weather data application with real-time API integration and responsive mobile-first design.',
        modalDesc: 'A real-time weather application integrating the OpenWeatherMap API to display live weather data, forecasts, and location-based information.',
        features: ['Live weather data from API', '5-day forecast display', 'Search by city name', 'Responsive mobile-first UI'],
    },
    {
        id: 'modal3',
        emoji: '💰',
        label: 'Expense Tracker',
        bg: 'linear-gradient(135deg, #1a2040 0%, #0f172a 100%)',
        tags: ['JavaScript', 'LocalStorage'],
        title: 'Expense Tracker',
        desc: 'Smart expense management app with real-time calculations, transaction history, and category tracking.',
        modalDesc: 'A smart personal finance tracker that helps users manage income and expenses with real-time calculations, category breakdowns, and persistent storage.',
        features: ['Add and delete transactions', 'Real-time balance calculations', 'Category-based tracking', 'Data stored in LocalStorage'],
    },
]

function Modal({ project, onClose }) {
    if (!project) return null
    return (
        <div className="modal-overlay active fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-6 backdrop-blur-[8px]" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-box bg-[#1E293B] border border-blue-500/35 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                <button onClick={onClose} className="absolute top-4 right-4 bg-[#1A2540] hover:bg-blue-500 text-white rounded-full w-9 h-9 flex items-center justify-center text-sm z-10 transition-all duration-300">✕</button>
                <div className="h-48 rounded-t-3xl flex items-center justify-center text-6xl" style={{ background: project.bg }}>
                    {project.emoji}
                </div>
                <div className="p-7">
                    <div className="flex gap-2 flex-wrap mb-3">
                        {project.tags.map(t => <span key={t} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full uppercase">{t}</span>)}
                    </div>
                    <h2 className="font-['Poppins'] text-2xl font-bold my-3">{project.title}</h2>
                    <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.modalDesc}</p>
                    <ul className="mb-6 divide-y divide-white/[0.08]">
                        {project.features.map(f => <li key={f} className="text-slate-300 text-sm py-1.5">✔ {f}</li>)}
                    </ul>
                    <button onClick={() => { onClose(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                        Build Something Similar →
                    </button>
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
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">My Work</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-base mt-4">Real-world applications built with modern technologies.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((p, i) => (
                        <div
                            key={p.id}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className="bg-[#1A2540] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/35 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] cursor-pointer group"
                            onClick={() => setActiveModal(p.id)}
                        >
                            {/* Image area */}
                            <div className="relative h-[220px] overflow-hidden" style={{ background: p.bg }}>
                                <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-40 group-hover:scale-110 transition-transform duration-500">{p.emoji}</div>
                                <span className="absolute bottom-4 left-4 font-['Poppins'] text-xl font-bold text-white/60">{p.label}</span>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[rgba(15,23,42,0.75)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-6">
                                <div className="flex gap-2 flex-wrap mb-3">
                                    {p.tags.map(t => <span key={t} className="bg-blue-500/12 border border-blue-500/35 text-blue-400 text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full uppercase">{t}</span>)}
                                </div>
                                <h3 className="font-['Poppins'] text-lg font-bold mb-2">{p.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                                <span className="inline-flex items-center gap-1 text-blue-400 font-semibold text-sm group-hover:gap-2 group-hover:text-cyan-400 transition-all duration-300">
                                    View Project →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal project={active} onClose={() => setActiveModal(null)} />
        </section>
    )
}
