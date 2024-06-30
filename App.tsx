import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import RaceListItem from './src/Components/RaceListItem';
import racesResponse from './assets/data/races.json';
import * as Font from 'expo-font';
const races = racesResponse.data.races.response;

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'F1-Black': require('./assets/fonts/Formula1-Black.ttf'),
    });
    setFontsLoaded(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={races}
        renderItem={({ item }) => <RaceListItem item={item} />}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 0
  }
});
