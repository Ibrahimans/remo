import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import Hadith from '../components/Hadith';
import SurahsContainer from '../components/SurahsContainer';
import surahs from '../data/surahs.json';


export default function Home() {

  const create_surahs = () => {
    console.log(surahs);
  }

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

