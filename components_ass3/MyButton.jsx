import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyButton = ({ kind, variant, size, text, iconOnly, iconName, onPress, style }) => {
  const styles = getStyles(kind, variant, size);

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {iconOnly ? (
        <Ionicons name={iconName} size={24} color={styles.icon.color} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const getStyles = (kind, variant, size) => {
  let buttonStyle = {
    padding: size === 'small' ? 10 : size === 'large' ? 20 : 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  };

  let textStyle = {
    color: '#000', // Set text color to black
  };

  if (variant === 'filled') {
    buttonStyle.backgroundColor = '#000'; // Set button background to black
    textStyle.color = '#fff'; // Set text color to white for contrast
  } else if (variant === 'outlined') {
    buttonStyle.borderWidth = 1;
    buttonStyle.borderColor = '#000'; // Set border color to black
    textStyle.color = '#000'; // Set text color to black
  } else if (variant === 'text') {
    buttonStyle.backgroundColor = 'transparent';
    textStyle.color = '#000'; // Set text color to black
  }

  return {
    button: buttonStyle,
    text: textStyle,
    icon: textStyle,
  };
};

export default MyButton;