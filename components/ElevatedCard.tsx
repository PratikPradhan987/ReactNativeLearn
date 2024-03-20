import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View >
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text style={styles.elevatedCardText}>
                        Lorem ipsum dolor sit amet,
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
    card: {},
    elevatedCard: {},
    elevatedCardText: {},
})