import './cabecalho.css';
import Logo from './logo';

function Cabecalho() {


    return ( 
            <header className='headerCabecalho'>
                <Logo />
                <h5 className='h5Cab'>Ferramenta de aprendizagem de cálculo</h5>
                <h5 className='h6Cab'>07/06/2022</h5>
            </header> 
    )
}

export default Cabecalho;