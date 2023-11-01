
import {Box, Button, Container, Flex, Image, Text, TextInput, Title, Menu} from "@mantine/core";
import Navbar from "../components/Navbar";
import Bottombar from "../components/Bottombar";
import React, {useContext} from "react";
import {useViewportSize} from "@mantine/hooks";
import {FaArrowRight, FaCircleUser, FaSquareArrowUpRight} from "react-icons/fa6";
import IndexImage from '../assets/images/Signin.png';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../services/AuthContextProvider";
import { FaAngleDown } from 'react-icons/fa6';
import logo from '../assets/logo-no-background.png';


function Index(){
    /* Getting current viewport sizes */
    const {width, height} = useViewportSize();

    const navigate = useNavigate();

    /* Getting current logged user */
    const { user, setUser } = useContext(AuthContext);

    return (
        <>
            {/* <Navbar /> */}
            {/* <Navbar showProfileButton={true} /> */}
            <Flex h={64} align='center' justify='space-between' bg='#e9edff'>
         {/* Logo container */}
         <Flex ml={24} p={12}>
             <Image maw={36} src={logo} alt='OneId logo'/>
         </Flex>

         {/* Menu Container */}
         <Flex align='center'>
             {/* Language selector */}
            <Container>
                <Menu>
                    <Menu.Target>
                        <Button color='primary' variant='white' rightIcon={<FaAngleDown />}>English</Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>Select language</Menu.Label>
                        <Menu.Item>English</Menu.Item>
                        <Menu.Item>Sinhala</Menu.Item>
                        <Menu.Item>Tamil</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Container>
      </Flex>
      </Flex>
            <Flex direction='row' align='center' justify='center' w={width - 48} h={height - 96} py='auto' mx={24}>
                <Image src={IndexImage} fit='contain' height={(height - 96) * 0.9}/>
                <Container>
                    <Title pb={20} order={1} color='primary.8' mb={30}>Government Web App</Title>
                    <Text pb={24} mb={30}>Unlock the power of seamless access and secure information sharing with your personalized digital card. Experience a smarter way to connect and engage with government services. Let's get started in creating your digital card for a more connected tomorrow </Text>
                    <Flex direction='row' align='center' justify='start'>
                        {/* <Button variant='light' color='primary' mx={6}>Learn ICAO&nbsp;<FaSquareArrowUpRight/></Button> */}
                        { !user && <Button variant='filled' color='primary' mx={6} onClick={() => navigate('/signin')}>Sign in&nbsp;<FaCircleUser/></Button> }
                        { user && <>
                            <Button variant='filled' color='primary' mx={6} onClick={() => navigate('/reference')}>Choose image&nbsp;<FaArrowRight/></Button>
                            </>
                        }
                    </Flex>
                </Container>
            </Flex>
            <Bottombar />
        </>

    );
}

export default Index;