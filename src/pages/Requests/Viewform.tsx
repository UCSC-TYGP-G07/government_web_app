import { TextInput, Checkbox, Button, Group, Box, Title, Flex, Container, Avatar, Menu, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Bottombar from "../../components/Bottombar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored.tsx';


function Viewform() {
  const navigate = useNavigate();

  // const form = useForm({
  //   initialValues: {
  //     email: '',
  //     termsOfService: false,
  //   },

  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
  //   },
  // });

  const form = useForm({
    initialValues: {
      name: "Masha Nilushi",
      district: "Colombo",
      gender: "Female",
      contact: "0779025068",
      dob: "06/06/1999",
      occupation: "Teacher",
      email: "mashanilu@gmail.com",
    },
  });

  return (
    <>
     {/* <Navbar /> */}
    {/* <Navbar showProfileButton={false} /> */}

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
      Request Form
    </Title>


<Container size="md" >
      <Paper style={{padding: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "20px", backgroundColor: '#F1F2F6'}} shadow="md">
        <form 
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          
        }}
        onSubmit={form.onSubmit((values) => console.log(values))}>
          <div style={{ flex: 1}}>
          <TextInput style={{ paddingBottom: 20}}
            label="Full Name"
            placeholder="John Doe"
            {...form.getInputProps("name")}
          />
          <TextInput style={{ paddingBottom: 20}}
            label="District"
            placeholder=" Colombo"
            {...form.getInputProps("district")}
          />
          <TextInput style={{ paddingBottom: 20}}
            label="Gender"
            placeholder="Male"
            {...form.getInputProps("gender")}
          />
          <TextInput style={{ paddingBottom: 20}}
            label="Contact"
            placeholder="07********"
            {...form.getInputProps("contact")}
          />
          </div>

          <div style={{ flex: 1 }}>
          <TextInput style={{ paddingBottom: 20}}
            label="Permanent Address"
            placeholder="No.5, Thibirigasyaya, Colombo 5"
            {...form.getInputProps("dob")}
          />
           <TextInput style={{ paddingBottom: 20}}
            label="Date of Birth"
            placeholder="__/__/____"
            {...form.getInputProps("district")}
          />
          <TextInput style={{ paddingBottom: 20}}
            label="Occupation/Profession"
            placeholder="Doctor"
            {...form.getInputProps("occupation")}
          />
          <TextInput style={{ paddingBottom: 20}}
            label="Email"
            placeholder="abc@gmail.com"
            {...form.getInputProps("email")}
          />
          </div>
          </form>
          <Group position="center" mt="md" style={{ flex: 1 }}>
            <Button color="blue" onClick={() => {navigate('/verifyimage')}}>
              Next
            </Button>
          </Group>
        
      </Paper>
    </Container>
    </Flex>
    {/* <Bottombar /> */}
    </>
  );
}

export default Viewform;