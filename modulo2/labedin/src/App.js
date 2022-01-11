import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import email from "./imagens/email.png";
import endereco from "./imagens/endereco.png";
import foto3x4 from "./imagens/gabriel.JPG";
import resume from "./imagens/resume.png";



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto3x4}
          nome="Gabriel Martins"
          descricao="Oi, eu sou Gabriel Martins. Sou estudante do curso full-stack da Labenu. Apaixonado por codigo e tecnologia. Treinado pelo CEFET-RJ em engenharia eletrica, mestrado em sistemas inteligentes pela UERJ."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
      <div> 

      <CardPequeno 
          imagem={email}
          nome="Email:"
          conteudo="gabrielFakemail@fake.com"
      />

      <CardPequeno 
          imagem={endereco}
          nome="Endereço:"
          conteudo="Rua das Laranjeras "
      />
      </div>

      <div className="page-section-container">
        <h2>Resume</h2>
        <CardGrande
          imagem={resume}
          nome="Resume"
          descricao="Engenheiro com mais de 10 anos de experiencia com controle e automação. "
        />


      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="data:image/jpeg;base64,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"
          nome="AxessGroup"
          descricao="Sr. Field Engineer"
        />

        <CardGrande
          imagem="https://www.logolynx.com/images/logolynx/s_56/569841c2a0401e5be85b7704706f7904.jpeg"
          nome="National Oilwell Varco"
          descricao="Sr. Engenheiro de Automação."
        />
        <CardGrande
          
          imagem="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/60b13d7f9aef8800015bb7a3/picture" 

          nome="Eneltech"
          descricao="Engenheiro Eletrico."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
