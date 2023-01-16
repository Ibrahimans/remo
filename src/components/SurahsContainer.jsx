import { Text, View, ScrollView } from "react-native";
import Surah from "./Surah";
import surahs from "../data/surahs.json"
import JuzHeader from "./JuzHeader";

export default function SurahsContainer(){
    return (
        <View style={{flex:4}}>
            <ScrollView>
                {surahs.map((surahObj) => {
                    if (surahObj.id == 1 || surahs[surahObj.id - 2].starting_juz != surahObj.starting_juz) {
                        return(
                            <View key={surahObj.id}>
                                <JuzHeader surahObj={surahObj} />
                                <Surah surahObj={surahObj} />
                            </View>
                        )
                    }
                    else {return <Surah key={surahObj.id} surahObj={surahObj} />}
                })}
            </ScrollView>
        </View>
    )
}