import '../../estilos/estilos.css'



const Categorias = () => {
    function exibir_categoria(categoria){
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let exibir_todos = () => {
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }
    return (
        <>
        <div>
            <header>
                <h2 className="display-4 tel">Produtos</h2>
                <hr />
                </header>
                <section className="categorias">
                 <h3 className="text-danger">Categorias</h3>
                <ol className="list-group">
                    <li className="list-group-item list-group-item-danger" onClick={exibir_todos} >Todos (18)</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('jardineira')}>Jardineiras</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('blusa')}>Blusas</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('saia')} >Saias</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('jaqueta')}>Jaquetas</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('vestido')}>Vestidos</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('calca')}>Calças</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('sapato')}>Sapatos</li>
                    <li className="list-group-item list-group-item-danger" onClick={() => exibir_categoria('diverso')}>Diversos</li>
                </ol>
            </section>
     </div>
     </>
       
    )
}

export default Categorias;