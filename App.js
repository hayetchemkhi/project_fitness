import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './Context';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
/* APP.js BY AYOUB 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpt from './Screens/SignUpt';
import Login from './Screens/Login';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
