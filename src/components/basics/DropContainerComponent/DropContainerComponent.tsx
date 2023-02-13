import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Typography } from '@mui/material';
import { DropzoneGridContainer, UploadIconGrid, UploadTextGrid } from './styles';

interface Props {
  title: string;
}

export const DropContainerComponent = ({ title }: Props) => {
  return (
    <DropzoneGridContainer>
      <UploadIconGrid>
        <FileUploadIcon />
      </UploadIconGrid>
      <UploadTextGrid>
        <Typography variant="subtitle1" textAlign="center" overflow="hidden">
          {title}
        </Typography>
        <Typography variant="caption" textAlign="center" overflow="hidden">
          Arraste e solte
        </Typography>
      </UploadTextGrid>
    </DropzoneGridContainer>
  );
};
