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
},  pino.transport({ targets:[ 
    {  target: 'pino/file',
       options: { destination: `${ __dirname }/b.log`}
    },
    {
        target: 'pino/file'
    }
]}))


module.exports = logger 