import React, { Component } from 'react'
import './App.css'
import { Landing, Polygons, Quote } from './layouts'

class App extends Component {
  render() {
    return (
      <>
        <Landing />
        <Polygons />
        <Quote />
      </>
    )
  }
}

export default App
