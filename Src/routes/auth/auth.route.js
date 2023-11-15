const express = require('express')
const router = express.Router() 
const logger = require('../../lib/logger/logger') 
const auth = require('../../controller/auth/auth.controller')

const v = process.env.API_VERSION 

module.exports = function(app)
{
    try 
    {

            router.post('/signup', auth.signup )
            router.post('/signin', auth.signin )
            router.get('/signout', auth.signout )

            app.use(`/api/${v}/auth`, router )

        logger.info(' Auth Routes Created ')
    }
    catch(e)
    {
        logger.error(e,"Error occured while building Auth Routes")
    }
}