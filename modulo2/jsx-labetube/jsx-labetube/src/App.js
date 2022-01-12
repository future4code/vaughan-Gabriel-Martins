
import './style.css';
import logo from "./21260486821530103330.svg";


function App() {
  
  function reproduzVideo() {
   alert("O vídeo está sendo reproduzido")
  }
  
   const titulo = () => reproduzVideo();




  return (
    <>
      <div className="tela-inteira">
        <header>
            <img className="logo"  src={logo}/>
        <h1>Lab Tube</h1>
            <input type="text" placeholder="Pesquisar" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul> 
                    <li  className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>          
                    <h4 onClick={titulo}> As Correntes</h4>
                </div>
                <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4 onClick={titulo}>O Suspeito</h4>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4 onClick={titulo}>Os Ventos</h4>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4 onClick={titulo}>Perigo nas Montanhas</h4>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4 onClick={titulo}>Floresta Encatada</h4>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4 onClick={titulo}>Nova York </h4>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4 onClick={titulo}>A Grande Corrida</h4>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4 onClick={titulo}>Fantasia</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>

      
    </>
  );
}

export default App;
