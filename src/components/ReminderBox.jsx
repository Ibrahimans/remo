import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function ReminderBox(){
    const navigation = useNavigation();



    return (
        
        <View style={styles.hadithContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Reminders")}>
            <ScrollView style={{paddingTop:10}}>
                <Text style={{textAlign:'center',fontStyle:'italic'}}>This is just a placeholder</Text>
            </ScrollView>
        </TouchableOpacity>

        </View>
    )


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