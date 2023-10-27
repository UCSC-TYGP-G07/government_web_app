import React from 'react';
import { Container, Menu, Avatar, Title, Group, Flex, Image, Text  } from '@mantine/core';
import logo from "../assets/logo-no-background.png";
import { useNavigate } from 'react-router-dom';


interface NavbarProps {
  showProfileButton: boolean;
  // pageTitle: string;
}

function Navbar({ showProfileButton  }: NavbarProps) {
  const navigate = useNavigate();

  return (   
      <div>
      {showProfileButton && (

        <div
      style={{
        backgroundColor: '#e9edff', // Blue background color
        color: '#fff', // White text color
        // padding: '5px ', // Vertical padding
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
        >

    {/* <div>
      <Title order={1} align="center" my={20} style={{marginLeft: 30, fontSize: 30, color: '#27187E'}}>
          {pageTitle}
      </Title>
    </div> */}

        <Group>
          
          <Flex ml={10} mt={5} p={12}>
              <Image maw={40} src={logo} alt='OneId logo'/>
              <Text ml={15} mb={10} fw={50} mt={7} style={{fontSize: 18, color: '#27187E', fontWeight: 'bold' }}> GOVERNMENT</Text>
          </Flex> 
          
          </Group>

        <Container style={{marginRight: 10, padding: 10}}>
          <Menu>
            <Menu.Target>
              {/* Example: Profile button */}
              <Avatar radius="xl" color="primary.7" style={{backgroundColor: 'black'}}>
                DRP
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              {/* Profile menu items */}
              <Menu.Label> Department for Registration of Persons</Menu.Label>
              <Menu.Item onClick={() => {navigate('/profile')}}>User Profile</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Container>
    </div>

      )}
      </div>
  );
}
export default Navbar;
