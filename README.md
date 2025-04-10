# LoncaApp

## Environment Configuration

The project uses environment variables for configuration. Here's how to set it up:

1. Create a `.env` file in the root directory with the following content:
```env
API_URL=http://localhost:3000
```

2. Create a `.env` file in the backend directory with:
```env
PORT=3000
```

3. The `.env` files are already in `.gitignore`, so they won't be committed to version control.

4. For other developers, we provide a `.env.example` file as a template:
```env
API_URL=http://localhost:3000
```

### Using Environment Variables

In your code, you can access these variables through the `Config` object:

```typescript
import { Config } from '../constants/config';

// Use the API URL
const apiUrl = Config.API_URL;
```

## Backend Server

This is the backend server for the LoncaApp project. It provides API endpoints for product data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with the following content:
```
PORT=3000
```

## Running the Server

To start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000` by default.

## Testing

The project uses Jest for testing. To run the tests:

```bash
# Run all tests
npm test

# Run tests with watch mode
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage
```

### Test Structure

The tests are located in the `__tests__` directory. Current test coverage includes:

1. Server Setup Tests:
   - Verifies all required dependencies are installed
   - Checks environment variables are properly configured
   - Validates required data files exist

### Example Test Output

When running tests, you should see output similar to:

```
 PASS  __tests__/server.test.js
  Server Setup
    ✓ should have all required dependencies (2 ms)
    ✓ should have required environment variables
    ✓ should have required JSON files (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product by ID

## Development

When adding new features:
1. Create corresponding test files in the `__tests__` directory
2. Follow the existing test structure
3. Run tests before committing changes

## Troubleshooting

If tests fail:
1. Ensure all dependencies are installed
2. Verify the `.env` file exists and contains required variables
3. Check that `parent_products.json` exists in the correct location

## 🚀 Getting Started

This is a React Native + Node.js project built with [Expo](https://expo.dev/).

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run the Backend

Start the Node.js server:

```bash
cd backend && npm install && node server.js
```

The backend will run on:

```
(http://localhost:3000)
```

Make sure it's running for the app to fetch product data.

### 📱 Run the Frontend (iOS Simulator)

In a separate terminal:

```bash
npx expo start --ios
```

This will:
- Start the Expo development server
- Launch the iOS simulator (if installed)

If the simulator doesn't start automatically:
- Press `i` to open it manually
- Press `r` to reload the app
- Press `m` to open the developer menu

## ✅ Testing

This project uses **Jest** for testing.

### 🧪 Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage
```

### 🗂 Test Structure

All test files are located in the `__tests__` directory.

## Environment Configuration

The project uses environment variables for configuration. Here's how to set it up:

1. Create a .env file in the root directory with the following content:
env
API_URL=http://localhost:3000


2. Create a .env file in the backend directory with:
env
PORT=3000


3. The .env files are already in .gitignore, so they won't be committed to version control.

4. For other developers, we provide a .env.example file as a template:
env
API_URL=http://localhost:3000

### ⚠️ Notes

- Both backend and frontend must be running for the app to work properly.
- If a port conflict occurs (e.g., on port 8081), follow Expo's terminal prompt to switch ports.
