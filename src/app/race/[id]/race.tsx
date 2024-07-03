import { View, Text, FlatList } from 'react-native'
import React from 'react'
import raceRankingResponse from '../../../../assets/data/raceRankings.json'
import RankingListItem from '../../../Components/RankingListItem';
const raceRankings = raceRankingResponse.data.raceRankings.response;

const RaceRankings = () => {
  return (
    <FlatList 
      data={raceRankings}
      renderItem={({item}) => <RankingListItem item={item}/>}
    />
  )
}

export default RaceRankings;