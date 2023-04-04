import React, { useEffect, useState } from 'react';
import { CKBJson, addChart, CKBOptions } from '@antv/ckb';
import { Divider, List, Typography, Popover } from 'antd';
import './style.css'

// 根据 ckb 图表分类方法  训练chartGPT 生成的


// 旭日图 sunburst
addChart({
  "id": "sunburst",
  "name": "Sunburst Chart",
  "alias": [],
  "def": "Displays hierarchical data as a set of nested rings.",
  "family": [
    "HierarchicalCharts"
  ],
  "purpose": [
    "Composition",
    "Proportion"
  ],
  "coord": [
    "Polar"
  ],
  "category": [
    "Statistic"
  ],
  "shape": [
    "Round"
  ],
  "channel": [
    "Angle",
    "Color"
  ],
  "dataPres": [
    {
      "minQty": 1,
      "maxQty": 1,
      "fieldConditions": [
        "Nominal"
      ]
    },
    {
      "minQty": 0,
      "maxQty": "*",
      "fieldConditions": [
        "Number"
      ]
    }
  ],
  "recRate": "Recommended"
}

  , {
    'zh-CN': {
      "id": "sunburst",
      "name": "旭日图",
      "alias": [],
      "def": "将层次结构的数据显示为一组嵌套的环形。",
      "family": [
        "层级图表"
      ],
      "purpose": [
        "组成",
        "占比"
      ],
      "coord": [
        "极坐标系"
      ],
      "category": [
        "统计图表"
      ],
      "shape": [
        "圆形"
      ],
      "channel": [
        "角度",
        "颜色"
      ],
      "dataPres": [
        {
          "minQty": 1,
          "maxQty": 1,
          "fieldConditions": [
            "名词"
          ]
        },
        {
          "minQty": 0,
          "maxQty": "*",
          "fieldConditions": [
            "数值"
          ]
        }
      ],
      "recRate": "推荐"
    }


  })
// 世界地图


// 中国地图

// 桑基图

// 箱线图

// 散点图

// 双轴组合图

const zhCompletedKB = {
  // 表 table
  table: {
    "id": "table",
    "name": "表",
    "alias": [],
    "def": "一种用于展示数据的表格形式。",
    "family": [
      "表格类"
    ],
    "purpose": [
      "数据展示",
      "数据比较",
      "数据分析"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "表格"
    ],
    "shape": [
      "行",
      "列",
      "单元格"
    ],
    "channel": [
      "标签",
      "文本",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "任意类型"
        ]
      }
    ],
    "recRate": "必要"
  },
  // 透视表 pivot_table
  pivot_table: {
    "id": "pivot_table",
    "name": "透视表",
    "alias": [],
    "def": "一种用于数据分析的表格形式。",
    "family": [
      "表格类"
    ],
    "purpose": [
      "数据分析",
      "数据汇总",
      "决策支持"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "表格"
    ],
    "shape": [
      "行",
      "列",
      "单元格"
    ],
    "channel": [
      "标签",
      "文本",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": "*",
        "fieldConditions": [
          "任意类型"
        ]
      }
    ],
    "recRate": "推荐"
  },

  // 透视表v2 s2pivottable
  s2pivottable: {
    "id": "pivot_table",
    "name": "透视表 V2",
    "alias": [],
    "def": "一种用于数据分析的表格形式。",
    "family": [
      "表格类"
    ],
    "purpose": [
      "数据分析",
      "数据汇总",
      "决策支持"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "表格"
    ],
    "shape": [
      "行",
      "列",
      "单元格"
    ],
    "channel": [
      "标签",
      "文本",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": "*",
        "fieldConditions": [
          "任意类型"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 多线图
  Line: {
    "id": "Line",
    "name": "多线图",
    "alias": [
      "多折线图"
    ],
    "def": "展示多组数据的趋势变化情况。",
    "family": [
      "折线图类"
    ],
    "purpose": [
      "趋势"
    ],
    "coord": [
      "二维直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "线形"
    ],
    "channel": [
      "位置",
      "颜色",
      "大小"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "Interval"
        ]
      },
      {
        "minQty": 0,
        "maxQty": "*",
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 非时序多线图 line_Non
  line_Non: {
    "id": "line_Non",
    "name": "非时序多线图",
    "alias": [
      "多折线图"
    ],
    "def": "展示多组数据的趋势变化情况，没有时间维度。",
    "family": [
      "折线图类"
    ],
    "purpose": [
      "趋势"
    ],
    "coord": [
      "二维直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "线形"
    ],
    "channel": [
      "位置",
      "颜色",
      "大小"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": "*",
        "fieldConditions": [
          "Interval"
        ]
      },
      {
        "minQty": 0,
        "maxQty": "*",
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 条形图 dist_bar
  dist_bar: {
    "id": "dist_bar",
    "name": "条形图",
    "alias": ['柱状图'],
    "def": "使用水平或垂直的条形表示数据值。",
    "family": [
      "条形图类"
    ],
    "purpose": [
      "比较",
      "排名",
      "占比",
      "组成"
    ],
    "coord": [
      "二维直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "条形"
    ],
    "channel": [
      "位置",
      "长度",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "名词",
          "有序名词"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 饼图 pie
  pie: {
    "id": "pie",
    "name": "饼图",
    "alias": [],
    "def": "将数据按整体的比例展示为一个圆形的扇形区域。",
    "family": [
      "饼图类"
    ],
    "purpose": [
      "组成",
      "占比"
    ],
    "coord": [
      "极坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "圆形"
    ],
    "channel": [
      "角度",
      "面积",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "名词"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 面积图 area
  area: {
    "id": "area",
    "name": "面积图",
    "alias": [],
    "def": "通过连接数据点的区域来显示数据的变化趋势。",
    "family": [
      "折线图类"
    ],
    "purpose": [
      "趋势",
      "组成"
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "面积"
    ],
    "channel": [
      "位置",
      "长度",
      "颜色",
      "透明度"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "序数",
          "时间"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 时间序列图 echarts_timeseries
  echarts_timeseries: {
    "id": "echarts_timeseries",
    "name": "时间序列图",
    "alias": [],
    "def": "用于显示随时间变化的连续数据。",
    "family": [
      "折线图类",
      "面积图类"
    ],
    "purpose": [
      "趋势",
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "折线",
      "面积"
    ],
    "channel": [
      "位置",
      "颜色",
      "大小"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "时间"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 旭日图 sunburst
  sunburst: {
    "id": "sunburst",
    "name": "旭日图",
    "alias": [],
    "def": "将层次结构的数据显示为一组嵌套的环形。",
    "family": [
      "层级图表"
    ],
    "purpose": [
      "组成",
      "占比"
    ],
    "coord": [
      "极坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "圆形"
    ],
    "channel": [
      "角度",
      "颜色"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "名词"
        ]
      },
      {
        "minQty": 0,
        "maxQty": "*",
        "fieldConditions": [
          "数值"
        ]
      }
    ],
    "recRate": "推荐"
  },
  //过滤器 filter_box_mini
  filter_box_mini: {
    "id": "filter_box_mini",
    "name": "过滤器",
    "alias": [],
    "def": "用于筛选数据的工具，可以根据指定的条件或规则从数据集中提取出符合要求的数据。",
    "family": [
      "交互式图表"
    ],
    "purpose": [
      "筛选",
      "过滤"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "交互式元素"
    ],
    "shape": [
      "无"
    ],
    "channel": [
      "无"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "任意"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 数值和趋势 big_number
  big_number: {
    "id": "numeric_trend_chart",
    "name": "数值和趋势",
    "alias": [],
    "def": "用于展示数值变化趋势的图表。",
    "family": [
      "折线图类"
    ],
    "purpose": [
      "趋势"
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "折线",
      "面积"
    ],
    "channel": [
      "位置",
      "颜色",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "Number"
        ]
      }
    ],
    "recRate": "推荐"
  },
  //数字 big_number_total
  big_number_total: {
    "id": "number",
    "name": "数字",
    "alias": [
      "数值"
    ],
    "def": "一种基本的数据类型，用于表示数值。",
    "family": [
      "基本数据类型"
    ],
    "purpose": [
      "数量",
      "大小",
      "比例",
      "计算"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "数据类型"
    ],
    "shape": [
      "无"
    ],
    "channel": [
      "位置",
      "长度",
      "大小",
      "颜色",
      "标签",
      "角度"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "Number"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 世界地图 world_map
  world_map: {
    "id": "world_map",
    "name": "世界地图",
    "alias": [],
    "def": "用于展示世界各地地理信息的图表。",
    "family": [
      "地图类"
    ],
    "purpose": [
      "地理信息",
      "全球视角"
    ],
    "coord": [
      "地理坐标系"
    ],
    "category": [
      "地理信息图表"
    ],
    "shape": [
      "面",
      "点",
      "线"
    ],
    "channel": [
      "位置",
      "颜色",
      "标签",
      "符号"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "地理信息"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 中国地图 china_map
  china_map: {
    "id": "china_map",
    "name": "中国地图",
    "alias": [],
    "def": "用于展示中国各地地理信息的图表。",
    "family": [
      "地图类"
    ],
    "purpose": [
      "地理信息",
      "特定区域视角"
    ],
    "coord": [
      "地理坐标系"
    ],
    "category": [
      "地理信息图表"
    ],
    "shape": [
      "面",
      "点",
      "线"
    ],
    "channel": [
      "位置",
      "颜色",
      "标签",
      "符号"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "地理信息"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 桑基图 sankey
  sankey: {
    "id": "sankey",
    "name": "桑基图",
    "alias": [],
    "def": "用于展示流量或能量等的图表。",
    "family": [
      "流程图类"
    ],
    "purpose": [
      "流量",
      "能量"
    ],
    "coord": [
      "无"
    ],
    "category": [
      "流程图表"
    ],
    "shape": [
      "线段"
    ],
    "channel": [
      "位置",
      "宽度",
      "颜色",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": "*",
        "fieldConditions": [
          "数字"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 箱线图 box_plot
  box_plot: {
    "id": "box_plot",
    "name": "箱线图",
    "alias": [
      "盒须图"
    ],
    "def": "用于展示数据分布情况的图表。",
    "family": [
      "分布图类"
    ],
    "purpose": [
      "数据分布",
      "异常值"
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "统计图表"
    ],
    "shape": [
      "矩形框",
      "线段",
      "圆圈",
      "星号"
    ],
    "channel": [
      "位置",
      "长度",
      "颜色",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": "*",
        "fieldConditions": [
          "数字"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 散点图 bubble
  bubble: {
    "id": "bubble",
    "name": "散点图",
    "alias": [],
    "def": "用于展示两个变量之间关系的图表。",
    "family": [
      "关系图类"
    ],
    "purpose": [
      "变量关系",
      "趋势"
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "关系图表"
    ],
    "shape": [
      "点",
      "符号"
    ],
    "channel": [
      "位置",
      "颜色",
      "大小",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": 3,
        "fieldConditions": [
          "数字"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // 双周组合图 "mixed_chart"
  mixed_chart: {
    "id": "mixed_chart",
    "name": "双周组合图",
    "alias": [],
    "def": "一种将两个不同时间段内的数据进行对比的图表。",
    "family": [
      "关系图类"
    ],
    "purpose": [
      "时间对比",
      "趋势"
    ],
    "coord": [
      "双周坐标系"
    ],
    "category": [
      "时间序列图表"
    ],
    "shape": [
      "线段",
      "点"
    ],
    "channel": [
      "位置",
      "颜色",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": 2,
        "fieldConditions": [
          "数字"
        ]
      }
    ],
    "recRate": "推荐"
  },
  // heatmap 热力图
  heatmap: {
    "id": "heatmap",
    "name": "热力图",
    "alias": [],
    "def": "用于展示数据分布情况的图表。",
    "family": [
      "分布图类"
    ],
    "purpose": [
      "数据分布",
      "趋势"
    ],
    "coord": [
      "直角坐标系"
    ],
    "category": [
      "分布图表"
    ],
    "shape": [
      "颜色渐变"
    ],
    "channel": [
      "位置",
      "颜色",
      "标签"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": 3,
        "fieldConditions": [
          "数字"
        ]
      }
    ],
    "recRate": "推荐"
  }
}
const Des = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const dataOther = props.data
    if (!dataOther) return

    const arr = Object.keys(dataOther).map((key) => {
      const o = {}
      switch (key) {
        case 'id':
          o.name = 'id'
          o.value = dataOther[key]
          break;
        case 'name':
          o.name = '名称'
          o.value = dataOther[key]
          break;
        case 'alias':
          o.name = '别名'
          o.value = dataOther[key].join('、')
          break;
        case 'family':
          o.name = '图表大类'
          o.value = dataOther[key].join('、')
          break;
        case 'def':
          o.name = '定义'
          o.value = dataOther[key]
          break;
        case 'category':
          o.name = '图形类别'
          o.value = dataOther[key].join('、')
          break;
        case 'purpose':
          o.name = '分析目的'
          o.value = dataOther[key].join('、')
          break;
        case 'coord':
          o.name = '坐标系'
          o.value = dataOther[key].join('、')
          break;
        case 'shape':
          o.name = '形状'
          o.value = dataOther[key].join('、')
          break;
        case 'channel':
          o.name = '视觉通道'
          o.value = dataOther[key].join('、')
          break;
        case 'dataPres':
          const arrStr = []
          o.name = '所需数据条件'


          dataOther[key].forEach((item) => {
            let str = ''
            const { minQty, maxQty, fieldConditions } = item
            if (minQty === maxQty) {
              str = `有且只有${minQty}个`
            } else if (maxQty === '*') {
              str = `有${minQty}到无限个`
            } else {
              str = `有${minQty}到${maxQty}个`
            }

            str += fieldConditions.join('或')
            str += '字段'
            arrStr.push(str)
          })
          o.value = arrStr.join('、')


          break;
        default:
          o.name = '推荐评级'
          o.value = '推荐'
          break;
      }
      return o
    })
    setData(arr)
  }, [props.data])
  return (<List
    size="small"
    bordered
    dataSource={data}
    renderItem={(item) => <List.Item className='item'>
      {`${item.name}：${item.value}`}
    </List.Item>}
  >

  </List>)
}

const CBK = function () {
  const data = Object.keys(zhCompletedKB).map((key) => {
    return zhCompletedKB[key]
  })
  return (
    <List
      itemLayout='vertical'
      grid={{ gutter: 6, column: 6 }}
      size="small"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item className='item'>
        <Popover placement="left" title={item.name} content={<Des data={item}></Des>} trigger="hover">
          {item.name}
        </Popover>
      </List.Item>}
    />
  )
}

export default CBK