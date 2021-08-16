const express = require("express");
const app = express();
const path = require("path");

const PORT=process.env.PORT || 5000;

if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"));
    const path = require("path"); 
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`);
})
