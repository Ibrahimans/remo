import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Surah from "./Surah";
import JuzHeader from "./JuzHeader";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SurahsContainer({surahList}){
    console.log(surahList)
   
    return (
        <View style={{flex:4}}>
            <ScrollView>
                {surahList.map((surahObj) => {
                        //lets puts surahs with the same juz under one juz header
                    // if (surahObj.id == 1 || surahList[surahObj.id - 2].starting_juz != surahObj.starting_juz) {
                    if (true) {
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