import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from '../components/AppHeader';
import Hadith from '../components/Hadith';
import SurahsContainer from '../components/SurahsContainer';
import surahs from '../data/surahs.json';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

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

