import { Text } from "react-native"

export default function JuzHeader(props) {
    return (
        <Text style={{textAlign:'center'}}>-- JUZ {props.surahObj.starting_juz} --</Text>
    )
}