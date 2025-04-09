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

### ⚠️ Notes

- Both backend and frontend must be running for the app to work properly.
- If a port conflict occurs (e.g., on port 8081), follow Expo’s terminal prompt to switch ports.
