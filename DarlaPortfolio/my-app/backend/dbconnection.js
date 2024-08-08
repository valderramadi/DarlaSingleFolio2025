//db connection logic and using mongo to connect to mongodb database
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
