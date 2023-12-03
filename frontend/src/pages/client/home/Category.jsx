import axios from 'axios'
import React, { useEffect, useState } from 'react'

const imagenes = [
    {
        id: 1,
        imagen: "/images/laptop.png"
    },
    {
        id: 2,
        imagen: "/images/pc.png"
    },
    {
        id: 3,
        imagen: "/images/cellphone.png"
    },
    {
        id: 4,
        imagen: "/images/tablet.png"
    },
    {
        id: 5,
        imagen: "/images/earphones.png"
    },
    {
        id: 6,
        imagen: "/images/smartwatch.png"
    }
]

const Category = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await axios.get('http://23.20.161.84:3003/api/product/productoByCategoria')
                setCategorias(response.data.totalByCategoria)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    if (categorias.length == 0) {
        return null
    }

    const categoriasImagen = categorias.map((categoria) => {
        const imagen = imagenes.find(img => img.id === categoria.Categorium.id_categoria);
        //console.log(imagen)
        return{
            totalProductos: categoria.totalProductos,
            id_categoria: categoria.Categorium.id_categoria,
            categoria: categoria.Categorium.categoria,
            imagen: imagen ? imagen.imagen : null
        }
    })

  return (
    <div className="bg-gray-50">
        <h2 className="text-3xl font-primary font-semibold capitalize text-center my-8">Our Categories</h2>
        <div className="container pt-8 pr-16 pl-16">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {categoriasImagen.map(categoria => (
                    <div key={categoria.id_categoria} className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                        <div className="flex justify-between items-center p-6">
                            <div className="space-y-4">
                                <p className="font-primary font-medium text-xl text-Blue1">{categoria.categoria}</p>
                                <p className="font-primary text-Blue2">{categoria.totalProductos} productos</p>
                            </div>
                            <img className="w-[100px]" src={categoria.imagen} alt={categoria.categoria} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category