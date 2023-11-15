
const _ = require('lodash') 
const crypto = require('crypto') 
const logger = require('../../lib/logger/logger') 
const User = require('../../model/User.model') 
const { v4: uuidv4 } = require('uuid') 

async function checkIfUserExists( email )
{
    try 
    {
        logger.trace(`Checking If Email: ${ email } Registered In Database `)

        const userExists = await User.findOne({ email },{ _id: 1 })

        if( userExists )
        {
            logger.trace("Email Already Registered in Database ")
            return true 
        }

            logger.trace("Email Not Registered In Database") 

        return false 
    }
    catch(e)
    {
        logger.error(e,'Error Occured While Checking If User Exists ')
        throw e 
    }
}


async function createNewUser( user)
{
    try 
    {
       
        logger.trace(`Creating New User `)


        // email verification code 
        user['emailVerificationCode'] = crypto.randomBytes(10).toString('hex').toUpperCase() 
        

        // User uuid 
        user['user_id'] = uuidv4() 
        var newUser = new User( user ) 
        await newUser.save() 

        newUser = _.omit( newUser.toObject(), ['password','emailVerificationCode'])

        logger.trace(' New User Created') 
        
        return newUser 

       

    }
    catch(e)
    {
        logger.error(e,'Error Occured While Creating New User')
        throw e 
    }
}



module.exports = { checkIfUserExists, createNewUser  }