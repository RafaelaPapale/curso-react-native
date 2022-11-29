import TextoCentral from "../../components/TextoCentral";

const TelaC = (props) => {
  const r = props.route;
  const numero = r && r.params && r.params.numero
    ? props.route.params.numero : 0;

  return (
    <TextoCentral corFundo='#9932cd'>
      Tela C - {numero}
    </TextoCentral>
  )
};

export default TelaC;