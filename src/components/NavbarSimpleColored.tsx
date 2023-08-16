import { useState } from 'react';
import { createStyles, Navbar, Group, Code, getStylesRef, rem, Flex, Image, Text } from '@mantine/core';
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
import { Link, useNavigate } from "react-router-dom";
import { MantineLogo } from '@mantine/ds';
import logo from "../assets/logo-no-background.png";


const useStyles = createStyles((theme) => ({
  // navbar: {
  //   backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  // },

  navbar: {
    backgroundColor: '#27187E', // Change this to your desired dark blue color
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
    
  
  },

  link: {
    ...theme.fn.focusStyles(),

    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: 18,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 700,
    marginBottom: 10,
    

    // '&:hover': {
    //   backgroundColor: theme.fn.lighten(
    //     theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
    //     0.1
    //   ),
      
    // },

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Set the background color to white
    },
    
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.8,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.white }).background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}));
<br />
const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconBellRinging,  }, // Change the link to the appropriate route
  { link: '/requests', label: 'Requests', icon: IconReceipt2 }, // Change the link and label as needed
  { link: '/adduser', label: 'Add User', icon: IconFingerprint }, 
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      key={item.label}
      onClick={() => setActive(item.label)}
    
    >
      <item.icon className={classes.linkIcon} stroke={2} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar style={{ height: '100vh', width: '280px', float: 'left'}}  p="md" className={classes.navbar}>
      <Navbar.Section grow>
        {/* <Group>
          
        <Flex ml={1} p={12}>
            <Image maw={50} src={logo} alt='OneId logo'/>
            <Text ml={20} mb={40} fw={50} mt={10} style={{fontSize: 20, color: '#27187E', fontWeight: 'bold' }}> GOVERNMENT</Text>
        </Flex> 
          
        </Group> */}
        {links}
      </Navbar.Section>

      <Navbar.Section>
        {/* <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={2} />
          <span >Change account</span>
        </a> */}

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={2} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

