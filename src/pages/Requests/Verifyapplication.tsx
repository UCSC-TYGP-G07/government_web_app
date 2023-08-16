import React, { useState, useEffect } from 'react';
import PDFViewer from '../../components/Pdfviewer';
import CommentBox from '../../components/Commentbox';
import { Button, Flex, Title, Menu, Container, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Bottombar from "../../components/Bottombar";
import { NavbarSimpleColored } from '../../components/NavbarSimpleColored';


const Verifyapplication: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCommentSubmit = (comment: string) => {
    console.log('New Comment:', comment);
    // Add logic to store the comment, send it to the server, etc.
  };

  // Fetch the PDF URL from the database using an API call or any other method
  useEffect(() => {
    // Simulating fetching the PDF URL from the database after 1 second
    setTimeout(() => {
      const fetchedPdfUrl = 'https://drp.gov.lk/Download/Application%20DRP.pdf'; // Replace with the actual fetched URL
      setPdfUrl(fetchedPdfUrl);
    }, 1000);
  }, []);

  return (
    <>
  
    <NavbarSimpleColored />

    {/* <Navbar showProfileButton={true} /> */}
    <Navbar showProfileButton={true} />


    <div className="App">
    <Flex direction="column" align="center">
    <Title order={1} align="center" my={60}>
      Check Application
    </Title>
    </Flex>
      <div className="content-wrapper" style={{width: '80%', marginLeft: 330}}>
        {pdfUrl ? ( // Check if the PDF URL is available
          <div className="pdf-viewer">
            <PDFViewer pdfUrl={pdfUrl} />
          </div>
        ) : (
          <div>Loading PDF...</div> // Show a loading message while fetching the PDF URL
        )}
        <div className="comment-box">
          <CommentBox onSubmit={handleCommentSubmit} />
        </div>
        <br />
        <div>
       <Button style={{width: '100px'}} variant='filled' color='#758BFD' onClick={() => {navigate('/identificationcard')}}>Approve</Button>
       <Button style={{marginLeft: '30px', width: '100px'}}  variant='filled' color='#758BFD' onClick={() => {navigate('/rejectionform')}}>Reject</Button>
        
        </div>
      </div>
     
    </div>
    </>
  );
};

export default Verifyapplication;
