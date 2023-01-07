import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { View,StyleSheet, TextInput } from "react-native";
import NotesTemplate from '../data/notes-template.json';


export default function Notes({surahId}){
    const [note, setNote] = useState()
    const get = async () => {
        try {
            const data = await AsyncStorage.getItem(surahId);
            setNote(data);
        } catch (e) {
            console.log(e);
        }
    };
    const save = async () => {
        try {
            console.log("note in save():", note)
            await AsyncStorage.setItem(surahId, note)
        } catch (error) {
            console.log("save error:", error)
        }
    };
    
    useFocusEffect(
        useCallback(() => {
            get();
            return () => {
                console.log("unfocused");
                
            }
        }, [])
    );

    
    //TODO: make bullet points work in textinput
    return (
        <View style={styles.container}>
            <TextInput 
                // defaultValue={note}
                value={note}
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