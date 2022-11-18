import axios from 'axios'
import actiontypes from '../actiontypes'

export const getIssues = () => {
  return async dispatch => {
    dispatch(loading(true))
    
    try {
      const res = await axios.get('https://localhost:7283/api/Issues')
      dispatch(setIssues(res.data))
    }
    catch (err) {
      dispatch(issuesFailure(err.message))
    }
  }

}

const loading = (payload) => {
  return {
    type: actiontypes().issues.loading,
    payload
  }
}

const setIssues = (issues) => {
  return {
    type: actiontypes().issues.setIssues,
    payload: issues
  }
}

const issuesFailure = (payload) => {
  return {
    type: actiontypes().issues.failure,
    payload
  }
}

