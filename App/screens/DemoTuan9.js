import {Pressable, Touchable, View} from "react-native";


export default function DemoTuan9(){
    return(
        <View style={{flex:1, justifyContent:'center'}}>
            <View style={{flexDirection:'row'}}>
                <Touchable style={{width:'200px', height:'200px', backgroundColor:'black'}}></Touchable>
            </View>
        </View>
    )
}