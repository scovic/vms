import React, { Component } from 'react'

interface AppState {
  firstName: string,
  lastName: string
}

interface Props {
  onClick: (firstName: string, lastName: string) => void
}

class CreateVisitRecord extends Component<Props, AppState> {
  constructor (props: any) {
    super(props)

    this.state = {
      firstName: '',
      lastName: ''
    }

    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  onChangeFirstName (e: any) {
    this.setState({ firstName: e.target.value })
  }

  onChangeLastName (e: any) {
    this.setState({ lastName: e.target.value })
  }

  handleClick () {
    this.props.onClick(this.state.firstName, this.state.lastName)
  }

  render () {
    return <div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ padding: '5px' }}>First Name</label>
        <input value={this.state.firstName} onChange={this.onChangeFirstName} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ padding: '5px' }}>Last Name</label>
        <input value={this.state.lastName} onChange={this.onChangeLastName} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={this.handleClick}>
          Create Visit Record
        </button>
      </div>
    </div>
  }
}

export default CreateVisitRecord
