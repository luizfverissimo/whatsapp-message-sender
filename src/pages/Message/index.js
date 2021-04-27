import React from 'react'
import { Link } from 'react-router-dom'

function Message() {
  return (
    <div>
      <h2>Hello Message Page</h2>
      <Link to='/'><a>Go to Contacts</a></Link>
    </div>
  )
}

export default Message
