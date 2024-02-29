import express from "express"
import {log} from "node:console"
import mysql from "mysql"

const app = express()


app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"schedule"
})

db.connect((err)=>{
    if(!err){
        log("db connect")
    }else{
        log("db connection failed")
    }
})


app.get("/",(req,res)=>{
    const sql = "SELECT * FROM `time_table`;"
    db.query(sql,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.post("/add",(req,res)=>{
    const sql = "INSERT INTO `time_table`(`sub_id`,`sub_activity`,`act_date`,`act_time`) VALUES ('"+req.body.sub_id+"','"+req.body.sub_activity+"','"+req.body.act_date+"','"+req.body.act_time+"');"
    db.query(sql,(err,result)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(result)
        }
    })
})

app.listen(4000,()=>{
    log("Server Running")
})