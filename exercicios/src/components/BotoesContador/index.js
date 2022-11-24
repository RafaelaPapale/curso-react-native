import { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function BotoesContador(props) {

  return (
    <View style={style.BotoesContador}>
      <Button title='+' onPress={props.incrementar} />
      <Button title='-' onPress={props.decrementar} />
    </View>
  )
};

const style = StyleSheet.create({
  BotoesContador: {
    flexDirection: 'row',
  },
});