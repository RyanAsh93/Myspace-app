import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'

export default function PostForm(props) {
  const [ showForm, setShowForm ] = useState(false)
  const [ post, setPost ] = useState(props.post ? props.post : '')

  async function display(e) {
    console.log('clicked')
    const data = { post: post }
    if (props.id) {
      let res = await axios.put(`/api/posts/${props.id}}`, data)   // update method 'look in localhost:routes'
      props.edit(res.data)
  } else {
    let res = await axios.post(`/api/posts`, data) // create method 'look in localhost:routes'
    props.add(res.data)
  }
  }

  if (showForm) {
    console.log(showForm)
    return (
      <Form onSubmit={display}>
        <Form.Input 
          value={post}
          label={'post'}
          onChange={(e) => setPost(e.target.value)}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  } else {
    return <Button onClick={() => setShowForm(true)}>Show Form</Button>
  }
}
