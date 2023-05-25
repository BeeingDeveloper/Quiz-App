const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();


// SETUP SERVER -------------------------------------------------------------------------
const app = express();
const port = process.env.PORT || 5800




// SETUP MIDDLEWARE----------------------------------------------------------------------
app.use(cors());
app.use(express.json());






// MONGO DB SETUP------------------------------------------------------------------------
mongoose.set('strictQuery', false)
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.once('open', ()=>{
    console.log(`Connection to mongodb esetablished successfully...`);
});





// ROUTERS--------------------------------------------------------------------------------
const quizRouter = require('./routes/quizRouter');
app.use('/api/quiz/', quizRouter);







//  START SERVER--------------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`Connection established to server on port: ${port}`)
})

