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
        border:"1px solid black",
        


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
                height:"90%",
                width:"90%"
            }} src={data.thumbnail}/>
        </div>

    </div>
  )
}      