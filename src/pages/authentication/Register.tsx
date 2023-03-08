import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthRegisterCpf from './auth-forms/AuthRegisterCpf';
import AuthWrapper from './AuthWrapper';
import AuthRegister from './auth-forms/AuthRegister';

// ================================|| REGISTER ||================================ //

const Register = () => {
  const [userCpf, setUserCpf] = useState<string>('');

  const { control } = useForm();

  const handleCpfVerification = (cpf: string) => {
    setUserCpf(cpf);
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Cadastro</Typography>
            <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Já possui uma conta?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {userCpf ? <AuthRegister /> : <AuthRegisterCpf onRegister={handleCpfVerification} />}
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
