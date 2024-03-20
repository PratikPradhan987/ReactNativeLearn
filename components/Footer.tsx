import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import InboxIcon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
    const handleGoToInbox = (websitelink: string) => {
        Linking.openURL(websitelink)
    };

    return (
        <View style={styles.footer}>
            <HomeIcon
                name="home"
                size={30}
                color={'#141414'}
                onPress={() => Alert.alert('Home Icon Pressed')}
            />
            <TouchableOpacity style={styles.icon} onPress={() => { handleGoToInbox("https://reactnative.dev/docs/linking") }}>
                <InboxIcon name="mail" size={30} color="#141414" />
            </TouchableOpacity>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#00000020',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        flexDirection: 'row'
    },
});
