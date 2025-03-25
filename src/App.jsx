
import './App.css'
import Cabecalho from './cabecalho';
import Comentario from './comentario';
import Topico from './topico';
import Imagem from './imagem';

function App() {
  return (
    <body style={{margin: 0}}>
      <Cabecalho />

      <section style={{ display: "flex" }}>

        <div style={{ marginLeft: 100, width: 900}}>

          <Imagem diretorio={'imagem.jpg'} />
          <Topico texto={"Para ser muito bom amanhã é preciso começar a praticar hoje"} />

          <Comentario />

          <p>São nos primeiros anos escolares que as crianças aprendem os fundamentos da </p>
          <p>matemática, inclusive as quatro operações soma, subtração, multiplicação e </p>
          <p>divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda</p>
          <p> a sua vida escolar :(</p>
          <div style={{height:"15px"}}></div>
          <p>Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado </p>
          <p>nós primeiros anos escolares e buscara aperfeiçoar seu conhecimento nas </p>
          <p>operações básicas;</p>
          <div style={{ width: "620px", border: "1px solid #dfdfdf", marginTop: "30px"}}></div>

          <Topico texto={"Matemática: O Alicerce para o Sucesso Escolar!"} />

          <Comentario />

          <p>Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico e </p>
          <p>aprendem as quatro operações essenciais: adição, subtração, multiplicação e </p>
          <p>divisão. </p>
          <p>Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a </p>
          <p>jornada! </p>
          <p>Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a </p>
          <p>dominar as operações básicas e desenvolver confiança na matemática. </p>
          <div style={{height:"15px"}}></div>
          <p>Vamos juntos fortalecer essa base e transformar desafios em conquistas! </p>
          <p>#MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas </p>
          <p>AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil </p>
          <p>#ConfiançaNosNúmeros</p>
        </div>
        <div style={{ backgroundColor: "rgba(115, 70, 188, 0.94)", width:'60%', height: 1300 }}> </div>
      </section>
    </body>
  );
};

export default App;


