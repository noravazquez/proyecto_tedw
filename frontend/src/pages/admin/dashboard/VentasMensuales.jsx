import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'

const VentasMensuales = () => {
  const [monthlySales, setMonthlySales] = useState([]);

  const fetchMonthlySales = async (year) => {
    const months = ['Enero', 'Febero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fetchedData =[];

    for (let month = 1; month <= 12; month++) {
      try {
        const response = await axios.post('http://54.162.148.240:3003/api/stats/total-ventas-mensual', {
          year: year,
          month: month,
        });
  
        const totalVentasMes = response.data.totales.montoTotal;
        fetchedData.push({ month: months[month - 1], total: totalVentasMes });
      } catch (error) {
        console.error(`Error al obtener datos para ${months[month - 1]}`, error);
      }
    }
    setMonthlySales(fetchedData);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMonthlySales(2023);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width='100%' aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={monthlySales}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default VentasMensuales