import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { ContadorRegressivo } from './componentes/contadorRegressivo/ContadorRegressivo';
import { Ex1 } from './componentes/flex/ex1/ex1';
import { Ex2 } from './componentes/flex/ex2/ex2';
import { Ex3 } from './componentes/flex/ex3/ex3';
import { Ex4 } from './componentes/flex/ex4/ex4';
import { Ex5 } from './componentes/flex/ex5/ex5';
import { Ex6 } from './componentes/flex/ex6/ex6';




export default function App() {

  const [vl, setVl] = useState(0)
  

 
 
  return ( 
    // <ContadorRegressivo/>
    // <Ex1/>
    // <Ex2/>
    // <Ex3/>
    // <Ex4/>
    // <Ex5/>
    <Ex6/>
  );
}

