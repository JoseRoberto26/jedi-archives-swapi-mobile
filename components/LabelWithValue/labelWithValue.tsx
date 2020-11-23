import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';

interface ILabelWithValueProps { 
    label: string; 
    value: string;
}

const LabelWithValue = ( {label, value}: ILabelWithValueProps) => { 
    return ( 
        <View style={LabelWithValueStyles.Box}>
            <Text style={[LabelWithValueStyles.Label]}>{label}</Text>
            <Text style={[LabelWithValueStyles.Value, globalStyles.MainText]}>{value}</Text>
        </View>
    )
}

const LabelWithValueStyles = StyleSheet.create(
    {
        Box: { 
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "#0c0a0acc",
            width: '100%',
            paddingVertical: 4,
        },
        Label: { 
            fontSize: 12,
            color: 'white',
            fontFamily: 'Goldman'
        }, 
        Value: { 
            fontSize: 14,
        }
    }
)

export default LabelWithValue;