import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from './src/Constants/Colors';
import RaceListItem from './src/Components/RaceListItem';
import racesResponse from './assets/data/races.json'
const races = racesResponse.data.races.response;

export default function App() {
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
