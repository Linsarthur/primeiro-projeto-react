import "./Cabecalho.css"

function Cabecalho () {
    
    return (
        <>
            <section className="cabecalho">
                <img src="/pipoca.png" alt="" />
                <h1 className="logo">Code+</h1>
                
                <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li className="login"><a href="#" onClick={() => {
                        alert("Você clicou no botão")
                    }}>Entrar</a></li>
                </ul>
                </div>
            </section>   
        
        </>


    )

};

export default Cabecalho;