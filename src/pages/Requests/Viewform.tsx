import React, { useEffect, useState } from 'react';
import { TextInput, Checkbox, Button, Group, Box, Title, Flex, Container, Avatar, Menu, Paper, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Bottombar from "../../components/Bottombar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';
import img from "../../assets/masha.jpeg";
import axios from 'axios';
import { getAccessToken } from '../../utils';


function Viewform() {

  const [imageModalOpen, setImageModalOpen] = useState(false);

  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: "Masha Nilushi",
      district: "Colombo",
      gender: "Female",
      contact: "0779025068",
      dob: "06/06/1999",
      occupation: "Teacher",
      email: "mashanilu@gmail.com",
      address: "9/18, Rukmalgama Road, Athurugiriya",
      place_birth: "Sri Jayawardhanapurakotte Hospital"
    },
  });

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const [nicRequests, setNICRequests] = useState<NICRequest[] | null>(null);

  useEffect(() => {
    getNICRequests();
  }, []);

  async function getNICRequests(){
    const accessToken = getAccessToken();

    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    await (await axios.get('http://localhost:3000/api/request/nic/')
    .then(response => {
      const nicRequest = response.data;
      setNICRequests(nicRequest);
    }));
  }

  useEffect(() => {
    console.log(nicRequests);
  }, [nicRequests]);

  return (
    <>

    <NavbarSimpleColored />

    {/* <Navbar showProfileButton={true} /> */}
    <Navbar showProfileButton={true} />


    <Flex direction="column" >
    <Title order={1} ml={340} my={40}>
      Request Form
    </Title>


<Container size="lg" >
      <Paper style={{padding: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",}} >
        <form 
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "100px",
          
        }}
        onSubmit={form.onSubmit((values) => console.log(values))}>
          <div style={{ flex: 1}}>
          <TextInput style={{ paddingBottom: 30, width: '350px' }}
            // value={a}
            label="Full Name"
            placeholder="John Doe"
            readOnly
            
            {...form.getInputProps("name")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            // value={data.district}
            label="District"
            placeholder=" Colombo"
            readOnly
            {...form.getInputProps("district")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Place of Birth"
            placeholder=" Colombo"
            readOnly
            {...form.getInputProps("place_birth")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Gender"
            placeholder="Male"
            readOnly
            {...form.getInputProps("gender")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Contact"
            placeholder="07********"
            readOnly
            {...form.getInputProps("contact")}
          />
          </div>

          <div style={{ flex: 1 }}>
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Permanent Address"
            placeholder="No.5, Thibirigasyaya, Colombo 5"
            readOnly
            {...form.getInputProps("address")}
          />
           <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Date of Birth"
            placeholder="__/__/____"
            readOnly
            {...form.getInputProps("dob")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Occupation/Profession"
            placeholder="Doctor"
            readOnly
            {...form.getInputProps("occupation")}
          />
          <TextInput style={{ paddingBottom: 30, width: '350px', color: 'black'}}
            label="Email"
            placeholder="abc@gmail.com"
            readOnly
            {...form.getInputProps("email")}
          />
          {/* <TextInput style={{ paddingBottom: 20}}
            label="Verified Image"
            placeholder="image"
            {...form.getInputProps("email")}
          /> */}

      <TextInput
        style={{ paddingBottom: 20 }}
        label="Verified Image"
        placeholder="image"
        onClick={openImageModal}  // Open modal on input click
        readOnly // Prevents typing in the input
        value="Click to View Image" // Placeholder text in the input
      />

      <Modal
        opened={imageModalOpen}
        onClose={closeImageModal}
        title="Verified Image"
      >
        {/* Replace 'YOUR_IMAGE_URL' with the actual URL of the image */}
        {/* <img src={img} alt="Verified Image" style={{ maxWidth: '100%' }} /> */}

        <div style={{ textAlign: 'center' }}>
          <img src={img} alt="Verified Image" style={{ maxWidth: '100%' }} />
          <div style={{ fontSize: '2rem', marginTop: '1rem',  color: 'green'  }}>&#x2714;</div>
        </div>
      </Modal>

          </div>
          </form>
          <Group position="center" mt="md" style={{ flex: 1 }}>
            <Button color="primary.7" onClick={() => {navigate('/verifyapplication')}}>
              Next
            </Button>
          </Group>
        
      </Paper>
    </Container>
    </Flex>
    </>
  );
}

export interface NICRequest{
  request_id: string;
        birthcert_no: string;
        birthcert_url: string;
        pid_type: string;
        req_date: string;
        req_status: string;
        userId: string;
        firstName: string;
        lastName: string;
        email: string;
        civilStatus: string;
        phoneNumber: string;
        birthPlace: string;
        occupation: string;
        gender: string;
        dob: string;
        postalCode: string;
        permanentAddress: string;
        appUser: AppUser;
}

interface AppUser{
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  civilStatus: string;
  phoneNumber: string;
  birthPlace: string;
  occupation: string;
  gender: string;
  dob: string;
  postalCode: string;
  permanentAddress: string;
}

export default Viewform;