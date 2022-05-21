const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Avx0231?',
    database:'crud',
})

app.listen(3001, ()=>{
    console.log("rodando servidor...")
})
app.get('/',(req, res)=>{
    let SQL = "INSERT INTO games (name,cost,category,idgames) VALUES('dadad','120','acao','12131')";
    db.query(SQL, (err,result)=>{
        console.log(err);
    })
})