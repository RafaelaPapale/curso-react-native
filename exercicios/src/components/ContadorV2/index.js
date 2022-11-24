import { useState } from 'react';
import { Text } from 'react-native';
import BotoesContador from '../BotoesContador';
import ContadorDisplay from '../ContadorDisplay';
import Style from '../Style';

export default function ContadorV2(props) {
  const [num, setNum] = useState(0);

  const incrementar = () => {
    setNum(num + 1);
  }

  const decrementar = () => {
    setNum(num - 1);
  }

  return (
    <>
      <Text style={Style.fontLarge}>Contador</Text>
      <ContadorDisplay num={num} />
      <BotoesContador incrementar={incrementar} decrementar={decrementar} />
    </>
  )
};