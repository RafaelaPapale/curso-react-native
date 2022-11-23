import { useState } from 'react';
import { Text, Button } from 'react-native';
import Style from '../Style';

export default function Contador(props) {

  const [numero, setNumero] = useState(props.inicial);

  const incrementar = () => {
    setNumero(numero + 1);
  }

  const decrementar = () => {
    setNumero(numero - 1);
  }

  return (
    <>
      <Text style={Style.fontLarge}>{numero}</Text>
      <Button title='+' onPress={incrementar} />
      <Button title='-' onPress={decrementar} />
    </>
  )
};