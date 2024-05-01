import { Text, View } from "react-native";
import styles from "../styles/styles";
import { IDetailModelProp, IDetailProps, IDetailScreenProp } from "../types/IDetailScreenProps";
import { Episode } from "../models/Episode";

const DetailEpisode = (props: IDetailProps) => {
    const item = ((props as IDetailModelProp).item ?? ((props as IDetailScreenProp)?.route?.params?.item)) as Episode
    return (
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Air Date: {item.air_date}</Text>
            <Text>Episode: {item.episode}</Text>
        </View>
    )
};

export default DetailEpisode