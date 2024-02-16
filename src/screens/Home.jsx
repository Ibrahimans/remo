import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, ScrollView, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import NotesTemplate from '../data/notes-template.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useRef, useCallback } from "react";
import AppHeader from '../components/AppHeader';
import SurahsContainer from '../components/SurahsContainer';
import { useNavigation, useFocusEffect } from "@react-navigation/native";


export default function Home() {
  const [surahNotes, setSurahNotes] = useState({});
  const [loading, setLoading] = useState(false);
  const [reminders, setReminders] = useState("");
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const handleReminderChange = (newState) => {
    setReminders(newState);
  };

  useEffect(()  => {
    setLoading(true);
    async function fetchData() {
        const items = await AsyncStorage.getItem('reminder');
        if (items != null){
            // console.log("fetching")
            setReminders(items)
        }
    }
    async function setSurahNotesState() {
      try{
        const jsonValue = await AsyncStorage.getItem('notes_token');
        notes = (jsonValue != null ? JSON.parse(jsonValue) : NotesTemplate);
        if (notes != surahNotes) {
          setSurahNotes(notes)
        }
      }
      catch(e) {
        console.log(e );
      }
    }
    setSurahNotesState();
    fetchData();
    setLoading(false);
  }, []);

  
  if (loading) {
    return (
      <View style={styles.loading_screen_container}>
        <ActivityIndicator />
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppHeader />
        <ScrollView style={styles.hadithContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Reminders",
              {reminderData : reminders, onReminderChange : handleReminderChange})} >
                <RenderHTML contentWidth={width} source={{html: reminders}}/>
            </TouchableOpacity>
        </ScrollView>
        <SurahsContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8DC',
    },
    loading_screen_container: {
        flex: 1,
        backgroundColor: '#FFF8DC',
        justifyContent: 'center'
    },
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
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
});

