import React, { useEffect, useRef } from 'react';
import { Advisor } from '@antv/ava';
import mockData from './mockData'
// import * as G2 from '@antv/g2';
import './style.css'

const AdvisorCp = () => {
  const container = useRef(null)
  const chart = useRef(null)


  useEffect(() => {
    if (!chart.current) {
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container) {

    const { Chart } = window.G2
    console.log(window.G2)
    // 如上
    const chart = new Chart({
      container,
      theme: 'classic',
    });

    // 准备数据
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    // 声明可视化
    chart
      .interval() // 创建一个 Interval 标记
      .data(data) // 绑定数据
      .encode('x', 'genre') // 编码 x 通道
      .encode('y', 'sold') // 编码 y 通道
      .encode('key', 'genre') // 指定 key
      .animate('update', { duration: 300 }); // 指定更新动画的时间

    // 渲染可视化
    chart.render();
    console.log(chart)
    return chart;
  }


  return <div ref={container} className='canvas-container' > </div>
}


export default AdvisorCp