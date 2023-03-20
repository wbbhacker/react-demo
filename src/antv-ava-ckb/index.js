import React, { useEffect, useState } from 'react';
import { CKBJson } from '@antv/ckb';
import { Divider, List, Typography, Popover } from 'antd';
import './style.css'
const zhCompletedKB = CKBJson('zh-CN');


const Des = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataOther = props.data
    if (!dataOther) return
    console.log(`${dataOther['name']}:`)
    console.log(dataOther)
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
  console.log(zhCompletedKB)
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