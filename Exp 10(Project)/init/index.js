const mongoose = require("mongoose");

let instance = null;

async function connectDB() {
    if (instance) {
        return instance; // already connected
    }

    instance = await mongoose.connect('mongodb://127.0.0.1:27017/WanderLust');
    console.log("DB Connected");
    return instance;
}

module.exports = connectDB;