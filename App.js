import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import { useGetWeather } from "./src/hooks/usesGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  // console.log(loading, error, weather);

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
