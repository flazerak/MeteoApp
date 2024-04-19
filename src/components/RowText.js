import React from "react";
import {  Text, View } from "react-native";

const RowText = (props) => {
    const {messageone, messagetwo, containerstyle, messageonestyle, messagetwostyle} = props;
    return (
        <View style={containerstyle}>
          <Text style={messageonestyle}>{messageone}</Text>
          <Text style={messagetwostyle}>{messagetwo}</Text>
        </View>
    )
}


export default RowText;