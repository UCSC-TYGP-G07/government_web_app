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
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';
import { getAccessToken } from '../../utils';
import axios from 'axios';
import "../../styles/styles.css";
// import { NICRequest } from "./Viewform";


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

  // const getResponse = async () => {
  //   const response = await axios.get("/nicRequests");
  //    {
  //     let i = 1;
  //     let resdata = response.data._embedded.nicRequests;
  //     resdata.forEach((element) => {
  //       element.action = 1;
  //       element.index = i;
  //       i++;
  //     });
  //     setNICRequests(resdata);
  //     console.log(resdata);
  //   } 
  //   return response;

  useEffect(() => {
    console.log(nicRequests);
  }, [nicRequests]);




const normalRequests: TableData[] = [
  { Name: "Masha Nilushi", District: "Colombo", Status: "NIC", Contact: "0779025068", Email: "mashanilu@gmail.com" },
  { Name: "Ramindu Ramsith Walgama",District: "Galle", Status: "NIC", Contact: "0765419064", Email: "ramindu2000@gmail.com"},
  { Name: "Sandul Renuja Galappaththi",District: "Galle", Status: "NIC", Contact: "0779035678", Email: "renusandul@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  { Name: "Hiroshini Ovitigala",District: "Gampaha", Status: "NIC", Contact: "0778945036", Email: "ovitigala99@gmail.com"},
  
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

    
  <table className="responsive-table">

 
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


export default Index;







