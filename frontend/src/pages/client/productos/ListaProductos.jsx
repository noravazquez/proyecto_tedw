/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../../../components/ProductCard'
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { LuGrip, LuGripHorizontal, LuGripVertical } from "react-icons/lu";

const ListaProductos = ({ idCategoriaSeleccionada }) => {
    const [productos, setProductos] = useState([])
    const [totalProductos, setTotalProductos] = useState(null)
    const [grid, setGrid] = useState(4);
    //console.log(idCategoriaSeleccionada)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://54.80.197.84:3003/api/product/products'

                if (idCategoriaSeleccionada != null) {
                    url = `http://54.80.197.84:3003/api/product/productsByCategoria/${idCategoriaSeleccionada}`
                    const totalResponse = await axios.get(`http://54.80.197.84:3003/api/product/productoByCategoria/${idCategoriaSeleccionada}`);
                    setTotalProductos(totalResponse.data.totalByCategoria)
                }else{
                    const totalResponse = await axios.get('http://54.80.197.84:3003/api/product/totalProductos');
                    setTotalProductos(totalResponse.data.totalProductos)
                }

                const response = await axios.get(url)
                setProductos(response.data.productos)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [idCategoriaSeleccionada])

  return (
    <div className="w-4/5 pl-5">
        <div className="bg-white p-2 rounded-lg mb-4">
            <div className="flex justify-end items-center">
                <div className="flex items-center gap-2">
                    <p className="font-primary text-Blue4 text-sm mb-0">
                    {totalProductos && totalProductos[0] ? `${totalProductos[0].totalProductos} productos` : 'Sin productos'}
                    </p>
                    <div className="flex gap-2 items-center">
                        <TfiLayoutGrid4Alt className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" onClick={() => setGrid(4)}/>
                        <LuGrip className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" onClick={() => setGrid(3)}/>
                        <LuGripVertical className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" onClick={() => setGrid(2)}/>
                        <LuGripHorizontal className="text-gray-600 w-8 h-8 bg-Blue5 p-2 rounded-sm cursor-pointer" onClick={() => setGrid(1)}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="pb-5">
            <div className={`gap-2 flex-wrap grid ${grid === 4 ? 'grid-cols-4' : grid === 3 ? 'grid-cols-3' : grid === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {
                    productos.map((producto) => (
                        <ProductCard key={producto.id_producto} producto={producto} grid={grid}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ListaProductos