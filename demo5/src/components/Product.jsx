import React, { useState } from 'react'
import Homepage from './Homepage'
import BG from '../assets/Images/BG.jpg'
import { Custmdiv } from './Custmdiv'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'



const Product=()=> {
  const{id}=useParams();
  const [data,setData]=useState();
  const [count,setCount]=useState(1);

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
        console.log(res.data);
        setData(res.data);
    });

 },[]);


  return (
    <div style={{
      display:"flex",
      backgroundColor:"white",
      height:"100%",
      width:"100%",
     }}>

      <div style={{
          display:"flex",
          backgroundColor:"whitesmoke",
          height:"100vh",
          width:"100vw",
          flexDirection:"column",
          alignItems:"center",
         }}>
          <div style={{
              display:"flex",
              height:"10%",
              width:"90%",
              flexDirection:"row",
              justifyContent:"space-between",
              // border:"2px solid black",
              fontSize:"0.8em",
              backgroundColor:"white",
              
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
                      height:"80%",width:"45%",justifyItems:"center",alignContent:"center",
                   }}>ACCOUNT
                  </button>
                  <button style={{
                      height:"80%",width:"40%",justifyItems:"center",alignContent:"center",
                      }}>CART
                  </button>

              </div>

            </div>
            <div style={{
              display:"flex",
              flexDirection:"row",
              backgroundColor:"lightcyan",
              justifyContent:"center",
              // border:"2px solid black",
              height:"122%",
              width:"60%",
              marginTop:"0.5%",
              marginRight:"0.5%",
             }}>
              <div style={{
              display:"flex",
              backgroundColor:"grey",
              // border:"1px solid black",
              height:"100%",
              width:"50%",
              // paddingLeft:"30px",
              justifyContent:"center",
              marginRight:"1.5%",



              }}><img style={{
                border:"2px solid black",
                
                
              }} 
              src={data?.thumbnail}/>
              
                

             </div>
             <div style={{
              display:"flex",
              border:"2px solid black",
              height:"100%",
              width:"50%",
              backgroundColor:"lightcyan",
              flexDirection:"column",

             }}>
              <div style={{
                display:"flex",
                // border:"1px solid green",
                height:"33%",
                width:"100%",
                color:"black",
                fontWeight:"bold",
                fontSize:"1.7em",
                flexDirection:"column",
                alignItems:"center",

              }}> {data?.title}
              <div style={{
                fontSize:"0.5em",
              }}>rating: {data?.rating}</div>

              </div>
              <div style={{
                display:"flex",
                // border:"1px solid pink",
                height:"15%",
                width:"100%",
                marginTop:"2px",
                color:"black",
                fontWeight:"bold",
                fontSize:"1.1em",
                alignItems:"center",

                
              }}> price: ${data?.price}.00
              

              </div>
              <div style={{
                display:"flex",
                // border:"1px solid black",
                height:"20%",
                width:"100%",
                marginTop:"2px",
                color:"black",
                fontWeight:"bold",
                fontSize:"1.2em",
              }}> get a discount of {data?.discountPercentage}%
              

              </div>
              <div style={{
                display:"flex",
                // border:"1px solid green",
                height:"28%",
                width:"100%",
                marginTop:"2px",
                flexDirection:"column",
              }}>
                <div style={{
                  display:"flex",
                  height:"50%",
                  width:"100%",
                  // border:"1px solid black",
                  justifyContent:"center",
                  alignItems:"center",
                  alignContent:"space-evenly",
                  flexDirection:"row",
                  


                 }}>
                  <div style={{
                    display:"flex",
                    height:"80%",
                    width:"60%",
                    flexDirection:"row",
                    // border:"1px solid pink",
                    borderRadius:"20px",
                    justifyContent:"center",

                  }}>
                    <div style={{
                      display:"flex",
                      flexDirection:"row",
                      border:"2px solid black",
                      width:"30%",
                      height:"80%",
                      borderRadius:"20px",
                      
                      
                      

                    }}>
                      <button style={{
                        color:"black",
                        backgroundColor:"darkgreen",
                        borderRadius:"20px",
                        width:"100%",
                        fontSize:"1.1em",

                        }}
                        onClick={()=>setCount((prevcount)=>prevcount-1)}>-</button>
                      

                    </div>
                    <div style={{
                        display:"flex",
                        height:"80%",
                        width:"30%",
                        // border:"1px solid blue",
                        alignContent:"center",
                        justifyContent:"center",
                        borderRadius:"20px",
                        

                      }}><button style={{
                        color:"black",
                        backgroundColor:"white",
                        borderRadius:"20px",
                        width:"100%",
                        }}>{count}</button>

                      </div>
                      <div style={{
                        display:"flex",
                        height:"80%",
                        width:"30%",
                        border:"2px solid black",
                        borderRadius:"20px",
                        
                        

                      }}><button style={{
                        color:"black",
                        backgroundColor:"darkgreen",
                        borderRadius:"20px",
                        width:"100%",
                        fontSize:"1.1em",
                      }}
                      onClick={()=>setCount((prevcount)=>prevcount+1)}>+</button>

                      </div>
                      

                  </div>
                  <div style={{
                    color:"black",
                    fontWeight:"bold",
                  }}> stocks remain: {data?.stock}</div>

                </div>
                <div style={{
                  display:"flex",
                  height:"50%",
                  width:"100%",
                  // border:"1px solid pink",
                  flexDirection:"row",
                }}>
                  <div style={{
                    display:"flex",
                    height:"100%",
                    width:"50%",
                    // border:"1px solid black",
                    justifyContent:"center",
                    alignItems:"center",
                  }}>
                    <button style={{
                      color:"white",
                      backgroundColor:"darkgreen",
                      height:"80%",
                      width:"90%",
                      justifyItems:"center",
                      borderRadius:"20px",
                    }}>Buy Now </button>

                  </div>
                  <div style={{
                    display:"flex",
                    height:"100%",
                    width:"50%",
                    // border:"1px solid blue",
                    justifyContent:"center",
                    alignItems:"center",
                   
                    
                  }}>
                    <button style={{
                      color:"darkgreen",
                      backgroundColor:"white",
                      width:"90%",
                      height:"80%",
                      alignItems:"center",
                      justifyItems:"center",
                      borderRadius:"20px",


                    }}>Add to Cart</button>

                  </div>

                </div>

              </div>

            </div>
            

          </div>
          <div style={{
            display:'grid',
            gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
            height:'60%',
            width:'80%',
            // border:"1px solid black",
            marginTop:"10px",
            color:"black",
            gap:"10px",
            

            
           }}>
            {data?.images.map((images,index)=>{
                return <Custmdiv data={images}/>
              })}
            </div>
      </div>
      
      
    </div>    


    
  )
}

export default Product