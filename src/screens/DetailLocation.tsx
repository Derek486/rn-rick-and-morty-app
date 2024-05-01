import { Text, View } from "react-native";
import styles from "../styles/styles";

const DetailLocation = (props: any) => {
    const item = props.item ?? props?.route?.params?.item
    return (
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Dimension: {item.dimension}</Text>
        </View>
    )
};

export default DetailLocation