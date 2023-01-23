import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Notes from "../components/Notes"

export default function SurahScreen({route, navigation}){
    const p = route.params;
    return (
        <View style={styles.container}>
            <Notes surahObj={p.item.surahObj}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 15,

    },
    
})