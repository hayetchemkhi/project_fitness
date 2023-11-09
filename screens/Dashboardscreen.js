import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,SafeAreaView,ImageBackground,Button,TouchableOpacity,Pressable  } from 'react-native';
import App1 from './bacckground';
import HomeScreen from './HomeScreen';
import { useNavigation, useRoute } from '@react-navigation/native';


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

      <View style={styles.buttonContainer}>
          <Button
            title="button1"
           
          />
        </View>
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
        <View style={styles.buttonContainer}>
          <Button
            title="button3"
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="button 4"
            onPress={handleButtonPress1}
          />
        </View>


    
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

