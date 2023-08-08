import React from 'react';
import { Textarea, Button } from '@mantine/core';

interface CommentBoxProps {
  onSubmit: (comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onSubmit }) => {
  const [comment, setComment] = React.useState('');

  const handleSubmit = () => {
    onSubmit(comment);
    setComment('');
  };

  return (
    <div>
      <Textarea
        value={comment}
        onChange={(event) => setComment(event.currentTarget.value)}
        placeholder="Enter your comment..."
      />
      <Button color="teal" style={{ marginTop: '10px' }} onClick={handleSubmit}>
        Add Comment
      </Button>
    </div>
  );
};

export default CommentBox;
