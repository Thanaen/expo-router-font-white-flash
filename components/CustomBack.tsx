import { Text } from "react-native";
import { Link } from "expo-router";

const CustomBack = () => {
  return (
    <Link href="../">
      <Text>Just go back</Text>
    </Link>
  );
};

export default CustomBack;
