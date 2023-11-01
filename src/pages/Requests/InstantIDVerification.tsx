
import {Box, Button, Container, Flex, Image, Text, TextInput, Title, Menu, Center} from "@mantine/core";
import Bottombar from "../../components/Bottombar";
import React, {useContext} from "react";
import {useViewportSize} from "@mantine/hooks";
import {FaArrowRight, FaCircleUser, FaSquareArrowUpRight} from "react-icons/fa6";
import IndexImage from '../assets/images/Signin.png';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../services/AuthContextProvider";
import { FaAngleDown } from 'react-icons/fa6';
import Arrow from "../../assets/images/arrow-point-to-right.png"
// import logo from '../assets/logo-no-background.png';
import Navbar from "../../components/Navbar";
import { Box as MantineBox } from '@mantine/core';



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
         {/* <Flex ml={24} p={12}>
             <Image maw={36} src={logo} alt='OneId logo'/>
         </Flex> */}

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
           
      <Box bg="#f0f0f0" p={20} > {/* Grey background card */}
        <Text size="m" mb={20}>Organization</Text>
        <Text size="xl" weight="bold" mb={20}>University of Colombo School of Computing</Text>
        <Text >The University of Colombo School of Computing (UCSC) is a higher educational affiliate institute providing undergraduate and postgraduate education</Text>
      </Box>

      <Flex direction="column" mt={60} pl={150} pr={150}>
      <Text size="xl" weight="bold" mb={20}>Past Attendance Sessions
      
      </Text>

    <Box
    bg="#f0f0f0"
    p={8}
    mb={20}
    style={{ position: "relative", maxWidth: "100%", borderRadius: "10px" }}
     >
    <Button
      size="sm"
      color="primary.7"
      variant="outline"
      
      style={{ position: "absolute", top: '-60%', right: 10 , borderRadius: "10px"}}
    >
      Show More
    </Button>
    <Text size="m" mb={10} weight="bold">SCS 3216 - Research Methods</Text>
    <Text>Session date - 2023/04/11</Text>

    <Text
      size="m"
      mb={10}
      weight="bold"
      style={{ position: "absolute", top: 27, right: 60 }}
    >
      48 Records</Text>
      <Image
     src={Arrow} // Replace with the path to your image icon
      alt="Image Icon"
      style={{
        position: "absolute",
        top: 27,
        right: 10,
        width: "20px", // Adjust the width and height as needed
        height: "20px",
      }}
    />
    
    </Box>


        <Box bg="#f0f0f0" p={8} mb={20} style={{ maxWidth: "100%", borderRadius: "10px"}}>
          <Text size="m" mb={10} weight="bold">SCS 3216 - Research Methods</Text>
          <Text>Session date - 2023/04/01</Text>

          
        </Box>
      </Flex>


      <Text size="xl" weight="bold" mt={60} mb={20} ml={150}>Available Applicant Formats</Text>
      <Flex direction="row" justify="space-between" pl={150} pr={300}>
        <Box bg="#f0f0f0" p={8} style={{ width: "calc(25% - 15px)", borderRadius: "10px", marginRight: "-20%" }}>
          <Text size="xl" mb={20}  weight="bold">SCS 3216 - Research Methods</Text>
          <Text>Created Date - 11/10/2023</Text>
          <Text>Total Applicants - 45</Text>
        </Box>

        <Box bg="#f0f0f0" p={8} style={{ width: "calc(25% - 15px)", borderRadius: "10px", marginRight: "-20%" }}>
          <Text size="xl" mb={20}  weight="bold">SCS 3216 - Research Methods</Text>
          <Text>Created Date - 11/10/2023</Text>
          <Text>Total Applicants - 45</Text>
        </Box>

        <Box bg="#f0f0f0" p={8} style={{ width: "calc(25% - 15px)", borderRadius: "10px", marginRight: "-20%"}}>
          <Text size="xl" mb={20}  weight="bold">SCS 3216 - Research Methods</Text>
          <Text>Created Date - 11/10/2023</Text>
          <Text>Total Applicants - 45</Text>
        </Box>

        <Box bg="#f0f0f0" p={8} style={{ width: "calc(25% - 15px)", borderRadius: "10px" }}>
          <Text size="xl" mb={20}  weight="bold">SCS 3216 - Research Methods</Text>
          <Text>Created Date - 11/10/2023</Text>
          <Text>Total Applicants - 45</Text>
        </Box>
      </Flex>
            
            <Bottombar />
        </>

    );
}

export default Index;