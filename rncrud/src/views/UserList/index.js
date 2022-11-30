import { useContext } from "react";
import { ListItem, Avatar, Button, Icon } from "@rneui/base";
import { View, Alert, FlatList } from "react-native";
import { Context } from "../../context/context";

const UserList = (props) => {

  const { state, dispatch } = useContext(Context);

  function handleDeleteUser(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
        },
      }, {
        text: 'Não',
      }
    ])
  };

  function getUserItem({ item: user }) {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm', user)}
      >
        <Avatar size={50} source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => handleDeleteUser(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem>
    )
  };

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
};

export default UserList;