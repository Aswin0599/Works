import React from 'react';
import Drawer from  './navigate/drawer';
import { View } from 'react-native';
import Homescr from './src/screens/home';
import Cardz from './src/screens/home';
import Stack from './navigate/stack';


const card =({}) =>{
  return(
    <View>
      <Cardz/>
      <Stack/>
    </View>
  )
}
export default function App(){
   return(
     <Drawer/> 
     
    
     
   )
}
