import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function AppHeader() {
    return (
        <View style={styles.appNameContainer}>
            <View style={{flexDirection: "row"}}>
                <Entypo name="open-book" size={48} color="#A0522D" style={{padding: 5}}/>
                <Text style={styles.appName}>ReMo</Text>
            </View>
            <Text style={styles.slogan}>The Quran Review and Memorization App</Text> 
      </View>
    );
}

const styles = StyleSheet.create({
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
  });