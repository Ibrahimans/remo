import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import { useCallback, useRef, useState } from "react";
import { View,StyleSheet, TextInput, Button, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from '@expo/vector-icons';
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor"

export default function Notes({surahId}){
    const richText = useRef();
    const [note, setNote] = useState()
    const [mistakes, setMistakes] = useState()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)    
    const [date, setDate] = useState()

    useFocusEffect(
        useCallback( () => {
            console.log("focused")
            get();
            return () => {
                console.log("unfocused")
                // save();
            }
        
        }, [])
    )

    const get = async () => {
        console.log("getting!!")
        try {
            const data = await AsyncStorage.getItem(surahId);
            if (data != null){
                const jsonVal = JSON.parse(data)
                setMistakes(jsonVal.mistakeCount)
                setNote(jsonVal.notes);
                setDate(jsonVal.lastDate)               
            }
            
        } catch (e) {
            console.log(e);
        }
    };
    const save = async () => {
        try {
            console.log("note in save():", note, "mistakes in save():", mistakes, "date in save():", date)
            const jsonVal = {
                notes : note,
                mistakeCount : mistakes,
                lastDate : date
            } 
            await AsyncStorage.setItem(surahId, JSON.stringify(jsonVal))
        } catch (error) {
            console.log("save error:", error)
        }
    };
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        const t = moment(selectedDate).format('MM/DD/YYYY')
        //console.log("test format", t)
        setDate(t);
        //console.log("new selected date:", selectedDate, date)
        hideDatePicker();
    };
    
    //only used in non rich text editor 
    const bulletTest = (text) => {
        //console.log(text.substr(-4))
        if (text.substr(-3) == "\n--"){
            console.log()
            setNote(text.substr(0, text.length-2) + " •  ")
        }
        else {
            setNote(text)
        }
    }

    const rtstateTest = (textObj) => {
        //console.log(textObj)
        setNote(textObj)
        //console.log("state", note)
    }
    //TODO: make bullet points work in textinput
    return (
        <View style={{}}>
            <View style={styles.header}>
                <Text style={styles.title}>{surahId}</Text>
                <View style={{alignItems: "center"}}>
                    <Text>Mistakes:</Text>
                    <TextInput 
                        value={mistakes}
                        onChangeText={(text) => setMistakes(text)}
                        multiline={false}
                        style={styles.mistakesTextbox}
                        keyboardType={"number-pad"}
                        textAlign={"center"}
                        maxLength={3}
                    />
                </View>       
                <TouchableOpacity onPress={showDatePicker} hitSlop={15} style={{alignItems: "center"}}>
                    <Text>Last reviewed on:</Text>
                    <View style={styles.date}>
                        <Entypo name="calendar" size={20} style={{padding: 5}}/>
                        <TextInput
                            editable={false}
                            value={date}
                            placeholder={"Set date"}
                            style={{color: 'black'}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {/* <TextInput 
                // defaultValue={note}
                value={note}
                onChangeText={(text) => bulletTest(text)}
                multiline={true}
                style={styles.noteTextbox}
                placeholder={"Write any notes here!"}
            /> */}
            <View style={styles.noteContainer}>
                <View style={{backgroundColor:'#efefef', padding: 3, borderRadius: 10}}>
                    <RichToolbar
                        editor={richText}
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
                        ref={richText}
                        placeholder={"Write any notes here!"}
                        onChange={rtstateTest}
                        initialContentHTML={note}
                        androidLayerType="software"
                        editorStyle={{backgroundColor: "#FFF8DC", }}
                        useContainer={false}

                    />
                </View>                
            </View>
            <Button 
                onPress={save}
                title="Save notes"
                style={styles.button}
            />
            
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
    date : {
        flexDirection: 'row',
        backgroundColor: '#FFF8DC',
        fontSize: 20,
        width: '100%',
        textAlign: "center",
        borderRadius: 10,
        elevation: 3,
        fontSize: 15,
    },
    noteContainer : {
        backgroundColor: '#FFF8DC',
        height: '85%',
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
        height: '89%',
    },
    mistakesTextbox : {
        backgroundColor: '#FFF8DC',
        fontSize: 15,
        width: 45,
        borderRadius: 10,
        elevation: 3,              
    },
    button : {
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    
})