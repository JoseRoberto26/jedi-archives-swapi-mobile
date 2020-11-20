import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Carousel from '../../components/Carousel/carousel';
import LabelWithValue from '../../components/LabelWithValue/labelWithValue';
import { globalStyles } from '../../styles/GlobalStyles';
import { Character } from '../../utils/models/Character';

const background = require('../../assets/images/background.jpg');
const cardBackground = require('../../assets/images/background-card-details-2.jpg');

const CharacterDetails = ({route}) => { 

    const {character} = route.params;

    console.log(character)

    return (
        <ImageBackground style={globalStyles.Background} source={background}>
            <Carousel />
            <View style={detailsStyle.Card}>
                <ImageBackground style={[globalStyles.Background, detailsStyle.BackgroundBorder]} source={cardBackground}>
                    <View style={detailsStyle.TitleBox}>
                        <Text style={[detailsStyle.Bold, detailsStyle.Title]}>
                            {character.name}
                        </Text>
                    </View>
                    <View style={detailsStyle.InfoBox} >
                        <LabelWithValue
                        label={'Height'}
                        value={character.height}/>
                        <LabelWithValue
                        label={'Mass'}
                        value={character.mass}/>
                        <LabelWithValue
                        label={'Birth Year'}
                        value={'19BBY'}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Homeworld'}
                            value={`Tatooine`}/>
                        <LabelWithValue
                            label={'Gender'}
                            value={'male'}/>
                        <LabelWithValue
                            label={'Species'}
                            value={''}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Hair Color'}
                            value={`blond`}/>
                        <LabelWithValue
                            label={'Skin Color'}
                            value={'fair'}/>
                        <LabelWithValue
                            label={'Eye Color'}
                            value={'blue'}/>
                    </View>
                    <View style={[detailsStyle.FilmsBox]}>
                        <LabelWithValue
                            label={'Films'}
                            value={``}/>
                    </View>
                </ImageBackground>
            </View>
            
        </ImageBackground>
    )
}

export default CharacterDetails;

const detailsStyle = StyleSheet.create( {
    Card: { 
        flex: 1,
        width: '90%',
        backgroundColor: 'white',
        alignSelf:'center',
    },
    BackgroundBorder:{
        paddingHorizontal: 24,
        borderWidth: 1, 
        borderColor: '#ecfcfd',
        borderRadius: 20, 
    },
    InfoBox: { 
        flexDirection: 'row',
        marginVertical: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 100
    },
    Bold: { 
        fontWeight: 'bold'
    },
    Title: { 
        fontSize: 28,
        alignSelf: "center",
        color: 'white',
    },
    TitleBox: { 
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        marginTop: -30,
        marginBottom: 35
    },
    FilmsBox: {
        marginVertical: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})