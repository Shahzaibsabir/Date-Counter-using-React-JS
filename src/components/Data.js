 import React, { useState } from 'react'

export default function Data() {


    const [values, setValues] = useState(0)
    
    const numAdd = () =>{

        
        setValues((val)=> val+1)
        
    }
    const numMinus = () =>{

        setValues((val)=> val-1)      
            
    }

    const secondval = () =>{
      

        setValues((values) => 0+values)       
            
    }

    
    return (
        <>
            <div className='container ' style={{ height: "200px", width: "500px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>


               
                


                <button onClick={numMinus} type="button" class="btn btn-outline-info" style={{ fontSize: "50px", fontWeight: "bold" }}>-</button>
                <h1 style={{ fontSize: "50px", backgroundColor: "white", color: "black", width: "80px", height: "80px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }} >{values}</h1>
                <button onClick={numAdd} type="button" class="btn btn-outline-info" style={{ fontSize: "50px", fontWeight: "bold" }}>+</button>

            </div>
            
            

            <div className='container ' style={{ height: "10px", width: "500px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>



           
   

                <h1 style={{ fontSize: "50px", backgroundColor: "white", color: "black", width: "80px", height: "80px", borderRadius: "20%", display: "flex", justifyContent: "center", alignItems: "center" }} >{0}</h1>

            </div>


            {/* increment or Decrement buttons */}
            <div className='mt-4 pt-3'>
                <button style={{ fontWeight: "bold" }} type="button" class="btn btn-outline-danger btn-lg">Decrement <br></br>(-)</button>
                <button onClick={secondval} style={{ fontWeight: "bold" }} type="button" class="btn btn-outline-success  btn-lg m-4">Increment <br></br>(+)</button>

            </div>



        </>
    )

  
}
