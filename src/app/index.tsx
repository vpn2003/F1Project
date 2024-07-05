import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import RaceListItem from '../Components/RaceListItem';
import dayjs from 'dayjs';

// import racesResponse from '../../assets/data/races.json';
// const races = racesResponse.data.races.response;

import { useQuery, gql } from '@apollo/client';
const query = gql`
  query MyQuery ($season: String = "", $type: String = ""){
    races(season: $season, type: $type) {
      response {
        id
        date
        season
        competition {
          name
          location {
            country
          }
        }
      }
    }
  }
`


export default function HomeScreen() {

  const {data, loading, error} = useQuery(query, {
    variables: {season: "2024", type: "RACE"}
  });

  if(loading){
    return <ActivityIndicator />
  }

  if(error){
    return <Text>Error fetching races: {error.message}</Text>
  }

  const races = [...data.races.response];

  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    marginTop: 3,
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
