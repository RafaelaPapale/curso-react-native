import TextoCentral from "../../components/TextoCentral";

const TelaC = (props) => {
  const route = props.route || { params: { numero: 0 } };
  return (
    <TextoCentral corFundo='#9932CD'>
      Tela C - {route.params.numero}
    </TextoCentral>
  )
}

export default TelaC;