import { Dimensions, StyleSheet } from "react-native";
const {width, height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        top: height * 0.3,
        padding: 45,
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        lineHeight: 90,
        fontStyle: 'normal',
        fontWeight: 'normal',
        right: width * 0.01,
        color: 'white',
    },
    text: {
        textAlign: 'left',
        width: width * 0.6,
        fontSize: 16,
        bottom:10,
        color: 'white',
    },
    button: {
        width: width * 0.8,
        height: height * 0.063,
        backgroundColor: '#91C15F',
        borderRadius: 5,
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    backgroundContainer: {
        flex: 1,

    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
    },
})