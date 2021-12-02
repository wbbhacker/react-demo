import { dataSource } from './data'
import { useTablePipeline, features, BaseTable } from 'ali-react-table'
import { useState } from 'react'

// const dimension = ['gender']
// const metrics = ['学生贷款']


function generateColumn(dataColumns) {
  const columns = []
  dataColumns.forEach((item) => {

    const col = {}
    switch (item) {
      case 'gender':
        break;
      case '__timestamp':
        col['getCellProps'] = (value, record, rowIndex) => {
          if (rowIndex === 0) {
            return {
              rowSpan: 2
            }
          }
          if (rowIndex === 2) {
            return {
              rowSpan: 10
            }
          }
        }
        break;
      default:
        break;
    }
    col.code = item
    col.name = item
    col.features = {
      sortable: true,
      autoRowSpan: true
    }
    columns.push(col)
  })
  return columns
}

export default function AliReactTable() {

  const [sorts, onChangeSorts] = useState([

    { code: '__timestamp', order: 'asc' },
  ])

  const onChange = function (o) {
    onChangeSorts(o)
    const res = [{ code: '__timestamp', order: 'asc' }]
    res.push(o)
    return res
  }

  const pipeline = useTablePipeline()
    .input({ columns: generateColumn(Object.keys(dataSource[0])), dataSource })
    .use(
      features.sort({
        mode: 'multiple',
        highlightColumnWhenActive: true,
        sorts,
        onChangeSorts: onChange,
      }),
    )

  return <BaseTable     {...pipeline.getProps()} />
}


