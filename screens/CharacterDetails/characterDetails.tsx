import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from '../../components/Carousel/carousel';
import LabelWithListValues from '../../components/LabelWithListValues/labelWithListValues';
import LabelWithValue from '../../components/LabelWithValue/labelWithValue';
import LoadingSpin from '../../components/Loading/loading';
import { RootStoresContext } from '../../stores/RootStore';
import { globalStyles } from '../../styles/GlobalStyles';
import { capitalize, formattedHeight, formattedMass } from '../../utils/formatters/dataFormatters';
import { completeFilmName } from '../../utils/formatters/filmNameFormatter';
import { idFromLink } from '../../utils/formatters/idExtractor';
import { Character } from '../../utils/models/Character';
import { Planet } from '../../utils/models/Planet';
import { Species } from '../../utils/models/Specie';
import { FontAwesome } from '@expo/vector-icons';

const background = require('../../assets/images/background.jpg');
const cardBackground = require('../../assets/images/background-card-details-2.jpg');

const CharacterDetails = () => { 

    const store = useContext(RootStoresContext);
    const [character, setCharacter] = useState(new Character());
    const [homeworld, setHomeworld] = useState(new Planet());
    const [species, setSpecies] = useState(new Species())
    const [films, setFilms] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    const getPlanetInfo = async (id: number) => { 
        await store.planetStore.fetchPlanetInfo(id);
        setHomeworld(store.planetStore.planet);
        
    }

    const getSpeciesInfo = async (id: number) => { 
        await store.speciesStore.fetchSpeciesInfo(id);
        setSpecies(store.speciesStore.species)
        
    }

    const getFilmsInfo = async (urls: string[]) => {
       
        const characterFilms = store.filmStore.films.filter(film => urls.includes(film.url))
        let filmNames: string[] = [];
        characterFilms.map(film => { 
            filmNames.push(completeFilmName(film))
        })
        setFilms(filmNames);
    }

    const getAditionalInfo = async () => {
        await getPlanetInfo(idFromLink(store.charactersStore.selectedCharacter.homeworld));
        if(store.charactersStore.selectedCharacter.species.length > 0){
            await getSpeciesInfo(idFromLink(store.charactersStore.selectedCharacter.species[0]))
        }
        let filmUrls: string[] = [];
        store.charactersStore.selectedCharacter.films.map(film => {
            filmUrls.push(film)
        })
        await getFilmsInfo(filmUrls);
        setLoading(false)
    }

    useEffect(() => {
        setIsFavorite(store.charactersStore.favoriteCharacters.includes(store.charactersStore.selectedCharacter))
        setCharacter(store.charactersStore.selectedCharacter);
        getAditionalInfo();
    }, [])


    const addToFavorite = (character: Character) => {
        isFavorite ? setIsFavorite(false) : setIsFavorite(true)
        store.charactersStore.setFavorite(character)
    }
    useEffect(() => {
        console.log({isFavorite})
    }, [isFavorite])

    return (
        <ImageBackground style={globalStyles.Background} source={background}>
            <Carousel />
            {loading ? (<LoadingSpin/>) :  ( 
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
                        value={formattedHeight(character.height)}/>
                        <LabelWithValue
                        label={'Mass'}
                        value={formattedMass(character.mass)}/>
                        <LabelWithValue
                        label={'Birth Year'}
                        value={character.birth_year}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Homeworld'}
                            value={homeworld?.name}/>
                        <LabelWithValue
                            label={'Gender'}
                            value={capitalize(character.gender)}/>
                        <LabelWithValue
                            label={'Species'}
                            value={species.name ?? '--'}/>
                    </View>
                    <View style={detailsStyle.InfoBox}>
                        <LabelWithValue
                            label={'Hair Color'}
                            value={capitalize(character.hair_color)}/>
                        <LabelWithValue
                            label={'Skin Color'}
                            value={capitalize(character.skin_color)}/>
                        <LabelWithValue
                            label={'Eye Color'}
                            value={capitalize(character.eye_color)}/>
                    </View>
                    <ScrollView style={[detailsStyle.FilmsBox]}>
                        <LabelWithListValues label={'Films'} values={films} />
                    </ScrollView>
                    <View style={detailsStyle.ButtonBox}>
                        <FontAwesome.Button color={isFavorite ? 'white' : 'black'} style={detailsStyle.FavButton} name="star" onPress={() => addToFavorite(character)}/>
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
    ButtonBox: { 
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 8
    },
    FavButton: {
        backgroundColor: '#1d1c1cd1',
        borderWidth: 0
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
        marginBottom: 20
    },
    FilmsBox: {
        marginVertical: 12
    }
})