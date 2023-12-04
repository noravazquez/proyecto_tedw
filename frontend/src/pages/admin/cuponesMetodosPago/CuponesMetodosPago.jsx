import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CuponesMetodosPago = () => {
  const [cupones, setCupones] = useState([]);
  const [metodopagos, setMetodopagos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.226.214.97:3003/api/admin/cupondescuentos');
        setCupones(response.data.cupondescuentos);
        const responseProveedores = await axios.get('http://34.226.214.97:3003/api/admin/metodopagos');
        setMetodopagos(responseProveedores.data.metodopagos);
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
          <h2 className='font-primary font-medium text-Blue2 text-lg'>Cupones de descuento</h2>
        </div>
        <div>
          <div>
            <div className='mx-3 mb-3'>
              <table className='w-full border border-collapse font-primary'>
                <thead>
                  <tr className='bg-gray-200 font-semibold'>
                    <td className='border p-2'>Id Cupon</td>
                    <td className='border p-2'>Codigo unico</td>
                    <td className='border p-2'>Descuento</td>
                    <td className='border p-2'>Fecha vencimiento</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    cupones.map((cupon) => (
                      <tr key={cupon.id_cupon_descuento}>
                        <td className='border p-2'>{cupon.id_cupon_descuento}</td>
                        <td className='border p-2'>{cupon.codigo_unico}</td>
                        <td className='border p-2'>{cupon.descuento}</td>
                        <td className='border p-2'>{cupon.fecha_vencimiento}</td>
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
          <h2 className='font-primary font-medium text-Blue2 text-lg'>Metodos de pago</h2>
        </div>
        <div>
          <div>
            <div className='mx-3 mb-3'>
              <table className='w-full border border-collapse font-primary'>
                <thead>
                  <tr className='bg-gray-200 font-semibold'>
                    <td className='border p-2'>Id Metodo Pago</td>
                    <td className='border p-2'>Metodo Pago</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    metodopagos.map((metodo) => (
                      <tr key={metodo.id_metodo_pago}>
                        <td className='border p-2'>{metodo.id_metodo_pago}</td>
                        <td className='border p-2'>{metodo.metodo_pago}</td>
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

export default CuponesMetodosPago