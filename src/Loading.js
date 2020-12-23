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
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 200,
    backgroundColor: '#ffe066',
  },
  text: {
    fontSize: 30,
    fontWeight: '300',
    color: '#212529',
  },
});
