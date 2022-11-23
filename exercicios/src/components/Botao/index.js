import { Button } from 'react-native';

export default function Botao() {

  function executar1() {
    console.warn('Botão #01 pressionado!')
  }

  const  executar2 = () => {
    console.warn('Botão #02 pressionado!')
  }

  return (
    <>
        <Button title='Executar #01' onPress={executar1} />
        <Button title='Executar #02' onPress={executar2} />
    </>
  )
};