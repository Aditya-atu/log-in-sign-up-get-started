
// LoginComponent.js
/*
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginComponent = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation or other checks as needed
    if (email && password) {
      onLogin(email, password);
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
      <Button onPress={handleLogin} title="Login" />
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

export default LoginComponent;
*/

/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Login = () => {
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
                <Text style={styles.tx1}>Welcome Back</Text>
                <Text style={styles.tx2}>Log in to continue</Text>
            </View>
            <View style={{ marginBottom: 12 }}>
                <Text style={styles.tx3}>Email Address</Text>
                <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
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
            <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login button pressed')}>
                <Text style={styles.loginButtonText}>Log In</Text>
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
    loginButton: {
        marginTop: 20,
        backgroundColor: '#007260',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Login;
*/


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const Login = ({ loginForm, handleLoginChange, login, setPage }) => {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.page}>
        <View style={styles.extbutcon}>
          <TouchableOpacity style={[{ backgroundColor: 'green' }, styles.extbut]} onPress={() => setPage('signUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ backgroundColor: 'gray' }, styles.extbut]} onPress={() => setPage('gettingStarted')}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.translucentContainer, styles.effort]}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={loginForm.username}
            onChangeText={(value) => handleLoginChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={loginForm.password}
            onChangeText={(value) => handleLoginChange('password', value)}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: '#6b9ce5' }]} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;