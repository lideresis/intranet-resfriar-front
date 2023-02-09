import FileUploadIcon from '@mui/icons-material/FileUpload';
import ImageIcon from '@mui/icons-material/Image';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { Dropzone } from '../../../components/basics/Dropzone';
import { Container, DropzoneGridContainer, UploadIconGrid, UploadTextGrid } from './styles';

export const PostModalAttachments = () => {
  const [showDropzone, setShowDropzone] = useState(false);

  const handleUploadFiles = () => {};

  return (
    <>
      {
        <Box>
          {showDropzone && (
            <Dropzone selectedFiles={handleUploadFiles}>
              <DropzoneGridContainer>
                <UploadIconGrid>
                  <FileUploadIcon />
                </UploadIconGrid>
                <UploadTextGrid>
                  <Typography variant="subtitle1" textAlign="center" overflow="hidden">
                    Adicione fotos, videos, arquivos ou
                  </Typography>
                  <Typography variant="caption" textAlign="center" overflow="hidden">
                    Arraste e solte
                  </Typography>
                </UploadTextGrid>
                <IconButton
              </DropzoneGridContainer>
            </Dropzone>
          )}
        </Box>
      }
      <Container>
        <Box>
          <Typography variant="body1" color="text.primary" align="left">
            Adicionar à sua publicação
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Adicionar imagem" placement="top">
            <IconButton onClick={() => setShowDropzone(true)}>
              <ImageIcon color="primary" />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Adicionar arquivo" placement="top">
              <IconButton>
                <AttachFileIcon color="primary" />
              </IconButton>
            </Tooltip> */}
        </Box>
      </Container>
    </>
  );
};
