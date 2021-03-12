import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Loading from './src/Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './src/Weather';

const API_KEY = 'f44797779b7462a164c3e49d062bb7cd';

export default function App() {
  const [state, setState] = useState({
    isLoading: true,
    temp: null,
    condition: null,
  });

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
    );
    console.log(data);
    setState({
      isLoading: false,
      temp: data.main.temp,
      condition: data.weather[0].main,
    });
  };

  const geoLocation = async () => {
    try {
      //request permission
      await Location.requestPermissionsAsync();

      //get geolocation
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      //Send to API and get weather
      getWeather(latitude, longitude);
      console.log(latitude, longitude);
    } catch (e) {
      Alert.alert("Can't find you", 'So sad');
    }
  };

  useEffect(() => {
    geoLocation();
  }, []);

  const { isLoading, temp, condition } = state;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.geolocation}>{text}</Text> */}
      {isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  geolocation: {
    fontSize: 20,
  },
});
