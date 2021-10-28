import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#00BCD4'} translucent={false} hidden={false} />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
