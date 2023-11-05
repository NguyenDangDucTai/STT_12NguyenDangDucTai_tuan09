import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useState} from "react";


export default function API_Screen_03({navigation, route}){

    const yourName = route.params.name;
    const [job, setjob] = useState('');

    function addPost(job){
        fetch('https://6507b98156db83a34d9b47a9.mockapi.io/lap7data',{
            method: 'POST',
            body: JSON.stringify({
                name: job
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 0.5, flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={{height:'50%', width:'80%'}}
                                      onPress={()=>{
                                          navigation.navigate('Screen_02', {name: yourName})
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
            <View style={{flex:2, justifyContent:'space-around', alignItems:'center'}}>
                <Text style={{fontSize:30}}>ADD YOUR JOB</Text>
                <View style={{flexDirection:'row', alignItems:'center',borderRadius:10, marginHorizontal: 10, borderWidth:1, width:'90%', height:'50px'}}>
                    <Image source={require('../image/iconBook.png')} style={{width:30, height: 30}}></Image>
                    <TextInput
                        value={job}
                        onChangeText={setjob}
                        placeholder="input your job"
                        placeholderTextColor='silver'
                        style={{outlineStyle: "none", width:'80%', fontSize:20}}></TextInput>
                </View>
                <TouchableOpacity style={{backgroundColor:'pink', height: '40px', width:'140px', alignItems:'center', justifyContent:'center', borderRadius:20}}
                onPress={()=>{
                    addPost(job)
                    navigation.navigate('Screen_02', {name: yourName})
                }}
                >
                    <Text style={{color:'white', fontWeight:'bold', fontSize: 18}}>FINISH <Icon name='arrow-right' size={18} color='white'></Icon></Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../image/home_book.png')}
                       style={{width:250, height:250}}></Image>
            </View>
        </View>
    )
}