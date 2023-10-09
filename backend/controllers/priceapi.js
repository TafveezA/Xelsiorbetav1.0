const asyncHandler = require('../middleware/async')
const ErrorResponse = require('../utils/errorResponse')
const dotenv = require('dotenv')

dotenv.config({path:'../config/config.env'})


exports.tokenPrice = asyncHandler(async(req,res,next)=>{
       //await client.connect()
       const {price,symbol} = req.body
       
        console.log(symbol)
      
                     
        res.status(200).json({
         success:true,
         price:price
        })
       // client.disconnect()
       
   })
