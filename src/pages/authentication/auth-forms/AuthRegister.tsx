import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, Stack, Typography } from '@mui/material';

// third party

// project import
import AnimateButton from '../../../components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from '../../../utils/password-strength';

// assets
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useWatch } from 'react-hook-form';
import { ControlledTextInput } from '../../../components/basics/ControlledTextInput/ControlledTextInput';
import { registerValidations } from '../../../utils/formValidations';

// ============================|| FIREBASE - REGISTER ||============================ //

interface Form {
    name: string;
    email: string;
    password: string;
}

interface PasswordStrength {
    label: string;
    color: string;
}

const AuthRegister = () => {
    const [level, setLevel] = useState<PasswordStrength>();
    const [errorSubmit, setErrorSubmit] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<Form>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(registerValidations),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const passwordWatch = useWatch({
        control,
        name: 'password'
    });

    const changePassword = (value: any) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword(passwordWatch);
    }, [passwordWatch]);

    const onSubmit = (data: Form) => {
        setIsSubmitting(true);

        console.log(data);

        setIsSubmitting(false);
    };

    return (
        <>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="name">Nome</InputLabel>
                            <ControlledTextInput placeholder="Nome" name="name" control={control} errorMessage={errors.name?.message} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="email">E-mail</InputLabel>
                            <ControlledTextInput placeholder="E-mail" name="email" control={control} errorMessage={errors.email?.message} />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel htmlFor="username">Senha</InputLabel>
                        <ControlledTextInput
                            placeholder="Senha"
                            name="password"
                            type="password"
                            control={control}
                            errorMessage={errors.password?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {passwordWatch && (
                            <FormControl fullWidth>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" fontSize="0.75rem">
                                            {level?.label}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </FormControl>
                        )}
                    </Grid>
                    {errorSubmit && (
                        <Grid item xs={12}>
                            <FormHelperText error>{errorSubmit}</FormHelperText>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Criar conta
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthRegister;
