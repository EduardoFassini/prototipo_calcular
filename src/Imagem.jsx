import PropTypes from 'prop-types';
import "./imagem.css";

function Imagem({diretorio}) {

    return (
        <section>
            <img className='imgImagem' src={diretorio}/>
        </section>
    )
}
Imagem.propTypes = {
    diretorio: PropTypes.string.isRequired,
};
 
export default Imagem;