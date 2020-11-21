import React, { useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Carousel from '../../components/Carousel/carousel';
import LabelWithValue from '../../components/LabelWithValue/labelWithValue';
import { CharacterStoreContext } from '../../stores/Characters/CharacterStore';
import { RootStoresContext } from '../../stores/RootStore';
import { globalStyles } from '../../styles/GlobalStyles';
import { idFromLink } from '../../utils/formatters/idExtractor';
import { Character } from '../../utils/models/Character';
import { Planet } from '../../utils/models/Planet';

const background = require('../../assets/images/background.jpg');
const cardBackground = require('../../assets/images/background-card-details-2.jpg');

const CharacterDetails = () => { 

    const store = useContext(RootStoresContext);
    const [character, setCharacter] = useState(new Character());
    const [homeworld, setHomeworld] = useState(new Planet());

    const getPlanetInfo = async (id: number) => { 
        await store.planetStore.fetchPlanetInfo(id);
        setHomeworld(store.planetStore.planet);
    }

    useEffect(() => {
        setCharacter(store.charactersStore.selectedCharacter);
        getPlanetInfo(idFromLink(character.homeworld));
    }, [])


    return (
        <ImageBackground style={globalStyles.Background} source={background}>
            <Carousel />
            {character && ( 
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
                        value={character.height?.toString()}/>
                        <LabelWithValue
                        label={'Mass'}
                        value={character.mass?.toString()}/>
                        <LabelWithValue
                        label={'Birth Year'}
                        value={character.birth_year}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Homeworld'}
                            value={`Placeholder`}/>
                        <LabelWithValue
                            label={'Gender'}
                            value={character.gender}/>
                        <LabelWithValue
                            label={'Species'}
                            value={"Placeholder"}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Hair Color'}
                            value={character.hair_color}/>
                        <LabelWithValue
                            label={'Skin Color'}
                            value={character.skin_color}/>
                        <LabelWithValue
                            label={'Eye Color'}
                            value={character.eye_color}/>
                    </View>
                    <View style={[detailsStyle.FilmsBox]}>
                        <LabelWithValue
                            label={'Films'}
                            value={`Star Wars: Aquele lá mesmo`}/>
                    </View>
                </ImageBackground>
            </View>
            )}
            
            
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