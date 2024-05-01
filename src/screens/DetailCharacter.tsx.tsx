import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/styles';
import { Character } from '../models/Character';
import { IDetailModelProp, IDetailProps, IDetailScreenProp } from '../types/IDetailScreenProps';

const DetailCharacter = (props: IDetailProps) => {
  const item = ((props as IDetailModelProp).item ?? ((props as IDetailScreenProp)?.route?.params?.item)) as Character
  return (
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
  )
};

export default DetailCharacter