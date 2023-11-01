import {
  Button,
  Center,
  Container,
  Flex,
  NumberInput,
  SegmentedControl,
  SegmentedControlItem,
  Text,
  TextInput,
  Title,
  Menu,
  Avatar,
  Paper,
  
} from "@mantine/core";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';

import "../../styles/styles.css";


interface TableData {

Name: string;
District: string;
Status: string;
Contact: string;
Email: string;
}

function Index() {
const [segValue, setSegValue] = useState("normal");
const navigate = useNavigate();

const normalRequests: TableData[] = [
  { Name: "Masha Nilushi", District: "Colombo", Status: "NIC", Contact: "0779025068", Email: "mashanilu@gmail.com" },
  { Name: "Ramindu Ramsith Walgama",District: "Galle", Status: "NIC", Contact: "0765419064", Email: "ramindu2000@gmail.com"},
  { Name: "Sandul Renuja Galappaththi",District: "Galle", Status: "NIC", Contact: "0779035678", Email: "renusandul@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  // { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  

  // Add more data for normal requests
];

const expeditedRequests: TableData[] = [
  { Name: "Mohomed Izzath",District: "Colombo", Status: "NIC", Contact: "0775213697", Email: "izzath2001@gmail.com" },
  { Name: "Madusha Tharindi Silva",District: "Ahungalla", Status: "NIC", Contact: "0769951448", Email: "tharindi@gmail.com" },
  { Name: "Kimuthu Kisal Weerasinghe",District: "Polonnaruwa", Status: "NIC", Contact: "0781203654", Email: "kimu99@gmail.com"},
  { Name: "Nirman Sankalpana Manchanaka",District: "Galle", Status: "NIC", Contact: "0715423967", Email: "nirmansankalapana@gmail.com"},
 

  // Add more data for expedited requests
];

const [selectedTabData, setSelectedTabData] = useState<TableData[]>(
  normalRequests
);

function handleTabChange(value: string): void {
  setSegValue(value);
  setSelectedTabData(value === "normal" ? normalRequests : expeditedRequests);
}

return (
  <>
    {/* <Navbar /> */}
    {/* <Navbar showProfileButton={true} /> */}

    <NavbarSimpleColored />

    {/* <Navbar showProfileButton={true} /> */}
    <Navbar showProfileButton={true}  />


    <Flex direction="column" align='flex-start' my={40}  >
      <Title order={1} align="center" my={10} style={{marginLeft: 170}}>
        Requests
      </Title>

      <Container size="lg">
      
      <Center>
        <SegmentedControl
   
          data={[
            { label: "Normal", value: "normal" },
            { label: "Expedited", value: "expedited" },
          ]}
          value={segValue}
          onChange={handleTabChange}
          style={{
            // padding: '10px',
            // '--segmented-control-tab-padding': '16px 24px', // Increase padding to adjust tab size
          }}
        />
      </Center>
      <Paper className="responsive-table-container">

      {/* style={{padding: 20,
     marginLeft: -95,
     minWidth: 1300,
     display: "flex",
     flexDirection: "column",
     backgroundColor: '#ffffff',
     boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
     }}  >  */}
      {/* <Flex
        align="center"
        justify="center"
        direction="column"
        my={20}
        style={{ borderRadius: 10, overflowX: 'auto' }}
      > */}
  <table className="responsive-table">

  {/* <table style={{ minWidth: 1000, width: '100%', borderCollapse: 'collapse' }}> */}
    {/* <thead style={{fontSize: 20}}>
      <tr>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}>Name</th>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}>District</th>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}>Status</th>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}>Contact</th>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}>Email</th>
        <th style={{ padding: '10px 20px', textAlign: 'left' }}></th>
      </tr>
    </thead>

    <tbody>
      {selectedTabData.map((row, index) => (
        <tr key={index}>
          <td style={{ padding: '10px 20px 20px', textAlign: 'left' }}>{row.Name}</td>
          <td style={{ padding: '10px 20px 20px', textAlign: 'left' }}>{row.District}</td>
          <td style={{ padding: '10px 20px 20px', textAlign: 'left' }}>{row.Status}</td>
          <td style={{ padding: '10px 20px 20px', textAlign: 'left' }}>{row.Contact}</td>
          <td style={{ padding: '10px 20px 20px', textAlign: 'left' }}>{row.Email}</td>
          <td style={{ padding: '40px 20px 20px', textAlign: 'left' }}>
            <div style={{ marginTop: -25 }}>
              <Button variant="filled" color="primary.7" onClick={() => navigate('/form')}>
                Review
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody> */}
     <thead>
                <tr>
                  <th>Name</th>
                  <th>District</th>
                  <th>Status</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {selectedTabData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Name}</td>
                    <td>{row.District}</td>
                    <td>{row.Status}</td>
                    <td>{row.Contact}</td>
                    <td>{row.Email}</td>
                    <td>
                      <Button
                        variant="filled"
                        color="primary.7"
                        onClick={() => navigate("/form")}
                      >
                        Review
                      </Button>
                    </td>
                  </tr>
                   ))}
                   </tbody>
    
  </table>
{/* </Flex> */}

      </Paper>
      </Container>
    </Flex>
   
  </>
);
}

export default Index;







