import React, { FC } from 'react'
import { connect } from 'react-redux' 

import { 
  recordVisitAction, 
  visitRecordsSelector,
  StateType,
  VisitRecord
} from 'core'

import CreateVisitRecord from './CreateVisitRecord'
import VisitRecordTable from './VisitRecordTable'

interface Props {
  visitRecords: VisitRecord[] | null,
  dispatchRecordVisit: (firstName: string, lastName: string) => void
}

const App: FC<Props> = (props) => {
  function createVisitRecord (firstName: string, lastName: string) {
    props.dispatchRecordVisit(firstName, lastName)
  }

  return (
  <>
    <CreateVisitRecord onClick={createVisitRecord} />
    <VisitRecordTable visitRecords={props.visitRecords} />
  </>
  )
}

function mapStateToProps (state: StateType) {
  return {
    visitRecords: visitRecordsSelector(state)
  }
}

const mapDispatchToProps = {
  dispatchRecordVisit: recordVisitAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
