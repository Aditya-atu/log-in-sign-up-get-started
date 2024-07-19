/*import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={{
                ...styles.button,
                ...props.style, // Merge additional styles from props
            }} 
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, color: props.textColor }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const WelcomeScreen = () => {
    const handleJoinNow = () => {
        // Handle join now button press
        console.log("Join Now button pressed");
    };

    return (
        <LinearGradient 
            colors={[styles.colors.primary, styles.colors.secondary]} 
            style={styles.Lg}
        >
            <View style={styles.container}>
                <Image
                    source={require("../assets/Luigi Lucarelli.jpg")}
                    style={styles.im1}
                />
                <Image
                    source={require("../assets/ae0cc142-8026-4882-a765-5b9b66356f1e.jpg")}
                    style={styles.im2}
                />
                <Image
                    source={require("../assets/Girl free icons designed by Creartive.jpg")}
                    style={styles.im3}
                />
            </View>
            <View style={styles.text1}>
                <Text style={styles.text2}>Let's Get Started</Text>
                <Text style={styles.text3}>Your Connections At Your Fingertips</Text>
            </View>
            <Button
                title="Join Now"
                onPress={handleJoinNow}
                style={{ marginTop: 22, width: "100%" }}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    colors: {
        primary: "#007260",
        secondary: "#39B68D",
    },
    Lg: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        fontSize: 40, // Adjusted font size for consistency
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 20, // Added margin bottom for spacing
    },
    text3: {
        fontSize: 24,
        color: '#ffffff',
    },
    text1: {
        paddingHorizontal: 22,
        position: "absolute",
        top: 300, // Adjusted top position for better placement
        width: "100%",
        alignItems: 'center',
    },
    im1: {
        height: 100,
        width: 100,
        borderRadius: 20,
        position: "absolute",
        top: 10,
        left: 20,
        transform: [
            { translateX: 20 },
            { translateY: 50 },
            { rotate: "-15deg" }
        ]
    },
    im2: {
        height: 100,
        width: 100,
        borderRadius: 20,
        position: "absolute",
        top: -30,
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-5deg" }
        ]
    },
    im3: {
        height: 100,
        width: 100,
        borderRadius: 20,
        position: "absolute",
        top: 130,
        left: -50,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "15deg" }
        ]
    },
    button: {
        marginTop: 22,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#ffffff", // Adjusted to white for visibility
        backgroundColor:"#ffffff",
        marginBottom:120,
    },
});

export default WelcomeScreen;
*/

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