import { useState, useRef } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact'
const LINKEDIN_URL = 'www.linkedin.com/in/chandra-shekar-malthumkar-745534232'
const GITHUB_URL = 'https://github.com/Chandrashekar1404'

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
        const payload = { name: formData.get('name'), email: formData.get('email'), project: formData.get('project'), message: formData.get('message') }
        try {
            const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
            const data = await res.json()
            if (!res.ok) throw new Error(data.errors?.[0]?.message || data.message || 'Something went wrong.')
            setSuccess(true)
            formRef.current?.reset()
            setTimeout(() => setSuccess(false), 6000)
        } catch (err) {
            setError(err.name === 'TypeError' ? 'Could not connect to the contact service. Please email me directly.' : err.message)
        } finally { setSubmitting(false) }
    }

    const contactItems = [
        { icon: '📧', label: 'Email', content: <a href="mailto:chandrashekar7414@gmail.com" className="text-slate-300 text-sm hover:text-blue-400 transition-colors break-all">chandrashekar7414@gmail.com</a> },
        { icon: '📍', label: 'Location', content: <span className="text-slate-300 text-sm">India</span> },
        { icon: '💼', label: 'LinkedIn', content: <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-blue-400 transition-colors">Connect on LinkedIn ↗</a> },
        { icon: '🐙', label: 'GitHub', content: <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-blue-400 transition-colors">View my repositories ↗</a> },
    ]

    return (
        <section className="py-28 bg-[#0F172A]" id="contact">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-400 mb-3">Get In Touch</p>
                    <h2 className="font-['Poppins'] text-3xl lg:text-4xl font-bold">Let's Connect &amp; <span className="gradient-text">Build Something</span></h2>
                    <p className="text-slate-400 text-base mt-4">Have a project, collaboration idea, or opportunity? Send a message or connect with me directly.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-14 items-start">
                    <div className="flex flex-col gap-4" data-aos="fade-right">
                        {contactItems.map(item => <div key={item.label} className="flex items-start gap-4 bg-[#1A2540] border border-white/[0.08] rounded-xl px-5 py-4 hover:border-blue-500/35 hover:translate-x-1 transition-all duration-300"><div className="text-2xl flex-shrink-0">{item.icon}</div><div><strong className="block text-[0.75rem] uppercase tracking-wide text-slate-400 mb-1">{item.label}</strong>{item.content}</div></div>)}
                        <a href="mailto:chandrashekar7414@gmail.com?subject=Project%20or%20Collaboration%20Opportunity" className="mt-2 w-full flex justify-center items-center gap-2.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300">📩 Email Me Directly</a>
                    </div>

                    <div data-aos="fade-left">
                        {success ? <div className="bg-[#1A2540] border border-green-500 rounded-2xl p-16 text-center"><div className="text-5xl mb-4">✅</div><h3 className="font-['Poppins'] text-2xl font-bold mb-2">Message Sent!</h3><p className="text-slate-400">Thanks for reaching out. I'll get back to you as soon as possible.</p></div> : (
                            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#1A2540] border border-white/[0.08] rounded-2xl p-9 flex flex-col gap-5">
                                {error && <div className="bg-red-500/10 border border-red-500/40 text-red-400 text-sm px-4 py-3 rounded-xl">⚠️ {error}</div>}
                                <div className="flex flex-col gap-1.5"><label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Your Name *</label><input name="name" type="text" placeholder="Your name" required className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300" /></div>
                                <div className="flex flex-col gap-1.5"><label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Email Address *</label><input name="email" type="email" placeholder="you@example.com" required className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300" /></div>
                                <div className="flex flex-col gap-1.5"><label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">What can I help with?</label><select name="project" className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-blue-500 transition-all duration-300"><option value="">Select an option...</option>{['Django / DRF API','Java / Spring Boot API','React Frontend','Full-Stack Application','AI Application','Other / Collaboration'].map(o => <option key={o}>{o}</option>)}</select></div>
                                <div className="flex flex-col gap-1.5"><label className="text-[0.8rem] font-semibold text-slate-300 tracking-wide">Message</label><textarea name="message" rows={5} placeholder="Tell me about your project or opportunity..." className="bg-[#1E293B] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm resize-y focus:outline-none focus:border-blue-500 transition-all duration-300" /></div>
                                <button type="submit" disabled={submitting} className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">{submitting ? 'Sending...' : 'Send Message 🚀'}</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
