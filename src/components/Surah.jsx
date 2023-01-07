import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Surah(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("SurahInfo", {item: props})}>
            <View style={styles.container}>
                <View style={{flexDirection:'row', flex: 1, padding: 5}}>
                    <View style={{flex:0}}>
                        <View style={styles.surah_number}>
                            <Text style={{fontSize: 18, paddingHorizontal: 5}}>{props.surahObj.id}</Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 18, flex: 1}}>{props.surahObj.name}</Text>
                    <Text style={{fontSize: 18 ,flex:1, textAlign:'right'}}>{props.surahObj.name_arabic}</Text>
                </View>
                {/* <View style={styles.score_container}>
                        <Text style={styles.score}>100%</Text>
                </View> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9FEFF",
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
        height: 1,
        width: 1,
        },
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 5,
        marginHorizontal: 20,
    },
    surah_number: {
        backgroundColor: "#FFEBCD",
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
        height: 1,
        width: 1
        },
        borderRadius: 5,
        marginHorizontal: 5
    },
    score: {
        textAlign:'center',
        padding: 5
    },
    score_container: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: {
        height: 1,
        width: 1
        },
        borderRadius: 5,
        backgroundColor: 'green',
    }
})

