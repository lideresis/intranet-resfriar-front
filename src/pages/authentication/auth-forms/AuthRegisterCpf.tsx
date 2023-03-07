// material-ui
import { Button, FormHelperText, Grid, InputLabel, Stack } from '@mui/material';

// third party

// project import
import AnimateButton from '../../../components/@extended/AnimateButton';

// assets
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';

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

  const onSubmit = (data: Form) => {
    console.log('data', data);
    setIsSubmitting(true);

    console.log(data);
    setErrorSubmit('CPF não encontrado');

    setIsSubmitting(false);

    onRegister(data.cpf);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
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
          {errorSubmit && (
            <Grid item xs={12}>
              <FormHelperText error>{errorSubmit}</FormHelperText>
            </Grid>
          )}
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
