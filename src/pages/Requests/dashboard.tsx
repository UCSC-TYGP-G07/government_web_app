// // src/pages/Dashboard.tsx
// import React, { useState } from 'react';
// import Sidebar from '../../components/sidebar';
// import { Container, Box } from '@mantine/core';

// const Dashboard: React.FC = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen((prevOpen) => !prevOpen);
//   };

//   return (
//     <div>
//       <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
//       <Container style={{ marginLeft: sidebarOpen ? 250 : 0 }}>
//         {/* Your Dashboard content */}
//         <h1>Dashboard Page Content</h1>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import {NavbarSimpleColored} from '../../components/NavbarSimpleColored.tsx';
import { Container } from '@mantine/core';
import Navbar from "../../components/Navbar";


const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
    {/* <Navbar showProfileButton={true} /> */}
    
    <NavbarSimpleColored />
    </>
  );
};

export default Dashboard;


