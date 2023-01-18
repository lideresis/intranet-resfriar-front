import * as yup from 'yup';

export const loginValidations = yup.object().shape({
    username: yup.string().required('Usuário é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
});

export const registerValidations = yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    name: yup.string().required('Usuário é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
});
