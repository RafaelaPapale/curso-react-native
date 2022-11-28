import { Button, View } from "react-native";

const PassoStack = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        {props.voltar &&
          <Button title="Voltar" onPress={() => { props.navigation.goBack() }} />}
        {props.avancar &&
          <Button
            title="Avançar"
            onPress={() => { props.navigation.push(props.avancar, props.avancarParams) }}
          />}
      </View>
      <View style={{ flex: 1 }}>
        {props.children}
      </View>
    </View>
  )
};

export default PassoStack;
