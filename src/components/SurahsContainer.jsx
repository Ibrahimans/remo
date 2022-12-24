import { View, ScrollView } from "react-native";
import Surah from "./Surah";
import surahs from "../data/surahs.json"

export default function SurahsContainer(){
    return (
        <View style={{flex:4}}>
            <ScrollView>
                {surahs.map((surahObj) => <Surah key={surahObj.id} name={surahObj.name} />)}
            </ScrollView>
        </View>
    )
}