import React from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { Card, CardItem, Left, Right,Icon } from 'native-base';



const Itemdetail= ({navigation}) => {
    return(
        <View>
            <Card>
                <CardItem>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wjGu3OlX2g9eFlZkyUvXemPiXbea2nsU1Q&usqp=CAU', }}
                      style={{width:100, height: 120}}  />
                </CardItem>
            </Card>
        </View>
        );
    }
 export default Itemdetail;   