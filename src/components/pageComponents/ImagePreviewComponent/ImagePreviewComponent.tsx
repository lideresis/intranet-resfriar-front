import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import { FileProps } from '../../basics/Dropzone';
import { PdfPreview } from '../../basics/PdfPreview/PdfPreview';
import { ActionContainer, Container, FileWrapper, ImagesContainer } from './styles';

interface PreviewComponentProps {
  uploadedFiles: FileProps[];
  handleClearFiles: () => void;
}

export const PreviewComponent = ({ uploadedFiles, handleClearFiles }: PreviewComponentProps) => {
  const files = uploadedFiles.filter((file) => file.type == 'application/pdf');
  const media = uploadedFiles.filter((file) => file.type != 'application/pdf');

  console.log('files', files);
  console.log('media', media);

  return (
    <Box sx={{ mb: 1 }}>
      <ImagesContainer>
        <Container>
          {files?.map((file, index) => (
            <FileWrapper key={index}>{<PdfPreview file={file} />}</FileWrapper>
          ))}
          {media?.map((file, index) => (
            <FileWrapper key={index}>{<img src={file.preview} alt={file.name} style={{ width: '100%', height: '100%' }} />}</FileWrapper>
          ))}
        </Container>
      </ImagesContainer>
      <ActionContainer>
        <Button variant="text" onClick={handleClearFiles} startIcon={<CloseIcon />} sx={{ alignSelf: 'flex-end' }}>
          Remover mídias
        </Button>
      </ActionContainer>
    </Box>
  );
};
