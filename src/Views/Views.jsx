import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateIssueView from './CreateIssueView'
import IssuesView from './IssuesView'

const views = () => {
  return (
    <Routes>
      <Route path='/' element={ <IssuesView /> } />
      <Route path='/create' element={ <CreateIssueView /> } />
    </Routes>
  )
}

export default views