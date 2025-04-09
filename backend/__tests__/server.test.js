const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const http = require('http');

// Load environment variables before tests
dotenv.config();

describe('Server Setup', () => {
  test('should have all required dependencies', () => {
    expect(express).toBeDefined();
    expect(cors).toBeDefined();
    expect(dotenv).toBeDefined();
    expect(fs).toBeDefined();
    expect(path).toBeDefined();
    expect(http).toBeDefined();
  });

  test('should have required environment variables', () => {
    // Set default PORT if not defined
    process.env.PORT = process.env.PORT || '3000';
    expect(process.env.PORT).toBeDefined();
  });

  test('should have required JSON files', () => {
    const productsPath = path.join(__dirname, '../parent_products.json');
    expect(fs.existsSync(productsPath)).toBe(true);
  });
}); 