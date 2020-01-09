import React, { FC } from 'react'
import { StateType } from 'core'

import VisitRecordTableRow from './VisitRecordTableRow'

interface PropTypes {
  visitRecords: StateType['visitRecords']
}

const VisitRecordTable: FC<PropTypes> = ({ visitRecords }) => {
  if (!visitRecords || visitRecords.length === 0) {
    return <p>No visit records to show</p>
  }

  return (
    <table>
      <tbody>
        {visitRecords.map((record, index) => <VisitRecordTableRow key={index} visitRecord={record} />)}
      </tbody>
    </table>
  )
}


export default VisitRecordTable