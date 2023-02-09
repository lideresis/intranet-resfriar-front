// material-ui
import { Box, useMediaQuery } from '@mui/material';

// project import
import Notification from './Notification';
import Profile from './Profile';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Box sx={{ width: '100%' }} />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <Notification />
      <Profile />
    </>
  );
};

export default HeaderContent;
