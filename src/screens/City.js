import React from "react";
import { SafeAreaView,
     StyleSheet,
     Text,
     ImageBackground,
     StatusBar,
     View } from "react-native-web";
import { Feather } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {

    return (
        
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('./../../assets/CityBackground.jpg')}
                style={styles.imagelayout}
            >
                <Text style={[styles.CityName, styles.CityText]}>London</Text>
                <Text style={[styles.CountryName, styles.CityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyteststyles={styles.populationText}/>
                </View>
                <View style={styles.risesetWrapper}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:56:58am'} bodyteststyles={styles.risesetText}/>
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15pm'} bodyteststyles={styles.risesetText}/>
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    risesetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    risesetText: {
        fontSize: 20,
        color: 'white',
    },
})
export default City;