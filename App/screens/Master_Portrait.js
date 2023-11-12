import {Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import filter from 'lodash.filter'


const DATA1 = [
    {
        id:"tdonut_01",
        name:'Tasty donut 01',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/TastyDonut.png')
    },
    {
        id:"tdonut_02",
        name:'Tasty donut 02',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/TastyDonut.png')
    },
    {
        id:"tdonut_03",
        name:'Tasty donut 03',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/TastyDonut.png')
    }
]
const DATA2 = [
    {
        id:"pdonut_01",
        name:'Pink donut 01',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/PinkDonut.png')
    },
    {
        id:"pdonut_02",
        name:'Pink donut 02',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/PinkDonut.png')
    },
    {
        id:"pdonut_03",
        name:'Pink donut 03',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/PinkDonut.png')
    }
]
const DATA3 = [
    {
        id:"fdonut_01",
        name:'Floating donut 01',
        detail:'Spicy tasty donut family',
        price:"$300",
        image: require('../image/FloatingDonut.png')
    },
    {
        id:"fdonut_02",
        name:'Floating donut 02',
        detail:'Spicy tasty donut family',
        price:"$200",
        image: require('../image/FloatingDonut.png')
    },
    {
        id:"fdonut_03",
        name:'Floating donutes 03',
        detail:'Spicy tasty donut family',
        price:"$100",
        image: require('../image/FloatingDonut.png')
    }
]
export default function Master_Portrait({navigation}){
    const [bttDonut, setDonut] = useState(true)
    const [bttPDonut, setPDonut] = useState(false)
    const [bttFloating, setFloating] = useState(false)
    const [fulldata, setFullData] = useState(DATA1);
    const [data, setData] = useState(fulldata);
    // const [viewData, setViewData] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = (query)=> {
            setSearchQuery(query);
            const formattedQuery = query.toString();
            const filterData = filter(fulldata, (user)=>{
                return contains(user, formattedQuery);
            });
            setData(filterData);
    }

    const contains = ({name, price}, query) =>{
        if(name.includes(query)||price.includes(query))
            return true;
        return false;
    }
    return(
        <View style={{flex: 1, backgroundColor:'white'}}>
            <View style={{flex: 2/3, justifyContent:"space-around", marginHorizontal: 15}}>
                <View>
                    <Text style={{color:'pink'}}>Welcome, Jaja!</Text>
                    <Text style={{fontWeight:'bold', fontSize: 20}}>Choice you Best food</Text>
                </View>
                <View style={{width: '70%', height: '40px', borderWidth: 1, justifyContent:'center', paddingHorizontal: 5}}>
                    <TextInput placeholder="Search food"
                               placeholderTextColor="silver"
                               clearButtonMode={"always"}
                               autoCapitalize='none'
                               autoCorrect={false}
                               onChangeText={(query)=> handleSearch(query)}
                               style={{width:'80%', height:'80%', fontSize: 15, outlineStyle: 'none'}}
                    ></TextInput>
                </View>
            </View>
            <View style={{flex:1/3, justifyContent:"space-around", marginHorizontal: 15}}>
                <View style={{flexDirection: 'row', justifyContent:"space-around" }}>
                    <TouchableOpacity style={{borderWidth: 1, width:"100px", height:'30px', borderRadius: 5, justifyContent:'center', backgroundColor: bttDonut?"orange":"white"}}
                                      onPress={()=>{
                                          setDonut(true)
                                          setPDonut(false)
                                          setFloating(false)
                                          setFullData(DATA1)
                                          setData(fulldata)
                                      }}
                    >
                        <Text style={{textAlign:'center', fontWeight:'bold'}}>Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, width:"100px", height:'30px', borderRadius: 5, justifyContent:'center', backgroundColor:!bttPDonut?"white":"orange"}}
                                      onPress={()=>{
                                          setDonut(false)
                                          setPDonut(true)
                                          setFloating(false)
                                          setFullData(DATA2)
                                          setData(fulldata)
                                      }}
                    >
                        <Text style={{textAlign:'center', fontWeight:'bold'}}>Pink Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderWidth: 1, width:"100px", height:'30px', borderRadius: 5, justifyContent:'center', backgroundColor: bttFloating?"orange":"white"}}
                                      onPress={()=>{
                                          setDonut(false)
                                          setPDonut(false)
                                          setFloating(true)
                                          setFullData(DATA3)
                                          setData(fulldata)
                                      }}
                    >
                        <Text style={{textAlign:'center', fontWeight:'bold'}}>Floating</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:3, alignItems:'center'}}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity
                                style={{backgroundColor:'#B6B6B4', width: '350px', height:'150px', marginVertical:10, flexDirection:'row', borderRadius:10}}
                                onPress={()=>{
                                    navigation.navigate('Detail_Portrait', {item})
                                    console.log(item)
                                }}

                            >
                                <View style={{flex:2, justifyContent:'center'}}>
                                    <Image source={item.image} style={{width:120, height:120, marginHorizontal:10}}></Image>
                                </View>
                                <View style={{flex:2, justifyContent:'space-around', paddingVertical:10}}>
                                    <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                                    <Text style={{color:'#3A3B3C', fontSize:13}}>{item.detail}</Text>
                                    <Text style={{fontSize: 20, fontWeight:'bold'}}>{item.price}</Text>
                                </View>
                                <View style={{flex: 1, justifyContent:'flex-end', alignItems:'flex-end'}}>
                                    <TouchableOpacity style={{
                                        justifyContent:'center', alignItems:'center',
                                        backgroundColor:'orange',
                                        width: 40, height:40,
                                        borderTopLeftRadius:30, borderTopRightRadius:10, borderBottomLeftRadius:10, borderBottomRightRadius:10
                                    }}>
                                        <Icon name="plus" size={20} color={'white'}/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                >
                </FlatList>
            </View>
        </View>
    )
}