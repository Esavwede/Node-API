



function graceful_shutdown(app)
{
        console.log(" Shutting Down gracefully... ") 

        // db.disconnect(( err )=>{

        //             if(err)
        //             {
        //                 console.log(" Error occured while closing db connection ")
        //                 console.log(e)
        //             }
        //             else 
        //             {
        //                 console.log(" Db connection closed ")
        //             }

        //     app.close(( err )=>{

                
        //         if(err)
        //         {
        //             console.log(" Error occured while closing app ")
        //             console.log(e)
        //         }
        //         else 
        //         {
        //             console.log(" App closed ")
        //             process.exit(0) 
        //         }

        //     })


        // })

        app.close((err)=>{

            if(err)
            {
                console.log(" Error occured while shutting down application ")  
                console.log(e)
                process.exit(1) 
            }
            else 
            {
                console.log(" Application shutdown successfull ")
                process.exit(0) 
            }
        })
        
} 



module.exports = graceful_shutdown 