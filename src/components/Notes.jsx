import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Text, View,StyleSheet, TextInput, KeyboardAvoidingView, Button } from "react-native";
import NotesTemplate from '../data/notes-template.json';


export default function Notes({surahId}){
    const [note, setNote] = useState()

    const save = async (text) => {
        try {
            await AsyncStorage.setItem(surahId, text)
            c = await AsyncStorage.getItem(surahId)
            console.log(c)

        } catch (error) {
          // Error saving data
        }
      };
    
    const lastEntry = async () => {
        try{
            setNote(await AsyncStorage.getItem(surahId))
        }catch (error){
            console.log("lastEntry error")
        }
    }
    
    
    lastEntry()
    console.log(note)
    return (
        <View style={styles.container}>
            <TextInput 
                defaultValue={note}
                onChangeText={save}
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