/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilterCards = ({ onCategoriaSeleccionada }) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://54.224.214.208:3003/api/admin/categorias')
            setCategorias(response.data.categorias)
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
    }, [])

    const handleClickCategoria = (idCategoria) => {
        setCategoriaSeleccionada(idCategoria)
        onCategoriaSeleccionada(idCategoria)
    }

    if (categorias.length == 0) {
        return null
    }
  return (
    <div className="w-1/5">
        <div className="bg-Blue5 rounded-lg px-3 py-3 mb-3">
            <h3 className="font-primary font-semibold text-base text-Blue2 mb-5">Shop By Categories</h3>
            <div>
                <ul className="ps-0 font-primary text-sm leading-7 text-Blue1 cursor-pointer">
                    <li className={`${categoriaSeleccionada === null ? 'font-bold' : ''}`} onClick={() => handleClickCategoria(null)}>All Products</li>
                    {
                        categorias.map((categoria) => (
                            <li className={`${categoriaSeleccionada === categoria.id_categoria ? 'font-bold' : ''}`} key={categoria.id_categoria} onClick={() => handleClickCategoria(categoria.id_categoria)}>{categoria.categoria}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FilterCards