import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default function Splash({ navigation }) {

    setInterval(() => {
        navigation.replace('messages');
    }, 2400)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Splash
            </Text>
        </View>
    )
}

export function SplashHeader() {
    return (
        <View style={styles.header}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    header: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});