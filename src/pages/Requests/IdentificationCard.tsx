import React from "react";
import { Container, Paper, Text, Title, Badge, Button, Grid, Col, Group, Menu, Avatar } from "@mantine/core";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';
import img from "../../assets/masha.jpeg";
import Navbar from "../../components/Navbar";
import qr from "../../assets/QR.png";


interface IdentificationCardProps {
  name?: string;
  nic?: string;
  address?: string;
  placeOfBirth?: string;
  dateOfBirth?: string;
  occupation?: string;
  sex?: string;
}

const IdentificationCard: React.FC<IdentificationCardProps> = ({
  name = "Masha Nilushi Pupulewaththa",
  nic = "123456789V",
  address = "15 lane, Rukmalgama, Colombo",
  placeOfBirth = "Sri Jayawardhanapura Kotte",
  dateOfBirth = "06/06/1999",
  occupation = "Teacher",
  sex = "Female",
}) => {
  return (

    <>

<NavbarSimpleColored />

{/* <Navbar showProfileButton={true} /> */}
<Navbar showProfileButton={true}  />


    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh" }}>
      <Grid gutter="md" style={{ marginTop: "70px" }}>
        <Col span={6}>
            <Title order={3} style={{ marginBottom: "20px" }}>
              Front View
            </Title>
          <Paper shadow="md" style={{ padding: "20px", width: '500px' , height: '300px' , backgroundColor: "#F1F2F6", backgroundImage: 'linear-gradient(to right, rgba(255, 255, 0, 0.2), rgba(0, 255, 255, 0.2), rgba(255, 192, 192, 0.2))', borderRadius: 20,}}>
          <img
          src={img}
          alt="User's Photo"
          style={{ width: '20%', height: '40%', objectFit: 'cover', borderRadius: '6px', marginTop: '30px', marginLeft: '10px' }}
        />
        <br /><br />
            {/* Front view card content */}
            
          <div style={{marginLeft: 130, marginTop: -130}}>
            <Text size="md" style={{marginBottom: 20}}><b>NIC :</b> {nic}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Full Name :</b> {name}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Date of Birth : </b>{dateOfBirth}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Occupation : </b>{occupation}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Sex : </b>{sex}</Text>
            </div>
            
          </Paper>
        </Col>
        <Col span={5}>
            <Title order={3} style={{ marginBottom: "20px", marginLeft: "100px"  }}>
              Back View
            </Title>
          <Paper shadow="md"  style={{ padding: "50px", textAlign: 'start', width: '500px' , height: '300px',backgroundImage: 'linear-gradient(to right, rgba(255, 255, 0, 0.2), rgba(0, 255, 255, 0.2), rgba(255, 192, 192, 0.2))', borderRadius: 20, marginLeft: 100}}>
          
            <Text size="md" style={{marginBottom: 20}}> <b>Address:  </b>{address} </Text>
            <Text size="md" style={{marginBottom: 20}}><b>Place of Birth:</b> {placeOfBirth}</Text>
            {/* <Text size="md" style={{marginBottom: 20}}><b>Place of Birth:</b> {placeOfBirth}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Date of Birth: </b>{dateOfBirth}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Occupation: </b>{occupation}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Sex: </b>{sex}</Text> */}
            <br /><br />
            <Text size="md" style={{marginBottom: 20}}><b>Issue Date:  </b>10/08/2023</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Expire Date:</b>  10/08/2028</Text>
            
              <div style={{marginLeft: 300, marginTop: -95}}>
                {/* Add QR code for Issue Date */}
                <img src={qr}  style={{  marginRight: 200, width:85, height:85 }} />
              </div>
            
          </Paper>
        </Col>
      </Grid>
      <Group position="center" mt="10px">
        <Button
          variant="filled"
          color="primary.7"
          size="lg"
          style={{ marginTop: "50px", marginLeft: "150px" }}
        >
          Download
        </Button>
      </Group>
    </Container>
    </>
  );
};

export default IdentificationCard;
