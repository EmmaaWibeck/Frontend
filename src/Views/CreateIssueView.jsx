import axios from 'axios'
import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreateIssueView = () => {

  const navigate = useNavigate()

  const loading = useSelector(state => state.issues.loading)

  const [customerId, setCustomerId] = useState(1)
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [customers, setCustomers] = useState([])

  const getCustomers = useCallback(async () => {
    const res = await axios.get('https://localhost:7283/api/Customers')
    setCustomers(res.data)
  }, [])

  useEffect(() => {
    getCustomers()
  }, [getCustomers, customers])

  const handleSubmit = async e => {
    e.preventDefault()

    const json = JSON.stringify({ subject, description, customerId })
    const res = await fetch('https://localhost:7283/api/Issues', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: json
    })
    console.log(await res.json);
    setSubject('')
    setDescription('')
    setCustomerId(0)
    navigate('/')
  }
  
  return (
    <div className='create-issue'>
      <h1>Create new issue</h1>
      <form onSubmit={handleSubmit} className=''>

          <div>
            <label className="form-label text-color" htmlFor="id">Kund</label>
            <select  className="form-control" onChange={(e) => setCustomerId(e.target.value)}>
              <option value={1} selected disabled> Ange en kund</option>
              {customers.map(customer => <option key={customer.id} value={customer.id}> {customer.firstName} {customer.lastName} </option>)}
            </select>
          </div> 

          <div>
            <label className="form-label text-color" htmlFor="subject">Subject</label>
            <input name='subject' type="text" id="subject" className="form-control" onChange={e => setSubject(e.target.value)} value={subject} required/>
          </div> 

          <div>
            <label className="form-label text-color" htmlFor="description">Description</label>
            <textarea name='description' type="text" id="description" className="form-control" onChange={e => setDescription(e.target.value)} value={description} required/>
          </div> 

          <div className='flex-end'>
            <button type="submit" className="btn form-control"> { loading ? 'Loading..' : 'Send' } </button>
          </div>

      </form>
    </div>
  )
}

export default CreateIssueView