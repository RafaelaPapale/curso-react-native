import { Text } from 'react-native';
import Style from '../Style';

export default function ParImpar({ num = 0 }) {
  return (
    <>
      {num % 2 === 0 ? 
      <Text style={Style.fontLarge}>Par</Text> 
      : <Text style={Style.fontLarge}>Impar</Text>}
    </>
  );
};