import { Grid } from '@mui/material';
import styled from 'styled-components';

export const DropzoneGridContainer = styled(Grid).attrs({
  container: true
})`
  border: solid;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.palette.grey[300]};
  margin-bottom: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border-color: ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const UploadIconGrid = styled(Grid).attrs({
  item: true,
  xs: 2,
  md: 2,
  lg: 2
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadTextGrid = styled(Grid).attrs({
  item: true,
  xs: 8,
  md: 8,
  lg: 8,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
})`
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
