import React ,{Component}  from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Searchin from './searchbar';


class category extends Component { 
   
   render() {
  
   return(
      <View style={Styles.setting}>
         <Text style={Styles.text}>category
         </Text>
        
     </View>
   )
   }
}
const Styles=StyleSheet.create({
   setting: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',  
   },
   text: {
      fontSize:30,
      fontFamily:'bold'
   }
});
export default category;
