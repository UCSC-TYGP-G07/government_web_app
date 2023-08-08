import React from 'react';
import { Button, Textarea, useMantineTheme, Flex, Title } from '@mantine/core';
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";


const RejectionForm: React.FC = () => {
  const theme = useMantineTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const rejectionNote = (form.elements.namedItem('rejection_note') as HTMLTextAreaElement).value;
    // You can perform any desired action with the rejectionNote, for example:
    console.log('Rejection Note:', rejectionNote);
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} style={{width: '70%', margin: '0 auto'}}>
    <br /><br />
      <Textarea
        id="rejection_note"
        name="rejection_note"
        label="Rejection Note:"
        placeholder="Enter your rejection note here..."
        style={{ marginBottom: theme.spacing.xs, resize: 'vertical'}}
      />
      <br />
      <Button type="submit">Send</Button>
    </form>
    <Bottombar />
    </>
  );
};

export default RejectionForm;
