import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';
import dayjs from 'dayjs';
import racesResponse from '../../assets/data/races.json'
import { Link } from 'expo-router';
const races = racesResponse.data.races.response;

export default function RaceListItem({ item, round }: { item: (typeof races)[0]; round: number; }) {
    return (
      <Link href={`/race/${item.id}`} asChild>
        <Pressable style={styles.itemContainer}>
          <View style={styles.datesContainer}>
            <Text style={styles.date}>{dayjs(item.date).subtract(2, 'days').format('DD')}-{dayjs(item.date).format('DD')}</Text>
            <Text style={styles.month}>{dayjs(item.date).format('MMM')}</Text>
          </View>
          <View style= {{flex: 1}}>
            <Text style={styles.round}>Round {round}</Text>
            <Text style={styles.country}>{item.competition.location.country}</Text>
            <Text style={styles.description}>
              Formula 1 {item.competition.name} {item.season}
            </Text>

          </View>
    
          <Entypo name="chevron-small-right" size={24} color={Colors.primary} />
        </Pressable>
      </Link>
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
      justifyContent: 'center',
      width: 80
    },
    date: {
      fontSize: 20,
      fontFamily: 'F1-Regular',
    },
    month: {
      backgroundColor: 'gainsboro',
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderRadius: 15,
      overflow: 'hidden',
      color: 'dimgray',
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5,
      fontFamily: 'F1-Regular'
    },
    round: {
      color: Colors.primary,
      fontSize: 15,
      fontFamily: 'F1-Regular'
    },
    country: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'F1-Regular',
      marginVertical: 3
    },
    description: {
      color: 'dimgray',
      fontFamily: 'F1-Regular',
    },
  });
  