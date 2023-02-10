import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { DropContainerComponent } from '../../../components/basics/DropContainerComponent/DropContainerComponent';
import { Dropzone } from '../../../components/basics/Dropzone';
import { Container } from './styles';

import { FileProps } from '../../../components/basics/Dropzone';
import { ImagePreviewComponent } from '../../../components/pageComponents/ImagePreviewComponent/ImagePreviewComponent';

export const PostModalAttachments = () => {
  const [showDropzone, setShowDropzone] = useState(false);
  const [newFiles, setNewFiles] = useState<FileProps[]>([]);

  const handleUploadFiles = (files: FileProps[]) => {
    console.log('files', files);
    setNewFiles([...newFiles, ...files]);
  };

  return (
    <>
      {
        <>
          {newFiles.length > 0 ? (
            <ImagePreviewComponent files={newFiles} />
          ) : (
            <>
              {showDropzone && (
                <Dropzone selectedFiles={handleUploadFiles}>
                  <DropContainerComponent />
                </Dropzone>
              )}
            </>
          )}
        </>
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
          <Tooltip title="Adicionar arquivo" placement="top">
            <IconButton>
              <AttachFileIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </>
  );
};
