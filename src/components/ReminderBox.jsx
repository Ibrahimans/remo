import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState, useRef, useCallback } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";


export default function ReminderBox(){
    const RichText = useRef();
    const navigation = useNavigation();
    const [reminderData, setReminderData] = useState("")

    useFocusEffect(
        useCallback(() => {
        async function fetchData() {
            const items = await AsyncStorage.getItem('reminder');
            if (items != null){
                setReminderData(items)
                console.log(reminderData)
            }
        }
        fetchData();
    }, [])
    )


    return (
        <TouchableOpacity onPress={() => navigation.navigate("Reminders")} style={styles.hadithContainer}>
                <RichEditor
                disabled={true}
                ref={RichText}
                placeholder={"Tap here to set reminders!"}
                androidLayerType="software"
                initialContentHTML={reminderData}
                onChange={(text) => setReminderData(text)}
                editorStyle= {styles.hadithContainer}
                useContainer={false}
                />
        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    hadithContainer: {
        flex: 1,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        shadowOffset: {
        height: 1,
        width: 1
        },
        
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: "#FFEBCD",
    },

});