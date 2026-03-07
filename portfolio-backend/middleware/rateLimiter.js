const rateLimit = require('express-rate-limit')

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 5,                      // max 5 submissions per window per IP
    message: {
        success: false,
        message: 'Too many messages sent from this IP. Please wait 15 minutes before trying again.',
    },
    standardHeaders: true,   // return rate limit info in RateLimit-* headers
    legacyHeaders: false,
    // Skip rate limiting in development
    skip: () => process.env.NODE_ENV === 'development' ? false : false,
})

module.exports = rateLimiter
