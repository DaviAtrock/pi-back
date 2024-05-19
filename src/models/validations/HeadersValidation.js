import * as yup from 'yup'

export const HeadersValidation = async ({ params }) => {

    let token = undefined

    if(params.token){
        token = params.token.split(' ')[1];
    }

    const validationYup = yup.object().shape({
        token: yup.string('token não é válido').required('token obrigatório')
    });

    try{

        await validationYup.validate(params, { abortEarly: false });

        return { status: true, token: token };

    }catch(error){

        const ValidationErrors = {};

        error.inner.forEach(error => {
            if(!error.path) return;

            ValidationErrors[error.path] = error.message;
        });

        return { status: false, ValidationErrors };
    }

};