
const Joi = require('joi') 



const SignupSchema = Joi.object
    (
        {
            firstname: Joi.string().min(2).required(), 
            lastname: Joi.string().min(2).required(), 
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict(),
        }
    )


module.exports = SignupSchema 