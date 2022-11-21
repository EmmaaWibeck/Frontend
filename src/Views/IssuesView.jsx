import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIssues } from '../store/actions/issuesAction'
import Issue from '../components/issue'

const IssuesView = () => {

  const dispatch = useDispatch()
  const { data: issues, loading, error } = useSelector(state => state.issues)

  useEffect (() => {
    dispatch(getIssues())
  }, [dispatch])


  return (
    <div>
      { loading && <p> Loading..</p>}
      { error && <p> { error } </p>}
      { issues.map(issue => <Issue key={issue.id} issue={issue}/> ) }
    </div>
  )
}

export default IssuesView