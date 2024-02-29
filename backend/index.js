import express from "express"
import {log} from "node:console"
import mysql from "mysql"
import cors from "cors"

const app = express()


app.use(express.json())
app.use(cors())


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

app.get("/:data",(req,res)=>{
    const { data } = req.params
    const sql = "SELECT * FROM `time_table` WHERE `sub_id`='"+data+"' OR `sub_activity`='"+data+"';"
    db.query(sql,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})


app.post("/add",(req,res)=>{
    if(
        !req.body.sub_id ||
        !req.body.sub_activity ||
        !req.body.act_date ||
        !req.body.act_time
    ){
        return res.status(400).send({
            message:"Send all reqired data"
        })
    }else{
        const sql = "INSERT INTO `time_table`(`sub_id`,`sub_activity`,`act_date`,`act_time`) VALUES ('"+req.body.sub_id+"','"+req.body.sub_activity+"','"+req.body.act_date+"','"+req.body.act_time+"');"
        db.query(sql,(err,result)=>{
            if(err){
                return res.json(err)
            }else{
                return res.json(result)
            }
        })
    }
})

app.get("/update/:id",(req,res)=>{
    const { id } = req.params
    const sql = "SELECT * FROM `time_table` WHERE `sub_id`='"+id+"';"
    db.query(sql,(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.put("/update",(req,res)=>{
    if(
        !req.body.sub_id ||
        !req.body.sub_activity ||
        !req.body.act_date ||
        !req.body.act_time
    ){
        return res.status(400).send({
            message:"Send all required data"
        })
    }else{
        const sql = "UPDATE `Time_table` SET `sub_id`='"+req.body.sub_id+"',`sub_activity`='"+req.body.sub_activity+"',`act_date`='"+req.body.act_date+"',`act_time`='"+req.body.act_time+"' WHERE `sub_id`='"+req.body.sub_id+"';"
        db.query(sql,(err,result)=>{
            if(err){
                return res.json(err)
            }else{
                return res.json(result)
            }
        })
    }
})

app.delete("/delete/:id",(req,res)=>{
    const { id } = req.params
    const sql = "DELETE FROM `Time_table` WHERE `sub_id`='"+id+"';"
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