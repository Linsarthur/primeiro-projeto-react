import "./Card.css"



function Cards (props) {
    
        return(
            <>
            <article className="card-filme" key={props.cod}>
                <div className="cards">
                <img className="capa" src={props.capa} alt="Imagem do filme" />
                <h3 className="texto-description">Titulo:{props.titulo}</h3>
                <p>Gênero: {props.genero}</p>
                <p>Lançamento: {props.data}</p>
                <p>Duração: {props.duracao}</p>
                </div>
            </article>
            </>
        );


  
}

export default Cards;