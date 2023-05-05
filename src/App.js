import React, { Component } from 'react';
import Users from './Components/Contacts';
import UserForm from './Components/ContactsForm';
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
      items: [
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
        
        id: '3454ght783ttt'
         },
         {
           name: 'Faisal',
           number:201111113,
           location: 'Teshie',           
          id: '3454ght783t'
        },
         {
           name: 'Godwin',
          number: 201111114,
           location: 'Osu',           
          id: '3454t783ttt'
         },
        //  {
        //    name: 'Jeffrey',
        //    number: 201111115,
        //    location: 'La',
        //    id: '54ght783ttt'
        //  },
      ]
    };
  }
  handleAddUser = (addNewUser) => {
    addNewUser.id = Math.floor(Math.random() * 10000)
    this.setState({
      items: [...this.state.items, addNewUser],
    });
  }

  deleteContact = id => {
    const remainingContacts = this.state.items.filter((items) => items !== id)
    this.setState({
      items: remainingContacts
    })
  }

  render() {
    return (
      <div className='to-do-app'>
        <Container fluid>
          <Row>
            <Col>
            <Stack gap={2} className="col-md-10 mx-auto">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Add Contact</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <UserForm newUser={this.handleAddUser} />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack></Col>
          </Row>
       
          <div>
            <Stack gap={2} className="col-md-10 mx-auto">
              <Users items={this.state.items} deleteContact={this.deleteContact} />
            </Stack>
          </div>
          
        </Container>
        </div>
      
    );
  }
}

export default App;
