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

app.get('/', (req, res)=>{
  res.json({
    name: "api-node2020",
    version: "1.0.1",
    author: "Antônio Abrantes",
    get_endpoints:{
      all_products: "/api/products",
      products_per_page: "/api/products?page=num",
      product_per_id: "/api/products/id"
    }
  });
})

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT ||3333, () => {
  console.log('Server on port:3333');
});
