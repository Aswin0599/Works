import React from 'react';
import { Text, View,StyleSheet, Switch} from 'react-native';


const searchsc = ({}) => {
   return(
      <View style={Styles.setting}>
        <Text>search</Text>
     
     </View>
   );
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
export default searchsc;
