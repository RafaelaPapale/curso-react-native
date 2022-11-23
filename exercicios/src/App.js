import { View, StyleSheet } from 'react-native';

// import PrimeiroComponente from './components/PrimeiroComponente';
// import Componente3, { Componente1, Componente2 } from './components/Multi';
import MinMax from './components/MinMax';

export default () => {
  return (
    <View style={style.App}>
      {/* <PrimeiroComponente />
      <Componente1 />
      <Componente2 />
      <Componente3 /> */}
      <MinMax min='3' max='20' />
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
