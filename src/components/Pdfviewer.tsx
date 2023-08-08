import React from 'react';
import { Button } from '@mantine/core';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  return (
    <div>
      <Button
        variant="outline"
        color="blue"
        onClick={() => window.open(pdfUrl, '_blank')}
        fullWidth
      >
        Click to see PDF
      </Button>
      {/* Add PDF viewer here */}
      {/* For example, you can use an iframe to display the PDF */}
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
