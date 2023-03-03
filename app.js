const express = require("express");
const app = express();
const port = 3000;

// Koneksi
require("./utils/db");
// Model Collections
const Movies = require("./models/movie");

// Settings
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Read
app.get("/", async (req, res)=>{
    const movies = await Movies.find();
    res.json(movies);
})

// write
app.post("/", async (req, res)=>{
    await Movies.insertMany([req.body]).then(result => {
        console.log(JSON.stringify(req.body));
        res.json({
            status: "Success",
            result
        });
    });

})

// delete
app.delete("/",async (req, res)=>{
    await Movies.deleteMany().then(result => {
        res.json({
            message: "Success",
            result
        });
    });
})

app.listen(port, ()=>{
    console.log(`Listen on http://localhost:${port}`);
    
})