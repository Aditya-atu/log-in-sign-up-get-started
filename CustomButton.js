// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo vector-icons or any other icon library you prefer

const CustomButton = ({ title, onPress, kind, variant, size, iconOnly, iconName }) => {
  let buttonStyles = [styles.button];
  let textStyles = [styles.text];

  // Apply styles based on props
  if (kind === 'primary') {
    buttonStyles.push(styles.primary);
    textStyles.push(styles.primaryText);
  } else if (kind === 'secondary') {
    buttonStyles.push(styles.secondary);
    textStyles.push(styles.secondaryText);
  }

  if (variant === 'outlined') {
    buttonStyles.push(styles.outlined);
    textStyles.push(styles.outlinedText);
  } else if (variant === 'contained') {
    buttonStyles.push(styles.contained);
    textStyles.push(styles.containedText);
  }

  if (size === 'small') {
    buttonStyles.push(styles.small);
    textStyles.push(styles.smallText);
  } else if (size === 'large') {
    buttonStyles.push(styles.large);
    textStyles.push(styles.largeText);
  }

  const content = (
    <>
      {iconOnly && <Ionicons name={iconName} size={24} color="white" />} {/* Adjust icon size and color as needed */}
      {!iconOnly && <Text style={textStyles}>{title}</Text>}
    </>
  );

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: 'gray', // Default background color
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Default text color
  },
  primary: {
    backgroundColor: 'blue', // Example primary button color
  },
  primaryText: {
    color: 'white',
  },
  secondary: {
    backgroundColor: 'lightblue', // Example secondary button color
  },
  secondaryText: {
    color: 'blue',
  },
  outlined: {
    borderWidth: 1,
    borderColor: 'blue', // Example outlined button border color
    backgroundColor: 'transparent',
  },
  outlinedText: {
    color: 'blue',
  },
  contained: {
    backgroundColor: 'orange', // Example contained button color
  },
  containedText: {
    color: 'white',
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  smallText: {
    fontSize: 14,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  largeText: {
    fontSize: 18,
  },
});

export default CustomButton;
