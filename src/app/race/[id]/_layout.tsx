import { Stack, Tabs, withLayoutContext } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);
export default function RaceLayout() {
    return (
        <>
            <Stack.Screen options={{ title: "Race Details" }} />
            <TopTabs
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#FF1E00' },
                    tabBarInactiveTintColor: 'gainsboro',
                    tabBarActiveTintColor: 'white',
                    tabBarIndicatorStyle: {
                        backgroundColor: 'white',
                        height: 5,
                    },
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'F1-Regular'
                    }
                }}
            >
                <TopTabs.Screen name="index" options={{ title: 'Details' }} />
            </TopTabs>
        </>
    );
}
