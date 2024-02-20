import React from 'react'

const Sidebar = () => {
  return (
    <aside className='lateral'>
      <div className='search'>
        <h3 className='title'>Buscador</h3>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>

      {/* <div className='add'>
        <h3 className='title'>Añadir pelicula</h3>
        <form>
          <input type="text" placeholder='Titulo' />
          <textarea placeholder='Descripcion'></textarea>
          <input type="submit" value="Guardar" />
        </form>
      </div> */}
    </aside>
  )
}

export default Sidebar;