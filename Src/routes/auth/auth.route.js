const express = require('express')
const router = express.Router() 
const logger = require('../../lib/logger/logger') 

const v = process.env.API_VERSION 

module.exports = function(app)
{
    try 
    {

            router.post('/signup',(req, res)=>{ res.send(' Signup ') })
            router.post('/signin',(req, res )=>{ res.send(' Signin ')})
            router.get('/signout', (req, res )=>{ res.send(' Signout ')})

            app.use(`/api/${v}/auth`, router )

        logger.info(' Auth Routes Created ')
    }
    catch(e)
    {
        logger.error(e,"Error occured while building Auth Routes")
    }
}