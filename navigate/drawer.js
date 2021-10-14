import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import drawaccount from '../src/screens/drawaccount';
import drawhome from '../src/screens/drawhome';
import drawprofile from '../src/screens/drawprofile';
import tab from './tab';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const drawer = createDrawerNavigator ();
export default function Drawer(){
   return(
      <NavigationContainer>
         <drawer.Navigator
         
       
         screenOptions={({ route }) => ({
            drawerIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'home') {
                iconName = focused? 'home': 'home-circle';
              } else if (route.name === 'profile') {
                iconName = focused ? 'face-profile' : 'face-profile';
              }else if (route.name === 'account') {
                iconName = focused ? 'account' : 'account-alert-outline';

          }
    
              
              return <MaterialCommunityIcons name={iconName} size={22} color={color} />;
            },
            
          })}  >
   
          



            <drawer.Screen
            name="home"
            component={tab}
            />
            <drawer.Screen
            name="account"
            component={tab}
            />
              <drawer.Screen
            name="profile"
            component={tab}
            />
         </drawer.Navigator>
      </NavigationContainer>
   )
}


