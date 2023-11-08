import { StyleSheet, Text, View ,TouchableOpacity}  from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.SignUp}>SignUp</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041C2F',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: "100%",
    padding: 1,
  },

  SignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});