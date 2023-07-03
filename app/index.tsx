import { View, Text } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View>
      <Text>Olá Mundo</Text>
      <Link href="/page-one">Go to page one</Link>
    </View>
  );
};

export default Index;
