import { View, StyleSheet } from 'react-native';

// import PrimeiroComponente from './components/PrimeiroComponente';
// import Componente3, { Componente1, Componente2 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatório';
// import Titulo from './components/Título';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import ContadorV2 from './components/ContadorV2';
// import ParImpar from './components/ParImpar';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexBoxV1 from './components/FlexBoxV1';
// import FlexBoxV2 from './components/FlexBoxV2';
// import FlexBoxV3 from './components/FlexBoxV3';
// import FlexBoxV4 from './components/FlexBoxV4';
import Mega from './components/Mega';

export default () => {
  return (
    <View style={style.App}>
      {/* <PrimeiroComponente />
      <Componente1 />
      <Componente2 />
      <Componente3 />
      <MinMax min='3' max='20' />
      <Aleatorio min={3} max={20} />
      <Titulo title='Cadastro' subtitle='Produto' />
      <Botao />
      <Contador inicial={0} />
      <ContadorV2 />
      <ParImpar num={2} />
      <ParImpar num={17} />
      <DigiteSeuNome />
      <FlexBoxV1 />
      <FlexBoxV2 />
      <FlexBoxV3 />
      <FlexBoxV4 /> */}
      <Mega qtdNumeros={12} />
    </View>
  );
};


const style = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
});
