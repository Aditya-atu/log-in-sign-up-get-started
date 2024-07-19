// App.js
/*
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
*/

/*
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Login, Signup, WelcomeScreen } from 'C:\Users\Lenovo\Downloads\Screenshot (150).png'; // assuming Screens.jsx contains these components
export default function App() {
  return (
     /<WelcomeScreen />
     /<Signup />
     <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import styles from './components/styles';
import GettingStarted from './components/GettingStarted';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';

const App = () => {
  const [page, setPage] = useState('gettingStarted');
  const [userDetails, setUserDetails] = useState({});
  const [form, setForm] = useState({ username: '', password: '', conpassword: '', email: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSignUpChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleLoginChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const signUp = () => {
    if (!form.username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!form.password || !form.conpassword) {
      Alert.alert('Error', 'Password and confirm password are required');
      return;
    }
    if (form.password !== form.conpassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    setUserDetails(form);
    setForm({ username: '', password: '', conpassword: '', email: '' });
    setPage('gettingStarted'); // Navigate back to gettingStarted page after signup
  };

  const login = () => {
    if (!loginForm.username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!loginForm.password) {
      Alert.alert('Error', 'Password is required');
      return;
    }
    if (loginForm.username === userDetails.username && loginForm.password === userDetails.password) {
      setPage('welcome'); // Navigate to welcome page upon successful login
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const logout = () => {
    setPage('gettingStarted');
    setLoginForm({ username: '', password: '' });
  };

  return (
    <View style={styles.container}>
      {page === 'gettingStarted' && <GettingStarted setPage={setPage} />}
      {page === 'signUp' && (
        <SignUp form={form} handleSignUpChange={handleSignUpChange} signUp={signUp} setPage={setPage} />
      )}
      {page === 'login' && (
        <Login loginForm={loginForm} handleLoginChange={handleLoginChange} login={login} setPage={setPage} />
      )}
      {page === 'welcome' && <Welcome logout={logout} />}
    </View>
  );
};

export default App;