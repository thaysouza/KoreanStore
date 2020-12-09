import React, { useState, useEffect } from 'react';
import '../../estilos/estilos.css';



const ProductsPage = () => {
    const [prods, setProds] = useState([]);
    useEffect(async () => {
        
        const url = "http://localhost/react/fullstackeletro/backend/api.php";
       
        const res = await fetch(url);
        setProds(await res.json());
    }, [])

    let destaque = (imagem) => {
        if(imagem.target.style.width === '180px')
        imagem.target.style = 'width:220px'
        else
        imagem.target.style = 'width:180px'
    }
 
    return (
        
        <>
        <section className="produtos" >
            {
               prods.map(row => {
                    return (
                        
                        
                            <div key={row.idproduto} className="box_produto mb-4" id={row.categoria}>
                                <img src={row.imagem} className="itens img-fluid" onClick={destaque} 
                                  alt={row.descricao}  />
                                <br />
                                <p className="descricao">{row.descricao}</p>
                                <p className="descricao-preco" style={{ textDecoration: "line-through" }}>R${row.preco}</p>
                                <p className="text-danger preco">R${row.precofinal}</p>
                                <p>Tamanho: {row.tipo}</ p>
                                <a class="btn btn-danger" href="produtos.php">Comprar</a>
                                <hr />
                            </div>
                        
        
        
                    )
                }
                ) }
                </section>
        </>
    )
}

export default  ProductsPage;