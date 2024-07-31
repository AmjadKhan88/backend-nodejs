require('dotenv').config({path: './env'})
import dbconnect from './db/db'
import app from './app';








dbconnect()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log('listening on port'+process.env.PORT);
    })
})
.catch(()=>{
    console.log('database connection error')
});