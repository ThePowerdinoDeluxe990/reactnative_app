import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import Ui  from "./ui";

export default function App() {
  const [flexDirection, setflexDirection] = useState('column');
  return (
    <View>
      <Text style={styles.titulo}>Fortnite Places</Text>
      <Ui/>
    </View>
  );
}

const styles = StyleSheet.create({
titulo:{
  color: "blue",
  display: "flex",
  flexDirection:"column",
  padding:20,
  fontSize:30,
  backgroundColor: "#f0d7b4"
}
      

})
