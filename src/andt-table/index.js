
import { Table } from 'antd'
import data from './data'
import { useState, useEffect, useRef } from 'react'
import './antd.css'

data.forEach((item, index) => item.key = index)

function generateColumn(dataColumns, dataSource) {
  const columns = []
  const a = dealData(dataSource, dataColumns)

  dataColumns.forEach((item) => {
    const col = {}
    col.title = item
    col.dataIndex = item
    col.onHeaderCell = function (column) {
      console.log(column)
    }


    col.render = (text, row, index) => {
      return {
        children: text,
        props: {
          rowSpan: a[item][index]
        }
      }
    }
    setColumnSorter(col, dataColumns, dataSource[0])
    columns.push(col)
  })
  return columns
}



function setColumnSorter(obj, columnsName, dataFirst, indexLatitude) {
  // 设置列的排序
  const cname = obj.dataIndex
  obj.sorter = {}
  if (cname === '__timestamp' || cname === 'gender') {
    obj.sortDirections = ['ascend', 'descend', 'ascend']
    obj.sortOrder = 'ascend'
  }
  if (typeof dataFirst[cname] === 'string') {
    // 当列的内容为字符串时，按照字母顺序排序
    obj.sorter.compare = (a, b) => {
      if (a[cname] === null) a[cname] = ''
      if (b[cname] === null) b[cname] = ''
      let x1 = a[cname].toUpperCase();
      let x2 = b[cname].toUpperCase();
      if (x1 < x2) {
        return -1;
      }
      if (x1 > x2) {
        return 1;
      }
      return 0;
    }
  } else {
    obj.sorter.compare = (a, b) => {
      return a[cname] - b[cname]
    }
  }
  obj.sorter.multiple = columnsName.length - columnsName.indexOf(cname)
}


function dealData(dataSource, dataColumns) {
  let result = {}
  let Count = {}
  let prev = {}

  for (let i = 0; i < dataSource.length; i++) {
    const arr = []
    dataColumns.forEach((key) => {
      const value = dataSource[i][key]
      const index = i

      if (result[key] === undefined) result[key] = []
      if (Count[key] === undefined) Count[key] = index

      if (value !== prev[key]) {
        result[key][index] = 1
        Count[key] = index
        arr.push(false)
      } else {
        if (isTrue(arr) || arr.length === 0) {
          result[key][index] = 0
          result[key][Count[key]]++
          arr.push(true)
        } else {
          Count[key] = index
          result[key][index] = 1
          arr.push(false)
        }
      }

    })

    prev = dataSource[i]
  }
  return result
}

const columnsName = Object.keys(data[0]).filter(key => key !== 'key')


function isTrue(arr) {
  return arr.every(item => item)
}


function multiColumnSort(dataColumns, data) {
  data.sort((a, b) => {
    for (let i = 0; i < dataColumns.length; i++) {
      const key = dataColumns[i]
      if (a[key] !== b[key]) {
        if (typeof a[key] === 'string') {
          if (a[key] === null) a[key] = ''
          if (b[key] === null) b[key] = ''
          let x1 = a[key].toUpperCase();
          let x2 = b[key].toUpperCase();
          if (x1 < x2) return -1
          if (x1 > x2) return 1
          return 0
        } else {
          return a[key] - b[key]
        }
      }

    }
  })
  return data
}
console.log(multiColumnSort(columnsName, data))
export default function () {

  const [columns, setColumns] = useState(() => generateColumn(columnsName, data))

  useEffect(() => {
    // console.log(columns)
    // columns[0].sortOrder = 'descend'
    // setColumns(columns)
  }, [])

  const onChange = (pagination, filters, sorter, extra) => {
    const c = Object.keys(extra.currentDataSource[0]).filter(item => item !== 'key')
    setColumns(generateColumn(columnsName, extra.currentDataSource))
  }

  return <Table dataSource={data}
    columns={columns}
    pagination={false}
    onChange={onChange}

  ></ Table >

}
