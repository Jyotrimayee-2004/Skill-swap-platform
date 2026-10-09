const mongoose = require('mongoose');

// URI ="mongodb://127.0.0.1:27017/skill_swap";
URI ="mongodb://skillswap:<db_password>@ac-qdxisfz-shard-00-00.bwehcuw.mongodb.net:27017,ac-qdxisfz-shard-00-01.bwehcuw.mongodb.net:27017,ac-qdxisfz-shard-00-02.bwehcuw.mongodb.net:27017/?ssl=true&replicaSet=atlas-8mwlmc-shard-0&authSource=admin&appName=Cluster0";


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_Url);
        console.log("Connect is succesfully");
    } catch (error) {
        console.error("error is occur "+error); 
    }
};  

module.exports = connectDB ;