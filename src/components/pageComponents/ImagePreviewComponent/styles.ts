import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const Container = styled(Grid).attrs({
  container: true
})`
  display: flex;
  flex-direction: column;
`;

export const FileWrapper = styled(Grid).attrs({
  item: true
})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagesContainer = styled(Box).attrs({
  overflow: 'auto'
})`
  display: flex;
  flex-direction: column;

  padding: 0.2rem;
  max-height: 40vh;

  border: 0.5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.grey[300]};
  border-radius: 4px;
`;

export const CloseWrapper = styled(Box)`
  position: relative;
  right: 5px;
  z-index: 999;
  align-self: flex-end;
`;

export const ActionContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;
