const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qr33f8a.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("studioSpaceDB");
    const studiosCollection = db.collection("studios");
    const bookingsCollection = db.collection("bookings");

    console.log("Database connect hoise mama!!!");

    app.get('/api/studios', async (req, res) => {
      const cursor = studiosCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/api/featured-studios', async (req, res) => {
      const result = await studiosCollection.find().limit(6).toArray();
      res.send(result);
    });

    app.get('/api/studios/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await studiosCollection.findOne(query);
      res.send(result);
    });

    app.post('/api/studios', async (req, res) => {
      const newStudio = req.body;
      const result = await studiosCollection.insertOne(newStudio);
      res.send(result);
    });

    app.get('/api/my-listings', async (req, res) => {
      let query = {};
      if (req.query?.email) {
        query = { ownerEmail: req.query.email };
      }
      const result = await studiosCollection.find(query).toArray();
      res.send(result);
    });

    app.delete('/api/studios/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await studiosCollection.deleteOne(query);
      res.send(result);
    });

    app.patch('/api/studios/edit/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: req.body
      };
      const result = await studiosCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.post('/api/bookings', async (req, res) => {
        const bookingInfo = req.body;
        bookingInfo.status = "Pending";
        const result = await bookingsCollection.insertOne(bookingInfo);
        res.send(result);
    });

    app.get('/api/my-bookings', async (req, res) => {
        let query = {};
        if (req.query?.email) {
            query = { userEmail: req.query.email };
        }
        const result = await bookingsCollection.find(query).toArray();
        res.send(result);
    });

  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('StudioSpace server choltese...')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});