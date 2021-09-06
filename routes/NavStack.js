import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from  'react-navigation';
import Register from '../screens/register';
import Splash from '../screens/splash';
import OnboardingScreen from '../screens/onboarding';
import Login from '../screens/login';

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
    register: {
        screen: Register,
        navigationOptions: {
            headerShown: false,
        },
    },
    login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        },
    }
}


const NavStack = createStackNavigator(screens)
export default createAppContainer(NavStack);