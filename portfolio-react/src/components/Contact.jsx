import { useState, useRef } from 'react'

const API_URL = 'http://localhost:5000/api/contact'

export default function Contact() {
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const formRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError('')

        const formData = new FormData(formRef.current)
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            project: formData.get('project'),
            message: formData.get('message'),
        }

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            const data = await res.json()

            if (!res.ok) {
                // Show first validation error or generic message
                const msg = data.errors?.[0]?.message || data.message || 'Something went wrong.'
                throw new Error(msg)
            }

            setSuccess(true)
            formRef.current?.reset()
            setTimeout(() => setSuccess(false), 6000)
        } catch (err) {
            if (err.name === 'TypeError') {
                // Network error — backend likely not running
                setError('Could not connect to the server. Please try again or email me directly.')
            } else {
                setError(err.message)
            }
        } finally {
            setSubmitting(false)
        }
    }

    const contactItems = [
        { icon: '📞', label: 'Phone', content: <a href="tel:+917993975281" className="text-slate-300 text-sm hover:text-blue-400 transition-colors">+91 79939 75281</a> },
        { icon: '📧', label: 'Email', content: <a href="mailto:chandrashekar7414@gmail.com" className="text-slate-300 text-sm hover:text-blue-400 transition-colors break-all">chandrashekar7414@gmail.com</a> },
        { icon: '📍', label: 'Location', content: <span className="text-slate-300 text-sm">Bangalore, India</span> },
        { icon: '⏰', label: 'Availability', content: <span className="text-slate-300 text-sm">Mon–Sat, 9AM – 7PM IST</span> },
    ]

    return (
        <section className="py-28 bg-[#0F172A]" id="contact">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Get In Touch</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">
                        Let's Build Something <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-slate-400 text-base mt-4">Ready to start your project? Reach out and let's discuss how I can help.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
                    {/* Info */}
                    <div className="flex flex-col gap-4" data-aos="fade-right">
                        {contactItems.map(item => (
                            <div key={item.label} className="flex items-start gap-4 bg-[#1A2540] border border-white/[0.08] rounded-xl px-5 py-4 hover:border-blue-500/35 hover:translate-x-1 transition-all duration-300">
                                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <strong className="block text-[0.75rem] uppercase tracking-wide text-slate-400 mb-1">{item.label}</strong>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                        <a
                            href="mailto:chandrashekar7414@gmail.com?subject=Book Free Consultation&body=Hi Chandra, I'd like to schedule a free consultation."
                            className="mt-2 w-full flex justify-center items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all duration-300"
                        >
                            📅 Book Free Consultation
                        </a>
                    </div>

                    {/* Form */}
                    <div data-aos="fade-left">
                        {success ? (
                            <div className="bg-[#1A2540] border border-green-500 rounded-2xl p-16 text-center">
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="font-['Poppins'] text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-slate-400">Thank you! I'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-9 flex flex-col gap-5">
                                {/* Error banner */}
                                {error && (
                                    <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-sm px-4 py-3 rounded-xl">
                                        ⚠️ {error}
                                    </div>
                                )}

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Your Name *</label>
                                    <input name="name" type="text" placeholder="John Doe" required
                                        className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.25)] transition-all duration-300" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Email Address *</label>
                                    <input name="email" type="email" placeholder="john@example.com" required
                                        className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.25)] transition-all duration-300" />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Project Type</label>
                                    <select name="project"
                                        className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.25)] transition-all duration-300">
                                        <option value="">Select a service...</option>
                                        {['Full Stack Web Development', 'Frontend Development', 'Backend API Development', 'Website Optimization', 'Other'].map(o => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Tell Me About Your Project</label>
                                    <textarea name="message" rows={5} placeholder="Describe your project, timeline, and budget..."
                                        className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm resize-y focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.25)] transition-all duration-300" />
                                </div>

                                <button type="submit" disabled={submitting}
                                    className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(59,130,246,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                                    {submitting ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a10 10 0 100 20v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message 🚀'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
