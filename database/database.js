
const mongoose = require('mongoose');

let connectionURL = 'mongodb+srv://aya:mlab123456@cluster0-fpc9p.mongodb.net/ecommerce'
// let connectionURL = 'mongodb+srv://aya:mlab123456@cluster0-fpc9p.mongodb.net/ecommerce?retryWrites=true'
// let connectionURL = 'mongodb://localhost:27017/ecommerce'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex:true
});

