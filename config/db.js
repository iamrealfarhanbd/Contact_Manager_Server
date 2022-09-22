const mongoose = require("mongoose");
require("dotenv").config();

// console.log(db);
console.log(process.env.MONGODB_URI);
//MONGOOSE RETURNS PROMISES
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;