import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import NavStack from "./Stack";
import NavTabs from './Tab';
// import NavDrawer from './Drawer';

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <NavStack /> */}
        <NavTabs />
        {/* <NavDrawer /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigation;