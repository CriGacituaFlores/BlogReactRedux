import React from 'react'
import ContactForm from './Form.js'
//import SignupFormV from './SignupFormV'
import SignupFormFinal from './SignupFormFinal'


const Signup = () => {
    const funcionForma = (datos) => {
        console.log(datos);
    }
    return (
        <div>
          <h2>Dentro de Signup</h2>
          <SignupFormFinal onSubmit={funcionForma} />
        </div>
        
    )
}

export default Signup