import React, { useEffect } from 'react'
import { Animated, StyleSheet, View, Easing, Image } from 'react-native';


export default function Splash({ navigation }) {
    const startValue = new Animated.Value(1);
    const endValue = 2;
    const duration = 5000;

    useEffect(() => {
        Animated.timing(startValue, {
            toValue: endValue,
            duration: duration,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    }, [startValue, endValue, duration]);

    setInterval(() => {
        navigation.replace('onboarding');
    }, 2400)

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/images/to-do.png')}
                style={[ styles.image,
                    {flex: 1,
                    width: 100,
                    transform: [
                        {
                            scale: startValue
                        }
                    ]}
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4169e1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: 100,
        resizeMode: 'contain'
    },
});