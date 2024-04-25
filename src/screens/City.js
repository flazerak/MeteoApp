import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    imagelayout,
    CityName,
    CountryName,
    CityText,
    populationWrapper,
    populationText,
    risesetWrapper,
    risesetText,
    rowlayout,
  } = styles;
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("./../../assets/CityBackground.jpg")}
        style={imagelayout}
      >
        <Text style={[CityName, CityText]}>{name}</Text>
        <Text style={[CountryName, CityText]}>{country}</Text>
        <View style={[populationWrapper, rowlayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyteststyles={populationText}
          />
        </View>
        <View style={[risesetWrapper, rowlayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyteststyles={risesetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyteststyles={risesetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imagelayout: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  CityName: {
    fontSize: 40,
  },
  CountryName: {
    fontSize: 30,
  },
  CityText: {
    color: "black",
    justifyContent: "center",
    alignSelf: "center",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  risesetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  risesetText: {
    fontSize: 20,
    color: "white",
  },
  rowlayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default City;
