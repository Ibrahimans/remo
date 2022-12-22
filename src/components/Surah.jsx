import { StyleSheet, Text, View } from "react-native";

export default function Surah(props) {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 1,
        padding: 2,
        paddingVertical: 20,
        marginVertical: 15,
        marginHorizontal: 20,
    }
})