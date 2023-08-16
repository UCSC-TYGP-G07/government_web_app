import React, { useState } from "react";
import {
  TextInput,
  Title,
  Text,
  Button,
  Center,
  Flex,
  Container,
  Menu,
  Image
} from "@mantine/core";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Bottombar from "../components/Bottombar";
import { useViewportSize } from "@mantine/hooks";
import logo from '../assets/logo-no-background.png';
import { FaAngleDown } from 'react-icons/fa6';

function Signin() {
  const navigate = useNavigate();
  const { width, height } = useViewportSize();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validateForm() {
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.values(newErrors).every((error) => error === "");
  }

  function handleSubmit() {
    const isValid = validateForm();

    if (isValid) {
      // Perform form submission logic here
      console.log("Form is valid. Submitting...");
      // Replace the above console.log with your logic to handle form submission
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
    <Flex h={64} align='center' justify='space-between' bg='#758BFD'>
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


    {/* <Navbar showProfileButton={false} /> */}
    <Navbar showProfileButton={true} />
    

      {/* <Navbar /> */}
      {/* Main container which contains Sign in page */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        w={width * 0.4}
        h={height - 200}
        py="auto"
        mx="auto"
      >
        <Title order={1} align="center" my={40}>
          Sign in to your account
        </Title>
        
        <TextInput
          w={320}
          my={12}
          mx="auto"
          label="Email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="sunilperera@gmail.com"
        />
        <TextInput
          w={320}
          my={12}
          mx="auto"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        {/* <Text size={14} ml="auto" align="right" w="full">
          <Link to="/">Forgot Password?</Link>
        </Text> */}
        <Flex justify="space-between" w="320px" my={12} mx="auto">
          {/* The "Forgot Password?" link with custom styling */}
          <Text size={14} align="right" style={{ marginLeft: "200px" }}>
            <Link to="/">Forgot Password?</Link>
          </Text>
          </Flex>
        
        <Center my={12}>
          {/* Use Link to wrap the button */}
          {/* <Link to="/requests"> */}
            <Button variant="filled" color="#758BFD" onClick={handleSubmit}>
            <Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>Sign in</Link>
            </Button>
          {/* </Link> */}
        </Center>
      </Flex>
      <Bottombar />
    </>
  );
}

export default Signin;


