const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const http = require('http');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from any origin
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

app.use(express.json());

// Read products from JSON file
const products = JSON.parse(fs.readFileSync(path.join(__dirname, 'parent_products.json'), 'utf8'));

// Transform product data to match frontend requirements
const transformProduct = (product) => ({
  id: product._id.$oid,
  name: product.names.en,
  brand: product.vendor.name,
  price: product.price,
  sku: product.product_code,
  series: {
    name: product.series.name,
    itemQuantity: product.series.item_quantity
  },
  images: {
    main: product.main_image,
    all: product.images || []
  },
  details: {
    fabric: product.description_details?.en?.fabric || '',
    modelMeasurements: product.description_details?.en?.model_measurements || '',
    productMeasurements: product.description_details?.en?.product_measurements || '',
    sampleSize: product.description_details?.en?.sample_size || ''
  }
});

// Get all products
app.get('/api/products', (req, res) => {
  const transformedProducts = products.map(transformProduct);
  res.json(transformedProducts);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id.$oid === req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(transformProduct(product));
});

// Create HTTP server
const server = http.createServer(app);

// Listen on all network interfaces
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://192.168.1.10:${port}`);
}); 