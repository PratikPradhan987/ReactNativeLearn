import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>TODO</Text>
            <View style={styles.container}>
                <View style={[styles.cardRed, styles.card]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cardGreen, styles.card]}>
                    <Text style={styles.innerText}>Greed</Text>
                </View>
                <View style={[styles.cardBlue, styles.card]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCard

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
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardRed: {
        backgroundColor: '#BE7B72',
    },
    cardGreen: {
        backgroundColor: '#31363F',
    },
    cardBlue: {
        backgroundColor: '#FFF455',
    },
    innerText: {
        color: 'white',
    },
})