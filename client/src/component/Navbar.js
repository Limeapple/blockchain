import React from 'react'

const Navbar = () => {
  return (
    <div style = {container}>
        <div style = {logo}>End Game </div>
        <ul style={list}>
          <li style = {listChild}><a style = {anchor} href="/">Marketplace</a></li>
          <li style = {listChild}><a style = {anchor} href="/sell">Sell</a></li>
          <li style = {listChild}><a style = {anchor} href="/helpandcontact">Help & Contact</a></li>
        </ul>
    </div>
  )
}

const container = {
  width:"100vw",
  background:'hsla(220, 13%, 23%, 1)',
  fontSize:16,
  display:'flex',

}

const list ={
  display:'flex',
  listStyle:'none',
  margin:0,
  width:"90%",
  justifyContent:'flex-end',
}

const logo = {
  padding:5
}

const listChild = {
  padding:"5px 30px 5px 0px",
  textDecoration:'none'
}

const anchor = {
  textDecoration:'none',
  color:'gray'
}
export default Navbar
