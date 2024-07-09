import "./Condicional.css"


function Condicional (props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto / 100)
    return(

        <article className="card-produto">
           
            <p className="nome">{props.nome}</p> 
            {props.desconto > 0 ? <h4>R${valorDesconto}</h4> : <h4>R${props.precoUnitario}</h4>}
            {props.desconto > 0 && <p className="grifado">R$: {props.precoUnitario}</p>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}%OFF</p>}
        
        </article>
    )


}

export default Condicional;