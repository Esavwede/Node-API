
const logger = require('../logger/logger') 
const mongoose = require('mongoose') 


function getDbURI()
{
    if( process.env.NODE_ENV === 'development' )
    {
        return process.env.MONGODB_DEV_CONNECTION_STRING
    }
        return process.env.MONGODB_CONNECTION_STRING 
}


async function connectToDB()
{
    try 
    {

        const dbURI = getDbURI() 
        const db = mongoose.connection 
        const options = { serverSelectionTimeoutMS: 60000 }
        db.on("connecting",()=>{
            logger.info(" Creating Database connection ", options)
        })

        db.on("connected",()=>{
            logger.info(" Application Connected to Database ")
        })

        db.on("error",()=>{
            logger.error(" Database Connection error ") 
        })

        db.on("disconnecting",()=>{
            logger.warn(" Database Disconnecting ");
        })
        
        db.on("disconnected",()=>{
            logger.warn(" Database Disconnected ") 
        })


        await mongoose.connect( dbURI )
      
    }
    catch(e)
    {
        logger.error(e,' Error occured while connecting to database ')
    }
}


module.exports = connectToDB 