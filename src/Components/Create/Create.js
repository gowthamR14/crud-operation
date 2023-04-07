import React, { useState } from 'react'
import { API_URL } from '../../Constants/URL'
import { Form, Button, Checkbox, FormField } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Create() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()
  const postData = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    })
    navigate('/read')
  }
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
        <Button onClick={postData}>Submit</Button>
      </FormField>
    </Form>
  )
}

export default Create
