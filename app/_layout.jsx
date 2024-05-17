import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false}} />
        </Stack>
    )
    // return ( 
    //     <>
    //     <Text>Header</Text>
    //     <Slot /> 
    //     <Text>Footer</Text>
    //     </>
    // )
    // (
    //     <View style={styles.container}>
    //         <Text>RootLayout</Text>
    //     </View>
    // )
}

export default RootLayout

