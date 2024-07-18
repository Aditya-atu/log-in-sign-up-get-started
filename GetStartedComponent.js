// GetStartedComponent.js

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
