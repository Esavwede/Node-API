var buildAuthRoutes = require('./auth/auth.route')
var logger = require('../lib/logger/logger')


module.exports = function(app)
{ 
  try 
  {
    
    logger.info(" Building Application Routes ")

        buildAuthRoutes(app)

    logger.info(" Application Routes Built ")
  }
  catch(e)
  {
    logger.error(e,"Error occured while building Application Routes ")
  }
} 
