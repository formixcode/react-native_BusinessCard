# Business Card App

This is a simple React Native application built with Expo, displaying a personal business card profile.

## Features

- Displays personal information (Name, Occupation).
- Shows social media links (GitHub, X/Twitter, Email) with icons.
- Includes a "Contact Me" button that opens the default email client.
- Contains a brief bio section.
- Features a horizontally scrollable list of projects using the `ProjectCard` component.
- Uses `SafeAreaView` for better layout handling on different devices.

## Components

- **`App.js`**: The main application component that renders the entire profile screen. It manages state for personal details and handles the layout.
- **`ProjectCard.jsx`**: A reusable component used to display individual project cards with an image and name within the horizontal scroll view in `App.js`.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd businesscard
    ```
2.  **Install dependencies:**
    This project uses npm (as indicated by `package-lock.json`) or Yarn.
    ```bash
    npm install
    # or
    yarn install
    ```
    _(Note: If you prefer Bun, you can use `bun install`)_

## Usage

To run the application in development mode, use the following Expo CLI commands:

- **Start the development server:**

  ```bash
  npm start
  # or
  yarn start
  # or
  expo start
  ```

  This will open the Expo Developer Tools in your browser.

- **Run on Android:**

  ```bash
  npm run android
  # or
  yarn android
  # or
  expo start --android
  ```

  (Requires Android development environment setup or Expo Go app)

- **Run on iOS:**

  ```bash
  npm run ios
  # or
  yarn ios
  # or
  expo start --ios
  ```

  (Requires macOS and Xcode or Expo Go app)

- **Run in Web Browser:**
  ```bash
  npm run web
  # or
  yarn web
  # or
  expo start --web
  ```

## Key Dependencies

- `expo`: Core Expo SDK library.
- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native apps using React.
- `react-native-safe-area-context`: Provides handling for safe areas on devices (notches, status bars).
- `expo-status-bar`: Component to control the app's status bar.
- `@expo/vector-icons`: Library for using vector icons (FontAwesome used here).

## Scripts

- `npm start` / `yarn start`: Starts the Expo development server.
- `npm run android` / `yarn android`: Runs the app on an Android device/emulator.
- `npm run ios` / `yarn ios`: Runs the app on an iOS simulator/device.
- `npm run web` / `yarn web`: Runs the app in a web browser.
