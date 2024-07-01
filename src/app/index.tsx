import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text} from 'react-native';
import RaceListItem from '../Components/RaceListItem';
import racesResponse from '../../assets/data/races.json';
import dayjs from 'dayjs';
import { Link } from 'expo-router';

const races = racesResponse.data.races.response;

export default function HomeScreen() {
  const sortedRaces = races.sort((r1, r2) => 
  dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <View style={styles.container}>
      <Link href="/about"><Text>Go to about</Text></Link>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => <RaceListItem item={item} round ={sortedRaces.length-index} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 0,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 0
  }
});
