const express = require('express');
const app = express()
const User = require('./modules/User')
const mongoose = require('mongoose')

//promise function === callback nhung de viet de nam bat hon
mongoose.connect('mongodb+srv://admin:admin@wazadb-ozm3m.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(result => {
    console.log('connect to DB')
})
.catch(error => {
    console.log(error)
})
// middleware quan trong can khai bao truoc khi chia nhanh router
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//chia nhanh router
app.use('/api',User);

// server listening , bat dau chay server
app.listen(3000,() => {
    console.log('listening on port 3000');
})