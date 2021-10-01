import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import {
  ChartsContainer
} from './styles';

export default function Charts({data}) {
  const [chartData, setChartData] = useState({});

  const loadChartData = () => {
    let categories = [];
    let inner = [];
    let outer = [];
    data.forEach((expense) => {
      if (categories.includes(expense.additionalInfo.category)) {
        inner = inner.map((oldData) => {
          if (oldData.name === expense.additionalInfo.category) {
            return {...oldData, value: oldData.value + expense.value};
          } else {
            return oldData;
          }
        });
      } else {
        categories.push(expense.additionalInfo.category);
        inner.push({name: expense.additionalInfo.category, value: expense.value});
      }
    })

    categories.forEach((category) => {
      data.forEach((expense) => {
        if (category === expense.additionalInfo.category) {
          outer.push({name: expense.item, value: expense.value});
        }
      });
    });
    return { inner, outer };
  };

  useEffect(() => {
    setChartData(loadChartData());
  }, [data]);

  return(
    <ChartsContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={chartData.inner} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#eafc40" stroke="#2b2b3a" />
          <Pie data={chartData.outer}Data dataKey="value" cx="50%" cy="50%" innerRadius={110} outerRadius={130} fill="#2b2b3a" stroke="#ddd" label />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </ChartsContainer>
  )
}
