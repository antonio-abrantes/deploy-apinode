require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

// Database setup
mongoose.connect(
  process.env.MONGO_URL, {
  useNewUrlParser: true,
});

// require('./src/models/Product');
requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3333, () => {
  // console.log('Server on port:3333');
});
