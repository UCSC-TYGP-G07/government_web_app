// // import React from 'react';
// // import { Container, Menu, Avatar } from '@mantine/core';
// // import { FaAngleDown } from 'react-icons/fa6';
// // import logo from '../assets/logo-no-background.png';

// // interface NavbarProps {
// //   showProfileButton: boolean;
// // }

// // function Navbar({ showProfileButton }: NavbarProps) {
// //   return (
// //     <>
// //       {showProfileButton && (
// //         <Container style={{ position: 'relative' }}>
// //           <Menu>
// //             <Menu.Target>
// //               {/* Example: Profile button */}
// //               <Avatar
// //                 radius="xl"
// //                 color="#27187E"
// //                 style={{
// //                   position: 'absolute',
// //                   top: '20px',
// //                   right: '-450px',
// //                   cursor: 'pointer',
// //                 }}
// //               >
// //                 SA
// //               </Avatar>
// //             </Menu.Target>
// //             <Menu.Dropdown>
// //               {/* Profile menu items */}
// //               <Menu.Label>User's Name</Menu.Label>
// //               <Menu.Item>User Profile</Menu.Item>
// //             </Menu.Dropdown>
// //           </Menu>
// //         </Container>
// //       )}
// //     </>
// //   );
// // }

// // export default Navbar;


// import React from 'react';
// import { Container, Menu, Avatar } from '@mantine/core';
// import { FaAngleDown } from 'react-icons/fa6';
// import logo from '../assets/logo-no-background.png';

// interface NavbarProps {
//   showProfileButton: boolean;
// }

// function Navbar({ showProfileButton }: NavbarProps) {
//   return (
//     <>
//       {showProfileButton && (
//         <Container style={{ position: 'relative' }}>
//           <Menu>
//             <Menu.Target>
//               {/* Example: Profile button */}
//               <div
//                 style={{
//                   position: 'absolute',
//                   top: '20px',
//                   right: '-450px',
//                   cursor: 'pointer',
//                   backgroundColor: '#1976D2', // Apply blue background color
//                   borderRadius: '50%', // Make the background circular
//                   padding: '10px', // Add some padding
//                 }}
//               >
//                 <Avatar radius="xl" color="#fff">
//                   SA
//                 </Avatar>
//               </div>
//             </Menu.Target>
//             <Menu.Dropdown>
//               {/* Profile menu items */}
//               <Menu.Label>User's Name</Menu.Label>
//               <Menu.Item>User Profile</Menu.Item>
//             </Menu.Dropdown>
//           </Menu>
//         </Container>
//       )}
//     </>
//   );
// }

// export default Navbar;


import React from 'react';
import { Container, Menu, Avatar, Title, Group, Flex, Image, Text  } from '@mantine/core';
import logo from "../assets/logo-no-background.png";

interface NavbarProps {
  showProfileButton: boolean;
  // pageTitle: string;
}

function Navbar({ showProfileButton  }: NavbarProps) {
  return (   
      <div>
      {showProfileButton && (

        <div
      style={{
        backgroundColor: '#e9edff', // Blue background color
        color: '#fff', // White text color
        // padding: '5px ', // Vertical padding
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
        >

    {/* <div>
      <Title order={1} align="center" my={20} style={{marginLeft: 30, fontSize: 30, color: '#27187E'}}>
          {pageTitle}
      </Title>
    </div> */}

        <Group>
          
          <Flex ml={10} mt={5} p={12}>
              <Image maw={40} src={logo} alt='OneId logo'/>
              <Text ml={15} mb={10} fw={50} mt={7} style={{fontSize: 18, color: '#27187E', fontWeight: 'bold' }}> GOVERNMENT</Text>
          </Flex> 
            
          </Group>

        <Container style={{marginRight: 10, padding: 10}}>
          <Menu>
            <Menu.Target>
              {/* Example: Profile button */}
              <Avatar radius="lg" color="#fff">
                SA
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              {/* Profile menu items */}
              <Menu.Label>User's Name</Menu.Label>
              <Menu.Item>User Profile</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Container>
    </div>

      )}
      </div>
  );
}

export default Navbar;
