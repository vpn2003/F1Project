import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import raceRankingResponse from '../../../../assets/data/raceRankings.json'
import RankingListItem from '../../../Components/RankingListItem';
const raceRankings = raceRankingResponse.data.raceRankings.response;

const QualifyingScreen = () => {
  return (
    <FlatList 
      data={raceRankings}
      renderItem={({item}) => <RankingListItem item={item}/>}
    />
  )
}

export default QualifyingScreen;