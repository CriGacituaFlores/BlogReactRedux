import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Post extends Component {

    componentDidMount() {
        this.props.dispatch1()
    }

    componentWillUnmount() {
        this.props.clear()
    }

    render() {
        return (
            <div>
                <h2>{this.props.error}</h2>
                <h4>{this.props.post.title}</h4>
                <h4>{this.props.post.body}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.showPost,
        error: state.errorPost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            console.log(ownProps.match.params.id);
            let id_post = parseInt(ownProps.match.params.id);
            axios.get(`https://blog-api-u.herokuapp.com/v1/posts/${id_post}`)
            .then(function(response){
                console.log(response)
                dispatch({type: 'GET_POST', data: response.data})
            })
            .catch(function(error){
                console.log(error)
                dispatch({type: 'ERROR_GET_POST'})
            })
        },
        clear: () => {
            dispatch({type: 'CLEAR_POST'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)