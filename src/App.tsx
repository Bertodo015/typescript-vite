//const App = () => <h1>Oi!</h1>
//função typeScript que retorna html
import BlocoTexto from "./components/BlocoTexto";
import styles from "./App.module.css";
import baiacu from "./assets/img/baiacu.png";
import carangueijo from "./assets/img/carangueijo.png";

const App = () => {
  return (
    <>
      <BlocoTexto 
        titulo="Primeiro bloco" 
        paragrafo="Este é o texto do primeiro bloco"
      />

      <BlocoTexto 
        titulo="Baiacu"
        paragrafo="Também conhecido como fugu no Japão, 
          é um peixe que intriga e amedronta muitas pessoas 
          devido ao seu potencial venenoso. A reputação 
          desse peixe está intimamente ligada a uma toxina 
          mortal chamada tetrodotoxina, presente em suas 
          vísceras, pele e músculos."
        thumb={baiacu}
      />

      <BlocoTexto 
        titulo="Carangueijos"
        paragrafo="São representantes de um agrupamento de artrópodes (grupo de animais invertebrados) chamado Crustacea."
        thumb={carangueijo}
      />
    </>
  );
};

export default App;