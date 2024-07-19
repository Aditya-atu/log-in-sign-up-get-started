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
