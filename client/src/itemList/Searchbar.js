import React from 'react'

const Searchbar = () => {
  return (
    <div style = {container}>
      <input style = {searchbar} type="text" placeholder="Search..." />
    </div>
  )
}
const container = {
    display:'flex',
    justifyContent:'center',
    marginBottom:30
}

const searchbar = {
  marginTop:'2%',
  padding:7,
  width:450,
  fontSize:18,
  borderRadius:5,
  border:'none',
  background:'hsla(220, 13%, 24%, 1)',

}
export default Searchbar
