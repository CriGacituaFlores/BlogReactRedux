import React from 'react'
import ToCreateForm from './ToCreateForm.js'
import axios from 'axios';
import { connect } from 'react-redux'
import { reset } from 'redux-form'

const ToCreate = (props) => {

    const manejoDeForma = (data) => {
        console.log(data)
        let config = { 'Authorization': 'Bearer' + props.login.jwt}
        axios.post('https://blog-api-u.herokuapp.com/v1/posts', {
            post: {
                title: data.title,
                body: data.body
            }
        },
        {
            headers: config
        }
        ).then((response) => {
            console.log(response)
            props.creado()
        }).catch((error) => {
            console.log(error)
            props.error()
        })
    }

    return (
        <div>
            <h2>Crear post</h2>
            <h4>{props.mensaje}</h4>
            <ToCreateForm onSubmit={manejoDeForma}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        mensaje: state.created
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        creado: () => {
            dispatch(reset('ToCreateForm'));
            dispatch({ type: 'CREATED_' })
        },
        error: () => {
            dispatch({ type: 'ERROR_CREATED_' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToCreate)