import React, { useState, useEffect } from 'react'
import { Form, Button, Checkbox, FormField } from 'semantic-ui-react'
import { API_URL } from '../../Constants/URL'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Update() {
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const updateUser = async () => {
    await axios.put(API_URL + '/' + id, {
      firstName,
      lastName,
      checked,
    })
    navigate('/read')
  }
  useEffect(() => {
    setId(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('FirstName'))
    setLastName(localStorage.getItem('LastName'))
    setChecked(localStorage.getItem('Checked'))
  }, [])
  return (
    <Form className="form">
      <FormField>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter The First Name"
        />
      </FormField>
      <br />
      <FormField>
        <label>Last Name</label>
        <input
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          placeholder="Enter The Last Name"
        />
      </FormField>
      <br />
      <FormField>
        <Checkbox
          onChange={() => setChecked(!checked)}
          checked={checked}
          label="Accept The Terms And Conditions"
        />
      </FormField>
      <br />
      <FormField>
        <Button onClick={updateUser}>Update</Button>
      </FormField>
    </Form>
  )
}

export default Update
