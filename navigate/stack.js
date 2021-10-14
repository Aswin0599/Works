import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Itemdetail from '../src/screens/itemdetail';


const Stack = createStackNavigator();
export default function app () {
   return ( 
      <NavigationContainer>
         <Stack.Navigator initilRoute name="Itemdetail"
         screenOptions={{headerShown:false}}
         >
            <Stack.Screen
            name="Itemdeails"
            component={Itemdetail}/>
          
        
             </Stack.Navigator>

      </NavigationContainer>
   );
}
