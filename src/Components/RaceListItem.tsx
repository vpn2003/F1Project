import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';

import racesResponse from '../../assets/data/races.json'
const races = racesResponse.data.races.response;

export default function RaceListItem({ item }: { item: (typeof races[0]) }) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.datesContainer}>
          <Text style={styles.date}>03-05</Text>
          <Text style={styles.month}>NOV</Text>
        </View>
        <View style= {{flex: 1}}>
          <Text style={styles.round}>Round 21</Text>
          <Text style={styles.country}>{item.competition.location.country}</Text>
          <Text style={styles.description}>
            Formula 1 {item.competition.name} 2024
          </Text>
        </View>
  
        <Entypo name="chevron-small-right" size={24} color={Colors.primary} />
      </View>
    );
  }


  const styles = StyleSheet.create({
    itemContainer: {
      padding: 10,
      margin: 3,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
  
      elevation: 6,
    },
    datesContainer: {
      padding: 10,
      marginRight: 10,
      borderRightWidth: 1,
      borderColor: 'gainsboro',
      alignItems: 'center',
    },
    date: {},
    month: {
      backgroundColor: 'gainsboro',
      paddingVertical: 1,
      paddingHorizontal: 7,
      borderRadius: 15,
      overflow: 'hidden',
      color: 'dimgray',
      fontWeight: 'bold',
      marginTop: 3
    },
    round: {
      color: Colors.primary,
    },
    country: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    description: {
      color: 'dimgray'
    },
  });
  