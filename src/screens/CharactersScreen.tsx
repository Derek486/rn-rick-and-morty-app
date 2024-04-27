import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Character } from '../models/Character';
import CharactersService from '../services/characters.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import DetailCharacter from './DetailCharacter.tsx';

const CharactersScreen = () => {
  const characters = useService({ Service: CharactersService })

  return (
    <FlatList
      data={characters as Character[]}
      renderItem={DetailCharacter}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default CharactersScreen;
