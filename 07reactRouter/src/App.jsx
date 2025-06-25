import { useState } from 'react'
import {Header, Footer, Home} from "./components"
import {Outlet} from 'react-router-dom' 

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
