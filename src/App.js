import React, { Component } from 'react'
import './App.css'
import { Landing, Polygons, Quote, Contact, Footer } from './layouts'

class App extends Component {
  render() {
    return (
      <>
        <Landing />
        <Polygons />
        <Quote />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default App
