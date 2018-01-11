import React from 'react'
import { connect } from 'react-redux'


const Home = (props) => {

    const Posts = props.allPosts.map((post) => {
        return (
            <h2 key={post.id}>{post.title}</h2>
        )
    })

    return (
        <div>
          <h2>Dentro de Home</h2>
          {Posts}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        allPosts: state.allPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: () => {
            //dispatch()
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)