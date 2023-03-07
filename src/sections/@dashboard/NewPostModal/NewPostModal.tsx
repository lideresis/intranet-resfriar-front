import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Modal,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';
import { PostModalAttachments } from '../PostModalAttachments/PostModalAttachments';

interface Props {
  open: boolean;
  onCreate: (text: string) => void;
  onClose: () => void;
}

const NewPostModal: React.FC<Props> = ({ open, onCreate, onClose }) => {
  const theme = useTheme();
  const [text, setText] = useState('');

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { control } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      post: ''
    }
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    onCreate(text);
  };

  return (
    <div>
      <Modal
        aria-labelledby="new-post-modal-title"
        aria-describedby="new-post-modal-description"
        open={open}
        onClose={onClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          height: '100vh',
          width: '100vw'
        }}
      >
        <Card sx={{ width: isMobile ? '100%' : '40%', height: isMobile ? '100%' : 'auto' }}>
          <CardHeader
            title="Criar publicação"
            titleTypographyProps={{
              textAlign: 'center',
              variant: 'h4'
            }}
            action={
              <Tooltip title="Fechar" placement="top">
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            }
          />
          <Divider />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Stack spacing={2}>
              <Box>
                <ControlledTextInput
                  variant="outlined"
                  name="post"
                  control={control}
                  placeholder="No que você está pensando?"
                  value={text}
                  multiline
                  minRows={3}
                />
              </Box>
              <Box>
                <PostModalAttachments />
              </Box>
              <Box>
                <Button onClick={handleCreate} fullWidth variant="contained" color="primary">
                  Publicar
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default NewPostModal;
