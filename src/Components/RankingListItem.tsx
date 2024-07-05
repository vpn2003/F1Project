import { Text, View , StyleSheet, Image} from "react-native";

import raceRankingResponse from '../../assets/data/raceRankings.json'
const raceRankings = raceRankingResponse.data.raceRankings.response;

type RankingListItemProps = {
    item: (typeof raceRankings)[0];
}

export default  function RankingListItem ({ item }: RankingListItemProps) {
    return (
        <View style= {styles.container}>
            <Text style= {styles.position}>{item.position}</Text>
            <Image source={{uri: item.driver.image}} style = {styles.driverImage}></Image>
            <View style = {styles.mini}>
                <Text style= {styles.name}>{item.driver.name}</Text>
                <Text style={{marginLeft: 3, fontFamily: 'F1-Regular', color: 'dimgray', fontSize: 12}}>{item.team.name}</Text>
            </View>
            
            <Text style= {styles.time}>{item.time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    
        elevation: 5,
    },
    position: {
        fontFamily: 'F1-Bold',
        width: 40,
        textAlign: 'center'
    },
    mini:{
        flex: 1,
        marginTop: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontFamily: 'F1-Regular',
        fontSize: 20,
        marginLeft: 3
    },
    driverImage: {
        height: 80,
        aspectRatio: 1,
        width: 50,
        borderRadius: 30,
        backgroundColor: '#FF1E00',
        marginRight: 3
    },
    time: {
        backgroundColor: 'gainsboro',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 15,
        overflow: 'hidden',
        color: 'dimgray',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 3,
        marginRight: 7,
        marginLeft: 7,
        fontFamily: 'F1-Regular'
    }
})