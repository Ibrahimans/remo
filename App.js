import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Hadith from './src/components/Hadith';
import Surah from './src/components/Surah';
import SurahsContainer from './src/components/SurahsContainer';
import surahs from './src/data/surahs.json';


export default function App() {

  const create_surahs = () => {
    console.log(surahs);
  }

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.appNameContainer}>
        <View style={{flexDirection: "row"}}>
          <Entypo name="open-book" size={48} color="#A0522D" style={{padding: 5}}/>
          <Text style={styles.appName}>ReMo</Text>
        </View>
        <Text style={styles.slogan}>The Quran Review and Memorization App</Text> 
      </View>

      <Hadith/>

      <View style={styles.surahsContainer}>
        <SurahsContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  appNameContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  },
  appName: {
    fontSize: 48,
    color: "#A0522D",
  },
  slogan: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#A0522D",
  },

  surahsContainer: {
    flex: 4,
    // backgroundColor: 'red',
  }
});

