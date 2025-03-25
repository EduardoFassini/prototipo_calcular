
import './App.css'
import Cabecalho from './cabecalho';
import Comentario from './comentario';
import Topico from './topico';
import Imagem from './imagem';
import { useState } from 'react';


function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operador, setOperador] = useState(null);
  const [resposta, setResposta] = useState("");
  const [pontos, setPontos] = useState(0);

  const operadores = ["+", "-", "*", "/"];

  const sortearJogo = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const newOperador = operadores[Math.floor(Math.random() * operadores.length)];
    setNum1(newNum1);
    setNum2(newNum2);
    setOperador(newOperador);
    setResposta("");
  };

  const confirmarResposta = () => {
    if (num1 !== null && num2 !== null && operador) {
      let respostaCorreta;
      switch (operador) {
        case "+":
          respostaCorreta = num1 + num2;
          break;
        case "-":
          respostaCorreta = num1 - num2;
          break;
        case "*":
          respostaCorreta = num1 * num2;
          break;
        case "/":
          respostaCorreta = num1 / num2;
          break;
        default:
          return;
      }
      if (parseFloat(resposta) === respostaCorreta) {
        setPontos(pontos + 10);
        sortearJogo();
        setResposta("");
      }
    }
  };

  const novoJogo = () => {
    setPontos(0);
    setNum1(null);
    setNum2(null);
    setOperador(null);
    setResposta("");
  };


  return (
    <div style={{ margin: 0 }}>
      <Cabecalho />

      <section style={{ display: "flex" }}>

        <div style={{ marginLeft: 100, width: 900 }}>

          <Imagem diretorio={'imagem.jpg'} />
          <Topico texto={"Para ser muito bom amanhã é preciso começar a praticar hoje"} />

          <Comentario />

          <p>São nos primeiros anos escolares que as crianças aprendem os fundamentos da </p>
          <p>matemática, inclusive as quatro operações soma, subtração, multiplicação e </p>
          <p>divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda</p>
          <p> a sua vida escolar :(</p>
          <div style={{ height: "15px" }}></div>
          <p>Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado </p>
          <p>nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas </p>
          <p>operações básicas;</p>
          <div style={{ width: "620px", border: "1px solid #dfdfdf", marginTop: "30px" }}></div>

          <Topico texto={"Matemática: O Alicerce para o Sucesso Escolar!"} />

          <Comentario />

          <p>Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e </p>
          <p>aprendem as quatro operações essenciais: adição, subtração, multiplicação e </p>
          <p>divisão. </p>
          <p>Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a </p>
          <p>jornada! </p>
          <p>Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a </p>
          <p>dominar as operações básicas e desenvolver confiança na matemática. </p>
          <div style={{ height: "15px" }}></div>
          <p>Vamos juntos fortalecer essa base e transformar desafios em conquistas! </p>
          <p>#MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas </p>
          <p>AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil </p>
          <p>#ConfiançaNosNúmeros</p>
        </div>
        <div className='calcular' style={{ backgroundColor: "rgba(115, 70, 188, 0.94)", width: '60%', height: 1310 }}>
          <div>
            <div className='container2'>
              <h2 className='pontuacao'>Você tem {pontos} pontos</h2>
            </div>
            <div className='container2'>
              <button className='btn sortear' onClick={sortearJogo}>Sortear Desafio</button>
            </div>
            <div className="linha" style={{marginLeft: '20px', marginRight: '20px'}}></div>
            <div className='container2' style={{display: "block", paddingLeft: "70px", fontSize: "20px"}}>
              <h5>Quanto é:</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
              <h2 className='numeros'>{num1 !== null ? num1 : "?"}</h2>
              <h2 className='numeros'>{operador || "?"}</h2>
              <h2 className='numeros'>{num2 !== null ? num2 : "?"}</h2>
            </div>
            <div className='container2' style={{display: "block", paddingLeft: "70px", fontSize: "20px", marginBlockStart: "0em"}}>
              <h5>Sua resposta:</h5>
            </div>
            <div className='container2'>
              <input className='resposta' type="number" value={resposta} onChange={(e) => setResposta(e.target.value)} />
            </div>
            <div className='container2'>
              <button className='btn confirmar' onClick={confirmarResposta}>Validar</button>
            </div>
            <div className='container2'>
              <button className='btn novoJogo' onClick={novoJogo}>Novo Jogo</button>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default App;


