import { View } from 'react-native';

export default function Quadrado(props) {
  const lado = props.lado || 50
  return (
    <View style={{
      width: lado,
      height: lado,
      backgroundColor: props.cor || '#000',
    }}>
    </View>
  )
}