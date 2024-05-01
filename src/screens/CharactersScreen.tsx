import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Character } from '../models/Character';
import CharactersService from '../services/characters.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import DetailCharacter from './DetailCharacter.tsx';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigatorParamsList } from '../types/RootStackNavigatorParamsList';

const CharactersScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
  const characters = useService({ Service: CharactersService });

  const handleCharacterPress = (item: Character) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <FlatList
      data={characters as Character[]}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCharacterPress(item)}>
          <DetailCharacter item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default CharactersScreen;
