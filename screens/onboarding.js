import React from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onDone={() => navigation.replace('register')}  
            onSkip={() => navigation.replace('register')}
            pages={[
                {
                    backgroundColor: '#4169e1',
                    image: <Image source={require('../assets/images/to-do-list.png')} />,
                    title: 'Todo List',
                    subtitle: 'Make your Todo list and stay organised the easy way.',
                },
                {
                    backgroundColor: '#4169e1',
                    image: <Image source={require('../assets/images/time.png')} />,
                    title: 'Set Alarm!!!',
                    subtitle: 'Set Alarm and never forget.',
                },
                {
                    backgroundColor: '#4169e1',
                    image: <Image source={require('../assets/images/regs.png')} />,
                    title: 'Register yourself',
                    subtitle: 'Get access to your to-do with any device.',
                }
            ]}
        />
    )
}


export default OnboardingScreen;