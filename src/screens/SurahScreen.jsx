import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Notes from "../components/Notes"
import Mistakes from "../components/Mistakes";

export default function SurahScreen({route, navigation}){
    const p = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>{p.item.name}</Text>
            <Mistakes />
            <Notes surahId={p.item.name}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 15,
    },
    lightHeader : {
        fontSize : 20,
    }
})