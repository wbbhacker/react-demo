import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./index.css";
import { label } from "three/examples/jsm/nodes/Nodes.js";

const EchartLineDemo = () => {
  const chartRef = useRef();
  useEffect(() => {
    console.log(chartRef.current);
    var chartDom = chartRef.current;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "Distribution of Electricity",
        subtext: "Fake Data",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        // prettier-ignore
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} W",
        },
        axisPointer: {
          snap: true,
        },
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            lte: 6,
            color: "green",
          },
          {
            gt: 6,
            lte: 8,
            color: "red",
          },
          {
            gt: 8,
            lte: 14,
            color: "green",
          },
          {
            gt: 14,
            lte: 17,
            color: "red",
          },
          {
            gt: 17,
            color: "green",
          },
        ],
      },
      series: [
        {
          name: "Electricity",
          type: "line",
          smooth: true,
          // prettier-ignore
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            data: [
              // 蓝色面积
              [
                {
                  name: "行业区间",
                  yAxis: "200",
                  xAxis: "00:00",
                  label: {
                    position: "insideTopLeft",
                    color: "rgba(24, 144, 255, 1)",
                  },
                  itemStyle: {
                    color: "rgba(24, 144, 255, 0.4)",
                  },
                },
                {
                  yAxis: "410",
                  xAxis: "10:00",
                },
              ],
              //   绿色面积
              [
                {
                  name: "行业区间",
                  yAxis: "450",
                  xAxis: "00:00",
                  label: {
                    position: "insideTopLeft",
                    color: "rgba(42, 164, 145, 1)",
                  },
                  itemStyle: {
                    color: "rgba(42, 164, 145, 0.4)",
                  },
                },
                {
                  yAxis: "700",
                  xAxis: "12:30",
                },
              ],
            ],
          },
          markLine: {
            symbol: ["none", "none"],
            data: [
              // 蓝色线条
              [
                {
                  name: "",
                  yAxis: "200",
                  xAxis: "00:00",
                  lineStyle: {
                    color: "rgba(24, 144, 255,1)",
                  },
                },
                {
                  yAxis: "200",
                  xAxis: "10:00",
                },
              ],
              [
                {
                  name: "",
                  yAxis: "410",
                  xAxis: "00:00",
                  lineStyle: {
                    color: "rgba(24, 144, 255,1)",
                  },
                },
                {
                  yAxis: "410",
                  xAxis: "10:00",
                },
              ],
              //   绿色线条

              [
                {
                  name: "",
                  yAxis: "450",
                  xAxis: "00:00",
                  lineStyle: {
                    color: "rgba(42, 164, 145,1)",
                  },
                },
                {
                  yAxis: "450",
                  xAxis: "12:30",
                },
              ],
              [
                {
                  name: "",
                  yAxis: "700",
                  xAxis: "00:00",
                  lineStyle: {
                    color: "rgba(42, 164, 145,1)",
                  },
                },
                {
                  yAxis: "700",
                  xAxis: "12:30",
                },
              ],
            ],
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);

  return (
    <div>
      <div className="chart-box" ref={chartRef}></div>
      <div className="color-box"></div>
    </div>
  );
};

export default EchartLineDemo;
