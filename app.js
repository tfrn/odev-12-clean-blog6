const express = require("express");
const ejs = require("ejs");
const path = require("path");
const { default: mongoose } = require("mongoose");
const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");
const app = express();
// connect db
mongoose.connect("mongodb://127.0.0.1/cleanblog-test-db");

app.set("view engine", "ejs");
//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", postControllers.getPostShow);
app.get("/about", pageControllers.getAbout);
app.get("/add_post", pageControllers.getAddPost);
app.get("/delete/:id", postControllers.getPostDelete);
app.get("/edit/:id", postControllers.getPostEdit); 
app.post("/postCreate", postControllers.getPostCreate);
app.post("/editos", postControllers.getPostUpdate);

app.get("/post/:id", postControllers.getPostDetail);


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
