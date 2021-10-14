import React,{Component} from 'react';
import { View,Text,StyleSheet,Image,ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import {Card,CardItem,Right} from 'native-base';
import Cardcomponent from './card';
import Searchin from './searchbar';


class Cardz extends Component { 
   render() {
   
      return(
          <View style={Styles.container}>
             <View style={Styles.swip}>
                <Searchin/>
              <Swiper 
              autoplay
              dotColor='black'
              height={100}
              >
                 <View>
                     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cLXJteI6UcOfOcV097QYmD2r4qge_l0tJg&usqp=CAU', }}
                        style={{width:330, height: 140}} />
                  </View>
                  <View>
                     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6KcSW1ybbbcyUb_SUQQ5CuvdbUAEnT-y9w&usqp=CAU', }}
                       style={{width:330, height: 140}} />
                  </View>
                  <View>
                     <Image source={{uri:'https://cdn.shopify.com/s/files/1/0046/7887/7256/files/oneplus-banner.jpg?16803', }}
                       style={{width:330, height: 140}} />
                  </View>
                  <View>
                     <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtIwatNLzDRldECarYcxYDhLN386FYjsDYQ&usqp=CAU', }}
                      style={{width:330, height: 140}}  />
                  </View>
              </Swiper>
              </View>
           <View>
           <ScrollView>
      <View style={Styles.container}>
        <Card style={{height:150,width:300,borderRadius:10}}>
          <CardItem>
            
          </CardItem>
         <Cardcomponent style={{width:150,height:100}}
         itemName="One plus"
         itemCreator="Made in UK"
         itemPrice="500$"
         savings="2% (saving)"
         imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqHTDPkVxnmdrqHxPi_eAAORf9bK4AqYbwg&usqp=CAU', }} /></Card>
           <Card style={{height:150,width:300,borderRadius:10}}>
          <CardItem>
            
          </CardItem>
         <Cardcomponent style={{width:150,height:100}}
         itemName="iphone XR"
         itemCreator="Made in USA"
         itemPrice="750$"
         savings="7% (saving)"
         imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD-AlIXhyaRe5DIpNdUTwFJQf9V3qeyEdow&usqp=CAU', }} /></Card>
          <Card style={{height:150,width:300,borderRadius:10}}>
          <CardItem>
            
          </CardItem>
         <Cardcomponent style={{width:150,height:100}}
         itemName="Lenova A6000"
         itemCreator="Made in China"
         itemPrice="250$"
         savings="5% (saving)"
         imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bOLlLYZlxlrQOc-AtvyzWc2avPcUX1wmwA&usqp=CAU', }} /></Card>
              <Card style={{height:150,width:300,borderRadius:10}}>
          <CardItem>
            
          </CardItem>
         <Cardcomponent style={{width:150,height:100}}
         itemName="U S polo"
         itemCreator="Made in London"
         itemPrice="250$"
         savings="5"
         imageUri={require("../../asset/p6.jpg")} /></Card>
  
    
      </View>
      </ScrollView>
           </View>


        </View>
     )
   }
}
const Styles=StyleSheet.create({
      container:{
       flex:1
       
       },
       swip:{
          height:180
       },
       font:{
          height:65,
          width:300,
          margin:10
       }

         
 });
 export default Cardz;
