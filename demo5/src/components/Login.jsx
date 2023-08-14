// eslint-disable-next-line no-unused-vars
import React from 'react'
import BG4 from '../assets/Images/BG4.jpg'
import Button from './Button'
import { useNavigate } from 'react-router-dom'


const Login=()=> {
  const navigate =useNavigate();
  return (
    <div style={{
        display:"flex",
        backgroundColor:"grey",
        height:"100vh",
        width:"100vw",
        justifyContent:"center",
        alignItems:"center",
        
    }}>
      <div style={{
        display:"flex",
        backgroundColor:"white",
        height:"60%",
        width:"80%",
        flexDirection:"row",
        border:"1px solid black",

      }}>
        <div style={{
          display:"flex",
          width:"50%",
          height:"100%",
          backgroundColor:"blue",
          border:"1px solid pink",
          
          }}><img style={{
            height:"100%",
            width:"100%",


          }} src={BG4} alt=''/>

        </div>
        <div style={{
          display:"flex",
          width:"50%",
          height:"100%",
          backgroundColor:"lightpink",
          border:"1px solid green",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          color:"black",


        }}>
          <div style={{
            display:"flex",
            height:"50%",
            width:"50%",

          }}>
            <form action=''>
              <span><h3>Write your name</h3></span>
              <input style={{
                display:"flex",
                // height:"10px",
                // weight:"24px",

              }}type='text' placeholder='Name' />
              <span><h3>Write your password</h3></span>
              <input type='text' placeholder='password'/> 
             <Button
             length="40%"
             title="Login"
             onPress={()=>navigate("/Homepage")}/>
            </form>

          </div>

        </div>

      </div>
        
    </div>
  )
}

export default Login

