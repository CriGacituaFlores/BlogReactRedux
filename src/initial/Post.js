import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Post extends Component {

    componentDidMount() {
        this.props.dispatch1()
    }

    render() {
        return (
            <h2>Post</h2>
        )
    }
}

const mapStateToProps = (state) => {
    return {

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
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)