import { StyleSheet, Text, View } from 'react-native';

export default function Hadith() {
    return (
        <View style={styles.hadithContainer}>
            <Text style={{textAlign: 'center', fontStyle: "italic"}}>Insert a Hadith Here</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    hadithContainer: {
        flex: 1,
        justifyContent: 'center',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        },
        
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 4,
        backgroundColor: "#FFEBCD",
    },
});