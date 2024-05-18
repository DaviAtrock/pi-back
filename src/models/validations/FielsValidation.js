import * as yup from 'yup'

export const FielsValidation = async ({ type, params }) => {

    let validationYup

    if(type === 'create'){
        validationYup = yup.object().shape({
            email: yup.string('formato de email não é válido').required('email é obrigatório').email('formato de email não é válido').max(150, 'máximo de caracteres ultrapassado'),
            name: yup.string('formato de nome não é válido').required('nome é obrigatório').min(3, 'nome precisa ter no mínimo 3 letras').max(150, 'máximo de caracteres ultrapassado'),
            pass: yup.string().required('senha é obrigatória').min(6, 'sua senha deve conter no mínimo 6 caracteres').max(20, 'máximo de caracteres ultrapassado')
        });
    }

    if(type === 'auth'){
        validationYup = yup.object().shape({
            email: yup.string('formato de email não é válido').required('email é obrigatório').email('formato de email não é válido').max(150, 'máximo de caracteres ultrapassado'),
            pass: yup.string().required('senha é obrigatória').min(6, 'sua senha deve conter no mínimo 6 caracteres').max(20, 'máximo de caracteres ultrapassado')
        });
    }

    if(type === 'createStore') {
        validationYup = yup.object().shape({
            storeName: yup.string('formato de nome não é válido').required('nome da loja é obrigatório').min(3, 'nome da loja deve ter no mínimo 3 letras').max(150, 'o número máximo de letras da loja deve ser 150'),
            storeCnpj: yup.number('Formato de CNPJ não é válido').required('CNPJ da loja é obrigatório').min(14, 'CNPJ deve conter no mínimo 14 dígitos'),
            storeAddress: yup.string('formato de endereço não é válido').required('campo de endereço é obrigatório').min(6, 'o endereço deve conter no mínimo 6 letras').max(150, 'o endereço deve ter no máximo 150 letras')
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