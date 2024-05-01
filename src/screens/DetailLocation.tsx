import { Text, View } from "react-native";
import styles from "../styles/styles";
import { IDetailModelProp, IDetailProps, IDetailScreenProp } from "../types/IDetailScreenProps";
import { Location } from "../models/Location";

const DetailLocation = (props: IDetailProps) => {
    const item = ((props as IDetailModelProp).item ?? ((props as IDetailScreenProp)?.route?.params?.item)) as Location
    return (
        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Dimension: {item.dimension}</Text>
        </View>
    )
};

export default DetailLocation