import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const DietCategoriesScreen = ({ handleCategoryPress }) => {
  const [categories, setCategories] = useState([
    "Vegan",
    "Keto",
    "Paleo",
    
    "Detox",
  ]);

  const onCategoryPress = (category) => {
    
    handleCategoryPress(category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryPress(item)} style={styles.category}>
            <Text style={styles.categoryTitle}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  category: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  categoryTitle: {
    fontSize: 16,
  },
});

export default DietCategoriesScreen;