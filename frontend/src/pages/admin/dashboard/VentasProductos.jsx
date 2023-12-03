import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
  
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F', '#FFBB28', '#FF8042'];

const VentasSemanales = () => {
  const [productsSales, setProductsSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.post('http://23.20.161.84:3003/api/stats/total-productos-vendidos', {
            year: new Date().getFullYear()
          });
      
          const data = Object.entries(response.data.totales.productos).map(([name, value], index) => ({
            name,
            value,
            color: COLORS[index % COLORS.length],
          }));
  
          setProductsSales(data);

        } catch (error) {
          console.error('Error al obtener el total de ventas productos', error);
          // Puedes manejar el error según tus necesidades
        }
      };

    fetchData();
  }, []);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='pl-1'>
        <PieChart width={300} height={300}>
          <Pie
            data={productsSales}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {productsSales.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <div className='grid grid-cols-4 pl-5'>
          {productsSales.map((item, index) => (
            <React.Fragment key={index}>
              <p className='font-primary text-xs'>{item.name}</p>
              <div className='h-[20px] w-[20px]' style={{ background: COLORS[index] }}></div>
            </React.Fragment>
          ))}
        </div>
    </div>
  )
}

export default VentasSemanales