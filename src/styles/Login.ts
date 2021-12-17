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
        bottom: height * 0.15,
        color: 'white',
    },
    button: {
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: '#91C15F',
        borderRadius: 5,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 20,
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
    contentOverlay: {
        width: width * 0.8,
        height: height * 0.4,
        alignContent: 'center',
    },
    titleOverlay: {
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        fontSize:normalize(21),
    },
    subtitleOverlay: {
        textAlign:'center',
        padding:20,
        fontSize:normalize(16),
    },
    emailOverlay: {
        fontWeight:'bold',
        fontSize:normalize(16),
    },
    bottomTextBold: {
        fontWeight: 'bold',
    },
    buttonOverlay: {
        width: width * 0.5,
        left: width * 0.12,
        height: height * 0.07,
        backgroundColor: '#91C15F',
        borderRadius: 5,
    }
})