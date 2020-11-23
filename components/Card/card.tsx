import React, { useContext, useEffect, useState } from 'react'; 
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { RootStoresContext } from '../../stores/RootStore';
import { globalStyles } from '../../styles/GlobalStyles';
import { Character } from '../../utils/models/Character';
import { CustomSearchImage } from '../../utils/models/ImageObject';

interface ICardProps { 
    character: Character;
    index: number;
}

const mockPhoto = require('../../assets/images/logo.png');

const Card = ( {character, index }: ICardProps) => { 

    const [loading, setLoading] = useState<Boolean>(false);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const store = useContext(RootStoresContext);

    const getImages = async() => { 
        await store.imageStore.fetchImages(character.name);
        const savedImages = store.imageStore.images.find(object => { 
            return object.name == character.name;
        })
        setImgSrc(savedImages?.images[0].link ?? null);
    }

    useEffect(() => {
        if(store.imageStore.images.length < index){
            getImages()
        }
        if(store.imageStore.images && store.imageStore.images.length > 0){
            const savedImages = store.imageStore.images.find(object => { 
                return object.name == character.name;
            })
            setImgSrc(savedImages?.images[0].link ?? null);
        }
        
    }, [])

    return (

        <View style={CardStyles.Card}>
            <View style={CardStyles.ImgBox}>
            {
                loading ?  <ActivityIndicator size="large" color="#00ff00" /> : <Image  style={CardStyles.Photo} source={imgSrc ? {uri: imgSrc} : mockPhoto} ></Image>
            } 
            </View>
            <View style={CardStyles.InfoBox}>
                <Text style={[CardStyles.Title, globalStyles.MainText]}>{character.name}</Text>
                <Text style={[globalStyles.MainText]}>Birth year: {character.birth_year}</Text>
                <Text style={[globalStyles.MainText]}>Height: {character.height}</Text>
                <Text style={[globalStyles.MainText]}>Mass: {character.mass}</Text>
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
        width: '35%',
    },
    InfoBox: { 
        paddingHorizontal: 16,
        backgroundColor: "#0c0a0acc",
        width: '100%'
    },
    Photo: { 
        width: '100%', 
        height: 125,
        resizeMode: 'stretch',
    }
})