import React from 'react'

const Articulos = () => {
  return (
    <>
      <article className='articulo-item'>
        <div className='mascara'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        </div>
        
        <div className='datos'>
          <h3 className='title'>Desarrollo web</h3>
          <p className='description'>pabloromero.es</p>

          <button className='edit'>Editar</button>
          <button className='delete'>Borrar</button>
        </div>
      </article>
    </>
  )
}

export default Articulos