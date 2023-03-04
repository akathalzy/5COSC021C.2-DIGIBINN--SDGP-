const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000; // Replace with your desired port number
const url = 'mongodb+srv://hasitha:H6qkNUuAUdSKHCqA@cluster0.mp3j5bn.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
const dbName = 'DigibinnDatabase'; // Replace with your MongoDB database name
const collectionName = 'DigibinnData'; // Replace with your MongoDB collection name

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const { name, email, password, number, userType } = req.body;

    // Check if user already exists
    collection.findOne({ email }, (err, result) => {
      if (err) throw err;

      if (result) {
        res.status(400).json({ error: 'User already exists' });
        client.close();
      } else {
        // Insert new user into collection
        collection.insertOne({ name, email, password, number, userType }, (err, result) => {
          if (err) throw err;

          res.status(200).json({ message: 'User registered successfully' });
          client.close();
        });
      }
    });
  });
});
