import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IssuesView from './IssuesView'

const views = () => {
  return (
    <Routes>
      <Route path='/' element={ <IssuesView /> } />
    </Routes>
  )
}

export default views