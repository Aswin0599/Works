import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const profile= ({}) => {
   return(
    
      <View style={Styles.home}> 
         <Text style={Styles.text}>profile</Text>
     </View>
    
   );
}
const Styles=StyleSheet.create({
   home: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',  
   },
   text: {
      fontSize:30,
      fontFamily:'bold'
   }
});

export default profile;
