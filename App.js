import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import SurahScreen from "./src/screens/SurahScreen";
import NotesTemplate from './src/data/notes-template.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

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

  // const resetAllNotes = async () => {
  // }
  
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen name="SurahInfo" component={SurahScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}