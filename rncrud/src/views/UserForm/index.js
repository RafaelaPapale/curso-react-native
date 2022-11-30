import { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from "../../context/context";

const UserForm = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(Context);

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({ ...user, name })}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({ ...user, email })}
        placeholder="Informe o E-mail"
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        style={style.button}
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          })
          navigation.goBack()
        }}
      />
    </View>
  )
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#990358',
  },
});

export default UserForm;