// material-ui
import { Alert, Button, Grid, InputLabel, Stack } from '@mui/material';

// third party

// project import
import AnimateButton from '../../../components/@extended/AnimateButton';

// assets
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';
import { AuthService } from '../../../services/Auth.service';

// ============================|| FIREBASE - LOGIN ||============================ //
interface Props {
  onRegister: (cpf: string) => void;
}

interface Form {
  cpf: string;
}

const AuthRegisterCpf = ({ onRegister }: Props) => {
  const [errorSubmit, setErrorSubmit] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Form>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      cpf: ''
    }
  });

  const onSubmit = async (data: Form) => {
    setErrorSubmit('');

    setIsSubmitting(true);
    const response = await AuthService.validateCpf(data.cpf);
    setIsSubmitting(false);

    if (response?.status === 404) {
      setErrorSubmit('CPF não encontrado');
    }

    onRegister(data.cpf);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {errorSubmit && (
            <Grid item xs={12}>
              <Alert severity="error" sx={{ width: '100%' }}>
                {errorSubmit}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="cpf">Informe seu CPF</InputLabel>
              <ControlledTextInput
                placeholder="CPF"
                name="cpf"
                control={control}
                errorMessage={errors.cpf?.message}
                mask="999.999.999-99"
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                Verificar
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegisterCpf;
