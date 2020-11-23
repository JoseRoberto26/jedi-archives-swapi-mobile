import React from 'react';
import { FlatList } from 'react-native';
import Slide from './slide';

interface ICarouselProps { 
    imgs?: string[] | null;
}

const Carousel = ({imgs}: ICarouselProps) => { 

    const slideList = Array.from({length: 3}).map((img, index) => { 
        return `https://picsum.photos/1440/2842?random=${index}`
    });


    const imgsList =  imgs ?? slideList


    return ( 
        <FlatList
        data={imgsList}
        keyExtractor={(item, index) => index.toString()}
        style={{flex: 1, width: '100%', height: 200}}
        renderItem={({item, index}) => { 
            return <Slide key={index} data={item} />
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false} />
    )

}

export default Carousel