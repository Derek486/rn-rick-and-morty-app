import { Text, View } from "react-native";
import styles from "../styles/styles";
import { Episode } from "../models/Episode";

const DetailEpisode = ({ item }: { item: Episode }) => (
    <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Air Date: {item.air_date}</Text>
        <Text>Episode: {item.episode}</Text>
    </View>
);

export default DetailEpisode