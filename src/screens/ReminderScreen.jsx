import { StyleSheet, View } from "react-native";
import Reminder from "../components/Reminder";

export default function ReminderScreen() {
    return (
        <View style={styles.container}>
            <Reminder/>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 15,

    },
    
})
