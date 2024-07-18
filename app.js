// App.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';
import GetStartedComponent from './GetStartedComponent';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Replace with your actual login logic (e.g., API call)
    console.log('Logging in with:', email, password);
    // Simulate successful login for demo
    setLoggedIn(true);
  };

  const handleSignup = (email, password) => {
    // Replace with your actual signup logic (e.g., API call)
    console.log('Signing up with:', email, password);
    // Simulate successful signup for demo
    setLoggedIn(true);
  };

  const handleStart = () => {
    // Handle starting the app or navigating to another screen
    console.log('Getting started');
    // For demo, let's just log "Getting started"
  };

  return (
    <View style={styles.container}>
      {!loggedIn && <LoginComponent onLogin={handleLogin} />}
      {!loggedIn && <SignupComponent onSignup={handleSignup} />}
      {loggedIn && <GetStartedComponent onStart={handleStart} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
