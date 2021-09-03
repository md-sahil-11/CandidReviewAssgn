import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
// import Login from '../screens/login';
import Splash, { SplashHeader } from '../screens/splash';
import React from 'react';
import OnboardingScreen, { OnboardingHeader } from '../screens/onboarding';


const screens = {
    splash: {
        screen: Splash,
        navigationOptions: {
            headerTitle: () => <SplashHeader />
        },
    },
    onboarding: {
        screen: OnboardingScreen,
        // navigationOptions: {
        //     headerTitle: () => <OnboardingHeader />
        // },
    },
    // login: {
    //     screen: Login
    // }
}


const NavStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#000', height: 60, borderBottomColor: '#000' }
    }
});


export default createAppContainer(NavStack);