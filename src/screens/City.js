import React from "react";
import { SafeAreaView,
     StyleSheet,
     Text,
     ImageBackground,
     StatusBar,
     View } from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const {container, 
        imagelayout, 
        CityName, 
        CountryName,
        CityText, 
        populationWrapper ,
        populationText, 
        risesetWrapper,
        risesetText,
        rowlayout} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('./../../assets/CityBackground.jpg')}
                style={imagelayout}
            >
                <Text style={[CityName, CityText]}>London</Text>
                <Text style={[CountryName, CityText]}>UK</Text>
                <View style={[populationWrapper,rowlayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyteststyles={populationText}/>
                </View>
                <View style={[risesetWrapper, rowlayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:56:58am'} bodyteststyles={risesetText}/>
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15pm'} bodyteststyles={risesetText}/>
                </View> 
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imagelayout: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    CityName: {
        fontSize: 40,
    },
    CountryName: {
        fontSize: 30,
    },
    CityText: {
        color: 'black',
        justifyContent: 'center', 
        alignSelf: 'center',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    risesetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    risesetText: {
        fontSize: 20,
        color: 'white',
    },
    rowlayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
export default City;