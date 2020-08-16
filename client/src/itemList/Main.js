import React from 'react'
import Searchbar from './Searchbar'
import DisplayItems from './DisplayItems'
const Main = () => {
  return (
    <div style = {container}>
      <Searchbar />
      <DisplayItems />
    </div>
  )
}

const container = {
  height:"100%",
  width:"84%",
  background:'hsla(220, 13%, 18%, 1)',
  overflow:'auto'
}

export default Main
