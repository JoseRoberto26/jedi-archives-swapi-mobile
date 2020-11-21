import React, { useEffect, useState } from 'react'; 
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Character } from '../../utils/models/Character';

interface ICardProps { 
    character: Character
}

const mockPhoto = require('../../assets/images/logo.png');

const Card = ( {character}: ICardProps) => { 

    const [loading, setLoading] = useState<Boolean>(false);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const SEARCH_URL = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDYrtt9b1pGLAXaIFjCg0j3jJM69psThpA&cx=015504602976033325475:fqoyxqbmz5y&q=${character.name}&searchType=image`

    const fetchImages = () => { 
        setLoading(true)
        try {
            fetch(SEARCH_URL)
            .then(response => response.json())
            .then(data =>{
                if(data.items){
                    setImgSrc(data.items[0]?.link)
                }
            }) 
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => { 
        //fetchImages();
    }, [])

    return (

        <View style={CardStyles.Card}>
            <View style={CardStyles.ImgBox}>
            {
                loading ?  <ActivityIndicator size="large" color="#00ff00" /> : <Image  style={CardStyles.Photo} source={imgSrc ? {uri: imgSrc} : mockPhoto} ></Image>
            } 
            </View>
            <View style={CardStyles.InfoBox}>
                <Text style={CardStyles.Title}>{character.name}</Text>
                <Text>Birth year: {character.birth_year}</Text>
                <Text>Height: {character.height}</Text>
                <Text>Mass: {character.mass}</Text>
            </View>
        </View>
    )
}

export default Card;

const CardStyles = StyleSheet.create({
    Card: {
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: 'white',
        marginHorizontal: 40,
        marginVertical: 16,
        height: 128,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }, 
    Title: { 
        fontSize: 16,
        marginVertical: 8,
    },
    ImgBox: { 
        width: '45%'
    },
    InfoBox: { 
        paddingHorizontal: 16
    },
    Photo: { 
        width: '100%', 
        height: 125,
        resizeMode: 'stretch',
    }
})