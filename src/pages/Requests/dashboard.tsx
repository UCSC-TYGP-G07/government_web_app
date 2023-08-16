import React, { useState } from 'react';
import { Container, Card, Table, Group, Text, Button, Menu, Avatar, Image } from '@mantine/core';
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';
import Navbar from "../../components/Navbar";
import chart from "../../assets/Pie Chart.png"

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
    {/* <Navbar showProfileButton={true} /> */}
      <NavbarSimpleColored />
      
      <Navbar showProfileButton={true}  />

      <Container size="sm" style={{ paddingTop: '70px', marginLeft: '310px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '50px' }}>
          <Card shadow="xl" padding="md" style={{ height: '250px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F1F2F6'  }}>
            <h2>Pending Requests</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>3</p>
          </Card>
          
          <Card shadow="xl" padding="sm" style={{ height: '250px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F1F2F6' }}>
            <h2>In Progress Requests</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>3</p>
          </Card>
          
          <Card shadow="xl" padding="md" style={{ height: '250px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F1F2F6' }}>
            <h2>Approved Requests</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>4</p>
          </Card>
          
          <Card shadow="xl" padding="md" style={{ height: '250px', width: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F1F2F6' }}>
            <h2>Rejected Requests</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>3</p>
          </Card>
        </div>


        <div style={{ display: 'flex', marginTop: '80px' }}>
          
  <div style={{ flex: 1, marginLeft: 10 }}>
    <h2>Recent Requests</h2>
    <Table
      style={{
        width: '800px',
        borderCollapse: 'collapse',
        border: '1px solid #d1d1d1',
      }}
    >
       <thead>
        <tr style={{ background: '#f5f5f5' }}>
          <th style={{ padding: '8px', border: '1px solid #d1d1d1' }}>NIC</th>
          <th style={{ padding: '8px', border: '1px solid #d1d1d1' }}>Name</th>
          <th style={{ padding: '8px', border: '1px solid #d1d1d1' }}>Type</th>
          <th style={{ padding: '8px', border: '1px solid #d1d1d1' }}>Email</th>

        </tr>
      </thead>
      <tbody>
        {[
          { nic: '123', name: 'Sandul Renuja Galappaththi', type: 'Pending', email: 'renusandul@gmail.com' },
          { nic: '456', name: 'Ramindu Ramsith Walgama', type: 'Pending', email: 'ramindu2000@gmail.com' },
          { nic: '789', name: 'Ravindu Wegiriya', type: 'Approved', email: 'wegiriya99@gmail.com' },
          { nic: '101', name: 'Masha Nilushi Pupulewaththa', type: 'Pending', email: 'mashanilu@gmail.com' },
          { nic: '101', name: 'Mohomed Izzath', type: 'Pending', email: 'izzath2001@gmail.com' },
          { nic: '101', name: 'Shamindi Anuththara', type: 'Approved', email: 'shamindiadimali@gmail.com' },
          { nic: '101', name: 'Nirmani Nawanjana Dias', type: 'In Progess', email: 'nawanjanadias@gmail.com' },



        ].map((item) => (
          <tr key={item.nic}>
            <td style={{ padding: '8px', border: '1px solid #d1d1d1' }}>{item.nic}</td>
            <td style={{ padding: '8px', border: '1px solid #d1d1d1' }}>{item.name}</td>
            <td style={{ padding: '8px', border: '1px solid #d1d1d1' }}>{item.type}</td>
            <td style={{ padding: '8px', border: '1px solid #d1d1d1' }}>{item.email}</td>

          </tr>
        ))}
        </tbody>
    </Table>
  </div>
  <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 50 }}>
  {/* Left side: Pie Chart */}
  <div style={{ flex: 1, textAlign: 'center', width: '450px' }}>
    <Card shadow="md" padding="md">
      <Text align="center" size="md">
        <h2>Pie Chart</h2>
      </Text>      
    </Card>
    <Image maw={450} src={chart} alt='Pie Chart'/>
  </div>

  {/* Right side: Legends */}
  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '150px', marginLeft: '40px' }}>
    {/* Legend for Pending Requests */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {/* Colored indicator */}
      <div style={{ width: '16px', height: '16px', backgroundColor: '#27187E', marginRight: '5px' }}></div>
      <Text>Pending Requests</Text>
    </div>
    {/* Legend for In Progress Requests */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {/* Colored indicator */}
      <div style={{ width: '16px', height: '16px', backgroundColor: '#758BFD', marginRight: '5px' }}></div>
      <Text>In Progress Requests</Text>
    </div>
    {/* Legend for Completed Requests */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {/* Colored indicator */}
      <div style={{ width: '16px', height: '16px', backgroundColor: '#FF8600', marginRight: '5px' }}></div>
      <Text>Completed Requests</Text>
    </div>
    {/* Legend for Rejected Requests */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Colored indicator */}
      <div style={{ width: '16px', height: '16px', backgroundColor: '#F1F2F6', marginRight: '5px' }}></div>
      <Text>Rejected Requests</Text>
    </div>
  </div>
</div>

</div>     
      </Container>
    
    </>
  );
};

export default Dashboard;



