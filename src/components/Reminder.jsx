import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import { View, KeyboardAvoidingView, StyleSheet, Text, TextInput,  } from "react-native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";


export default function Reminder() {
    const RichText = useRef();
    const [reminderData, setReminderData] = useState("");

    useEffect(() => {
        async function fetchData() {
            const items = await AsyncStorage.getItem('reminder');
            if (items != null){
                setReminderData(items)
                console.log(reminderData)
            }
        }
        fetchData();

    }, [])

    useEffect(() => {
        async function saveData() {
            await AsyncStorage.setItem('reminder', reminderData)
        }
        const delayLocalSave = setTimeout(() => {
            saveData();
        }, 1000)

        return () => {
            clearTimeout(delayLocalSave);
        }
    }, [reminderData])

    return (
        <View>
            <KeyboardAvoidingView behavior='height' style={styles.header}>
                <Text style={styles.title}>Reminders</Text>
            </KeyboardAvoidingView>
            <View style={styles.noteContainer}>
                <View style={{backgroundColor:'#efefef', padding: 3, borderRadius: 10}}>
                    <RichToolbar
                        editor={RichText}
                        actions={[ 
                            actions.undo, 
                            actions.redo, 
                            actions.setBold, 
                            actions.setItalic, 
                            actions.setStrikethrough,
                            actions.insertBulletsList, 
                            actions.insertOrderedList, 
                            actions.checkboxList,                           

                        ]}

                    />
                </View>
                <View style={styles.noteTextbox}>
                    <RichEditor
                    disabled={false}
                    ref={RichText}
                    placeholder={"Start Writing Here"}
                    androidLayerType="software"
                    initialContentHTML={reminderData}
                    onChange={(text) => setReminderData(text)}
                    editorStyle= {{backgroundColor: "#FFF8DC", }}
                    useContainer={false}

                    />
                </View>                
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    title : {
        fontSize : 20,
    },
    header : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    noteContainer : {
        backgroundColor: '#FFF8DC',
        height: '90%',
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        textAlignVertical: "top",
        shadowColor: "black",
        elevation: 3,
        
    },
    noteTextbox: {
        height: '90%',
    },
    button : {
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    
})