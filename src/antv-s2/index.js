import React from 'react';
import ReactDOM from 'react-dom';
import { SheetComponent } from '@antv/s2-react';
import '@antv/s2-react/dist/style.min.css';
import mockData from './mock-data'
console.log(mockData)
const antvs2 = function () { 

  const s2DataConfig = {
    fields: {
      rows: ['province', 'city'],
      columns: ['type'],
      values: ['price'],
    },
    meta: [
      {
        field: 'province',
        name: '省份',
      },
      {
        field: 'city',
        name: '城市',
      },
      {
        field: 'type',
        name: '商品类别'
      },
      {
        field: 'price',
        name: '价格',
        formatter:(value)=>{
          // return parseInt(value) + 1
          return value 
        }
      },
    ],
    data:mockData,
  };

  const s2Options = {
    width: 600,
    height: 480,
    showDefaultHeaderActionIcon: true, // 默认打开
  };
  return  <SheetComponent
  sheetType="pivot"
  adaptive={false}
  dataCfg={s2DataConfig}
  options={s2Options}
/>
}
export default antvs2