import React from 'react'
import ContactForm from './Form.js'
import SignupFormV from './SignupFormV'


const Signup = () => {
    const funcionForma = (datos) => {
        console.log(datos);
    }
    return (
        <div>
          <h2>Dentro de Signup</h2>
          <SignupFormV onSubmit={funcionForma} />
        </div>
        
    )
}

export default Signup