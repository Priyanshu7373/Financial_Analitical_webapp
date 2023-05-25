import React from 'react'
import Row1 from './Row1'
import Get_withdraw from './Get_withdraw'
import Row3 from './Row3'
import Nav from './Nav'
import "./index.css";
const Dashboard = () => {
  return (
    <>
       <Nav />
      <div className="container__1">
        <div className="row1 rows"><Row1 /></div>
        <div className="row2 rows">  </div>
        <div className="row3 rows"><Row3 /> </div>
      </div>  
    </>
  )
}

export default  Dashboard