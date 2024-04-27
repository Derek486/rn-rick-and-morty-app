import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/styles';
import { Character } from '../models/Character';

const DetailCharacter = ({ item }: { item: Character }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Status: {item.status}</Text>
      <Text>Species: {item.species}</Text>
      <Text>Gender: {item.gender}</Text>
      <Text>Type: {item.type}</Text>
    </View>
  </View>
);

export default DetailCharacter