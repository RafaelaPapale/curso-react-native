import { Text } from 'react-native';
import Style from '../Style';

export default function Aleatorio({ min, max }) {
  const delta = max - min + 1;
  const aleatorio = parseInt(Math.random() * delta) + min;
  // console.warn(props);
  return <Text style={Style.fontLarge}>O valor aleatório é {aleatorio}!</Text>
};