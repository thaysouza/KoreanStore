import React, { useState, useEffect } from 'react';
import '../../estilos/estilos.css'



const Comentario = () => {
    const [coments, setComents] = useState([]);

    useEffect(async () => {
        const url2 = "http://localhost/react/fullstackeletro/backend/api2.php";
        const res2 = await fetch(url2);
        setComents(await res2.json());
    }, [])



    return (
        <> {
            coments.map(row => {
                return (
                    <div style={{textAlign:"center", marginTop: "10px"}}>


                       Nome: {row.nome}<br />
                       Mensagem: {row.msg}<br />
                        Data: {row.data}<br />
                       
                      
                        <hr />



                    </div>
                )
            })
        }
        </>
    )
}

export default  Comentario;