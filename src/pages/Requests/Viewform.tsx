import { TextInput, Checkbox, Button, Group, Box, Title, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Bottombar from "../../components/Bottombar";

function Viewform() {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
     <Navbar />

    <Flex direction="column" align="center" my={36}>
    <Title order={1} align="center">
      Request Form
    </Title>

    <Box mx="auto" my={25} style={{width: '20%'}}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
         
          label="NIC"
          placeholder="01"
          {...form.getInputProps('nic')}
        />
         <TextInput
          
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps('name')}
        />
         <TextInput
          
          label="Contact"
          placeholder="07# #######"
          {...form.getInputProps('contact')}
        />
         <TextInput
          
          label="Type"
          placeholder="ID Type"
          {...form.getInputProps('type')}
        />
         <TextInput
        
          label="Address"
          placeholder="Colombo"
          {...form.getInputProps('address')}
        />

        <Group position="center" mt="md">
        <Button variant='filled' color='#758BFD' onClick={() => {navigate('/verifyimage')}}>Next</Button>
        </Group>


      </form>
    </Box>
    </Flex>
    <Bottombar />
    </>
  );
}

export default Viewform;