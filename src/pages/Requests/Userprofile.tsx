import React, { useState } from 'react';
import { TextInput, Button, Group, Box, Title, Flex, Container, Modal, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Bottombar from "../../components/Bottombar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';

function Viewform() {

  // ... Existing code ...

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      // ... Existing initial values ...
      username: "",
      password: "",
      resetPassword: ""
    },
  });


  return (
    <>
      <NavbarSimpleColored />

      <Flex direction="column">
        <Title order={1} ml={340} my={40}>
          Profile
        </Title>

        <Container size="lg">
          <Paper style={{
            padding: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            
          }}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput style={{ paddingBottom: 30, width: '350px' }}
                label="Username"
                placeholder="Enter your username"
                {...form.getInputProps("username")}
              />

              <TextInput style={{ paddingBottom: 30, width: '350px' }}
                label="Password"
                placeholder="Enter your password"
                type="password"
                {...form.getInputProps("password")}
              />

              <TextInput
                label="Reset Password" style={{ paddingBottom: 30, width: '350px' }}
                placeholder="Enter your reset password"
                type="password"
                {...form.getInputProps("resetPassword")}
              />

            <TextInput style={{ paddingBottom: 30, width: '350px' }}
                label="Confirm Password"
                placeholder="Enter your password"
                type="password"
                {...form.getInputProps("resetPassword")}
              />

              <Group position="center">
                <Button color="primary.7" onClick={() => { navigate('/verifyapplication') }}>
                  Next
                </Button>
              </Group>
            </form>
          </Paper>
        </Container>
      </Flex>
    </>
  );
}

export default Viewform;
