import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';
import HomeScreen from '../screens/HomeScreen';
import Today from './Today';


const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    // Ici, vous pouvez ajouter la logique de validation du login.
    // Si les informations de connexion sont correctes, vous pouvez naviguer vers une autre page.
    // Par exemple :
    if (username === 'Eya' && password === '123') {
      navigation.navigate('Today', {username}); 
    } else {
      alert('Identifiants incorrects');
    }
  };
  
  return (
    <View style={styles.container}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={(onSignInPressed)}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041C2F',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: "100%",
    padding: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#A9EAFE',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  input: {
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default Login;
