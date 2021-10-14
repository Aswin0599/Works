import React,{Component} from 'react';
import { View,StyleSheet,Button,Image,Text, ScrollView } from 'react-native';
import {Card,CardItem,Right} from 'native-base';


class Cardcomponent extends Component { 
 render() {
 
    return(

     
       <CardItem>
             <View>
               <Image style={{height: 90,width: 90}}
                source={this.props.imageUri}
               />
             </View>
             <Right style={{flex:1,alignItems:"flex-start",height:90,paddingHorizontal:20}}>
               <Text>{this.props.itemName}      </Text>
               <Text>{this.props.itemCreator}      </Text> 
               <Text >{this.props.itemPrice}      </Text>
               <Text>{this.props.savings}      </Text>  
            
             </Right>
          </CardItem>
       

       
     
    )
   }
}


const Styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
export default Cardcomponent;
    