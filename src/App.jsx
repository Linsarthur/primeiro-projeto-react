import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Condicional from "./components/Condicional";
import Galeria from "./components/Galeria";
import Rodape from "./components/Rodape";



function App () {
  return(
    <>
      <Cabecalho/>
      <Banner/>
      <Galeria/>
      <div className="separar">
      <Condicional nome="Plano mensal:" precoUnitario={59.90} desconto={0}/>
      <Condicional nome="Plano Anual:" precoUnitario={718.8} desconto={10}/>
      </div>
      <Rodape />
    </>


  )


}

export default App;