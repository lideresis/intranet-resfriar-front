import { useState } from 'react';

// material-ui
import { Box, Card, CardHeader, Grid, Theme, useMediaQuery } from '@mui/material';
import { NewPostCard } from '../../components/pageComponents/NewPostCard/NewPostCard';
import Timeline from '../../components/pageComponents/Timeline/Timeline';
import NewPostModal from '../../sections/@dashboard/NewPostModal/NewPostModal';

// project import

// assets

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// sales report status
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [value, setValue] = useState('today');
  const [slot, setSlot] = useState('week');
  const [showModal, setShowModal] = useState(false);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNewPost = () => {
    console.log('new post');
  };

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between' }}>
        <Grid item sm={12} md={9} sx={{ justifyContent: 'center' }}>
          <Box>
            <NewPostCard showPostModal={handleOpenModal} />
          </Box>
          <Box sx={{ pt: 4 }}>
            <Timeline />
          </Box>
        </Grid>
        {!isMobile && (
          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item sm={12}>
                <Card>
                  <CardHeader title="Aniversario 1" />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <NewPostModal open={showModal} onClose={handleCloseModal} onCreate={handleNewPost} />
    </>

    // <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    //     {/* row 1 */}
    //     <Grid item xs={12} xl={8} >
    //         <Typography variant="h5">Dashboard</Typography>
    //     </Grid>

    //     <Grid item xs={12}>
    //         <Typography variant="h5">Criar Publicação</Typography>
    //     </Grid>

    //     {/* row 2 */}
    //     <Grid item xs={12} md={7} lg={8}>
    //         <Grid container alignItems="center" justifyContent="space-between">
    //             <Grid item>
    //                 <Typography variant="h5">Unique Visitor</Typography>
    //             </Grid>
    //             <Grid item>
    //                 <Stack direction="row" alignItems="center" spacing={0}>
    //                     <Button
    //                         size="small"
    //                         onClick={() => setSlot('month')}
    //                         color={slot === 'month' ? 'primary' : 'secondary'}
    //                         variant={slot === 'month' ? 'outlined' : 'text'}
    //                     >
    //                         Month
    //                     </Button>
    //                     <Button
    //                         size="small"
    //                         onClick={() => setSlot('week')}
    //                         color={slot === 'week' ? 'primary' : 'secondary'}
    //                         variant={slot === 'week' ? 'outlined' : 'text'}
    //                     >
    //                         Week
    //                     </Button>
    //                 </Stack>
    //             </Grid>
    //         </Grid>
    //         <MainCard content={false} sx={{ mt: 1.5 }}>
    //             <Box sx={{ pt: 1, pr: 2 }}>
    //                 <IncomeAreaChart slot={slot} />
    //             </Box>
    //         </MainCard>
    //     </Grid>
    //     <Grid item xs={12} md={5} lg={4}>
    //         <Grid container alignItems="center" justifyContent="space-between">
    //             <Grid item>
    //                 <Typography variant="h5">Income Overview</Typography>
    //             </Grid>
    //             <Grid item />
    //         </Grid>
    //         <MainCard sx={{ mt: 2 }} content={false}>
    //             <Box sx={{ p: 3, pb: 0 }}>
    //                 <Stack spacing={2}>
    //                     <Typography variant="h6" color="textSecondary">
    //                         This Week Statistics
    //                     </Typography>
    //                     <Typography variant="h3">$7,650</Typography>
    //                 </Stack>
    //             </Box>
    //             <MonthlyBarChart />
    //         </MainCard>
    //     </Grid>
    // </Grid>
  );
};

export default DashboardDefault;
