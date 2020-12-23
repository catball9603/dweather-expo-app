import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Loading from './src/Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = 'f44797779b7462a164c3e49d062bb7cd';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
    );
    console.log(data);
  };

  const geoLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
      //Send to API and get weatherw
      console.log(latitude, longitude);
    } catch (e) {
      Alert.alert("Can't find you", 'So sad');
    }
  };

  useEffect(() => {
    geoLocation();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.geolocation}>{text}</Text> */}
      {isLoading ? <Loading /> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe066',
  },
  geolocation: {
    fontSize: 20,
  },
});
