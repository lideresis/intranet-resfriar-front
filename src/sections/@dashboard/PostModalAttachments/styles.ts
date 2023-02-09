import { Box, Grid, List } from '@mui/material';
import styled from 'styled-components';

export const ActionsContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled(Box).attrs({})`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DropzoneGridContainer = styled(Grid).attrs({
  container: true
})`
  border: solid;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.palette.grey[300]};

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    border-color: ${({ theme }) => theme.palette.grey[400]};
  }
`;

export const DropAttachmentContainer = styled(Box).attrs({})`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-style: dashed;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.neutral[300]};
  border-color: ${({ theme }) => theme.palette.neutral[500]};
`;

export const FooterContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1rem;
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

export const AttachmentsListContainer = styled(Box)`
  margin-top: 1rem;
  width: 100%;
`;

export const AttachmentsList = styled(List).attrs({
  sx: {
    padding: '0px'
  }
})`
  border: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.palette.neutral[300]};
  margin-top: 1rem;
`;

export const ImagePreviewGrid = styled(Grid).attrs({
  item: true,
  xs: 12,
  md: 6,
  lg: 6,
  display: 'flex'
})`
  height: 85vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImagePreviewBox = styled(Box)`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.neutral[300]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconsWrapper = styled(Box)`
  display: flex;
  margin-top: 0.5rem;
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid;
  border-width: 0.5px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.palette.grey[300]};
  padding: 0.5rem 1rem;
`;
