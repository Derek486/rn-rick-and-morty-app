import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Episode } from '../models/Episode';
import EpisodesService from '../services/episodes.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import DetailEpisode from './DetailEpisode';

const EpisodesScreen = () => {
  const episodes = useService({ Service: EpisodesService });

  return (
    <FlatList
      data={episodes as Episode[]}
      renderItem={DetailEpisode}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default EpisodesScreen;
