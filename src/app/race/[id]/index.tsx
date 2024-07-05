import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import raceResponse from '../../../../assets/data/races.json'

// const race = raceResponse.data.races.response[0];
// const raceId = raceResponse.data.races.response[0].id;


const RaceDetails = () => {
  const { id } = useLocalSearchParams();
  const race = raceResponse.data.races.response.find(race => race.id === Number(id));
  if (!race) {
    return (
      <View style={styles.page}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>`Race not found ${id}`</Text>
      </View>
    );
  }

  return (
    
    <View style= {styles.page}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{race.competition.location.country} {race.season}</Text>
      <Text style={{fontSize: 15}}>{race.circuit.name}</Text>
      <Image 
        source={{uri: race.circuit.image}}
        style={styles.image} 
        resizeMode='contain'
        ></Image>
    </View>
    
  )
}

const styles = StyleSheet.create({
  page:{
    padding: 10
  },
  image:{
    width: '100%',
    aspectRatio: 16 / 9,
    marginRight: 15,
    marginTop: 5
  }
})
export default RaceDetails;