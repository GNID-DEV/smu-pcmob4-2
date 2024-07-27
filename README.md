# SMU PCMob4-2-Todo: Firebase Todo App

Welcome to the **Firebase Todo App** project, part of the SMU PCMob4-2 series. This app allows you to manage a list of todos using Firebase for data storage. You can add, view, and delete todos in this app.

## App Overview

**Firebase Todo App** features the following functionalities:

- **Add Todos**: Input and save new todos.
- **View Todos**: Display a list of todos fetched from Firebase Firestore.
- **Delete Todos**: Remove todos from the list.
- **Navigation**: Use stack navigation to move between the todo list and add todo screens.

## Features

- **Firebase Integration**: Utilize Firebase Firestore to store and retrieve todos.
- **Stack Navigation**: Navigate between the todo list and add todo screens.
- **Real-Time Updates**: Reflect changes immediately as todos are added or deleted.

## Technology Stack

- **React Native**: For building the mobile application.
- **Firebase**: For cloud storage and real-time data synchronization.
- **React Navigation**: For managing screen transitions and navigation.
- **Expo Icons**: For icons used in the app.

## Setup and Installation

To set up and run this app, follow these steps:

1. **Clone the Repository**:

   Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/gnid-dev/ssmu-pcmob4-2.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd smu-pcmob4-2-todo
   ```

3. **Install Dependencies**:

   Use npm or yarn to install the necessary dependencies:
   ```bash
   npm install
   ```

   or
   ```bash
   yarn install
   ```

4. **Configure Firebase**:

   Make sure you have the Firebase configuration set up correctly. Replace the placeholder values in **firebaseConfig** with your actual Firebase project credentials.

5. **Run the App**:

   Start the React Native development server and run the app on your mobile device:

   ```bash
   npx react-native run-android
   ```

   or

   ```bash
   npx react-native run-ios
   ```

   Ensure you have the required environment for running React Native on Android or iOS devices.

## Code Explanation

  - **App Setup**: App.js sets up stack navigation with two screens: NotesStack for displaying the todo list and AddScreen for adding new todos.
  - **Firebase Initialization**: firebaseDB.js contains the Firebase configuration and initialization.
  - **AddScreen**: AddScreen.js allows users to input new todo items and navigate back to the todo list.
  - **NotesScreen**: NotesScreen.js displays the list of todos, and handles adding and deleting todos using Firebase Firestore.
  - **NotesStack**: NotesStack.js configures the navigation stack for the app.

## Contribution

Contributions to this project are welcome! If you have any suggestions, bug reports, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.








   
