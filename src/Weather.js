import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#29323c', '#2C5364'],
    title: 'Thunderstorm',
    subtitle: '"The very things that hold you down are going to lift you up."',
  },
  Drizzle: {
    iconName: 'weather-rainy',
    gradient: ['#89f7fe', '#66a6ff'],
    title: 'Drizzle',
    subtitle: '"Our fate lives within us, you only have to be brave enough to see it."',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#3d72b4', '#525252'],
    title: 'Rain',
    subtitle: '"The only way to get what you want in this world is through hard work"',
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#7de2fc', '#b9b6e5'],
    title: 'Snow',
    subtitle: '"Sometimes the smallest things take up the most room in your heart."',
  },
  Atmosphere: {
    iconName: 'weather-windy-variant',
    gradient: ['#1D2B64', '#66A6FF'],
    title: 'Atmosphere',
    subtitle: '"Sometimes the right path is not the easiest one"',
  },
  Clouds: {
    iconName: 'cloudy-sharp',
    gradient: ['#536976', '#292E49'],
    title: 'Drizzle',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#3a7bd5', '#00d2ff'],
    title: 'Clear',
    subtitle: '"Venture outside your comfort zone. The rewards are worth it."',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#9bc5c3', '#616161'],
    title: 'Mist',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Dust: {
    iconName: 'weather-fog',
    gradient: ['#E7E9BB', '#403B4A'],
    title: 'Dust',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Haze: {
    iconName: 'menu',
    gradient: ['#CC95C0', '#DBD4B4', '#7AA1D2'],
    title: 'Haze',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Smoke: {
    iconName: 'weather-fog',
    gradient: ['#3a6186', '#ffd89b'],
    title: 'Smoke',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#67B26F', '#4ca2cd'],
    title: 'Fog',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Sand: {
    iconName: 'weather-fog',
    gradient: ['#FF8235', '#30E8BF'],
    title: 'Sand',
    subtitle: '"If you focus on what you left behind, you will never see what lies ahead"',
  },
  Ash: {
    iconName: 'weather-fog',
    gradient: ['#5D4157', '#A8CABA'],
    title: 'Ash',
    subtitle: '"If you focus on what you left behind, you will never see what lies ahead"',
  },
  Squall: {
    iconName: 'weather-windy',
    gradient: ['#26a0da', '#314755'],
    title: 'Squall',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#1F1C2C', '#928DAB'],
    title: 'Tornado',
    subtitle: '"Life is a journey to be experienced, not a problem to be solved"',
  },
};

function Weather({ temp, condition }) {
  return (
    <LinearGradient style={styles.container} colors={weatherOption[condition] && weatherOption[condition].gradient}>
      <View style={styles.contentTemp}>
        <MaterialCommunityIcons
          name={weatherOption[condition] && weatherOption[condition].iconName}
          size={70}
          color="white"
          style={styles.icons}
        />
        <Text style={styles.tempText}>{temp} ℃</Text>
      </View>
      <View style={styles.contentCondition}>
        <Text style={styles.mainTitle}>{weatherOption[condition] && weatherOption[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOption[condition] && weatherOption[condition].subtitle}</Text>
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
    flex: 4,
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
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 30,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#dee2e6',
    paddingHorizontal: 25,
    textAlign: 'center',
    marginTop: 20,
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
