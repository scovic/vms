import React, { FC } from 'react'
import { VisitRecord } from 'core'

interface PropTypes {
  visitRecord: VisitRecord
}

const VisitRecordTableRow: FC<PropTypes> = ({ visitRecord }) => {
  return (
    <tr>
      <td>{visitRecord.visitorInfo.getFirstName}</td>
      <td>{visitRecord.visitorInfo.getLastName}</td>
      <td>{visitRecord.gatekeeperInfo.getFirstName}</td>
      <td>{visitRecord.gatekeeperInfo.getLastName}</td>
      <td>{visitRecord.startVisitDateString}</td>
    </tr>
  )
}

export default VisitRecordTableRow
