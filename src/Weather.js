import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Weather({ temp, condition }) {
  return (
    <LinearGradient style={styles.container} colors={['#3d72b4', '#525252']}>
      <View style={styles.contentTemp}>
        <Ionicons name="rainy-outline" size={70} color="white" style={styles.icons} />
        <Text style={styles.tempText}>{temp} ℃</Text>
      </View>
      <View style={styles.contentCondition}>
        <Text style={styles.conditionText}>{condition}</Text>
      </View>
      <StatusBar barStyle="light-content" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTemp: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginBottom: 10,
  },
  tempText: {
    fontSize: 35,
    color: '#fff',
  },
  contentCondition: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  conditionText: {
    fontSize: 30,
    color: '#fff',
  },
});

Weather.propsTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Ash',
    'Squall',
    'Tornado',
    'Clear',
    'Clouds',
  ]).isRequired,
};

export default Weather;
