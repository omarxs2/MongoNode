const mongoose = require('mongoose');

const URI = "mongodb+srv://Admin:Omar1234+@cluster1.npicb.mongodb.net/dbtest?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;