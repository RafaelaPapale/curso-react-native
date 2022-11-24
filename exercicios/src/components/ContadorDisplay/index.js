import { View, Text, StyleSheet } from 'react-native';
import Style from '../Style';

export default function ContadorDisplay(props) {
  return (
    <View style={style.ContadorDisplay}>
      <Text style={[Style.fontLarge, style.DisplayText]}>{props.num}</Text>
    </View>
  )
};

const style = StyleSheet.create({
  ContadorDisplay: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#FFF',
  }
});