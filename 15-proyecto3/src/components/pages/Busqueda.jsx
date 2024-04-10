import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import Listado from './Listado';

const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, [])

  useEffect(() => {
    conseguirArticulos();
  }, [params])

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "buscar/" + params.busqueda, "GET");

    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }else{
      setArticulos([]);
    }
    setCargando(false);
  }

  return (
    <>
      {cargando === true ? "cargando..." :

          articulos.length >= 1 ? <Listado articulos={articulos} setArticulos={setArticulos} /> : <h1>No hay articulos para mostrar</h1>

      }
    </>
  )
}

export default Busqueda