import { FlatList, View, Text, ScrollView } from "react-native";
import Surah from "./Surah";
import surahs from "../data/surahs.json"

export default function SurahsContainer(){

    return (
        <ScrollView>
            {/* {console.log(surahs[0].name)} */}

            <FlatList 
            data={surahs} 
            renderItem={(surahObj) => {
                // console.log(surahObj)
                return <Surah name={surahObj.item.name} />
            }}
            />
        </ScrollView>
    )
}