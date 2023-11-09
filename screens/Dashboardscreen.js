import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,SafeAreaView,ImageBackground,Button,TouchableOpacity,Pressable  } from 'react-native';
import App1 from './bacckground';
import HomeScreen from './HomeScreen';
import { useNavigation, useRoute } from '@react-navigation/native';
import Formulaire from './Formulaire';
import NutritionScreen from './NutritionScreen';


export default function App() {
    const navigation = useNavigation();
  console.log('App executed');
  const handleButtonPress1 = () => {
    // mon button
    alert('Button Pressed!');
  };
  const handleButtonPress2 = () => {
    // 
    alert('Button Pressed!');
  };
  const handleButtonPress3 = () => {
    // 
    alert('Button Pressed!');
  };
  
  return (
   
    <ImageBackground
    source={require("../assets/111.png")} 
    style={styles.backgroundImage}
  >
    <View style={styles.overlay}>
      <Text style={styles.text}>just you getting better </Text>

      <Pressable
                    onPress={() => {
                        navigation.navigate("Formulaire")

                    
                    }}
                    style={{
                        backgroundColor: "blue",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 8,
                        padding: 10,
                        width: 150,

                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "white"

                        }}
                    >The Form</Text>
                </Pressable>
        <View style={styles.buttonContainer}>
        <Pressable
                    onPress={() => {
                        navigation.navigate("Home")

                    
                    }}
                    style={{
                        backgroundColor: "blue",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 8,
                        padding: 10,
                        width: 150,

                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "white"

                        }}
                    >Workout</Text>
                </Pressable>
        </View>
       
        <Pressable
                    onPress={() => {
                        navigation.navigate("NutritionScreen")

                    
                    }}
                    style={{
                        backgroundColor: "blue",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: 20,
                        borderRadius: 8,
                        padding: 10,
                        width: 150,

                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "white"

                        }}
                    >Diet Plan</Text>
                </Pressable>


    
      </View>
  </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fourth value for the opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Text color
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20, // Adjusting  this value to control the spacing between the text and the button
    
  },
});

