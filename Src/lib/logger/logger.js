const pino = require('pino')

const logger = pino({
    level: process.env.APPLICATION_LOG_LEVEL || 'info', 
    formatters:
    {
        level: (label)=>
        {
            return { level: label.toUpperCase() }
        }
    },
    timestamp: () => `,"timestamp":"${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })}"`
})


module.exports = logger 