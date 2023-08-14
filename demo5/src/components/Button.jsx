/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './Login';

const Button=(props)=> {
    const{title,onPress}=props;
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        width:"50%",
        justifyContent:"center",
    }}>
        <button 
        onClick={onPress} 
        style={{
            display:"flex",
            flexDirection:"column",
            marginTop:"15.90%",
            backgroundColor:"darkgreen",
            borderRadius:"20px",
            padding:"8",
            // height:"12%",
            // width:"5%", 
            
        }}>
            <span>{title}</span>

        </button>

    </div>
  )
}

export default Button