import { StyleSheet, Text, View } from "react-native";

export default function Surah(props) {
    // {console.log(props)}
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "#F9FEFF",
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        },
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 20,
    }
})