import "./topico.css";
import PropTypes from 'prop-types';

function Topico({texto}) {

    return (
        <section>
            <h2 className="h2Topico">{texto}</h2>
        </section>
    )
}
Topico.propTypes = {
    texto: PropTypes.string.isRequired,
};
 
export default Topico;