import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, TextInput, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Card from '../../components/Card/card';
import Header from '../../components/Header/header';
import { globalStyles } from '../../styles/GlobalStyles';

import { ApplicationState } from '../../store';
import * as peopleActions from '../../store/ducks/people/action';
import { useDispatch, useSelector } from 'react-redux';
import { Person } from '../../store/ducks/people/types';

const background = require('../../assets/images/background.jpg');

interface ICharacterListProps extends NavigationStackScreenProps  { 
}

const CharacterList = ({navigation} : ICharacterListProps) => { 
    
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const characters = useSelector((state: ApplicationState) => state.people.data);

    const searchPeople = () => { 
      dispatch(peopleActions.loadRequest())
      console.log(characters, "asdas")
    }

  const renderCard = (item: any) => { 
    console.log(item.item)
    return ( 
      <TouchableOpacity onPress={() => navigation.navigate('Profile', { 
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
        {/* <FlatList keyExtractor={(item) => item.id.toString()} data={characters} renderItem={renderCard} /> */}
        <TouchableOpacity onPress={() => searchPeople()}>
          <Text style={{
            color: 'white'
          }}>Request</Text>
        </TouchableOpacity>
        
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