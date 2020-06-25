import React from 'react'
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'

class Home extends React.Component {
  state = { persons: [] }

  componentDidMount() {
    axios.get('/api/persons')
    .then((res) => this.setState({ persons: res.data }))
  }

  sample = () => {
    const { persons } = this.state

    if (persons.length) {
      const index = Math.floor(Math.random() * persons.length)
      return persons[index]
    } else {
      return null;
    }
  }

  downVote = (id) => {
    const { persons } = this.state
    this.setState({ persons: persons.filter( p => p.id !== id ), })
  }

  upVote = (id) => {
    const { persons } = this.state
    axios.put(`/api/persons/${id}`)
    .then(() => this.setState({ persons: persons.filter( p => p.id !== id ), }))
  }

  render() {
    const person = this.sample()
    if (person) {
      return (
        <div>
          <br />
          <Header as='h1'color='blue' textAlign='center'>MySpace</Header>
          <br />
          <Card key={person.id}>
            <Image src={person.avatar} />
            <Card.Content>
              <Card.Header>
                {person.name}
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button color='red' icon basic onClick={() => this.downVote(person.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color='green' icon basic onClick={() => this.upVote(person.id)}>
                <Icon name="thumbs up" />
                </Button>
                <Button basic color='blue' onClick>Comments
                </Button>
            </Card.Content>
          </Card>
          <Link to='/my_persons'>
            <Button color='blue'>
              My Friends
            </Button>
          </Link>
        </div>
      )
    } else {
      return <Header textAlign='center' color='red'>No More Friends!</Header>
    }
  }
}

export default Home;
