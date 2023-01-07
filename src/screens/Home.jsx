import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import NotesTemplate from '../data/notes-template.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import Hadith from '../components/Hadith';
import SurahsContainer from '../components/SurahsContainer';
import surahs from '../data/surahs.json';


export default function Home() {
  const [surahNotes, setSurahNotes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

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
        <Hadith/>
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
  }
});

