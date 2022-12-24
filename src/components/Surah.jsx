import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default function Surah(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("SurahInfo", {item: props})}>
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

