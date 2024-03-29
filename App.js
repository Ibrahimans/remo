import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import SurahScreen from "./src/screens/SurahScreen";
import ReminderScreen from "./src/screens/ReminderScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen name="SurahInfo" component={SurahScreen} />
          <Stack.Screen name="Reminders" component={ReminderScreen}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}