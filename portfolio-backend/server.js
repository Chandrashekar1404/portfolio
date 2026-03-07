require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

// ─── Connect to MongoDB ───────────────────────────────────
connectDB()

// ─── Security Middleware ──────────────────────────────────
app.use(helmet())

// ─── CORS ─────────────────────────────────────────────────
const allowedOrigins = (process.env.CORS_ORIGIN || '')
    .split(',').map(o => o.trim()).filter(Boolean)

app.use(cors({
    origin: (origin, callback) => {
        // Allow no-origin requests (Postman, curl, mobile apps)
        if (!origin) return callback(null, true)
        // Allow any localhost / 127.0.0.1 on any port
        if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
            return callback(null, true)
        }
        // Allow explicitly listed production origins from .env
        if (allowedOrigins.includes(origin)) return callback(null, true)
        callback(new Error(`CORS blocked: '${origin}'`))
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-admin-key'],
}))


// ─── Body Parser ──────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Health Check ─────────────────────────────────────────
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ─── Routes ───────────────────────────────────────────────
app.use('/api/contact', contactRoutes)

// ─── 404 Handler ──────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' })
})

// ─── Global Error Handler ─────────────────────────────────
app.use((err, req, res, next) => {
    console.error('Server Error:', err.message)
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal server error',
    })
})

// ─── Start Server ─────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n🚀 Portfolio Backend running on http://localhost:${PORT}`)
    console.log(`📋 Contact API: http://localhost:${PORT}/api/contact`)
    console.log(`🩺 Health:      http://localhost:${PORT}/health\n`)
})
