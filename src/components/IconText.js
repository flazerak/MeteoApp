import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const {iconName, iconColor, bodyText, bodyteststyles} = props;
    const {textTheme, container} = styles;
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[textTheme, bodyteststyles]}>{bodyText}</Text>
        </View>
    
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // margin: 10,
    },

})
export default IconText;