
const logger = require('../../lib/logger/logger')
const { v5: uuidv5 } = require('uuid')
const SignupSchema = require('../../middleware/schemaValidation/auth/signup.schema')
const { checkIfUserExists, createNewUser } = require('../../services/auth/signup.service') 


    async function signup(req, res )
        {
            try 
            {
                // Acidity 
                // Verification Email 
                // security 
                // tests 
                // documentation 
                // all possible scenerios 
                // CICD 

                logger.trace("Started User Signup")
                
                const user = req.body 
                await SignupSchema.validateAsync( user ) 

                logger.trace("Signup Schema Valid ") 

                const userExists = await checkIfUserExists( user.email ) 
                if( userExists ){ return res.status(409).json({ success: false, msg:"account with this email exists "})}
        
                const newUser = await createNewUser( user ) 

                return res.status(201).json({ success: true, msg:"user signup successfull ", data:{ newUser }})
            }
            catch(e)
            {
                // Request body error 
                if( e.isJoi ){ return res.status(400).json({ success: false, msg: e.details[0].message})}

                logger.error(e,"User Signup Error")
                res.status(500).json({ success: false, msg:"User signup error "})
            }
        }


    function signin()
    {
        try 
            {
                logger.trace("User signup")
            }
            catch(e)
            {
                logger.error(e,"User Signup Error")
                res.status(500).json({ success: false, msg:"User signup error "})
            }
    }


    function signout()
    {
        try 
        {
            logger.trace("User signup")
        }
        catch(e)
        {
            logger.error(e,"User Signup Error")
            res.status(500).json({ success: false, msg:"User signup error "})
        }
    }



module.exports = { signup, signin, signout }