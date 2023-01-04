const mongooes = require('mongoose');

const connectDB = (uri) => {
    console.log('connect from db');
    mongooes.set("strictQuery", false);
    return mongooes.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
}

module.exports = connectDB;