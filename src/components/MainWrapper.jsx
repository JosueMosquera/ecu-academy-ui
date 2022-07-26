import React from 'react'

const MainWrapper = () => {
  return (
    <>
    <div style={{marginTop:10}}>
        <div className='container'>
        Componente
        <span>Login</span>
        </div>
        <div className='img-container' style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
        <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" style={{width:'50%',height:'50%'}}/>
        </div>
    
    </div>
    </>
  )
}

export default MainWrapper