const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const Contact = require('../models/Contact')
const rateLimiter = require('../middleware/rateLimiter')

// ─── Validation Rules ─────────────────────────────────────
const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name is too long'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email'),
    body('project')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Project type is too long'),
    body('message')
        .optional()
        .trim()
        .isLength({ max: 2000 }).withMessage('Message is too long'),
]

// ─── POST /api/contact — Submit Contact Form ──────────────
router.post('/', rateLimiter, validateContact, async (req, res) => {
    // Validate request body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
        })
    }

    try {
        const { name, email, project, message } = req.body

        const contact = await Contact.create({
            name,
            email,
            project: project || 'Not specified',
            message: message || '',
            ip: req.ip,
        })

        console.log(`📩 New contact from ${name} <${email}> — ${new Date().toLocaleString()}`)

        res.status(201).json({
            success: true,
            message: 'Message received! I\'ll get back to you within 24 hours.',
            id: contact._id,
        })
    } catch (err) {
        console.error('Contact save error:', err.message)

        // Handle Mongoose validation errors
        if (err.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(err.errors).map(e => e.message).join(', '),
            })
        }

        res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again later.',
        })
    }
})

// ─── GET /api/contact — Admin: View All Submissions ───────
router.get('/', async (req, res) => {
    const adminKey = req.headers['x-admin-key']

    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 })
            .select('-ip')          // exclude IP from response
            .lean()

        res.json({
            success: true,
            count: contacts.length,
            contacts,
        })
    } catch (err) {
        console.error('Contact fetch error:', err.message)
        res.status(500).json({ success: false, message: 'Failed to fetch contacts' })
    }
})

// ─── PATCH /api/contact/:id/read — Mark as Read ───────────
router.patch('/:id/read', async (req, res) => {
    const adminKey = req.headers['x-admin-key']
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        )
        if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' })
        res.json({ success: true, contact })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update contact' })
    }
})

// ─── DELETE /api/contact/:id — Delete Submission ──────────
router.delete('/:id', async (req, res) => {
    const adminKey = req.headers['x-admin-key']
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)
        if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' })
        res.json({ success: true, message: 'Contact deleted' })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete contact' })
    }
})

module.exports = router
