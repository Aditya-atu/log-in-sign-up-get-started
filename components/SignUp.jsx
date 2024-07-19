// SignupComponent.js
/*
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignupComponent = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform validation or other checks as needed
    if (email && password) {
      onSignup(email, password);
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button onPress={handleSignup} title="Signup" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: 300,
  },
});

export default SignupComponent;
*/

/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Signup = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const toggleRememberMe = () => {
        setIsRememberMeChecked(!isRememberMeChecked);
    };

    return (
        <View style={styles.st1}>
            <View style={{ marginVertical: 22 }}>
                <Text style={styles.tx1}>Create Account</Text>
                <Text style={styles.tx2}>Connect With Your Friends Today!!</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
                <Text style={styles.tx3}>Email Address</Text>
                <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
            </View>
            <View style={{ marginBottom: 12 }}>
                <Text style={styles.tx3}>Mobile Number</Text>
                <TextInput style={styles.input} placeholder=" +91 Mobile Number" keyboardType="phone-pad" />
            </View>
            <View style={{ marginBottom: 12, position: 'relative' }}>
                <Text style={styles.tx3}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    secureTextEntry={!isPasswordShown}
                />
                <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
                    <Text>{isPasswordShown ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={toggleRememberMe} style={styles.checkbox}>
                    {isRememberMeChecked && <View style={styles.checkboxTick} />}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>Remember Me</Text>
            </View>
            <View style={{ marginVertical: 22 }}>
                <Text style={styles.tx2}>I agree to the terms and conditions</Text>            </View>
            <TouchableOpacity style={styles.signupButton} onPress={() => console.log('Signup button pressed')}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    st1: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    tx1: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 12,
    },
    tx2: {
        fontSize: 18,
        color: 'black',
        marginVertical: 12,
    },
    tx3: {
        fontSize: 16,
        fontWeight: '400',
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    eyeButton: {
        position: 'absolute',
        right: 10,
        top: 42,
        padding: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checkboxTick: {
        height: 10,
        width: 10,
        backgroundColor: 'gray',
    },
    checkboxText: {
        fontSize: 16,
        color: 'black',
    },
    signupButton: {
        marginTop: 20,
        backgroundColor: '#007260',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    signupButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Signup;*/


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const SignUp = ({ form, handleSignUpChange, signUp, setPage }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
      <View style={styles.extbutcon}>
          <TouchableOpacity style={[{ backgroundColor: 'green' }, styles.extbut]} onPress={() => setPage('login')}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ backgroundColor: 'gray' }, styles.extbut]} onPress={() => setPage('gettingStarted')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.translucentContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={form.username}
            onChangeText={(value) => handleSignUpChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => handleSignUpChange('password', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.conpassword}
            onChangeText={(value) => handleSignUpChange('conpassword', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => handleSignUpChange('email', value)}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={signUp}>
            <Text style={styles.buttonText}>Register yourself!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;