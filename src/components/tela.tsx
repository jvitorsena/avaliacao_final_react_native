import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";


export default function Tela() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Hello world Home</Text>
            <Button
                onPress={() => {
                    navigation.navigate('segundaTela' as never);
                }}
            >
                Segunda tela
            </Button>
        </View>
    );
}