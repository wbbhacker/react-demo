import { Table } from 'antd'
import { data } from './data'
import { useState } from 'react';
import './style.css'


export default function AndtTree() {
  const [max, setMax] = useState({})
  const [deepNumber, setDeepNumber] = useState(0)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => {
          if (a['name'] === null) a['name'] = ''
          if (b['name'] === null) b['name'] = ''
          let x1 = a['name'].toUpperCase();
          let x2 = b['name'].toUpperCase();
          if (x1 < x2) {
            return -1;
          }
          if (x1 > x2) {
            return 1;
          }
          return 0;
        }
      }
    },
  ];

  for (let i = 0; i < data.colnames.length; i++) {
    let colname = data.colnames[i]
    let col = {
      title: colname,
      dataIndex: colname,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a[colname] - b[colname],
      render: function (text, record, index) {
        // console.log(deepNumber)
        // console.log(record)
        // console.log(text)
        let arr = record['key'].match(/##/g)
        let num = arr === null ? 0 : arr.length

        if (num === deepNumber) {
          let maxNum = data.other.max[deepNumber]
          return <div className="cell_text">
            <div className='cell_bg' style={{ width: `${Number(text) / Number(maxNum[colname]) * 100}%` }}>{text}</div>
            <span className='cell_name' >{text}</span>
          </div>
        }
        return text
      }
    }
    columns.push(col)
  }


  function cale(obj, key, expanded) {
    // key 结构为： 1、1-2、1-2-1、2、2-1、2-1-2等等
    let current = obj
    let currentKey = ''
    let arr = key.split('##')
    for (let i = 0; i <= arr.length - 1; i++) {
      // 计算当前key
      if (currentKey === '') {
        currentKey = arr[i]
      } else {
        currentKey = currentKey + '##' + arr[i]
      }

      if (current[currentKey] === undefined) {
        // 如果不存在则重新创建
        current[currentKey] = {
          value: expanded,
          children: {}
        }
      } else {
        if (i === arr.length - 1) {
          // 迭代到最后一个时、修改其value
          current[currentKey].value = expanded
        }
        current = current[currentKey].children  // 赋值下次玄幻current
      }
    }
    return obj
  }

  function caleDeep(obj, deep, deepNum) {
    let keys = Object.keys(obj)
    deep[deepNum] = true
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      if (obj[key].value) {
        deep = { ...deep, ...caleDeep(obj[key].children, {}, deepNum + 1) }
      }
    }
    return deep
  }
  function onChange(pagination, filters, sorter, extra) {
    // console.group('onChange')
    // console.log(pagination)
    // console.log(filters)
    // console.log(sorter)
    // console.log(extra)
    // console.groupEnd()
  }
  return <Table
    sticky
    columns={columns}
    onChange={onChange}
    // rowSelection={{ ...rowSelection, checkStrictly }}
    expandable={
      {
        onExpand: function (expanded, record) {
          const re = cale(max, record.key, expanded)
          const deeps = caleDeep(max, {}, 0)
          console.log(deeps)
          setDeepNumber(Object.keys(deeps).length - 1)
          setMax(re)
        }
      }
    }
    dataSource={data.data}
    summary={
      pageData => {
        return <>
          <Table.Summary.Row>
            <Table.Summary.Cell>合计</Table.Summary.Cell>
            {
              data.colnames.map((column) => {
                <Table.Summary.Cell>{data.other.total[column]}</Table.Summary.Cell>
              })
            }
          </Table.Summary.Row>
        </>
      }
    }
  />
}
