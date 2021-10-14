import React , { Component, useState }  from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
// importfrom 'react';


const Searchin = () => {
       const [searchQuery, setSearchQuery] = React.useState('');

       const onChangeSearch = query => setSearchQuery(query);
   return(
      <View style={Styles.setting}>
        
         <Searchbar
         style={{borderRadius:10}}
         placeholder="Search"
         onChangeText={onChangeSearch}
         value={searchQuery}
         />
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
export default Searchin;
