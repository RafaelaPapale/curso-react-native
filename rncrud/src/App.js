import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserForm from "./views/UserForm";
import UserList from "./views/UserList";
import { Button, Icon } from "@rneui/base";
import ContextProvider from "./context/context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='UserList'
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name='UserList'
              component={UserList}
              options={({ navigation }) => {
                return {
                  title: 'Lista de Usuários',
                  headerRight: () => (
                    <Button
                      onPress={() => navigation.navigate("UserForm")}
                      type="clear"
                      icon={<Icon name="add" size={25} color="white" />}
                    />
                  )
                }
              }}
            />
            <Stack.Screen
              name='UserForm'
              component={UserForm}
              options={{
                title: 'Formulário de Usuário'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ContextProvider>
  )
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default App;
