import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const logo = require('../../assets/images/logo.png');

const Header = ( ) => { 

    return ( 
        <View style={headerStyles.header}>
            <Image style={headerStyles.logo} source={logo}></Image>
            <Text style={headerStyles.title}>Jedi Archives</Text>
        </View>
    )
}

export default Header;

const headerStyles = StyleSheet.create(
    {
        header: {
            alignItems: 'center', 
            backgroundColor: 'black',
            justifyContent: "center",
            height: 60,
            flexDirection: 'row'
        },
        logo: { 
            width: '20%',
            height: '100%',
            resizeMode: 'contain', 
            marginRight: 'auto'
        },
        title: { 
            color: 'white',
            marginRight: '37%'
        }
    }
)