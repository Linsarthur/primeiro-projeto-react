import Cards from "./Cards";

const filmes = [
    { cod: 1, titulo: "Jogos Vorazes", genero: "Ação", data: 2012, tempo: "2h 22min", linkImg: "/jogos.webp" },
    { cod: 2, titulo: "Vingadores: Ultimato", genero: "Ação, Aventura e Ficção Científica", data: 2019, tempo: "3h 01min", linkImg: "./vingadores.jpg" },
    { cod: 3, titulo: "Truque de Mestre", genero: "Policia, Suspense", data: 2013, tempo: "2h 05min", linkImg:"./truque.webp" },
    { cod: 4, titulo: "Harry Potter e a Pedra filosofal", genero: "Fantasia", data: 2001, tempo: "2h 32min", linkImg: "./Harry.jpg" },
    { cod: 5, titulo: "Harry Potter e a Câmara Secreta", genero: "Ação", data: 2002, tempo: "2h 38min", linkImg: "./harry2.jpg" },
    { cod: 6, titulo: "Harry Potter e o Prisioneiro de azkaban", genero: "Aventura, Fantasia", data: 2004, tempo: "2h 21min", linkImg: "./harry3.jpg" }

]

function Galeria() {
    const listaFilmes = filmes.map((filme) => {
        return (
            <Cards key={filme.cod} titulo={filme.titulo} genero={filme.genero} data={filme.data} duracao={filme.tempo} capa={filme.linkImg}/>

        );
    })

    return (
        <>
            <section className="card2">{listaFilmes}</section>
        </>
    )
}

export default Galeria;