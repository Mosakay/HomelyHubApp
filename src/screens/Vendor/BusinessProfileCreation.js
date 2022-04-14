import { View, Text } from 'react-native'
import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import VProfileCreation from './vProfileCreation';
import VSetLocation from './vSetLocation';
import VStoreCreation from './vStoreCreation';

const BusinessProfileCreation = () => {
  return (
<View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <VProfileCreation />
        </ProgressStep>
        <ProgressStep label="Second Step">
            <VSetLocation />
        </ProgressStep>
        <ProgressStep label="Third Step">
            <VStoreCreation />
        </ProgressStep>
    </ProgressSteps>
</View>
  )
}

export default BusinessProfileCreation