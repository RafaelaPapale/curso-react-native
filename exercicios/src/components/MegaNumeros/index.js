import { View, Text, StyleSheet } from 'react-native';
import Style from '../Style';

export default function MegaNumeros({ num }) {
  return (
    <View style={style.container}>
      <Text style={[Style.fontLarge, style.text]}>
        {num}
      </Text>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
  }
});
