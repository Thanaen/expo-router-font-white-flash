import { useColorScheme } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import type { Theme } from "@react-navigation/native";
import {
  DefaultTheme,
  DarkTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import CustomBack from "../components/CustomBack";

const NavDefaultTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#ff0000", card: "#ff0000" },
};

const NavDarkTheme: Theme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: "#0000ff", card: "#0000ff" },
};

export { NavDefaultTheme, NavDarkTheme };

const Layout = () => {
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? NavDarkTheme : NavDefaultTheme}
    >
      {fontsLoaded ? (
        <Stack>
          <Stack.Screen
            name="page-one"
            options={{
              headerLeft: () => <CustomBack />,
            }}
          />
          <Stack.Screen
            name="page-two"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
        </Stack>
      ) : (
        <SplashScreen />
      )}
    </ThemeProvider>
  );
};

export default Layout;
