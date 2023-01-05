import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View,StyleSheet, TextInput } from "react-native";
import NotesTemplate from '../data/notes-template.json';


export default function Notes({surahId}){
    const [note, setNote] = useState()


    useFocusEffect(
        useCallback(() => {
            console.log("screen focused")
            //surah item
            //setNote(item)
            //update notes here
            return async () => {
                console.log("screen unfocused");
                try {
                    await AsyncStorage.setItem(surahId, note)
                    const c = await AsyncStorage.getItem(surahId)
                    console.log(c)
        
                } catch (error) {
                  // Error saving data
                  console.log(error)
                }

            }
        }, [note] )
    )

    // const lastEntry = async () => {
    //     try{
    //         setNote(await AsyncStorage.getItem(surahId))
    //     }catch (error){
    //         console.log("lastEntry error")
    //     }
    // }
    
    const saveToNote = text => {
        setNote(text)
        console.log(note)
    }
    
    // lastEntry()
    // console.log(note)


    //TODO: make bullet points work in textinput
    return (
        <View style={styles.container}>
            <TextInput 
                // defaultValue={note}
                onChangeText={(text) => setNote(text)}
                multiline={true}
                

            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 15,
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
        
    },
    input : {
        height: 40,
    },
    testButton : {
        marginTop : 200
    }
})