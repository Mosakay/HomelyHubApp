import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {
    OnBoarding,

    SignIn,
    SignUp,
    SignUp2,
    ForgotPassword,
    Otp,
    MainLayout
} from './src/screens'

const Stack = createStackNavigator();

const App = () => {
    
    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="SignUp2"
                    component={SignUp2}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />

                <Stack.Screen
                    name="MainLayout"
                    component={MainLayout}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App