import { Stack, Tabs, withLayoutContext} from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);
export default function RaceLayout() {
    return (
        <>
            <Stack.Screen options={{title: "Race Details"}}></Stack.Screen>
            <TopTabs 
                screenOptions={{
                    tabBarStyle: {backgroundColor: '#FF1E00'},
                    tabBarInactiveTintColor: 'gainsboro',
                    tabBarActiveTintColor: 'white',
                    tabBarIndicatorStyle:{
                        backgroundColor: 'white',
                        height: 5,
                    },
                    tabBarLabelStyle:{
                        fontWeight: 'bold',
                        fontFamily: 'F1-Regular'
                    }
                    
            }}
            />
        </>
    );
}