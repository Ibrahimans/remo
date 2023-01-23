import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import NotesTemplate from '../data/notes-template.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import Hadith from '../components/Hadith';
import SurahsContainer from '../components/SurahsContainer';
import surahs from '../data/surahs.json';


export default function Home() {
  // plan for populating my surahs:
  //   make a state at Home
  //   pass state to Notes
  //   state gets populated when the user presses add to my surahs
  //   state is passed as a prop to surah container

  const [surahNotes, setSurahNotes] = useState({});
  const [surahShown, setSurahsShown] = useState(surahs); //pass on to surahs container
  const [tabShown, setTabShown] = useState(false);//prob wont need
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    //salvage to make backup save of data
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


    const changeToMySurahs = async () => {
        const testing = await AsyncStorage.getItem('MySurahs')
        
        setSurahsShown(JSON.parse(testing))
        // console.log(surahShown)
    }

    const changeToAllSurahs = () => {
        
        setSurahsShown(surahs)
        // console.log(surahShown)
    }

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
          <TouchableOpacity onPress={changeToAllSurahs}>
            <Text>all surahs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={changeToMySurahs}>
            <Text>my surahs</Text>
          </TouchableOpacity>
        </View>
        <SurahsContainer surahList={surahShown}/>
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

