const items = [
    { emoji: '🛒', label: 'E-Commerce UI', bg: 'linear-gradient(135deg, #1a2a4a 0%, #0d1b35 50%, #1a3a5a 100%)', large: true },
    { emoji: '🌤️', label: 'Weather App', bg: 'linear-gradient(135deg, #1a2040 0%, #0a3050 100%)', large: false },
    { emoji: '💻', label: 'Backend Code', bg: 'linear-gradient(135deg, #1a1a3a 0%, #0d1a35 100%)', large: false },
    { emoji: '💰', label: 'Expense Tracker', bg: 'linear-gradient(135deg, #0d2040 0%, #1a3050 100%)', large: false },
    { emoji: '🔌', label: 'API Structure', bg: 'linear-gradient(135deg, #1a1535 0%, #0d1545 100%)', large: false },
]

export default function Gallery() {
    return (
        <section className="py-28 bg-[#1E293B]" id="gallery">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Work Preview</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        UI Screens &amp; <span className="gradient-text">Code Snapshots</span>
                    </h2>
                </div>
                {/* Grid: 3 cols, 2 rows — first item spans 2x2 */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[416px]" data-aos="fade-up">
                    {items.map((item, i) => (
                        <div
                            key={item.label}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className={`relative rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.02] ${item.large ? 'col-span-2 row-span-2' : ''}`}
                            style={{ background: item.bg }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                                {item.emoji}
                            </div>
                            <div className="absolute bottom-3 left-3 bg-[rgba(15,23,42,0.85)] text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
