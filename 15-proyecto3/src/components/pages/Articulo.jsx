import React from 'react'
import { useState, useEffect } from "react";
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom'
import { Peticion } from '../../helpers/Peticion';

const Articulo = () => {

  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirarticulo();
  }, [])

  const conseguirarticulo = async () => {

    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET");

    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setCargando(false);
  }

  return (
    <div className='jumbo'>
      {cargando === true ? "cargando..." :
        <>
          <div className='mascara'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} />}
            {articulo.imagen == "default.png" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt={articulo.titulo} />}
          </div>

          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>

        </>
      }
    </div>
  )
}

export default Articulo