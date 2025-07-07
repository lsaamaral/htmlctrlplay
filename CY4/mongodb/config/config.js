const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://isaamaral:isa3junho@cluster0.zxslifp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;