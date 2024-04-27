import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Location } from '../models/Location';
import LocationsService from '../services/locations.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import DetailLocation from './DetailLocation';

const LocationsScreen = () => {
  const locations = useService({ Service: LocationsService });

  return (
    <FlatList
      data={locations as Location[]}
      renderItem={DetailLocation}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default LocationsScreen;
