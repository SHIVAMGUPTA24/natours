var express = require('express');
var app =express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

app.get('/',function(req,res){
    res.render("index");
});

app.listen(process.env.PORT||8080,function(){
    console.log("Server is listening")
});
//made by krash
