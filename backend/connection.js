const mysql = require("mysql2")
const mysqlConnection = mysql.createConnection({
    host:process.env.HOST_NAME,
    user:process.env.USER_NAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME
})
 mysqlConnection.connect((err)=>{
    if(err){
        console.log("There is error in DB")
    }
    else{
        console.log("Connected with DB")
    }
})
module.exports = mysqlConnection;