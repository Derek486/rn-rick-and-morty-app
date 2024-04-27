import { Text, View } from "react-native";
import styles from "../styles/styles";
import { Location } from "../models/Location";

const DetailLocation = ({ item }: { item: Location }) => (
    <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Type: {item.type}</Text>
        <Text>Dimension: {item.dimension}</Text>
    </View>
);

export default DetailLocation