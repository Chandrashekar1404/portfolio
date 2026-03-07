const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        },
        project: {
            type: String,
            trim: true,
            default: 'Not specified',
            maxlength: [100, 'Project type cannot exceed 100 characters'],
        },
        message: {
            type: String,
            trim: true,
            maxlength: [2000, 'Message cannot exceed 2000 characters'],
        },
        read: {
            type: Boolean,
            default: false,
        },
        ip: {
            type: String,
            select: false, // hidden from default queries for privacy
        },
    },
    {
        timestamps: true,   // adds createdAt + updatedAt automatically
        collection: 'contacts',
    }
)

// Index for faster admin queries
contactSchema.index({ createdAt: -1 })
contactSchema.index({ read: 1 })

module.exports = mongoose.model('Contact', contactSchema)
