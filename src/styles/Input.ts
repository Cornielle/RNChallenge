import { Dimensions, StyleSheet } from "react-native";
const {width, height } = Dimensions.get('screen');
import { normalize } from "../helpers/normalizeFontSize";

export const styles = StyleSheet.create({
    container: {
        marginBottom:height * 0.025,
    },
    inputContainerStyle: {
        borderBottomWidth:2,
        borderColor:'white'
    }, 
    inputStyle:{
        color: 'white',
    },
    labelStyle:{
        color: 'white',
        bottom:10,
        fontSize: normalize(16),
    }
})