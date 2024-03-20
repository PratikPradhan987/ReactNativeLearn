import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View >
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        me
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        to
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        change
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        More....
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    card: {
        borderRadius: 8,
        margin: 8,
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    elevatedCard: {
        backgroundColor: '#313489',
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        overflow: 'hidden'
    },
    elevatedCardText: {
        color: 'white',
    },
})