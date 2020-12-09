import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/bts.png';
import '../estilos/estilos.css'


const Cabecalho= () => {
    return (
       <>
    

        <nav className="menu navbar navbar-expand-md navbar-dark mt-3">
     <button className="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarNav"
       aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

                 <li className="nav-item">
                   <Link to="/" className="text-light nav-link" >
                   <img className=" navbar-brand mx-1 mr-4" width="60px" src={Logo} alt="Logo-Menu"/>Home</Link>   
                 </li>               
                    
                 <li className="nav-item">
                     <Link className="text-light nav-link mt-2" to="/produtos">Nossos Produtos</Link>
                 </li>

                 <li className="nav-item">
                   <Link className="text-light nav-link mt-2" to="/nossaslojas">Nossas lojas</Link>
                 </li>

                 <li className="nav-item">
                    <Link className="text-light nav-link mt-2" to="/contato">Fale conosco</Link>
                </li>
        </ul>
    </div>
</nav>
       </>
    );
}

export default Cabecalho;

