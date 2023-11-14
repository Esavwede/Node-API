
const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const UserSchema = new Schema(
    {
        firstname:
        {
            type: String, 
            required: true 
        },
        lastname:
        {
            type: String, 
            required: true 
        }, 
        email:
        {
            type: String, 
            required: true, 
            unique: true 
        },
        password:
        {
            type: String, 
            required: true
        },
        emailVerified:
        {
            type: Boolean, 
            required: true, 
            default: false 
        },
        emailVerificationCode:
        {
            type: String, 
            required: true 
        }
    }
)


const User = mongoose.model('user', UserSchema  )
module.exports = User 