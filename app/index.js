
import React from 'react';
// import CurrentWeather from './../src/screens/CurrentWeather';
// import UpcomingWeather from './../src/screens/UpcomingWeather';
// import City from '../src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import IconText from '../src/components/IconText';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name={"CurrentWeather"} component={CurrentWeather} /> */}
        {/* <Tab.Screen name={"UpcomingWeather"} component={UpcomingWeather} /> */}
        {/* <Tab.Screen name={"City"} component={City} /> */}
        <Tab.Screen name="Icontext" component={IconText} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;
