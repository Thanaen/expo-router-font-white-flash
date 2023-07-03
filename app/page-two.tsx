import { Link } from "expo-router";
import { View, Text } from "react-native";

const PageTwo = () => {
  return (
    <View>
      <Text>Page two</Text>
      <Link href="/">Go to home page</Link>
    </View>
  );
};

export default PageTwo;
