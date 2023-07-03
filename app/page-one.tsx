import { Link } from "expo-router";
import { View, Text } from "react-native";

const PageOne = () => {
  return (
    <View>
      <Text>Page one</Text>
      <Link href="/page-two">Go to page two</Link>
    </View>
  );
};

export default PageOne;