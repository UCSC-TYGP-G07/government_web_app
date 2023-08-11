import React from 'react';
import { Button, Textarea, useMantineTheme, Flex, Title, Menu, Container, Avatar } from '@mantine/core';
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored.tsx';


const RejectionForm: React.FC = () => {
  const theme = useMantineTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const rejectionNote = (form.elements.namedItem('rejection_note') as HTMLTextAreaElement).value;
    // You can perform any desired action with the rejectionNote, for example:
    console.log('Rejection Note:', rejectionNote);
  };

  return (
    <>
    {/* <Navbar /> */}
    {/* <Navbar showProfileButton={false} /> */}

    <NavbarSimpleColored />

    <Container style={{ position: 'relative' }}>
        <Menu>
          <Menu.Target>
            {/* Example: Profile button */}
            <Avatar
              radius="xl"
              color='#27187E'
              style={{
                position: 'absolute',
                top: '20px',
                right: '-450px',
                cursor: 'pointer',
                
              }}
            >
              SA
            </Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            {/* Profile menu items */}
            <Menu.Label>User's Name</Menu.Label>
            <Menu.Item>User account page</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Sign out</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Container>
<br /><br />
    <form onSubmit={handleSubmit} style={{width: '70%', marginLeft: 370}}>
    <br /><br />
      <Textarea
        id="rejection_note"
        name="rejection_note"
        label="Rejection Note:"
        placeholder="Enter your rejection note here..."
        style={{ marginBottom: theme.spacing.xs, resize: 'vertical'}}
      />
      <br />
      <Button type="submit">Send</Button>
    </form>
    {/* <Bottombar /> */}
    </>
  );
};

export default RejectionForm;
