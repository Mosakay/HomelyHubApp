import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const Home = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Home Screen for HomelyHub</Text>
           
        </View>
    )
}

export default Home;