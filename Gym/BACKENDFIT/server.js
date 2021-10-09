const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();



//import routes
const postRoutes = require('./routes/posts');
app.use(bodyParser.json());
app.use(cors());


app.use(postRoutes);




const PORT=8000;
const DB_URL = 'mongodb+srv://HasiC4Online:12345@c4managementsystem.x5xky.mongodb.net/C4Crud_db?retryWrites=true&w=majority'
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB connection error',err));
app.listen(PORT,() =>{
    console.log(`App is running oon ${PORT}`);
});