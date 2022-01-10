import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ChatNativeStackNavigator from "./src/navigations/Navigator";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <ChatNativeStackNavigator />
    </NavigationContainer>
  );
};
export default App;
