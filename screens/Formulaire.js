import { StyleSheet, Text, Dimensions,FlatList,Switch, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import LottieView from 'lottie-react-native';
import animdata from '../assets/anim.json';


const Form = (props) => {
    const [selectedAllergies, setSelectedAllergies] = useState([]); 

    const handleAllergyChange = (allergy) => {
        // Check if the allergy is already selected and toggle its state
        const updatedAllergies = selectedAllergies.includes(allergy)
          ? selectedAllergies.filter((item) => item !== allergy)
          : [...selectedAllergies, allergy];
    
        setSelectedAllergies(updatedAllergies);
      };
    
      const allergiesData = [
        { label: 'Dairy', value: 'dairy' },
        { label: 'Nuts', value: 'nuts' },
        { label: 'Shellfish', value: 'shellfish' },
        /*{label: 'Strawberry',value:'strawberry'},*/
        {label: 'Peanuts',value:'Peanuts'},

      ];
      const handleValidation = () => {
        // Ajoutez ici votre logique de validation
        console.log('Bouton de validation appuyé');
      };

  const [selectedHeight, setSelectedHeight] = useState('160');
  const heightItems = Array.from({ length: 201 }, (_, i) => (i + 100).toString());

  const [selectedWeight, setSelectedWeight] = useState('70');
  const weightItems = Array.from({ length: 151 }, (_, i) => (i + 40).toString());

  const [selectedGender, setSelectedGender] = useState('male');

  const onGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleGenderChange = (itemValue) => {
    setSelectedGender(itemValue);
    onGenderChange(itemValue);
  };

  const calculateIdealWeight = () => {
    const heightInCentimeters = parseInt(selectedHeight);
    let idealWeight = 0;

    if (selectedGender === 'male') {
      // Devine formula for males
      idealWeight = 50 + 2.3 * (heightInCentimeters - 152.4);
    } else if (selectedGender === 'female') {
      // Devine formula for females
      idealWeight = 45.5 + 2.3 * (heightInCentimeters - 152.4);
    }
    

    return `Your ideal weight is approximately ${idealWeight.toFixed(1)} kg`;
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
      
      <LottieView
        source={animdata}
        autoPlay
        loop
        style={{ alignContent:'center',height:120,marginHorizontal:76 }}
      />
      </View>

      <View style={styles.footer}>
        <Text style={styles.text_footer}>Select your Height : </Text>
        <View style={{ alignItems: 'center' }}>
          <View style={{ height: 15 }}></View>
          <Picker
            style={{ height: 40, width: 200, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            selectedValue={selectedHeight}
            onValueChange={(itemValue, itemIndex) => setSelectedHeight(itemValue)}>
            {heightItems.map((item) => (
              <Picker.Item key={item} label={`${item} cm`} value={item} />
            ))}
          </Picker>
          <View style={{ height: 20 }}></View>
        </View>

        <Text style={styles.text_footer}>Select your Weight : </Text>

        <View style={{ height: 15 }}></View>
        <View style={{ alignItems: 'center' }}>
          <Picker
            style={{ height: 40, width: 200, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            selectedValue={selectedWeight}
            onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
            {weightItems.map((item) => (
              <Picker.Item key={item} label={`${item} kg`} value={item} />
            ))}
          </Picker>
          <View style={{ height: 20 }}></View>
          <View>
            <Text style={styles.text_footer}>Select your gender :</Text>
            <View style={{ height: 15 }}></View>
            <Picker
              selectedValue={selectedGender}
              onValueChange={handleGenderChange}
              style={{ height: 40, width: 150, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <Text>{calculateIdealWeight()}</Text>
          <Text style={styles.text_footer}>Select your food allergies : </Text>
          <FlatList
          data={allergiesData}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Switch
                value={selectedAllergies.includes(item.value)}
                onValueChange={() => handleAllergyChange(item.value)}
              />
              <Text>{item.label}</Text>
            
            </View>
          )}
        />
         <View style={{ height: 15 }}></View>
          <Button title="Valider" onPress={handleValidation} color="#87CEEF" />
          
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
   
    marginRight: 20,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:30,
    
  },
  text_footer: {
    color: "black",
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 10,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Form;


  