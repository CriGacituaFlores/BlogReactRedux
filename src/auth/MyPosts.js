import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';

class MyPosts extends Component {

    componentDidMount() {
        this.props.getPosts(this.props.login.id, this.props.login.jwt)
    }

    componentWillUnmount() {
        this.props.clear();
    }

    posts = () => {
        var misPosts;
        if(this.props.posts.length !== 0){
            misPosts = this.props.posts.map((p) => {
                return (
                    <div>
                        <Link to="#" key={p.id}>{p.title}</Link>
                        <br/>
                    </div>
                )
            })
        } else {
            misPosts = null
        }
        return misPosts
    }

    render() {
        return (
            <div>
                <h2>Mis posts</h2>
                <Link to={`/${this.props.login.id}/create`}>Crear posts</Link>
                <h2>Lista posts</h2>
                {this.posts()}
                {this.props.error}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        posts: state.personalPosts,
        error: state.errorPersonalPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (user_id, token) => {
            let config = { 'Authorization': 'Bearer' + token }
            axios.get(`https://blog-api-u.herokuapp.com/users/${user_id}/posts`, {
                headers: config
            }).then((response) => {
                console.log(response)
                dispatch({type: 'PERSONAL_POSTS', data: response.data})
            }).catch((error) => {
                console.log(error)
                dispatch({type: 'ERROR_PERSONAL_POSTS'})
            })
        },
        clear: () => {
            dispatch({type: 'CLEAR_PERSONAL_POSTS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)