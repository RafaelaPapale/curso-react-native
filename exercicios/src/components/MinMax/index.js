import { Text } from 'react-native';
import Style from '../Style';

export default function MinMax(props) {
  // console.warn(props);
  return <Text style={Style.fontLarge}>O valor de {props.max} é maior que o valor de {props.min}!</Text>
};