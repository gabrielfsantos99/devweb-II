const express = require("express");
const path = require("path"); 

const app = express(); 
app.set("views", path.join(__dirname, "/views")); 
app.set("view engine", "ejs"); 

app.listen(80);

app.get("/pagina1", (req, res) => {
    res.render("/pagina1");
});

app.get("/pagina2", (req, res) => {
    res.render("pagina2");
});

app.get("/pagina3", (req, res) => {
    res.render("pagina3");
});
