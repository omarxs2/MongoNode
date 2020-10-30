const express = require('express');
const connectDB = require('./DB/conncection');
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/userModel', require('./Api/user'));

const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));


/*
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


*/


