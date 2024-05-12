import * as yup from 'yup'

export const Validation = async ({ type, params }) => {

    let validationYup

    if(type === 'create'){
        validationYup = yup.object().shape({
            email: yup.string('formato de email não é válido').required('email é obrigatório').email('formato de email não é válido'),
            name: yup.string('formato de nome não é válido').required('nome é obrigatório').min(3, 'nome precisa ter no mínimo 3 letras'),
            pass: yup.string().required('senha é obrigatória').min(6, 'sua senha deve conter no mínimo 6 caracteres')
        });
    }

    try{

        await validationYup.validate(params, { abortEarly: false });

        return { status: true };

    }catch(error){

        const ValidationErrors = {};

        error.inner.forEach(error => {
            if(!error.path) return;

            ValidationErrors[error.path] = error.message;
        });

        return { status: false, ValidationErrors };
    }
};