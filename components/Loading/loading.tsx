import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingSpin = () => { 
    return (
        <View style={LoadingStyles.Container}>
            <ActivityIndicator
                size="large"
                color="#ffff"
            />
        </View>
    )
}

const LoadingStyles = StyleSheet.create({
    Container: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})

export default LoadingSpin;