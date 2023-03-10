import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Alert, Button, Grid, InputLabel, Link, Stack } from '@mui/material';

// third party

// project import
import AnimateButton from '../../../components/@extended/AnimateButton';

// assets
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';
import { LOCAL_STORAGE_KEYS } from '../../../localstorage/localstorageKeys';
import { User } from '../../../models/User';
import { AuthService } from '../../../services/Auth.service';
import { loginValidations } from '../../../utils/formValidations';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const [errorSubmit, setErrorSubmit] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(loginValidations),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = async (data: User) => {
    setIsSubmitting(true);

    const response = await AuthService.doLogin({
      usuario: data.username,
      senha: data.password!
    });

    if (response?.data?.error?.message) {
      setErrorSubmit(response?.data?.error?.message);
      setIsSubmitting(false);
      return;
    }

    if (response?.data?.data?.usuario) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(response?.data?.data?.usuario));

      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {errorSubmit && (
            <Grid item xs={12}>
              <Alert severity="error" variant="outlined" sx={{ width: '100%' }}>
                {errorSubmit}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="username">Usuário</InputLabel>
              <ControlledTextInput placeholder="Usuário" name="username" control={control} errorMessage={errors.username?.message} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <ControlledTextInput
              placeholder="Senha"
              name="password"
              type="password"
              control={control}
              errorMessage={errors.password?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: -1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Link variant="h6" component={RouterLink} to="" color="text.primary">
                Esqueceu sua senha?
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                Login
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthLogin;
