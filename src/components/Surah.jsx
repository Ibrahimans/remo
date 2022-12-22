import { StyleSheet, Text, View } from "react-native";

export default function Surah(props) {
    // {console.log(props)}
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
        borderRadius: 40,
        shadowColor: "black",
        shadowOpacity: 0.8,
        padding: 2,

    }
})