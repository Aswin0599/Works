import React from 'react';
import { Text, View,StyleSheet } from 'react-native';


const account = ({}) => {
   return(
      <View>
         <Text >Accounts</Text>
     </View>
   );
}
const Styles=StyleSheet.create({
   account: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',  
   },
   text: {
      fontSize:30,
      fontFamily:'bold'
   }
});
export default account;
