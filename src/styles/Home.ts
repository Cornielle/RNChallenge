import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "../helpers/normalizeFontSize";
const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 45,
        backgroundColor: '#000D16',
    },
    title:{
        top: 5,
        textAlign: 'center',
        fontSize: normalize(30),
        fontStyle: 'normal',
        fontWeight: 'normal',
        bottom: height * 0.05,
        color: 'white',
    },
    titleLogout:{
        padding: 25,
        top: height * 0.05,
        textAlign: 'center',
        fontSize: normalize(16),
        fontStyle: 'normal',
        fontWeight: 'normal',
        bottom: height * 0.05,
        color: 'white',
    }
});