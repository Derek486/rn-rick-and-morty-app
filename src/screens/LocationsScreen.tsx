import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Location } from '../models/Location';
import LocationsService from '../services/locations.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import DetailLocation from './DetailLocation';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigatorParamsList } from '../types/RootStackNavigatorParamsList';

const LocationsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
  const locations = useService({ Service: LocationsService });

  const handleLocationPress = (item: Location) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <FlatList
      data={locations as Location[]}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleLocationPress(item)}>
          <DetailLocation item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default LocationsScreen;
