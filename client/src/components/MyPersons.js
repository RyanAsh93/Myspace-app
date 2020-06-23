import React from 'react'
import axios from 'axios'
import { Card, Divider, Image } from 'semantic-ui-react'

class MyPersons extends React.Component {
  state = { persons: [] }

  componentDidMount() {
    axios.get('/api/my_persons')
    .then((res) => this.setState({ persons: res.data }))
  }

  render() {
    const { persons, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { persons.map( person =>
          <Card key={person.id}>
            <Image src={person.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { person.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyPersons;
