import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Pagination from '../Pagination.js'
import { Link } from 'react-router-dom'

class Home extends Component {

  //se ejecuta solo una vez antes de cargar el DOM
  componentDidMount() {
    this.props.dispatch1()
  }

  //se ejecuta antes de que el componente deje de estar el DOM
  componentWillUnmount() {
    this.props.clear();
  }

  allPosts = () => {
    const Posts = this.props.allPosts.map((post) => {
      return (
          <Link to={`/post/${post.id}`} key={post.id}>
            <h4 key={post.id}>{post.title}</h4>
          </Link>
      )
    })

    return Posts
  }

  render(){
    return(
        <div>
            <h2> hola nuevo componente</h2>
            <Pagination />
            {this.allPosts()}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            //dispatch()
            axios.get('https://blog-api-u.herokuapp.com/v1/posts')
              .then(function(response){
                console.log(response)
                dispatch({type: 'DATA_LOADED', data: response.data})
              })
              .catch(function(error){
                console.log(error)
              })
        },
        clear: () => {
          dispatch({type: 'CLEAR_DATA'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)