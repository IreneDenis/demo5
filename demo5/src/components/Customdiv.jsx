import React from 'react'
import Product from './Product';

const Customdiv=(props)=> {
    const{data} =props;
  return (
    <div style={{
        display:"flex",
        height:"50vh",
        width:"100%",
        backgroundColor:"white",
        flexDirection:"column",
        alignItems:"center",
        fontFamily:"sans-serif"
        


    }}>
        <div style={{
            display:"flex",
            height:"100%",
            width:"100%",
            backgroundColor:"lightcyan",
            justifyContent:"center"

        }}><a style={{
            display:"flex",
            height:"100%",
            width:"100%",
            backgroundColor:"lightcyan",
            justifyContent:"center"
        }} href={`/Product/${data.id}`}><img style={{
            display:"flex",
            height:"90%",
            width:"90%"
        }} src={data.thumbnail}/></a>
            
        </div>
        <div style={{
            display:"flex",
            flexDirection:"column",
            height:"38%",
            width:"90%"

        }}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }}>
                <div>{data.title}</div>
                <div>${data.price}.00</div>
            </div>
            <div>get a discount of {data.discountPercentage}%</div>

        </div>
        <div style={{
            display:"flex",
            height:"10%",
            width:"90%",
            justifyContent:"center"
        }}>
            <button style={{
                borderRadius:"20px"
            }}>Add to Cart</button>

        </div>

    </div>
  )
}

export default Customdiv