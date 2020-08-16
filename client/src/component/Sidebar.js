import React from 'react'

const Sidebar = () => {
  return (
    <div style = {container}>
      <div>Category</div>
      <div>Storage</div>
      <div>Household Items</div>
      <div>Pet Care </div>
      
    </div>
  )
}

const container = {
  height:"92%",
  width:"16%",
  background:'hsla(220, 13%, 24%, 1)',
  padding:"15px 0px 10px 8px",

}
export default Sidebar
