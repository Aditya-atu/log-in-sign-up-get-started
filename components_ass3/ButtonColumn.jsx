import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import MyButton from './MyButton'; 

const ButtonColumn = () => {
  const backgroundImage = { uri: 'https://www.creativefabrica.com/wp-content/uploads/2023/03/27/Galaxy-Background-Ultra-HD-Detail-Black-Pink-Colors-Light-Realistic-65440881-1.png' };

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.container}>
        <MyButton style={styles.button} kind="primary" variant="filled" size="medium" text="Primary Button" onPress={() => alert('Primary Button Pressed')} />
        <MyButton style={styles.button} kind="secondary" variant="outlined" size="large" text="Secondary Button" onPress={() => alert('Secondary Button Pressed')} />
        <MyButton style={styles.button} kind="danger" variant="text" size="small" text="Danger Button" onPress={() => alert('Danger Button Pressed')} />
        <MyButton style={styles.button} iconOnly={true} iconName="md-checkmark" onPress={() => alert('Icon Button Pressed')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 45, // Adjust the value to create more or less space between buttons
  },
});

export default ButtonColumn;