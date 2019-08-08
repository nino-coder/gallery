import React from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import firebase from 'firebase';
import Album from './photobus07/Album';
import Gallery from './gallery';
import Gallery08 from './photobus08/Gallery08';
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class Secure extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default function AuthExample () {
  return (
    <BrowserRouter>
      <div>
        <AuthButton/>
        <ul>
          <li><Link to="/Album"></Link></li>
          <li><Link to="/Gallery"></Link></li>
          <li><Link to="/Gallery08"></Link></li>
        </ul>
       
    
    <Switch>
      {/* <Route exact path='/' component={Gallery} /> */}
      <PrivateRoute path='/Album' component={Album} />
      <PrivateRoute path='/Gallery08' component={Gallery08}/>
      <PrivateRoute path='/Gallery' component={Gallery}/>
    </Switch>
    

       
      </div>
      </BrowserRouter>
  )
}