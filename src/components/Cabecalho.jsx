import "./Cabecalho.css"
import {Link} from "react-router-dom";

function Cabecalho () {

    return (
        <header>
            <section className="cabecalho">
                <img src="/pipoca.png" alt="" />
                <h1 className="logo">Code+</h1>

                <div className="nav">
                <ul>
                    <Link className={"nav-link"} to="/">Home</Link>
                    <Link className={"nav-link"} to="/contato">Contato</Link>
                    <Link className={"nav-link"} to="/cadastro">Cadastro</Link>
                    <Link className={"nav-link"} to="/login">Login</Link>
                </ul>
                </div>
            </section>

        </header>


    )

};

export default Cabecalho;