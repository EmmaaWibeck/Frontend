import React from 'react'
import '../App.css'

const issue = ({ issue }) => {

  return (
    <div className='issue'>
      <div className='sub-status'>
        <h2> {issue.subject} </h2>
        <p className='g-color '> Status: { issue.status.status } </p>
      </div>
      <p className='pb border-b'> { issue.description } </p>
      <small className='g-color mt '> Skapad av: { issue.customer.email } </small>
      <div > 
        <small className='g-color'> Skapat: { issue.created.slice(0,10) }</small> 
        <small className='g-color'> Kl: { issue.created.slice(11, 16) }</small> 
      </div>
    </div>

  )
}

export default issue