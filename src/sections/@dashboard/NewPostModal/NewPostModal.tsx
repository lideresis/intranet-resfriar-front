import { useTheme } from '@emotion/react';
import { Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';

interface Props {
  onCreate: (text: string) => void;
  onClose: () => void;
}

const NewPostModal: React.FC<Props> = ({ onCreate, onClose }) => {
  const theme = useTheme();
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    onCreate(text);
  };

  return (
    <div>
      <Modal
        fullWidth
        aria-labelledby="new-post-modal-title"
        aria-describedby="new-post-modal-description"
        open={true}
        onClose={onClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          style={{
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
          }}
        >
          <h2 id="new-post-modal-title">Nova publicação</h2>
          <TextField
            id="new-post-text"
            label="Texto"
            value={text}
            onChange={handleTextChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={handleCreate}>
            Criar
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default NewPostModal;
