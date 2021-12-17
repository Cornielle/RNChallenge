import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../helpers/normalizeFontSize";
const {width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        top: height * 0.25,
        padding: 40,
    },
    title: {
        textAlign: 'left',
        fontSize: 35,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'white',
        bottom:20,
    },
    button: {
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: '#91C15F',
        borderRadius: 5,
    },
    buttonOutline: {
        top: 25,
        width: width * 0.78,
        height: height * 0.07,
        marginBottom:height * 0.035,
        backgroundColor: 'transparent',
        borderColor:'white',
        borderStyle:'solid',
        borderWidth: 3,
        color: 'white',
        borderRadius: 5,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonTitleOutline: {
        fontWeight: 'bold',
        fontSize: normalize(20),
        color: 'white',
        bottom:2,
    },
})