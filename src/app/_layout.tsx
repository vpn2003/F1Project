import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, ActivityIndicator, View } from "react-native";

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

    return <Stack />;

}

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });