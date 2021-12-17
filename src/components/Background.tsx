import React from "react"; 
import  { ImageBackground, View } from 'react-native';
import { styles as backgroundStyles } from "../styles/Welcome";
import LinearGradient from 'react-native-linear-gradient';

const backgroundImg =  "../assets/images/background.png";

export default function Background(props:JSX.ElementChildrenAttribute){
    return(
        <View style={backgroundStyles.backgroundContainer}>
                <ImageBackground 
                    source={ require(`${backgroundImg}`)} 
                    resizeMode="contain" style={backgroundStyles.image}
                >
                    <LinearGradient 
                        colors={
                            [ 'rgba(0, 13, 22, 0.95)',
                            'rgba(0, 13, 22, 0.37)',
                            'rgba(0, 13, 22, 0)',
                            'rgba(0, 13, 22, 0.51)',
                            'rgba(0, 13, 22, 90.6807)',
                            'rgba(0, 13, 22, 100)',
                            ]
                        }
                        style={backgroundStyles.linearGradient}
                    >
                        {props.children}
                    </LinearGradient>
                </ImageBackground>
        </View>
    );
}
