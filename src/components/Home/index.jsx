import React from 'react';
import Primeira from '../../img/estilo-coreano.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
       
       <div className="container">
          <div className="row">
              <div className="col-lg-6">
              <h2 className="tel display-4"><b>Korean</b>Store</h2>
                </div>

                <div className="col-lg-6 mt-4">
                <Link to="/produtos"> 
                <button class="btn btn-danger btn-lg mb-3" type="button">Veja nossos produtos !</button>
                </Link>
                 </div>

            
              <div className="container-fluid col-sm-12">
              <img className="img-fluid"  src={Primeira}  alt="Moda-Coreana"/>
             </div>
         </div>
     </div>
                
   
       </>
    )
}

export default Home;