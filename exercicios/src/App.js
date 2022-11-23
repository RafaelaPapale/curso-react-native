import { View, StyleSheet } from 'react-native';
import Contador from './components/Contador';

// import PrimeiroComponente from './components/PrimeiroComponente';
// import Componente3, { Componente1, Componente2 } from './components/Multi';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatório';
// import Titulo from './components/Título';
// import Botao from './components/Botao';

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
      <Botao /> */}
      <Contador inicial={0} />
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
