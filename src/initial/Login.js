import React from 'react'
import LoginFormaFinal from './LoginFormaFinal'


const Login = () => {
  const funcionForma = (datos) => {
    console.log(datos)
  }
  return (
      <div>
        <h2>Dentro de Login</h2>
        <LoginFormaFinal onSubmit={funcionForma}/>
      </div>
  )
}

export default Login