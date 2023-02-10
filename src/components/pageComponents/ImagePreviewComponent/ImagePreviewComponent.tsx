import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { FileProps } from '../../basics/Dropzone';
import { CloseWrapper, Container, FileWrapper, ImagesContainer } from './styles';

interface ImagePreviewComponentProps {
  files: FileProps[];
  handleClearFiles: () => void;
}

export const ImagePreviewComponent = ({ files }: ImagePreviewComponentProps) => (
  <>
    <ImagesContainer>
      <Container>
        <CloseWrapper>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </CloseWrapper>
        {files.map((file) => (
          <FileWrapper>{<img src={file.preview} alt={file.name} style={{ width: '100%', height: '100%' }} />}</FileWrapper>
        ))}
      </Container>
    </ImagesContainer>
  </>
);
