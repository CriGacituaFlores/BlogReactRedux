import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class MyPosts extends Component {
    render() {
        return (
            <div>
                <h2>Mis posts</h2>
                <Link to={`/${this.props.login.id}/create`}>Crear posts</Link>
                <h2>Lista posts</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)