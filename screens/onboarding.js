import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/favicon.png')} />,
                    title: 'Onboarding-1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#ff0',
                    image: <Image source={require('../assets/favicon.png')} />,
                    title: 'Onboarding-2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />

    )
}


export function OnboardingHeader() {
    return (
        <View style={styles.header}></View>
    )
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default OnboardingScreen;