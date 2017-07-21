// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { getDataAsync } from '../action/index'

let Location = ({name, handleClick}) =>
  <div>{name}</div>

const mapStateToProps = state => {
  return {
    name: state.location.name
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getDataAsync()) }
})

Location = connect(mapStateToProps, mapDispatchToProps)(Location)

export default Location
