import express from "express";
import data from "./data.js";


const app = express();

app.get('/api/products', (req,res) => {
  res.send(data.products);
})


const port = process.env.PORT || 5001;
//call listen so app is ready for responses from the front end
app.listen(port, () =>{
  console.log(`serving at http://localhost:${port}`)
})