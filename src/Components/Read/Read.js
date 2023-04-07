import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { API_URL } from '../../Constants/URL'
import { useNavigate } from 'react-router-dom'

function Read() {
  const [resData, setResData] = useState([])
  const navigate = useNavigate()

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('FirstName', firstName)
    localStorage.setItem('LastName', lastName)
    localStorage.setItem('Checked', checked)
    navigate('/update')
  }
  const deleteUser = async (id) => {
    await axios.delete(API_URL + '/' + id)
    callGetApi()
  }
  const callGetApi = async () => {
    const resp = await axios.get(API_URL)
    setResData(resp.data)
    console.log(resp.data, '------>')
  }

  useEffect(() => {
    callGetApi()
  }, [])
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {resData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? 'checked' : 'Not Checked '}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => updateUser(data)}>Update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default Read
