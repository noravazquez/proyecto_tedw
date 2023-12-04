import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];

const VentasAnuales = () => {
  const [totalVentasAnio, setTotalVentasAnio] = useState([]);
  const years = [2023, 2022, 2021, 2020, 2019];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ventasPorAnio = await Promise.all(
          years.map(async (year) => {
            const response = await axios.post('http://54.162.148.240:3003/api/stats/total-ventas-anual', {
              year: year,
            });
            return { year, total: response.data.totales.montoTotal };
          })
        );

        setTotalVentasAnio(ventasPorAnio);
      } catch (error) {
        console.error('Error al obtener el total de ventas anuales', error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ResponsiveContainer width='100%' aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={totalVentasAnio}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" angle={-45} textAnchor="end" interval={0}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default VentasAnuales