import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/styles';

const DetailCharacter = (props: any) => {
  const item = props.item ?? props?.route?.params?.item
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