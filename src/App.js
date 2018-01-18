import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './initial/Home.js'
import Login from './initial/Login.js'
import Signup from './initial/Signup.js'
import Post from './initial/Post.js'
import { connect } from 'react-redux' 
import AHeader from './auth/AHeader.js'

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

const App = (props) => {
  console.log(props.login)
  if(props.login!=null){
    return (
      <Router>
        <div>
          <AHeader/>
          <h2>Aut</h2>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route exact path="/post/:id" component={Post}/>
          <h2>Dentro de App</h2>
        </div>
      </Router>
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

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)