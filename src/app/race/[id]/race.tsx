import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import RankingListItem from '../../../Components/RankingListItem';
import { useGlobalSearchParams } from 'expo-router';
import { useQuery, gql } from '@apollo/client';


const query = gql`
  query raceRankings($race: String) {
    raceRankings(race: $race) {
      response {
        position
        team {
          name
        }
        driver {
          image
          name
        }
        time
        race {
          id
        }
      }
      parameters {
        race
      }
    }
  }
`;

const RaceRankings = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading, error } = useQuery(query, {variables: { race: id }});

  if(loading){
    return <ActivityIndicator />;
  }

  const raceRankings = data.raceRankings.response;
  
  if (raceRankings.length === 0) {
    return <Text style = {styles.text} >Race Scheduled!</Text>;
  }

  return (
    <FlatList 
      data={raceRankings}
      renderItem={({item}) => <RankingListItem item={item}/>}
    />
  )
}

export default RaceRankings;

const styles = StyleSheet.create({
  text:{
    padding: 10,
    fontFamily: 'F1-Wide',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 40
  }
})