import React from "react";
import { SafeAreaView,
         StyleSheet, 
         Text,
         FlatList,
         StatusBar, 
         ImageBackground} from 'react-native';
import ListItem from './../components/ListItem';


const DATA = [
    {
        "dt_txt": "2022-08-30 16:00:00",
        "main": {
          "temp_min": 296.34,
          "temp_max": 298.24,
        },
        "weather": [
          {
            "main": "clear",
          }
        ],
    },
    {
        "dt_txt": "2022-08-29 16:00:00",
        "main": {
          "temp_min": 296.34,
          "temp_max": 298.24,
        },
        "weather": [
          {
            "main": "rain",
          }
        ],
    },
    {
        "dt_txt": "2022-08-28 16:00:00",
        "main": {
          "temp_min": 296.34,
          "temp_max": 298.24,
        },
        "weather": [
          {
            "main": "clouds",
          }
        ],
    },
]


const UpcomingWeather = () => {

    const renderItem = ({item}) => (
        <ListItem dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main}/>
    )
    const {container, image} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
              source={require('./../../assets/upcoming_backgroud.jpg')}
              style={image}>
              <Text>Upcoming Weather </Text>
              <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt}/>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
        
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather;