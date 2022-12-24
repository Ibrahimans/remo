import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Surah(props) {
    const handlePress = () => console.log(props.name)
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={{fontSize: 24}}>{props.name}</Text>
            </View>
        </TouchableOpacity>
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