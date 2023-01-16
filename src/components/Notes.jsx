import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";
import { useCallback, useRef, useState, useEffect } from "react";
import { View,StyleSheet, TextInput, Button, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo } from '@expo/vector-icons';
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor"

export default function Notes({surahId}){
    const RichText = useRef();
    const [surahInfo, setSurahInfo] = useState({note: null, mistakesPerPage: null, date: null })
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)    


    
    // useEffect will only be run on the first focus. It will be used only to grab data from Async
    useEffect(() => {
        console.log("UseEffectRun");
        
        async function fetchData() {
            const n = await AsyncStorage.getItem(surahId);
            if (n != null){
                const jsonVal = JSON.parse(n)
                console.log("nword",jsonVal)
                setSurahInfo(jsonVal);
                console.log(surahInfo)
            }
        }
        fetchData();
        
        }, [])

    // useFocusEffect will run every time there is a change to the textInput (and needs to to properly update state). In order to avoid continually getting from async storage useEffect is used on first focus only
    useEffect(() => {
        async function saveData() {
            console.log(surahInfo)
            const info = JSON.stringify(surahInfo)
            console.log("from save" , surahInfo)
            //console.log(info + "from save")
            await AsyncStorage.setItem(surahId, info)

        }
        const delayLocalSave = setTimeout(() => {
            console.log("Saving: ", surahInfo.note);
            saveData();
          }, 1000)

          return () => {
            clearTimeout(delayLocalSave);
          }
    }, [surahInfo])


   
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        const t = moment(selectedDate).format('MM/DD/YYYY');
        setSurahInfo({...surahInfo, date: t});
        hideDatePicker();
    };

    const onChangeNote = (textObj) => {
        setSurahInfo({...surahInfo, note: textObj})
    }

    return (
        <View style={{}}>
            <KeyboardAvoidingView behavior='height' style={styles.header}>
                <Text style={styles.title}>{surahId}</Text>
                <KeyboardAvoidingView style={{alignItems: "center"}}>
                    <Text>Mistakes:</Text>
                    <TextInput 
                        value={surahInfo.mistakesPerPage}
                        onChangeText={(text) => setSurahInfo({...surahInfo, mistakesPerPage: text})}
                        multiline={false}
                        style={styles.mistakesTextbox}
                        keyboardType={"number-pad"}
                        textAlign={"center"}
                        maxLength={3}
                    />
                </KeyboardAvoidingView>       
                <TouchableOpacity onPress={showDatePicker} hitSlop={15} style={{alignItems: "center"}}>
                    <Text>Last reviewed on:</Text>
                    <View style={styles.date}>
                        <Entypo name="calendar" size={20} style={{padding: 5}}/>
                        <TextInput
                            editable={false}
                            value={surahInfo.date}
                            placeholder={"Set date"}
                            style={{color: 'black'}}
                        />
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
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
                    initialContentHTML={surahInfo.note}
                    onChange={(text) => onChangeNote(text)}
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