// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const JWTToken = Cookies.get('jwt_token')
  if (JWTToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responseFetch = await fetch(url, options)
    const fetchedData = await responseFetch.json()
    if (responseFetch.ok === true) {
      setCookiesAndNavigateToHome(fetchedData.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={onClickLogin}>
        Login with sample Creds
      </button>
    </div>
  )
}

export default Login
