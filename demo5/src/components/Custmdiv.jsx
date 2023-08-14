/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Custmdiv=(props)=> {
    const{data} =props;
  return (
    <div style={{
        display:"flex",
        height:"25vh",
        width:"60%",
        backgroundColor:"white",
        flexDirection:"column",
        alignItems:"center",
        fontFamily:"sans-serif",
        // border:"2px solid black",
        


     }}>
        <div style={{
            display:"flex",
            height:"100%",
            width:"100%",
            backgroundColor:"grey",
            justifyContent:"center",
            
            

        }}>
            <img style={{
                display:"flex",
                height:"110%",
                width:"120%",
                border:"2px solid black",
            }} src={data}/>
        </div>

    </div>
  )
}      