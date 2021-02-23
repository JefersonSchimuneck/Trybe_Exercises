import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return(
      <>
        <h3>Home</h3>
        <Link to="/login">Login</Link>
      </>
    )
  }
}

export default Home;