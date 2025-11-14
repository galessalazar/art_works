import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div style={{margin: '150px', textAlign: 'center'}}>


        <h1>
          404 - Page Not Found
        </h1>
        <p>Aww boo</p>
        <Link to='/'>Go back to Home</Link>
    </div>
  )
}


export default NotFoundPage