const actiontypes = () => {
  return {
    issues : {
      setIssues: 'SET_ISSUES',
      loading: 'LOADING',
      failure: 'ISSUES_FAILURE',
      addNewIssue: 'ADD_NEW_ISSUE'
    }
  }
}

export default actiontypes;