import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Episode } from '../models/Episode';
import EpisodesService from '../services/episodes.service';
import useService from '../hooks/useService';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import DetailEpisode from './DetailEpisode';

const EpisodesScreen = () => {
  const navigation = useNavigation<any>();
  const episodes = useService({ Service: EpisodesService });

  const handleEpisodePress = (item: Episode) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <FlatList
      data={episodes as Episode[]}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleEpisodePress(item)}>
          <DetailEpisode item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

export default EpisodesScreen;
