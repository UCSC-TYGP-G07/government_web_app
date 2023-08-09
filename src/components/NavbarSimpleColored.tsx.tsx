// // // // // src/components/Sidebar.tsx
// // // // import React from 'react';
// // // // import { Paper, Container, Text, Button, Box , Title } from '@mantine/core';
// // // // import { NavLink } from 'react-router-dom';

// // // // function sidebar() {

// // // // interface SidebarProps {
// // // //   open: boolean;
// // // //   onClose: () => void;
// // // // }

// // // // interface CustomSideNavItemProps extends SideNavItemProps {
// // // //   external?: boolean;
// // // //   path?: string;
// // // // }

// // // // interface SideNavItem {
// // // //   active: boolean;
// // // //   disabled: boolean;
// // // //   external: boolean;
// // // //   icon: Node;
// // // //   path: string;
// // // //   title: string
// // // // }



// // // // const SideNavItem: React.FC<CustomSideNavItemProps> = ({
// // // //   active = false,
// // // //   disabled,
// // // //   external,
// // // //   icon,
// // // //   path,
// // // //   title,
// // // // }) => {
// // // //   const linkProps = path
// // // //     ? external
// // // //       ? {
// // // //           component: 'a',
// // // //           href: path,
// // // //           target: '_blank',
// // // //         }
// // // //       : {
// // // //           component: NextLink,
// // // //           href: path,
// // // //         }
// // // //     : {};



// // // // const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
// // // //   return (

// // // //     <li>
// // // //     <Button
// // // //         sx={{
// // // //           alignItems: 'center',
// // // //           borderRadius: 1,
// // // //           display: 'flex',
// // // //           justifyContent: 'flex-start',
// // // //           pl: '16px',
// // // //           pr: '16px',
// // // //           py: '6px',
// // // //           textAlign: 'left',
// // // //           width: '100%',
// // // //           ...(active && {
// // // //             backgroundColor: 'rgba(255, 255, 255, 0.04)'
// // // //           }),
// // // //           '&:hover': {
// // // //             backgroundColor: 'rgba(255, 255, 255, 0.04)'
// // // //           }
// // // //         }}
// // // //         {...linkProps}
// // // //       >
// // // //         {icon && (
// // // //           <Box
// // // //             component="span"
// // // //             sx={{
// // // //               alignItems: 'center',
// // // //               color: 'neutral.400',
// // // //               display: 'inline-flex',
// // // //               justifyContent: 'center',
// // // //               mr: 2,
// // // //               ...(active && {
// // // //                 color: 'primary.main'
// // // //               })
// // // //             }}
// // // //           >
// // // //             {icon}
// // // //           </Box>
// // // //         )}
// // // //         <Box
// // // //           component="span"
// // // //           sx={{
// // // //             color: 'neutral.400',
// // // //             flexGrow: 1,
// // // //             fontFamily: (theme: import('@mantine/core').MantineTheme) => Theme.fontFamily,
// // // //             fontSize: 14,
// // // //             fontWeight: 600,
// // // //             lineHeight: '24px',
// // // //             whiteSpace: 'nowrap',
// // // //             ...(active && {
// // // //               color: 'common.white'
// // // //             }),
// // // //             ...(disabled && {
// // // //               color: 'neutral.500'
// // // //             })
// // // //           }}
// // // //         >
// // // //           {/* {Title} */}
// // // //         </Box>
// // // //       </Button>

// // // //       <Container>
// // // //          <h2>Sidebar Content</h2>
// // // //          <NavLink to="/dashboard" onClick={onClose}>
// // // //            <a style={{ textDecoration: 'none' }}>
// // // //              <Text size="xl">Dashboard</Text>
// // // //            </a>
// // // //          </NavLink>
// // // //          <NavLink to="/requests" onClick={onClose}>
// // // //            <a style={{ textDecoration: 'none' }}>
// // // //              <Text size="xl">Requests</Text>
// // // //            </a>
// // // //          </NavLink>
// // // //          <NavLink to="/add-user" onClick={onClose}>
// // // //            <a style={{ textDecoration: 'none' }}>
// // // //              <Text size="xl">Add User</Text>
// // // //            </a>
// // // //          </NavLink>
// // // //       </Container>
// // // //     </li>
// // // //     // <Paper
// // // //     //   style={{
// // // //     //     position: 'fixed',
// // // //     //     top: 0,
// // // //     //     left: open ? 0 : -250,
// // // //     //     width: 250,
// // // //     //     height: '100vh',
// // // //     //     transition: 'left 0.3s',
// // // //     //   }}
// // // //     // >
// // // //     //   <Container>
// // // //     //     <h2>Sidebar Content</h2>
// // // //     //     <NavLink to="/dashboard" onClick={onClose}>
// // // //     //       <a style={{ textDecoration: 'none' }}>
// // // //     //         <Text size="xl">Dashboard</Text>
// // // //     //       </a>
// // // //     //     </NavLink>
// // // //     //     <NavLink to="/requests" onClick={onClose}>
// // // //     //       <a style={{ textDecoration: 'none' }}>
// // // //     //         <Text size="xl">Requests</Text>
// // // //     //       </a>
// // // //     //     </NavLink>
// // // //     //     <NavLink to="/add-user" onClick={onClose}>
// // // //     //       <a style={{ textDecoration: 'none' }}>
// // // //     //         <Text size="xl">Add User</Text>
// // // //     //       </a>
// // // //     //     </NavLink>
// // // //     //   </Container>
// // // //     // </Paper>


// // // //   );
// // // // };

// // // // }
// // // // }

// // // // export default sidebar;


// // // // // import NextLink from 'next/link';
// // // // // import PropTypes from 'prop-types';
// // // // // // import { Box, ButtonBase } from '@mui/material';
// // // // // import { Button } from '@mantine/core';

// // // // // import React from 'react';
// // // // // import { Paper, Container, Text, Button} from '@mantine/core';
// // // // // import { NavLink } from 'react-router-dom';

// // // // // export const SideNavItem = (props) => {
// // // // //   const { active = false, disabled, external, icon, path, title } = props;

// // // // //   const linkProps = path
// // // // //     ? external
// // // // //       ? {
// // // // //         component: 'a',
// // // // //         href: path,
// // // // //         target: '_blank'
// // // // //       }
// // // // //       : {
// // // // //         component: NextLink,
// // // // //         href: path
// // // // //       }
// // // // //     : {};

// // // // //   return (
// // // // //     <li>
// // // // //       <Button
// // // // //         sx={{
// // // // //           alignItems: 'center',
// // // // //           borderRadius: 1,
// // // // //           display: 'flex',
// // // // //           justifyContent: 'flex-start',
// // // // //           pl: '16px',
// // // // //           pr: '16px',
// // // // //           py: '6px',
// // // // //           textAlign: 'left',
// // // // //           width: '100%',
// // // // //           ...(active && {
// // // // //             backgroundColor: 'rgba(255, 255, 255, 0.04)'
// // // // //           }),
// // // // //           '&:hover': {
// // // // //             backgroundColor: 'rgba(255, 255, 255, 0.04)'
// // // // //           }
// // // // //         }}
// // // // //         {...linkProps}
// // // // //       >
// // // // //         {icon && (
// // // // //           <Box
// // // // //             component="span"
// // // // //             sx={{
// // // // //               alignItems: 'center',
// // // // //               color: 'neutral.400',
// // // // //               display: 'inline-flex',
// // // // //               justifyContent: 'center',
// // // // //               mr: 2,
// // // // //               ...(active && {
// // // // //                 color: 'primary.main'
// // // // //               })
// // // // //             }}
// // // // //           >
// // // // //             {icon}
// // // // //           </Box>
// // // // //         )}
// // // // //         <Box
// // // // //           component="span"
// // // // //           sx={{
// // // // //             color: 'neutral.400',
// // // // //             flexGrow: 1,
// // // // //             fontFamily: (theme) => theme.typography.fontFamily,
// // // // //             fontSize: 14,
// // // // //             fontWeight: 600,
// // // // //             lineHeight: '24px',
// // // // //             whiteSpace: 'nowrap',
// // // // //             ...(active && {
// // // // //               color: 'common.white'
// // // // //             }),
// // // // //             ...(disabled && {
// // // // //               color: 'neutral.500'
// // // // //             })
// // // // //           }}
// // // // //         >
// // // // //           {title}
// // // // //         </Box>
// // // // //       </ButtonBase>
// // // // //     </li>
// // // // //   );
// // // // // };



// // // import React from 'react';
// // // import { Box, Button, Text, Container } from '@mantine/core';
// // // import { NavLink } from 'react-router-dom';

// // // interface SidebarProps {
// // //   open: boolean;
// // //   onClose: () => void;
// // // }

// // // interface CustomSideNavItemProps {
// // //   active?: boolean;
// // //   disabled?: boolean;
// // //   external?: boolean;
// // //   icon?: React.ReactNode;
// // //   path?: string;
// // //   title?: string;
// // // }

// // // const SideNavItem: React.FC<CustomSideNavItemProps> = ({
// // //   active = false,
// // //   disabled,
// // //   external,
// // //   icon,
// // //   path,
// // //   title,
// // // }) => {
// // //   const linkProps = path
// // //     ? external
// // //       ? {
// // //           component: 'a',
// // //           href: path,
// // //           target: '_blank',
// // //         }
// // //       : {
// // //           component: NavLink,
// // //           to: path,
// // //         }
// // //     : {};

// // //   return (
// // //     <ul>
    
// // //       <Button
// // //         sx={{
// // //           alignItems: 'center',
// // //           borderRadius: 1,
// // //           display: 'flex',
// // //           justifyContent: 'flex-start',
// // //           pl: '20px',
// // //           pr: '16px',
// // //           py: '6px',
// // //           textAlign: 'left',
// // //           width: '12%',
// // //           height: '500px',
// // //           ...(active && {
// // //             backgroundColor: 'rgba(255, 255, 255, 0.04)',
// // //           }),
// // //           '&:hover': {
// // //             backgroundColor: 'rgba(255, 255, 255, 0.04)',
// // //           },
// // //         }}
// // //         component={linkProps.component as any} // Cast the component prop
// // //   to={linkProps.to}
// // //   href={linkProps.href}
// // //   target={linkProps.target}
     
// // //       >
// // //         {icon && (
// // //           <Box
// // //             component="span"
// // //             sx={{
// // //               alignItems: 'center',
// // //               color: 'neutral.400',
// // //               display: 'inline-flex',
// // //               justifyContent: 'center',
// // //               mr: 2,
// // //               ...(active && {
// // //                 color: 'primary.main',
// // //               }),
// // //             }}
// // //           >
// // //             {icon}
// // //           </Box>
// // //         )}
// // //         <Box
// // //           component="span"
// // //           sx={{
// // //             color: 'neutral.400',
// // //             flexGrow: 1,
// // //             fontFamily: 'Arial, sans-serif',
// // //             fontSize: 14,
// // //             fontWeight: 600,
// // //             lineHeight: '24px',
// // //             whiteSpace: 'nowrap',
// // //             ...(active && {
// // //               color: 'common.white',
// // //             }),
// // //             ...(disabled && {
// // //               color: 'neutral.500',
// // //             }),
// // //           }}
// // //         >
// // //           {title}
// // //         </Box>
// // //       </Button>
    
// // //     </ul>
// // //   );
// // // };

// // // const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
// // //   return (
// // //     <ul>
      
// // //       <SideNavItem title="Item 1" />
// // //       <SideNavItem title="Item 2" />
// // //       {/* Add more SideNavItem components */}
// // //     </ul>
// // //   );
// // // };

// // // export default Sidebar;


// // import React from 'react'
// // import * as FaIcons from 'react-icons/fa' 
// // import { Link } from 'react-router-dom'

// // export const SidebarData = [
// //     {
// //         title: 'Home',
// //         path: '/',
// //         icon: <FaIcons.FaHome />
// //     },
// //     {
// //         title: 'Team',
// //         path: '/team',
// //         icon: <FaIcons.FaUsers />
// //     },
// //     {
// //         title: 'Tasks',
// //         path: '/tasks',
// //         icon: <FaIcons.FaTasks />
// //     },
// //     {
// //         title: 'Chats',
// //         path: '/chats',
// //         icon: <FaIcons.FaRocketchat />
// //     },
// //     {
// //         title: 'Analytics',
// //         path: '/analytics',
// //         icon: <FaIcons.FaRegChartBar />
// //     }
// // ]

// // export default Sidebar;


// // import React, { FC, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import styled from 'styled-components';
// // import { IconContext } from 'react-icons';
// // import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// // import { SidebarData } from './SidebarData';
// // // import Submenu from './Submenu';

// // const Nav = styled.div`
// //     display: flex;
// //     justify-content: flex-start;
// //     align-items: center;
// //     height: 5rem;
// //     background-color: black;
// // `;

// // const SidebarNav = styled.div<{ sidebar: boolean }>`
// //     width: 250px;
// //     height: 100vh;
// //     background-color: black;
// //     position: fixed;
// //     top: 0;
// //     left: ${({ sidebar }) => (Sidebar ? '0' : '-100%')};
// //     transition: 350ms;
// // `;

// // const NavIcon = styled(Link)`
// //     display: flex;
// //     justify-content: flex-start;
// //     align-items: center;
// //     height: 5rem;
// //     font-size: 2rem;
// //     margin-left: 2rem;
// // `;

// // const SidebarWrap = styled.div``;

// // const Sidebar: FC = () => {
// //     const [sidebar, setSidebar] = useState(false);
// //     const showSidebar = () => setSidebar(!sidebar);

// //     return (
// //         <IconContext.Provider value={{ color: '#fff' }}>
// //             <Nav>
// //                 <NavIcon to="#" onClick={showSidebar}>
// //                     <AiOutlineMenu />
// //                 </NavIcon>
// //             </Nav>
// //             <SidebarNav sidebar={sidebar}>
// //                 <SidebarWrap>
// //                     <NavIcon to="#" onClick={showSidebar}>
// //                         <AiOutlineClose />
// //                     </NavIcon>
// //                     {SidebarData.map((item, index) => {
// //                         return <Submenu item={item} key={index} />;
// //                     })}
// //                 </SidebarWrap>
// //             </SidebarNav>
// //         </IconContext.Provider>
// //     );
// // };

// // export default Sidebar;




// import React, { FC, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Text, Container } from '@mantine/core';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons';
// // import Submenu from './Submenu';

// const Nav: FC<{ onClick: () => void }> = ({ onClick }) => (
//   <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '5rem', backgroundColor: 'black' }}>
//     <NavIcon to="#" onClick={onClick}>
//       <AiOutlineMenu />
//     </NavIcon>
//   </div>
// );

// const SidebarNav: FC<{ sidebar: boolean }> = ({ sidebar }) => (
//   <div style={{ width: '250px', height: '100vh', backgroundColor: 'black', position: 'fixed', top: 0, left: sidebar ? '0' : '-100%', transition: '350ms' }}>
//     {/* Sidebar content */}
//   </div>
// );

// const NavIcon: FC<{ to: string; onClick: () => void }> = ({ to, onClick }) => (
//   <Link to={to} onClick={onClick} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '5rem', fontSize: '2rem', marginLeft: '2rem' }}>
//     <AiOutlineMenu />
//   </Link>
// );


// const SidebarWrap: FC = ({ children }) => <div>{children}</div>;

// interface SidebarProps {
//   open: boolean;
//   onClose: () => void;
// }

// const Sidebar: FC = () => {
//   const [sidebar, setSidebar] = useState(false);
//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <IconContext.Provider value={{ color: '#fff' }}>
//       <Nav onClick={showSidebar} />
//       <SidebarNav sidebar={sidebar}>
//         <SidebarWrap>
//           <NavIcon to="#" onClick={showSidebar}>
//             <AiOutlineClose />
//           </NavIcon>
//           {SidebarData.map((item, index) => {
//             return <Submenu item={item} key={index} />;
//           })}
//         </SidebarWrap>
//       </SidebarNav>
//     </IconContext.Provider>
//   );
// };

// export default Sidebar;


import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem } from '@mantine/core';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar style={{ height: '100vh' }} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <MantineLogo size={28} inverted />
          <Code className={classes.version}>v3.1.2</Code>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

