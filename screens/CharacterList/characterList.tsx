import { inject, observer, useLocalStore } from 'mobx-react';
import React, { useContext, useEffect, useState } from 'react';
import { View, SafeAreaView, TextInput, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Card from '../../components/Card/card';
import Header from '../../components/Header/header';
import LoadingSpin from '../../components/Loading/loading';
import { CharacterStoreContext } from '../../stores/Characters/CharacterStore';
import { RootStoresContext } from '../../stores/RootStore';
import { globalStyles } from '../../styles/GlobalStyles';
import { Character } from '../../utils/models/Character';


const background = require('../../assets/images/background.jpg');

interface ICharacterListProps extends NavigationStackScreenProps  { 
}


const CharacterList = observer(({navigation} : ICharacterListProps) => { 
    
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const store = useContext(RootStoresContext);
    const [chars, setChars] = useState<Character[]>([])

    const getCharacters = async() => {
      setLoading(true)
      await store.charactersStore.fetchCharactersAsync(page);
      setChars(store.charactersStore.characters.results);
      setLoading(false)
      
    }

    const loadCharacters = async () => {
      if(loading) return; 
      await store.charactersStore.fetchCharactersAsync(page+1);
      const newPageContent = store.charactersStore.characters.results;
      setChars([...chars, ...newPageContent])
      setPage(page + 1);
    }

    const selectCharacter = (character: Character) => { 
      store.charactersStore.selectCharacter(character);
      navigation.navigate('Profile')
    }

    useEffect(() => {
      console.log(store)
      setPage(1)
      getCharacters();
    }, [])

  const renderCard = (item: any) => { 
    return ( 
      <TouchableOpacity onPress={() => selectCharacter(item.item)}>
        <Card key={item.item.id} character={item.item}/>
      </TouchableOpacity>
       
    )
  }
    
    return ( 
        <SafeAreaView style={globalStyles.SafeArea}>
        <Header/>
        <ImageBackground style={globalStyles.Background} source={background}>
          {loading ? ( 
            <LoadingSpin/>
          ) : 
          (
            <FlatList
             keyExtractor={(item) => item.url ?? item.name}
              data={chars} 
              renderItem={renderCard}
              onEndReached={() => loadCharacters()}
              onEndReachedThreshold={0.1}
              ListFooterComponent={<LoadingSpin/>}
              />
          )}
        
        </ImageBackground>
      
      </SafeAreaView>
    )
})

export default CharacterList;

const HomeStyles = StyleSheet.create({ 
    container: { 
      marginVertical: 20,
    }
  })