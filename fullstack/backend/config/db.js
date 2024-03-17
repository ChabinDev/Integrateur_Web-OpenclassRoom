const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI) 
        console.log('Mongo est Connecté')
    } catch(err) {
        console.log(err)
        process.exit()
    }
}

module.exports = connectToMongo;