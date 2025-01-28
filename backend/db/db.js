const mongoose = require("mongoose");

const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("got connected to mongodb");
    } catch (error) {
        console.log("Error found", error);
    }
};

module.exports = { db };
