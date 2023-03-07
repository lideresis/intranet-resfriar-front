import { yupResolver } from '@hookform/resolvers/yup';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, FormHelperText, Grid, InputLabel, Link, Stack } from '@mui/material';

// third party

// project import
import AnimateButton from '../../../components/@extended/AnimateButton';

// assets
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';
import { User } from '../../../models/User';
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

  const onSubmit = (data: User) => {
    setIsSubmitting(true);

    console.log(data);
    setErrorSubmit('Usuário ou senha inválidos');

    setIsSubmitting(false);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
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
          {errorSubmit && (
            <Grid item xs={12}>
              <FormHelperText error>{errorSubmit}</FormHelperText>
            </Grid>
          )}
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
