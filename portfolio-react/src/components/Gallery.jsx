const items = [
    { emoji: '🤖', label: 'AI Resume Builder', bg: 'linear-gradient(135deg, #312e81 0%, #0f172a 100%)', large: true },
    { emoji: '💼', label: 'Job Portal', bg: 'linear-gradient(135deg, #0f3d56 0%, #0f172a 100%)', large: false },
    { emoji: '🍽️', label: 'NexaDine', bg: 'linear-gradient(135deg, #164e63 0%, #0f172a 100%)', large: false },
    { emoji: '🛒', label: 'MegaVault', bg: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', large: false },
    { emoji: '🏦', label: 'Banking App', bg: 'linear-gradient(135deg, #14532d 0%, #0f172a 100%)', large: false },
]

export default function Gallery() {
    return (
        <section className="py-28 bg-[#1E293B]" id="gallery">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Project Themes</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">A Glimpse of <span className="gradient-text">My Work</span></h2>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[416px]" data-aos="fade-up">
                    {items.map((item, i) => <div key={item.label} data-aos="fade-up" data-aos-delay={i * 100} className={`relative rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02] ${item.large ? 'col-span-2 row-span-2' : ''}`} style={{ background: item.bg }}><div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">{item.emoji}</div><div className="absolute bottom-3 left-3 bg-[rgba(15,23,42,0.85)] text-white text-xs font-semibold px-3 py-1 rounded-full">{item.label}</div></div>)}
                </div>
            </div>
        </section>
    )
}
