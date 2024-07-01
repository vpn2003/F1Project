import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import RaceListItem from './src/Components/RaceListItem';
import racesResponse from './assets/data/races.json';
import { useFonts } from 'expo-font';
import dayjs from 'dayjs';

const races = racesResponse.data.races.response;

export default function App() {
  const [fontsLoaded] = useFonts({
    'F1-Bold': require('./assets/fonts/Formula1-Wide.otf'),
    'F1-Regular': require('./assets/fonts/Formula1-Regular.otf'),
    'F1-Wide': require('./assets/fonts/Formula1-Wide.otf'),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  const sortedRaces = races.sort((r1, r2) => 
  dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => <RaceListItem item={item} round ={sortedRaces.length-index} />}
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
