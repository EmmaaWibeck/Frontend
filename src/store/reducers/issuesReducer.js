import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const issuesReducer = ( state = initState, action ) => {
  switch(action.type) {
    case actiontypes().issues.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().issues.setIssues:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().issues.failure:
      return {
        data: [],
        loading: false,
        error: action.payload
      }

    case actiontypes().issues.addNewIssue:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default issuesReducer;