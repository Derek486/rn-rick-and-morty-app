import { Text, View } from "react-native";
import styles from "../styles/styles";

const DetailEpisode = (props: any) => {
    const item = props.item ?? props?.route?.params?.item
    return (
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Air Date: {item.air_date}</Text>
            <Text>Episode: {item.episode}</Text>
        </View>
    )
};

export default DetailEpisode