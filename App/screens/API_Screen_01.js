import {Image, Text, View, TextInput, Button, TouchableOpacity} from "react-native";
import {useState} from "react";


export default function API_Screen_01({navigation}){
    const [name, setName] = useState('');
    return(
        <View style={{flex: 1, width: '100%'}}>
            <View style={{flex: 4, justifyContent: 'space-around', alignItems:'center'}}>
                <Image source={require('../image/home_book.png')} style={{width: 250, height: 250}}/>
                <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', color:'blue'}}>MANAGE YOUR<br/>TASK</Text>
            </View>
            <View style={{flex: 2, justifyContent:'center', alignItems:'center', paddingHorizontal:'5%'}}>
                <View style={{borderWidth: 1, width: "100%", height: 50, borderRadius: 15, flexDirection:'row', alignItems:'center', paddingHorizontal:10}}>
                    <Image source={require('../image/letter.png')} style={{width: 30, height: 30}}/>
                    <TextInput
                        placeholder="Enter your name"
                        placeholderTextColor="silver"
                        onChangeText={setName}
                        value={name}
                        style={{marginLeft: 10,width:'80%', fontSize: 20, outlineStyle: "none"}}
                    ></TextInput>
                </View>
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <TouchableOpacity style={{width: 200, height: 40, backgroundColor: 'pink', borderRadius:10, alignItems:'center', justifyContent:'center'}}
                onPress={()=>{
                    navigation.navigate('Screen_02', {name: name});
                }}
                >
                    <Text style={{color:'white', fontWeight:'bold', fontSize: 15}}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

