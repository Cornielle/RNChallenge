import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../helpers/normalizeFontSize";
const {width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 45,
        backgroundColor: '#000D16',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        bottom: height * 0.03,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        top: height * 0.25,
        padding: 45,
    },
    title: {
        textAlign: 'center',
        fontSize: normalize(35),
        fontStyle: 'normal',
        fontWeight: 'normal',
        bottom: height * 0.3,
        color: 'white',
    },
    button: {
        top: height * 0.01,
        left: width * 0.02,
        width: width * 0.74,
        height: height * 0.08,
        backgroundColor: '#91C15F',
        borderRadius: 5,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: normalize(20),
    },
    bottomText: {
        fontSize: 16,
        color:'white',
        textAlign: 'center',
        fontWeight: '300',
        top: height * 0.05,
    },
    disabledStyle:{
        backgroundColor:'#91C15F',
        opacity:0.6,
    },
    disabledTitleStyle:
    {
        color: 'white'
    },
    bottomTextBold: {
        fontWeight: 'bold',
    },
})