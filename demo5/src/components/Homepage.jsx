import React, { useState } from 'react'
import axios from"axios"
import { useEffect } from 'react'
import Product from '../components/Product'
import Customdiv from '../components/Customdiv'
import BG from '../assets/Images/BG.jpg'
import BG1 from '../assets/Images/BG1.jpg'


const Homepage=()=> {
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            console.log(res);
            setData(res.data.products);
        });
    
    },[]);

    const [data,setData]=useState();
  return (
    <div style={{
        display:"flex",
        backgroundColor:"lightgrey",
        height:"100vh",
        width:"100vw",
     }}>

        <div style={{
            display:"flex",
            backgroundColor:"whitesmoke",
            height:"100%",
            width:"100%",
            flexDirection:"column",
            alignItems:"center",
         }}>
            <div style={{
                display:"flex",
                height:"8%",
                width:"90%",
                flexDirection:"row",
                justifyContent:"space-between",
                // border:"2px solid black",
                fontSize:"0.8em",
                
             }}>

                <div style={{
                    display:"flex",
                    color:"green",
                    

                 }}>
                    <img src={BG} alt=''/>
                    <h2>Shopcart</h2>

                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"20%",
                    height:"100%",
                    alignItems:"center",
                 }}>
                    
                    <button style={{
                        height:"80%",width:"40%",justifyItems:"center",alignContent:"center",
                    }}>ACCOUNT</button>
                    <button style={{
                        height:"80%",width:"40%",justifyItems:"center",alignContent:"center",
                        }}>CART</button>

                </div>

            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                backgroundColor:"lightcyan",
                justifyContent:"center",
                // border:"1px solid blue",
                height:"34%",
                width:"90%",
                marginTop:"0.5%",

             }}>
                <div style={{
                    display:"flex",
                    color:"green",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column",
                    fontFamily:"sans-serif",
                    
                 }}>
                    <h1>Grab Upto 50% off on 
                        Selected Mobile Devices</h1>
                        <div style={{
                            display:"flex",
                            
                        }}><span><button style={{
                        display:"flex",
                        color:"white",
                        backgroundColor:"green",
                        }}>Buy Now</button></span></div>
                    

                    

                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    paddingRight:"0.1%",
                 }}>
                    <img src={BG1} alt=''/>

                </div>


            </div>
            <div style={{
                display:"flex",
                color:"black",
                // border:"1px solid black",
                height:"8%",
                width:"90%",
                marginTop:"0.5%",
             }}>
                <h2>PRODUCTS</h2>

            </div>
           <div style={{
            display:'grid',
            gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
            height:'60%',
            width:'90%',
            // border:"1px solid black",
            marginTop:"10px",
            color:"black",
            gap:"20px",

            
           }}>
            {data?.map((post,index)=>{
                return <Customdiv data={post}/>
            })}
        </div>

    </div>
    </div>
  )
}

export default Homepage