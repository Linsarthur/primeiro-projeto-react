import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Contato from "./pages/Contato.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cabecalho from "./components/Cabecalho.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>


            </BrowserRouter>
        </>


    )


}

export default App;