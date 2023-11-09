import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const PetitDej = [
  {
    id: '1',
    Imagetitle: 'Bol fruits fresh et fruits secs ',
    imageUri: 'https://hips.hearstapps.com/hmg-prod/images/breakfast-cereal-meal-granola-with-milk-pomegranate-royalty-free-image-1638397250.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=1200😘',
    calories: '350 Kcal',
    
    
  },
  {
    id: '2',
    Imagetitle: 'Yaourt aux fruits et flocon d"avoine',
    imageUri:'https://cdn.apartmenttherapy.info/image/upload/v1562959148/k/Photo/Series/2019-07-california-recipes/quinoa-oatmeal/California-Quinoa-Oatmeal_022.jpg',
    calories:'300 Kcal',
    
    
  },
  
  {
    id: '3',
    Imagetitle: 'Omellete au jambon et tomate',
    imageUri:'https://www.fourchette-et-bikini.fr/sites/default/files/styles/1200x675/public/migration-images/2e2b0f0446c8f2fa3ba40971dbce990e.jpg',
    calories: '300 Kcal',
    
  },
  
];
const Dejeuner = [
  {
    id: '1',
    Imagetitle: 'Filet de Poisson Pané',
    imageUri: 'https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2020.2F04.2F30.2Fa412dddf-4212-4a58-a227-96b401f9c8aa.2Ejpeg/300x225/quality/80/crop-from/center/filet-de-truite-panee.jpeg',
    calories: '450 Kcal',
    
    
  },
  {
    id: '2',
    Imagetitle: 'Riz ',
    imageUri:'https://alimentationsainehealthy.files.wordpress.com/2017/02/img_6784.jpg',
    calories:'380 Kcal',
    
  },
  {
    id: '3',
    Imagetitle:'Pasta  ',
    imageUri: 'https://www.eatwell101.com/wp-content/uploads/2016/08/healthy-Chicken-Pasta-recipe.jpg',
    calories: '350 Kcal',
   
  },
  
];
const Diner = [
  {
    id: '1',
    Imagetitle: 'Escallope grillé ',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgR7ZTBGItzByqApnJsmpDzzSAIwId5FLV0Q&usqp=CAU',
    calories: '450 Kcal',
    
  },
  {
    id: '2',
    Imagetitle: 'Escallope pané',
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h9N7QlM6QbYUHAXdF_PvaSdJysav6YZm0A&usqp=CAU',
    calories:'380 Kcal',
    
  },
    
  
  {
    id: '3',
    Imagetitle: 'Poisson grillé ',
    imageUri: 'https://previews.123rf.com/images/lsantilli/lsantilli1309/lsantilli130900017/21917794-poissons-bar-grill%C3%A9-au-citron-et-l%C3%A9gumes-grill%C3%A9s.jpg',
    calories:'450 Kcal',
    
  }
];


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#87CEFA'}}>
      <View style={styles.header}>
        <Text style={{color:"#FFF",fontSize: 20,fontWeight: 'bold', textAlign: 'center',}}>Une bonne santé, c'est d'abord une bonne alimentation !</Text>
      </View>
      <ScrollView style ={{flex:1 }}>
      <View style={styles.footer}>
        <Text style={styles.title}>Petit Dejeuner</Text>
        <ScrollView horizontal style={styles.container}>
          {PetitDej.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.imageUri }} />
              <Text style={styles.Imagetitle}>{item.Imagetitle}</Text>
              <Text style={styles.calories}>{item.calories}</Text>
              
            </View>
          ))}
        </ScrollView>
       

        <Text style={styles.title}>Déjeuner</Text>
        <ScrollView horizontal style={styles.container}>
          {Dejeuner.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.imageUri }} />
              <Text style={styles.Imagetitle}>{item.Imagetitle}</Text>
              <Text style={styles.calories}>{item.calories}</Text>
              
            </View>
          ))}
        </ScrollView>
        <View style={{ margin: 10 }}></View>

        <Text style={styles.title}>Dîner</Text>
        <ScrollView horizontal style={styles.container}>
          {Diner.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.imageUri }} />
              <Text style={styles.Imagetitle}>{item.Imagetitle}</Text>
              <Text style={styles.calories}>{item.calories}</Text>
             
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  
    flexDirection: 'row', 
  },
  itemContainer: {
    margin: 10,
  },
  header: {
    
    height:100,
    
    justifyContent:'flex-end',
    marginRight:10,
    marginBottom:20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  Imagetitle: {
    textAlign:'center',
    marginTop: 5,
    
  },
  calories: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  title: {
    fontSize:24,
    fontWeight:'bold',
    marginTop:20,
  },
  footer:{
    flex:5,
    backgroundColor:'#FFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:10,
    paddingHorizontal:20,
  }
});