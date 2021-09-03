import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
import Messages from '../screens/messages';
// import Login from '../screens/login';
import Splash, { SplashHeader } from '../screens/splash';
import React from 'react';

const screens = {
    splash: {
        screen: Splash,
        _navigationOptions: {
            headerTitle: () => <SplashHeader />
        },
        get navigationOptions() {
            return this._navigationOptions;
        },
        set navigationOptions(value) {
            this._navigationOptions = value;
        },
    },
    messages: {
        screen: Messages
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