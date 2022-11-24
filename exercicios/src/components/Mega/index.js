import { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import MegaNumeros from '../MegaNumeros';
import Style from '../Style';

export default class Mega extends Component {

  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumero = (qtde) => {
    this.setState({ qtdNumeros: qtde })
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  };

  gerarNumeros = () => {
    const { qtdNumeros } = this.state;

    const numeros = [];

    for (let i = 0; i < qtdNumeros; i += 1) {
      numeros.push(this.gerarNumeroNaoContido(numeros));
    }

    numeros.sort((a, b) => a - b);

    this.setState({ numeros })
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return (
        <MegaNumeros key={num} num={num} />
      );
    })
  };

  render() {
    return (
      <>
        <Text style={Style.fontLarge}>
          Gerador de Mega-Sena
        </Text>
        <TextInput
          keyboardType='numeric'
          placeholder='Quantidade de números'
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumero}
          style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
        />
        <Button title='Gerar' onPress={this.gerarNumeros} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
          {this.exibirNumeros()}
        </View>
      </>
    )
  }
};