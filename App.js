import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { ContadorRegressivo } from './componentes/contadorRegressivo/ContadorRegressivo';




export default function App() {

  const [vl, setVl] = useState(0)
  

 
 
  return ( 
    <ContadorRegressivo/>
  );
}

