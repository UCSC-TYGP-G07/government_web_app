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
  Paper
} from "@mantine/core";
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored.tsx';


interface TableData {

Name: string;
District: string;
Type: string;
Contact: string;
Email: string;
}

function Index() {
const [segValue, setSegValue] = useState("normal");
const navigate = useNavigate();

const normalRequests: TableData[] = [
  { Name: "Masha Nilushi", District: "Colombo", Type: "NIC", Contact: "0779025068", Email: "mashanilu@gmail.com" },
  { Name: "Ramindu Ramsith Walgama",District: "Galle", Type: "NIC", Contact: "0765419064", Email: "ramindu2000@gmail.com"},
  { Name: "Sandul Renuja Galappaththi",District: "Galle", Type: "NIC", Contact: "0779035678", Email: "renusandul@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Type: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  

  // Add more data for normal requests
];

const expeditedRequests: TableData[] = [
  { Name: "Mohomed Izzath",District: "Colombo", Type: "NIC", Contact: "0775213697", Email: "izzath2001@gmail.com" },
  { Name: "Madusha Tharindi Silva",District: "Ahungalla", Type: "NIC", Contact: "0769951448", Email: "tharindi@gmail.com" },
  { Name: "Kimuthu Kisal Weerasinghe",District: "Polonnaruwa", Type: "NIC", Contact: "0781203654", Email: "kimu99@gmail.com"},
  { Name: "Nirman Sankalpana Manchanaka",District: "Galle", Type: "NIC", Contact: "0715423967", Email: "nirmansankalapana@gmail.com"},
 

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

    <Flex direction="column" align="center" >
      <Title order={1} align="center" my={60}>
        Requests
      </Title>

      <Container size="lg">
      <Paper style={{padding: 40,
          display: "flex",
          flexDirection: "column",
          backgroundColor: '#F1F2F6'
          }} shadow="md"> 
      <Center>
        <SegmentedControl
          color="blue"
          data={[
            { label: "Normal", value: "normal" },
            { label: "Expedited", value: "expedited" },
          ]}
          value={segValue}
          onChange={handleTabChange}
        />
      </Center>
      <Flex
        align="center"
        justify="center"
        direction="column"
        my={30}
        style={{ borderRadius: 10 }}
      >
        <table>
          <thead>
            <tr>
              
              <th style={{paddingRight: "80px" }}>Name</th>
              <th style={{paddingRight: "30px" }}>District</th>
              <th style={{paddingRight: "30px" }}>Type</th>
              <th style={{paddingRight: "30px" }}>Contact</th>
              <th style={{paddingRight: "30px" }}>Email</th>
            </tr>
          </thead>
          
          <tbody >
            {selectedTabData.map((row, index) => (
              <tr key={index} >
                
                <td>
                <Text style={{ paddingRight: "10px", paddingBottom: "30px" }}>{row.Name}</Text>
                </td>
                <td>
                <Text style={{paddingRight: "30px", paddingBottom: "30px" }}>{row.District}</Text>
                </td>
                <td>
                <Text style={{ paddingRight: "30px", paddingBottom: "30px" }}>{row.Type}</Text>
                </td>
                <td>
                <Text style={{ paddingRight: "30px", paddingBottom: "30px" }}>{row.Contact}</Text>
                </td>
                <td>
                <Text style={{ paddingRight: "30px", paddingBottom: "30px" }}>{row.Email}</Text>
                </td>
                <td >
                  <div style={{marginTop: -25}}><Button  variant='filled' color='#758BFD' onClick={() => {navigate('/form')}}>View More</Button></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      </Paper>
      </Container>
    </Flex>
    {/* <Bottombar /> */}
    {/* <Bottombar /> */}
  </>
);
}

export default Index;







