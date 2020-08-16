import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const DisplayItems = () => {
  let arr = new Array(10).fill(0);

  return (
    <div style = {container}>
      {arr.map(x =>
        <div>
        <div style = {listContainer}>
          <img style = {imageSize} src="https://averageus.files.wordpress.com/2014/04/24.jpg" />

          <div style = {infoContainer}>
            <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div style = {iconContainer}>
              <FontAwesomeIcon style = {icon} icon={faRulerCombined} />
              <div>12" 5' x 11" 4'</div>
              <FontAwesomeIcon style = {icon} icon={faDollarSign} />
              <div>12.12</div>
              <FontAwesomeIcon style = {icon} icon={faStar} />
              <div>3.4</div>
              <FontAwesomeIcon style = {icon} icon={faUser} />
            </div>
          </div>

        </div>
        </div>
      )}
    </div>
  )
}
const container = {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
}

const listContainer = {
  display:'flex',
  width:"95%",
  height:250,
  background:'hsla(220, 13%, 24%, 1)',
  borderRadius:3,
  margin:5,
  borderRadius:5,
  position:'relative'

}

const imageSize = {
  width:"30%",
  height:"100%",
  borderRadius:"5px 0px 0px 5px"
}

const infoContainer = {
  padding:10,
  position:'relative'
}

const iconContainer = {
  display:'flex',
  position:'absolute',
  bottom: 10,
  left:10,
}

const icon ={
  fontSize:19,
  padding:'0px 5px 0px 15px'
}
export default DisplayItems
