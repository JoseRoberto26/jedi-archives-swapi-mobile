import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Card from '../../components/Card/card';
import Header from '../../components/Header/header';
import { globalStyles } from '../../styles/GlobalStyles';
import { Character } from '../../utils/models/Character';


const background = require('../../assets/images/background.jpg');

interface ICharacterListProps extends NavigationStackScreenProps  { 

}

const CharacterList = ({navigation} : ICharacterListProps) => { 

    const [query, setQuery] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([
    {
      name: 'Darth Vader', 
      img: '',
      id: 1,
      height: 190, 
      mass: 70, 
      birth_year: '01/01/1990'
    }, 
    {
      name: 'Luke Skywalker', 
      img: '',
      id: 2,
      height: 190, 
      mass: 70, 
      birth_year: '01/01/1990'
    }, 
    {
      name: "Anakin Skywalker", 
      img: '',
      id: 3,
      height: 190, 
      mass: 70, 
      birth_year: '01/01/1990'
    }
  ])

  const search = (query: string) => { 
    console.log(query)
  }

  const renderCard = (item: any) => { 
    console.log(item.item)
    return ( 
      <TouchableOpacity onPress={() => navigation.navigate('Details', { 
          character: item.item
      })}>
        <Card key={item.item.id} character={item.item}/>
      </TouchableOpacity>
       
    )
  }
    
    return ( 
        <SafeAreaView style={globalStyles.SafeArea}>
        <Header/>
        <ImageBackground style={globalStyles.Background} source={background}>

        <View style={HomeStyles.container}>
          <TextInput
          style={globalStyles.SearchInput}
          onChangeText={text => search(text)}
          placeholder="Search across the galaxies"
          ></TextInput>
        </View> 

        <FlatList keyExtractor={(item) => item.id.toString()} data={characters} renderItem={renderCard} />
        </ImageBackground>
      
      </SafeAreaView>
    )
}

export default CharacterList;


const HomeStyles = StyleSheet.create({ 
    container: { 
      marginVertical: 20,
    }
  })