import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavStack from "./Stack";

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation;