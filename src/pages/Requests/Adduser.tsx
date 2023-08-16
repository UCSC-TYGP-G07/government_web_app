import React, { useState } from 'react';
import { Container, Paper, Input, Button, TextInput } from '@mantine/core';
import Navbar from "../../components/Navbar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';


const Adduser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const addUser = () => {
    // Here you can perform the logic to add the user using the provided username and password.
    console.log('Added user:', { username, password });
  };

  return (
<>

<NavbarSimpleColored />
    {/* <Navbar showProfileButton={true} /> */}
    <Navbar showProfileButton={true} />

    <Container size="md" mt={50}>
      <Paper
        style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }} // Adjust padding here
        shadow="xs" 
      >
        <h2>Add User</h2>
        <TextInput
        mt={10}
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
          required
        />
        <TextInput
        mt={10}
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <center>
        <Button mt={10} variant="filled" color="primary.7" onClick={() => ('/form')}>
                Submit
              </Button>
              </center>
      </Paper>
    </Container>
    </>
  );
};

export default Adduser;
