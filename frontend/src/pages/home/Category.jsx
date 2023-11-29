const data = [
    {
        id: 1,
        categoria: "Celular",
        count: "10 productos",
        imagen: "/images/cellphone.png"
    },
    {
        id: 2,
        categoria: "Audifonos",
        count: "10 productos",
        imagen: "/images/earphones.png"
    },
    {
        id: 3,
        categoria: "Laptop's",
        count: "10 productos",
        imagen: "/images/laptop.png"
    },
    {
        id: 4,
        categoria: "Pc's",
        count: "10 productos",
        imagen: "/images/pc.png"
    },
    {
        id: 5,
        categoria: "Smartwatch",
        count: "10 productos",
        imagen: "/images/smartwatch.png"
    },
    {
        id: 6,
        categoria: "Tablet's",
        count: "10 productos",
        imagen: "/images/tablet.png"
    }
]
import React from 'react'

const Category = () => {
  return (
    <div className="bg-gray-50">
        <h2 className="text-3xl font-primary font-semibold capitalize text-center my-8">Our Categories</h2>
        <div className="container pt-8 pr-16 pl-16">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {data.map(el => (
                    <div key={el.id} className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                        <div className="flex justify-between items-center p-6">
                            <div className="space-y-4">
                                <p className="font-primary font-medium text-xl text-Blue1">{el.categoria}</p>
                                <p className="font-primary text-Blue2">{el.count}</p>
                            </div>
                            <img className="w-[100px]" src={el.imagen} alt={el.categoria} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category