import React from 'react'
import './App.css';

const users = [
  {
    email: "h@gmail.com",
    password: "password"
  },
  {
    email: "ed@gmail.com",
    password: "123456"
  }
]

class App extends React.Component {
  render() {
    console.log(users)
    return (
      <div className="container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <input type="submit" value="Login" id="submit"></input>
        </form>
      </div>
    )
  }
}

export default App;
