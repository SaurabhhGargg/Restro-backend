const Express = require('express');
const BP = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');
const DotEnv = require('dotenv');
const Routes = require('./routes');
const PORT = 8081;

const app = Express();
app.use(Cors());
app.use(Express.json());
Routes(app);
DotEnv.config();

Mongoose.connect(process.env.db_connect,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

app.get('/',(req,res)=>{
    res.send("Welcome");

})

app.listen(process.env.PORT || PORT,()=>{
    console.log("Server Listening" +PORT);
})