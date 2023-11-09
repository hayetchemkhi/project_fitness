import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import SignUpt from './screens/SignUpt';
import Login from './screens/Login';
import Dashboardscreen from './screens/Dashboardscreen';
import Formulaire from './screens/Formulaire';
import NutritionScreen from './screens/NutritionScreen';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpt} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboardscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NutritionScreen" component={NutritionScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Formulaire" component={Formulaire} options={{ headerShown: false }} />
                <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator

const styles = StyleSheet.create({})