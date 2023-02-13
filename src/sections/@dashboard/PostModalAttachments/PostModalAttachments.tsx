import ImageIcon from '@mui/icons-material/Image';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { DropContainerComponent } from '../../../components/basics/DropContainerComponent/DropContainerComponent';
import { Dropzone } from '../../../components/basics/Dropzone';
import { Container } from './styles';

import { FileProps } from '../../../components/basics/Dropzone';
import { PreviewComponent } from '../../../components/pageComponents/ImagePreviewComponent/ImagePreviewComponent';

export const PostModalAttachments = () => {
  const [showDropzoneMedia, setShowDropzoneMedia] = useState(false);
  const [newFiles, setNewFiles] = useState<FileProps[]>([]);

  const handleUploadMedia = (files: FileProps[]) => {
    setNewFiles([...newFiles, ...files]);
  };

  return (
    <>
      {
        <>
          {newFiles.length > 0 ? (
            <PreviewComponent uploadedFiles={newFiles} handleClearFiles={() => setNewFiles([])} />
          ) : (
            <>
              {showDropzoneMedia && (
                <Dropzone selectedFiles={handleUploadMedia}>
                  <DropContainerComponent title="Adicione fotos/videos ou arquivos" />
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
          <Tooltip title="Adicionar midias" placement="top">
            <IconButton onClick={() => setShowDropzoneMedia(true)}>
              <ImageIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </>
  );
};
