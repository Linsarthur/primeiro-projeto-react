import "./Rodape.css"

function Rodape () {
 return(
  <footer className="container">
   <div className="description">
   <h2>Code+</h2>
   <p>Code+ é uma plataforma de streaming de filmes e séries para devs. Aqui você encontra diversos títulos sobre tech.</p>
   </div>

   <div className="redes">
      <h2>Redes Sociais</h2>
      <a href="#"><img src="./facebook.png" alt="" /></a>
      <a href="#"><img src="./instagram.png" alt="" /></a>
      <a href="#"><img src="./linkedin.png" alt="" /></a>
   </div>

   <div className="linksUteis">
      <h2>Links úteis</h2>
      <ul>

     <li><a href="#">Contato</a></li>
     <li><a href="#">Sobre nós</a></li>
     <li><a href="#">FAQ</a></li>
     
      </ul>
   </div>

   <div className="copy">©️2024 Code+ | Todos os direitos reservados</div>
  </footer>



 )
}

export default Rodape;