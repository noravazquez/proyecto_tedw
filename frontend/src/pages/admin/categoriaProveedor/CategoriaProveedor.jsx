import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoriaProveedor = () => {
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.226.214.97:3003/api/admin/categorias');
        setCategorias(response.data.categorias);
        const responseProveedores = await axios.get('http://34.226.214.97:3003/api/admin/proveedores');
        setProveedores(responseProveedores.data.proveedors);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className='border bg-white shadow-sm rounded'>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5 justify-between'>
          <h2 className='font-primary font-medium text-Blue2 text-lg'>Categorias</h2>
        </div>
        <div>
          <div>
            <div className='mx-3 mb-3'>
              <table className='w-full border border-collapse font-primary'>
                <thead>
                  <tr className='bg-gray-200 font-semibold'>
                    <td className='border p-2'>Id Categoria</td>
                    <td className='border p-2'>Categoria</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    categorias.map((categoria) => (
                      <tr key={categoria.id_categoria}>
                        <td className='border p-2'>{categoria.id_categoria}</td>
                        <td className='border p-2'>{categoria.categoria}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='border bg-white shadow-sm rounded'>
        <div className='bg-Blue5 flex items-center py-3 px-5 border-b-2 border-Blue6 mb-5 justify-between'>
          <h2 className='font-primary font-medium text-Blue2 text-lg'>Proveedores</h2>
        </div>
        <div>
          <div>
            <div className='mx-3 mb-3'>
              <table className='w-full border border-collapse font-primary'>
                <thead>
                  <tr className='bg-gray-200 font-semibold'>
                    <td className='border p-2'>Id Proveedor</td>
                    <td className='border p-2'>Proveedor</td>
                    <td className='border p-2'>Telefono</td>
                    <td className='border p-2'>Correo electronico</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    proveedores.map((proveedor) => (
                      <tr key={proveedor.id_proveedor}>
                        <td className='border p-2'>{proveedor.id_proveedor}</td>
                        <td className='border p-2'>{proveedor.proveedor}</td>
                        <td className='border p-2'>{proveedor.telefono}</td>
                        <td className='border p-2'>{proveedor.correo_electronico}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriaProveedor