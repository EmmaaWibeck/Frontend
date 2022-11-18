import React from 'react'
// import { Link } from 'react-router-dom'

const issue = ({ issue }) => {
  return (
    <div className='issue'>
      <h2> {issue.subject} </h2>
      <p> { issue.description } </p>
    </div>
  )
}

export default issue