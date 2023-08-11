import React from 'react';
import { RiCheckLine } from 'react-icons/ri';
import { Button, Title, Flex, Menu, Avatar, Container, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import img from "../../assets/masha.jpeg";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored.tsx';


const VerifyImage: React.FC = () => {
    const navigate = useNavigate();

  const handleNextClick = () => {
    // Add any logic you need before navigating to the "Otherapplication" page
    // For example, you can perform data validation or any other checks

    // Navigate to the "Otherapplication" page
    navigate('/Otherapplication');
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

      
    <div>
    <Flex direction="column" align="center">
    <Title order={1} align="center" my={60}>
      Validity of Photo
    </Title>

    <Container size="md" >
      <Paper style={{padding: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "20px", backgroundColor: '#F1F2F6'}} shadow="md">
    
      <div 
        style={{
          border: '2px solid #000',
          borderRadius: '8px',
          padding: '10px',
          width: '300px',
          height: '300px',
          margin: '20px auto',
        }}
      >
        {/* Replace the image source below with the URL or path of your photo */}
        <img
          src={img}
          alt="User's Photo"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RiCheckLine size={30} color="#00FF00" />
        <p style={{ marginLeft: '10px', color: '#00FF00' }}>Photo Verified</p>
        
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* <Button onClick={handleNextClick}>Next</Button> */}
       <Button variant='filled' color='#758BFD' onClick={() => {navigate('/verifyapplication')}}>Next</Button>

      </div>
      </Paper>
      </Container>
    </Flex>

    </div>
    {/* <Bottombar /> */}
    </>
  );
};

export default VerifyImage;
