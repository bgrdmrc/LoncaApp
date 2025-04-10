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
