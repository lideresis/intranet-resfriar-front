import FileUploadIcon from '@mui/icons-material/FileUpload';
import { IconButton, Typography } from '@mui/material';
import { DropzoneGridContainer, UploadIconGrid, UploadTextGrid } from './styles';

export const DropContainerComponent = () => {
  return (
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
      <IconButton></IconButton>
    </DropzoneGridContainer>
  );
};
