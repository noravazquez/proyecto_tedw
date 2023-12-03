import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/ProductCard'
import axios from 'axios'

const BestSeller = () => {
  const [categorias, setCategorias] = useState([])
  const [lastProducts, setLastProductos] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosResponse = await axios.get('http://54.226.235.180:3003/api/product/lastproducts')
        setLastProductos(productosResponse.data.productos)
        const response = await axios.get('http://54.226.235.180:3003/api/admin/categorias')
        setCategorias(response.data.categorias)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  const handleCategoriaClick = async (idCategoria) => {
    try {
      console.log(idCategoria)
      const response = await axios.get(`http://54.226.235.180:3003/api/product/lastproducts/${idCategoria}`)
      setLastProductos(response.data.productos)
      setCategoriaSeleccionada(idCategoria)
    } catch (error) {
      console.error(error);
    }
  };

  if (categorias.length == 0) {
    return null
  }

  return (
    <div className="bg-gray-50">
      <div className="container pt-8 pr-10 pl-8 pb-8">
        <h2 className="text-3xl font-primary font-semibold capitalize text-center my-8">Last Products</h2>
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            {
              categorias.map((categoria) => (
                <button key={categoria.id_categoria} className={`font-primary text-Blue3 ${categoriaSeleccionada === categoria.id_categoria ? 'font-bold' : ''}`} onClick={() => handleCategoriaClick(categoria.id_categoria)}>{categoria.categoria}</button>
              ))
            }
        </div>
        <div className="pt-5 grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            { lastProducts.map((lastProduct) => (
              <ProductCard key={lastProduct.id_producto} producto={lastProduct}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BestSeller