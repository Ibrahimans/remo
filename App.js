import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './src/components/AppHeader';
import Hadith from './src/components/Hadith';
import SurahsContainer from './src/components/SurahsContainer';
import NotesTemplate from './src/data/notes-template.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setState, useState, useEffect } from 'react';

export default function App() {

  const [surahNotes, setSurahNotes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function setSurahNotesState() {
      try{
        console.log("Running setSurahNotesState")
        const jsonValue = await AsyncStorage.getItem('notes_token');
        notes = (jsonValue != null ? JSON.parse(jsonValue) : NotesTemplate);
        if (notes != surahNotes) {
          setSurahNotes(notes)
        }
      }
      catch(e) {
        console.log(e + "In setNotesState");
      }
    }
    setSurahNotesState();

    setLoading(false);
  }, []);
  
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     console.log("Value: " + jsonValue);
  //     await AsyncStorage.setItem('test_token', jsonValue)
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('test_token')
  //     console.log("Value: " + jsonValue);
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch(e) {
  //     console.log(e)
  //     // error reading value
  //   }
  // }

  // const resetAllNotes = async () => {
  //   try {

  //   }
  // }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppHeader />
      <Hadith/>
      <SurahsContainer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
});

