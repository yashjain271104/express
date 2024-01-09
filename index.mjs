//this is the file in which we write the express syntax to connect the db
// import connectToMongo from "";
import Express from "express";
import dotenv from "dotenv";
dotenv.config();
// const invokeConnectToMongo = connectToMongo()
// console.log(invokeConnectToMongo);

const port = 3000
const app = Express()

app.use(Express.json())

app.get('/', (req, res) => {
    res.end('Hello World!');
})

app.get('/load', (req, res)=>{
    res.send("<h2>yash jain is a gentleman</h2>");
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port http://localhost:${process.env.port}`)
})