import { StyleSheet, View } from "react-native";
import Reminder from "../components/Reminder";

export default function ReminderScreen( {route} ) {

    return (
        <View style={styles.container}>
            <Reminder onReminderChange={route.params.onReminderChange} reminderParData={route.params.reminderData}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        marginHorizontal: 15,

    },
    
})
