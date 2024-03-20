import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://scontent.fbom16-1.fna.fbcdn.net/v/t1.6435-9/186193538_3497983013635738_1532781104882823405_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Shu1PCO5qIAAX_JD24n&_nc_ht=scontent.fbom16-1.fna&oh=00_AfDrqE5y2pD2Q2kkllVofnbauo_2vynnXPNjCiBwQZvL5Q&oe=66227DC2'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Jaipur</Text>
                    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
                    <Text style={styles.cardDescription}>SomeWhere in the desert</Text>
                    <Text style={styles.cardFooter}>2018</Text>
                    <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('https://www.facebook.com/pratik.pradhan.733/')}>
                        <Text >More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardButton: {

        paddingVertical: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }

})