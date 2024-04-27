import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 8,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        marginBottom: 16,
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});

export default styles