import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import ApolloClientProvider from "../providers/ApolloClientProvider";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'F1-Bold': require('../../assets/fonts/Formula1-Wide.otf'),
        'F1-Regular': require('../../assets/fonts/Formula1-Regular.otf'),
        'F1-Wide': require('../../assets/fonts/Formula1-Wide.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ApolloClientProvider>
            <Stack screenOptions={{
                headerStyle: { backgroundColor: '#FF1E00' },
                headerTitleStyle: { color: 'white', fontFamily: "F1-Bold" },
                headerTitleAlign: 'center',
                headerTintColor: 'white'
            }} >
                <Stack.Screen name="index" options={{ title: 'Formula 1' }}></Stack.Screen>
            </Stack>

            <StatusBar style= 'light' />
        </ApolloClientProvider>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});