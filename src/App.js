import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import ContactsForm from './Components/ContactsForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Bernard',
          number: 201111111,
          location: 'Accra',
          id: '3454ght783ttt'
        },
        {
          name: 'Credo',
          number: 201111112,
          location: 'Tema',
          id: '3454ght783tt89'
        },
        {
          name: 'Faisal',
          number: 201111113,
          location: 'Teshie',
          id: '3454ght783t'
        },
        {
          name: 'Godwin',
          number: 201111114,
          location: 'Osu',
          id: '3454t783ttt'
        },
        {
          name: 'Jeffrey',
          number: 201111115,
          location: 'La',
          id: '54ght783ttt'
        },
      ]
    }
  }
  handleAddUser = (user) => {
    user.id = Math.floor(Math.random() * 10000)
    this.setState({
      users: [...this.state.users, user],
    });
  }

  deleteContact = (id) => {
    let remainingContacts = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: remainingContacts
    })
  }
  editContact = (id, newInfo) => {
    this.setState({
      users: this.state.users.map(user => (user.id === id) ? newInfo : user)
    })
  }
  render() {
    return (
      <div className='to-do-app'>
        <Container fluid>
          <Row>
            <Col>
              <Stack gap={2} className="col-md-12 mx-auto">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Add Contact</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <ContactsForm newContact={this.handleAddUser} />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Stack></Col>
          </Row>

          <div>
            <Stack gap={2} className="col-md-12 mx-auto">
              <Contacts usersData={this.state.users} deleteContact={this.deleteContact} editContact={this.editContact} />
            </Stack>
          </div>

        </Container>
      </div>

    );
  }
}

export default App;
