import { Fragment } from 'react';
import { Text } from 'react-native';
import Style from '../Style';

export default function Titulo(props) {
  return (
    <Fragment>
      <Text style={Style.fontLarge}>{props.title}</Text>
      <Text>{props.subtitle}</Text>
    </Fragment>
  )
};