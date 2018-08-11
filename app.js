let express = require('express');

let app = express();

app.use(express.static("views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.listen(8000, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("your app is running on port: 8000");
    }
});