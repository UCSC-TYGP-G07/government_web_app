import React from "react";
import { Container, Paper, Text, Title, Badge, Button, Grid, Col, Group, Menu, Avatar } from "@mantine/core";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';
import img from "../../assets/masha.jpeg";
import Navbar from "../../components/Navbar";



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
  name = "Masha Nilushi",
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
      <Grid gutter="md" style={{ padding: "20px", marginTop: "50px" }}>
        <Col span={6}>
            <Title order={3} style={{ marginBottom: "20px", marginLeft: "110px" }}>
              Front View
            </Title>
          <Paper shadow="md" style={{ padding: "20px", textAlign: "center", width: '350px' , height: '500px' , backgroundColor: "#F1F2F6"}}>
          <img
          src={img}
          alt="User's Photo"
          style={{ width: '50%', height: '45%', objectFit: 'cover', borderRadius: '6px', marginTop: '20px' }}
        />
        <br /><br />
            {/* Front view card content */}
            <Text size="xl"><b>{name}</b></Text>
            <br />
            <Text size="sm"><b>NIC:</b> {nic}</Text>
          
            
          </Paper>
        </Col>
        <Col span={6}>
            <Title order={3} style={{ marginBottom: "20px", marginLeft: "110px"  }}>
              Back View
            </Title>
          <Paper shadow="md"  style={{ padding: "50px", textAlign: 'start', width: '350px' , height: '500px', backgroundColor: "#F1F2F6"}}>
          
            <Text size="md" style={{marginBottom: 20}}> <b>Address:  </b>{address} </Text>
            <Text size="md" style={{marginBottom: 20}}><b>Place of Birth:</b> {placeOfBirth}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Date of Birth: </b>{dateOfBirth}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Occupation: </b>{occupation}</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Sex: </b>{sex}</Text>
            <br /><br />
            <Text size="md" style={{marginBottom: 20}}><b>Issue Date:  </b>10/08/2023</Text>
            <Text size="md" style={{marginBottom: 20}}><b>Expire Date:</b>  10/08/2028</Text>


            
          </Paper>
        </Col>
      </Grid>
      <Group position="center" mt="10px">
        <Button
          variant="filled"
          color="blue"
          size="lg"
          style={{ marginTop: "20px" }}
        >
          Download
        </Button>
      </Group>
    </Container>
    </>
  );
};

export default IdentificationCard;
