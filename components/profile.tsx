import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

const Profile = (): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView >
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <Text className="mt-2 text-lg bg-yellow-800 text-black dark:text-white"> hello app</Text>

                {/* <View
                    style={{
                    }}>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://avatars.githubusercontent.com/u/71559227?s=400&u=ac0a1dfae1421ca4e021ea7cd5c87d308c250d61&v=4' }}
                        />
                        <Text style={styles.name}>Hi,</Text>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Personal information</Text>
                            <Text className="mt-8 px-2">not found</Text>
                            <View style={styles.grid}>
                                <Text style={styles.gridItem}>Name</Text>
                                <Text style={styles.gridItem}>Pratik Pradhan</Text>
                            </View>
                            <View style={styles.grid}>
                                <Text style={styles.gridItem}>Age</Text>
                                <Text style={styles.gridItem}>25</Text>
                            </View>
                        </View>
                    </View>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}


// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     card: {
//         flex: 1,
//         alignContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//         borderRadius: 10,
//         width: '80%',
//     },
//     cardTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     grid: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
//     gridItem: {
//         width: '48%',
//         fontSize: 16,
//     },
// });

export default Profile