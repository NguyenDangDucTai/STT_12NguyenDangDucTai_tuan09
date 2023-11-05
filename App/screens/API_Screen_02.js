import {FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState, useEffect} from "react";
import {CheckBox} from "react-native-web";


export default function API_Screen_02({navigation, route}){
    const yourName = route.params.name;
    useEffect(() => {
        fetch('https://6507b98156db83a34d9b47a9.mockapi.io/lap7data')
            .then(response => response.json())
            .then(json => {
                setData(json);
            });
    }, []);
    const [data, setData] = useState([]);
    const {name} = route.params;

    return(
        <View style={{flex: 1, width: '100%'}}>
            <View style={{flex: 1, flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={{height:'50%', width:'80%'}}
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}
                    >
                        <Icon name='arrow-left' size={30}
                        ></Icon>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 3, justifyContent:'flex-end', flexDirection:'row', alignItems:'center'}}>
                    <View style={{marginRight: 10}}>
                        <Text style={{textAlign:'right', fontWeight:'bold', fontSize: 15}}>Hi {yourName}</Text>
                        <Text style={{textAlign:'right', color:'pink'}}>Have agrate day a head</Text>
                    </View>
                    <View style={{backgroundColor:'blue', borderRadius:100}}>
                        <Image source={require('../image/woman.png')} style={{width:50, height: 50, borderRadius:100}}></Image>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <View style={{borderWidth: 1, borderRadius: 10, width: '90%', height: 50, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                    <Icon name='search' size={28}></Icon>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="silver"
                        style={{marginLeft: 10,width:'80%', fontSize: 20, outlineStyle:'none'}}
                    ></TextInput>
                </View>
            </View>
            <View style={{flex: 5, alignItems:'center'}}>
                <FlatList
                    data={data}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>{
                        return(
                            <View>
                                <View style={{height: '50px', width:'100%', backgroundColor: 'pink', marginVertical: 10, borderRadius: 10, justifyContent:'center'}}>
                                    <View style={{flexDirection:'row', alignItems:'center', marginHorizontal: 10}}>
                                        <View style={{flex: 5,flexDirection:'row'}}>
                                            <CheckBox style={{marginRight: 10}}></CheckBox>
                                            <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
                                        </View>
                                        <View style={{flex: 1, alignItems:'flex-end'}}>
                                            <Image source={require('../image/pen.png')} style={{height: 20, width: 20}}></Image>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                }></FlatList>
            </View>
            <View style={{flex: 1, alignItems:'center', paddingVertical: 20}}>
                <TouchableOpacity
                    style={{width: 70, height: 70, backgroundColor:'pink', borderRadius: 100, alignItems:'center', justifyContent:'center'}}
                    onPress={()=>{
                        navigation.navigate('Screen_03', {name: yourName})
                    }}
                >
                    <Icon name="plus" size={35} color='white'></Icon>
                </TouchableOpacity>
            </View>
        </View>
    )
}