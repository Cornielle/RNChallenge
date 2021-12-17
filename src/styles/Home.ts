import { Dimensions, StyleSheet } from "react-native";
const {width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 45,
        backgroundColor: '#000D16',
    },
    title:{
        textAlign: 'center',
        fontSize: 35,
        fontStyle: 'normal',
        fontWeight: 'normal',
        bottom: height * 0.15,
        color: 'white',
    }
});