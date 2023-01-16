import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { htmlToText } from 'html-to-text';

export default function Hadith() {
    const [hadith, setHadith] = useState('');

    useEffect(() => {
        async function getHadith() {
            try {
                const response = await fetch('https://api.sunnah.com/v1/hadiths/random', {
                    headers: {
                        'x-api-key': 'SqD712P3E82xnwOAEOkGd5JZH8s9wRR24TqNFzjk',
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: '{}'
                });
                if (response.ok) {
                    const data = await response.json();
                    setHadith(htmlToText(data["hadith"][0]["body"]));
                }
                else {
                    setHadith("Could not load a hadith!")
                }

              } catch (error) {
                console.error(error);
              }
        }
//         getHadith();
      }, []);

    return (
        <View style={styles.hadithContainer}>
            <ScrollView style={{paddingTop:10}}>
                <Text style={{textAlign: 'center', fontStyle: "italic"}}>{hadith}</Text>
            </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
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
    },
});
