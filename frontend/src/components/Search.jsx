import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import BreadCrumb from './BreadCrumb';

const Search = () => {
    const[searchTerm, setSearchTerm] = useState('')
    const [activeSearch, setActiveSearch] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://54.162.148.240:3003/api/product/buscarProductos?producto=${searchTerm}`)
                setActiveSearch(response.data.productos.slice(0,8))
            } catch (error) {
                console.error(error);
            }
        }
        
        if (searchTerm !== '') {
            fetchData();
        } else {
            setActiveSearch([]);
        }

    }, [searchTerm])

    const handleSearch = (e) => {
        const newSearchTerm = e.target.value.toLowerCase();
        setSearchTerm(newSearchTerm)
    }

    console.log(activeSearch);

  return (
    <>
        <BreadCrumb title="Search"/>
        <div className="m-8 flex flex-col justify-center max-w-lg">
            <form className="lg:w-[1300px] relative">
                <div className="relative">
                    <input type="search" placeholder="Buscar productos..." className="w-full p-4 rounded-full bg-slate-300" onChange={(e) => handleSearch(e)}/>
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
                        <FaSearch />
                    </button>
                </div>

                {
                    activeSearch.length > 0 && (
                        <div className="absolute top-20 p-4 bg-slate-200 text-Blue2 font-primary w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                            {
                                activeSearch.map(s => (
                                    /* <span key={s.id_producto}>{s.producto}</span>*/
                                    <a key={s.id_producto} href={`/producto/${s.id_producto}`} className="flex items-center gap-4 p-2 hover:bg-slate-300 rounded-md">
                                        <img src={s.imagenes.imagenes[0]} alt={s.producto} className="w-16 h-16 object-cover rounded-md"/>
                                        <div className="text-Blue2 font-primary">
                                            <p className="font-bold">{s.producto}</p>
                                            <p>$ {s.precio}</p>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    )
                }
            </form>
        </div>
    </>
  )
}

export default Search