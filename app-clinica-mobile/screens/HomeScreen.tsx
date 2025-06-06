import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome to PediatricCruzClinic App</Text>
      <Button mode="contained" onPress={() => console.log("Start")}>
        Start
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
