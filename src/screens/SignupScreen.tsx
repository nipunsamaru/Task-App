import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
