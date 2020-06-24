import React , {Component} from 'react';
import * as Device from 'expo-device';
import {Text,View} from 'react-native';

export default class Deviceinfo extends Component {
    render() {
        return(
            <View>
            <Text>brand:{Device.brand}</Text>
            <Text>model:{Device.modelName}</Text>
            <Text>{Device.modelId}</Text>
            <Text>OS:{Device.osName}</Text>
            <Text>version:{Device.osVersion}</Text>
            </View>
        )
    }
}