import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../src/screens/home';
import setting from '../src/screens/setting';
import search from '../src/screens/search';

import Ionicons from  'react-native-vector-icons/Ionicons';
import cart from '../src/screens/cart';


const Tab = createBottomTabNavigator ();
export default function tab(){
   return(
    
         <Tab.Navigator
         tabBarOptions={{
            inactiveTintColor:'black',
            activeTintColor:'red'
         }}
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'home') {
                iconName = focused? 'home': 'home-outline';
              } else if (route.name === 'search') {
                iconName = focused ? 'search' : 'search';
              }else if (route.name === 'category') {
                iconName = focused ? 'ios-rocket' : 'ios-rocket';
                 }else if (route.name === 'cart') {
                iconName = focused ? 'cart-outline' : 'cart-outline';

          }
    
              
              return <Ionicons name={iconName} size={22} color={color} />;
            },
            
          })}  >
            <Tab.Screen
            name="home"
            component={home}
            />
            <Tab.Screen
            name="category"
            component={setting}
            />
            <Tab.Screen
            name="search"
            component={search}
            />
             <Tab.Screen
            name="cart"
            component={cart}
            />
         </Tab.Navigator>
      
   )
}

