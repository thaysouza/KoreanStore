import React from 'react';
import '../../estilos/estilos.css';

const FormContato = () => {
    return (
       <>

        <div>
            <form className="container" method="POST">
             <div className="form-group mx-5 text-center">
               <h4>Nome: </h4>
                 <input className="msg form-control border border-danger mb-4 " name="nome" type="text" />
                 <h4>Mensagem: </h4>
                 <input className="msg form-control border border-danger" type="textarea" name="msg" /><br />
                 <input className="btn btn-danger mb-4 mr-sm-2 btn-block mt-4" type="submit" value="Enviar" />
             </div>
        </form>
        </div>
       </>
    );
}

export default FormContato;