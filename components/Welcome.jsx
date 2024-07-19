import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const Welcome = ({ logout }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <View style={styles.translucentContainer}>
          <Text style={styles.welcomeText}>Welcome to the app!</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#850409fc' }]} onPress={logout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
