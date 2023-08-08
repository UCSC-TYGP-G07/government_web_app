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
  } from "@mantine/core";
  import Navbar from "../../components/Navbar";
  import Bottombar from "../../components/Bottombar";
  import { useViewportSize } from "@mantine/hooks";
  import { useState } from "react";
  import { FaArrowRight } from "react-icons/fa6";
  import { useNavigate } from "react-router-dom";

interface TableData {
  NIC: string;
  Name: string;
  Type: string;
  Contact: string;
  Email: string;
}

function Index() {
  const [segValue, setSegValue] = useState("normal");
  const navigate = useNavigate();

  const normalRequests: TableData[] = [
    { NIC: "NIC-1", Name: "John Doe", Type: "Passport", Contact: "0783459123", Email: "email@gmail.com" },
    { NIC: "NIC-2", Name: "Jane Smith", Type: "Passport", Contact: "0783459123", Email: "email@gmail.com"},
    // Add more data for normal requests
  ];

  const expeditedRequests: TableData[] = [
    { NIC: "NIC-3", Name: "Bob Johnson", Type: "Driving License", Contact: "0783459123", Email: "email@gmail.com" },
    { NIC: "NIC-4", Name: "Alice Brown", Type: "NIC", Contact: "0783459123", Email: "email@gmail.com" },
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
      <Navbar />

      <Flex direction="column" align="center" my={36}>
        <Title order={1} align="center">
          Requests
        </Title>
        <br />
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
          my={22}
          style={{ borderRadius: 10 }}
        >
          <table>
            <thead>
              <tr>
                <th style={{paddingRight: "100px" }}>NIC No.</th>
                <th style={{paddingRight: "100px" }}>Name</th>
                <th style={{paddingRight: "100px" }}>Type</th>
                <th style={{paddingRight: "100px" }}>Contact</th>
                <th style={{paddingRight: "100px" }}>Email</th>
                <th style={{paddingRight: "100px" }}></th>
              </tr>
            </thead>
            <tbody>
              {selectedTabData.map((row, index) => (
                <tr key={index}>
                  <td>
                  <Text style={{paddingRight: "100px", paddingBottom: "20px" }}>{row.NIC}</Text>
                  </td>
                  <td>
                  <Text style={{ paddingRight: "100px", paddingBottom: "20px" }}>{row.Name}</Text>
                  </td>
                  <td>
                  <Text style={{ paddingRight: "100px", paddingBottom: "20px" }}>{row.Type}</Text>
                  </td>
                  <td>
                  <Text style={{ paddingRight: "100px", paddingBottom: "20px" }}>{row.Contact}</Text>
                  </td>
                  <td>
                  <Text style={{ paddingRight: "100px", paddingBottom: "20px" }}>{row.Email}</Text>
                  </td>
                  <td>

                    <Button variant='filled' color='#758BFD' onClick={() => {navigate('/form')}}>View More</Button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Flex>
      </Flex>
      {/* <Bottombar /> */}
      <Bottombar />
    </>
  );
}

export default Index;




