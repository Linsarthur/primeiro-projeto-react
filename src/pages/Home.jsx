
import Condicional from "../components/Condicional.jsx";
import Galeria from "../components/Galeria.jsx";
import Rodape from "../components/Rodape.jsx";
import Banner from "../components/Banner.jsx";
import "../assets/Home.css"


export default function Home() {
    return (
        <>

            <Banner></Banner>
            <Galeria/>
            <div className="separar">
                <Condicional nome="Plano mensal:" precoUnitario={59.90} desconto={0}/>
                <Condicional nome="Plano Anual:" precoUnitario={718.8} desconto={10}/>
            </div>
            <Rodape/>
        </>
    )
}