// GetStartedComponent.js
/*
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GetStartedComponent = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <Button onPress={onStart} title="Start Now" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GetStartedComponent;
*/


import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

const GettingStarted = ({ setPage }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <View style={styles.translucentContainer}>
          <Text style={styles.title}>Get started by creating an account or logging in.</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => setPage('login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#6b9ce5' }]} onPress={() => setPage('signUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GettingStarted;