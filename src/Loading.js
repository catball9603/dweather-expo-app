import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 200,
    backgroundColor: '#00c2ff',
  },
  text: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
  },
});
