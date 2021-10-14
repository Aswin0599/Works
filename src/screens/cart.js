import React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { Card, CardItem, Left, Right,Icon } from 'native-base';
import { Button } from 'react-native-paper';
import RnIncrementDecrementBtn  from 'react-native-increment-decrement-button';




const cart= ({navigation}) => {
   return(
      <View style={Styles.setting}>
    
         <Card style={{height:150,width:300,bottom:50}}>
            <CardItem>
               <Left style={{bottom:40}}>
                  <Text>APPLE iphone 12 pro(pacefic Blue,128gb)</Text>
                  <Text style={{color:'red',top:90,right:120}}>OMR 90.000</Text>
                 
               </Left>
               <Right>
               <Image source={{uri:'https://m.media-amazon.com/images/I/71umuN8XVeL.jpg', }}
                      style={{width:100, height: 120,borderRadius:10}}  />
                      <RnIncrementDecrementBtn/>
               </Right>
            </CardItem>
         </Card>
         <Card style={{height:150,width:300,bottom:30}}>
            <CardItem>
               <Left  style={{bottom:40}}>
               <Text>MOTROLA G10 power(metal blue),64gb)</Text>
                  <Text style={{color:'red',top:90,right:120}}>OMR 90.000</Text>
               </Left>
               <Right>
               <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wjGu3OlX2g9eFlZkyUvXemPiXbea2nsU1Q&usqp=CAU', }}
                      style={{width:100, height: 120}}  />
                         <RnIncrementDecrementBtn/>
               </Right>
            </CardItem>
         </Card>
         <Card style={{height:70,width:300,top:45}}>
            <CardItem>
               <Left>
                
                 <Text>OMR 180.000</Text>
               </Left>
              <Right>
                 <Button
                 mode='contained'
                 color='red'
                 onPress= {() =>{navigation.navigate('itemdetail')}}>
                  CHECKOUT
                 </Button>
              </Right>
            </CardItem>
         </Card>
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
export default cart;
