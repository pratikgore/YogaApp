 //get express
const express = require("express")     

//initialize app 
const app = express() 
const bodyParser = require("body-parser") 
const cors = require("cors"); 

//get databse
const mysql = require("mysql2"); 
const { query } = require("express");

const db = mysql.createPool({
    host: "localhost",                                                //database host
    user: "root",                                                          //root of databse       
    password: "1234",                                               //password for databse
    database :"yoga_data"                                     // name of databse 
})

app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


//POST method 
//user_db is table in yoga_data databse 
app.post("/api/post", (req, res) => {
    const { name, email, contact, age,batch } = req.body; 
    const sqlInsert = "INSERT INTO user_db (name ,email ,contact ,age,batch) VALUES (? ,? , ?,?,?)";
    db.query(sqlInsert, [name, email, contact ,age ,batch], (error, result) => {
        if (error) {
            console.log(error)
        }
    })
})

//DELETE method 
app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlremove = "DELETE FROM  user_db WHERE id =?";
    db.query(sqlremove, id, (error, result) => {
        if (error) {
            console.log("Error is " , error)
        }
    })
})

//GET method 
app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM user_db"; 
    db.query(sqlGet, (error, result) => {
        res.send(result);
    })
})

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params; 
    const sqlGet = "SELECT * FROM user_db where id =  ? ";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error) 
        }
        res.send(result);
    })
})


//PUT metgod 
app.put("/api/put/:id", (req, res) => {
    const { id } = req.params;
    const { name ,email, contact } = req.body; 
    const sqlGet = "update user_db set name =? , email =? ,age=? , batch=?, contact=?  where id =?"
    db.query(sqlGet,[name ,email,contact ,age,batch, id], (error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result);
    })
})





app.get("/", (req, res) => {
    //const sqlInsert =  "INSERT INTO user_db (name ,email ,contact) VALUES ('pratik' ,'pratik@123' , 706656911)"
    //db.query(sqlInsert, (error  , result) => {
    //    console.log("error", error); 
    //    console.log("result", result); 
    //    res.send("Hello Pratik "); 
    //})
  
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})