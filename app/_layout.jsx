import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router';

const RootLayout = () => {
    return ( 
        <>
        <Slot /> 
        </>
    )
    // (
    //     <View style={styles.container}>
    //         <Text>RootLayout</Text>
    //     </View>
    // )
}

export default RootLayout

