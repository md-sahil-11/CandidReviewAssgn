import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
import Login from '../screens/login';
import Splash, { SplashHeader } from '../screens/splash';
import React from 'react';
import OnboardingScreen from '../screens/onboarding';


const screens = {
    splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false,
        },
    },
    onboarding: {
        screen: OnboardingScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
    
}


const NavStack = createStackNavigator(screens)
export default createAppContainer(NavStack);