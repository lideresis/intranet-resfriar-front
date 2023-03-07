import { Theme, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import { FileProps } from '../Dropzone';

interface Props {
  file: FileProps;
}

export const PdfPreview = ({ file }: Props) => {
  console.log('file', file);
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <object width="100%" height={isMobile ? '100px' : '300px'} data={file.preview} type="application/pdf">
      {' '}
    </object>
  );
};
