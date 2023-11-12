import {Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome";


export default function Detail_Portrait({navigation, route}){
    const {item} = route.params;
    console.log(item);
    console.log(item.name)


    let [count, setCount] = useState(1);
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:2, alignItems:'center'}}>
                <Image source={item.image}
                       style={{
                           width:250, height:250
                       }}
                ></Image>
            </View>
            <View style={{flex:3, marginHorizontal:10}}>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color:'#3A3B3C', fontSize:13}}>{item.detail}</Text>
                        <Text style={{fontWeight:'bold', fontSize:20}}>{item.price}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <Icon name='clock-o' size={20}></Icon>
                    <View style={{flex:1}}>
                        <Text style={{color:'silver', fontWeight:'bold', marginLeft: 8, fontSize: 15}}>Delivery in</Text>
                        <Text style={{fontWeight:'bold', fontSize:20}}>30 min</Text>
                    </View>
                    <View style={{flexDirection:'row', width:80,justifyContent:'space-between'}}>
                        <TouchableOpacity
                            style={{width:25, height:25, backgroundColor:'orange', alignItems:'center', justifyContent:'center'}}
                            onPress={()=>{
                                if(count>0)
                                    setCount(count-1)
                            }}
                        >
                            <Icon name='minus' color={'white'} size={15}></Icon>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'bold', fontSize:20}}>{count}</Text>
                        <TouchableOpacity
                            style={{width:25, height:25, backgroundColor:'orange', alignItems:'center', justifyContent:'center'}}
                            onPress={()=>{
                                if(count<99)
                                    setCount(count+1)
                            }}
                        >
                            <Icon name='plus' color={'white'} size={15}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Restaurants info</Text>
                    <Text>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={{backgroundColor:'orange', width:'100%', height:'80%', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}



