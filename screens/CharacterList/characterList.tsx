import { observer  } from 'mobx-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, SafeAreaView, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import Card from '../../components/Card/card';
import Header from '../../components/Header/header';
import LoadingSpin from '../../components/Loading/loading';
import { RootStoresContext } from '../../stores/RootStore';
import { globalStyles } from '../../styles/GlobalStyles';
import { Character } from '../../utils/models/Character';
import { CheckBox } from 'react-native-elements'


const background = require('../../assets/images/background.jpg');

interface ICharacterListProps extends NavigationStackScreenProps  { 
}


const CharacterList = observer(({navigation} : ICharacterListProps) => { 
    
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const store = useContext(RootStoresContext);
    const [chars, setChars] = useState<Character[]>([])
    const [onlyFavorites, setOnlyFavorites] = useState(false);
    const checkboxRef = useRef<any>();
    const flatListRef = useRef<any>();
    const getCharacters = async() => {
      setLoading(true)
      await store.charactersStore.fetchCharactersAsync(page);
      setChars(store.charactersStore.characters.results);
      setLoading(false)
      
    }

    const loadCharacters = async () => {
      if(loading || onlyFavorites) return; 
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
      if(!store.filmStore.films){ 
        store.filmStore.fetchFilmsAsync();
      }
      setPage(1)
      onlyFavorites ? setChars(store.charactersStore.favoriteCharacters) : getCharacters();
    }, [])

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        checkboxRef.current.props.checked ? setChars(store.charactersStore.favoriteCharacters) : getCharacters();
      });
    }, [navigation])


    useEffect(() => {
      setPage(1);
      onlyFavorites ? setChars(store.charactersStore.favoriteCharacters) : getCharacters();
    }, [onlyFavorites])

  const renderCard = (item: any) => { 
    return ( 
      <TouchableOpacity onPress={() => selectCharacter(item.item)}>
        <Card index={item.index} key={item.item.id} character={item.item}/>
      </TouchableOpacity>
       
    )
  }
    
    return ( 
        <SafeAreaView style={globalStyles.SafeArea}>
        <Header/>
        <ImageBackground style={globalStyles.Background} source={background}>
        <View style={HomeStyles.CheckboxContainer}>
          <CheckBox
            ref={checkboxRef}
            title={<Text style={globalStyles.MainText}>
              Display favorites only
            </Text>}
            checked={onlyFavorites}
            containerStyle={{
              backgroundColor: 'transparent',
              borderColor: 'transparent'
            }}
            onPress={() => setOnlyFavorites(!onlyFavorites)}
          />
        </View>
          {loading ? ( 
            <LoadingSpin/>
          ) : 
          (
            <>
            {
              (onlyFavorites && chars.length == 0) && (
              <View>
                <Text>No favorites yet.</Text>
              </View>
              )
            }
            <FlatList
            ref={flatListRef}
             keyExtractor={(item) => item.url ?? item.name}
              data={chars} 
              renderItem={renderCard}
              onEndReached={() => loadCharacters()}
              onEndReachedThreshold={0.1}
              ListFooterComponent={onlyFavorites ? null : <LoadingSpin/>}
              />
            </>
          )}
        
        </ImageBackground>
      
      </SafeAreaView>
    )
})

export default CharacterList;

const HomeStyles = StyleSheet.create({ 
    container: { 
      marginVertical: 20,
    }, 
    CheckboxContainer: { 
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      flexDirection: 'row'
    }, 
    CheckboxLabel: { 
      marginBottom: 2
    }
  })