import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/GlobalStyles';

interface ILabelWithListValuesProps { 
    label: string; 
    values: string[];
}

const LabelWithListValues = ( {label, values}: ILabelWithListValuesProps) => { 
    return ( 
        <View style={LabelWithValueStyles.Box}>
            <Text style={[LabelWithValueStyles.Label]}>{label}</Text>
            {values.map((value, index) => 
            (<Text key={index} style={[LabelWithValueStyles.Value, globalStyles.MainText]}>{value}</Text>)
            )}
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
            fontSize: 12,
        }
    }
)

export default LabelWithListValues;