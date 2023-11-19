import {Pressable, StyleSheet, Text, View} from "react-native";
import increment from "../redux/action";
import {connect} from "react-redux";

const Counter =({count, increment})=>{
    return(
        <View style={styles.container}>
            <Text style={{
                fontSize: 20,
            }}>
                This is count number: {count}
            </Text>
            <Pressable style={{
                height: 100,
                width: 100,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:10
            }}
            onPress={increment}
            >
                <Text style={{
                    fontSize: 30,
                    color: '#ffffff'
                }}>+</Text>
            </Pressable>
        </View>
    )
}
const mapStateToProps = (state) =>({
    count: state.count
})
const mapDispatchToProps = (dispatch)=>({
    increment:()=>{
        dispatch(increment)
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})