import * as yup from 'yup'

export const FieldsValidation = async ({ type, params }) => {

    let validationYup

    if (type === 'create') {
        validationYup = yup.object().shape({
            email: yup.string('formato de email não é válido').required('email é obrigatório').email('formato de email não é válido').max(150, 'máximo de caracteres ultrapassado'),
            name: yup.string('formato de nome não é válido').required('nome é obrigatório').min(3, 'nome precisa ter no mínimo 3 letras').max(150, 'máximo de caracteres ultrapassado'),
            pass: yup.string().required('senha é obrigatória').min(6, 'sua senha deve conter no mínimo 6 caracteres').max(20, 'máximo de caracteres ultrapassado')
        });
    }

    if (type === 'auth') {
        validationYup = yup.object().shape({
            email: yup.string('formato de email não é válido').required('email é obrigatório').email('formato de email não é válido').max(150, 'máximo de caracteres ultrapassado'),
            pass: yup.string().required('senha é obrigatória').min(6, 'sua senha deve conter no mínimo 6 caracteres').max(20, 'máximo de caracteres ultrapassado')
        });
    }

    if (type === 'createStore') {
        validationYup = yup.object().shape({
            storeName: yup.string('formato de nome não é válido').required('nome da loja é obrigatório').min(3, 'nome da loja deve ter no mínimo 3 letras').max(150, 'o número máximo de letras da loja deve ser 150'),
            storeCnpj: yup.number('Formato de CNPJ não é válido').required('CNPJ da loja é obrigatório').min(14, 'CNPJ deve conter no mínimo 14 dígitos'),
            storeAddress: yup.string('formato de endereço não é válido').required('campo de endereço é obrigatório').min(6, 'o endereço deve conter no mínimo 6 letras').max(150, 'o endereço deve ter no máximo 150 letras')
        });
    }

    if (type === 'removeStore') {
        validationYup = yup.object().shape({
            storeId: yup.string('formato não é valido').required('campo de id da loja é obrigatório').min(36, 'id da loja deve conter no mínimo 36 caracteres')
        });
    }

    if (type === 'changeUserPass') {
        validationYup = yup.object().shape({
            userPass: yup.string('formato de senha não é válido').required('campo de senha é obrigatório').min(6, 'senha deve conter no mínimo 6 caracteres').max(20, 'máximo de caracteres ultrapassado'),
            userConfirmPass: yup.string('formato de senha não é válido').required('campo de confirmação de senha é obrigatório').oneOf([yup.ref('userPass'), null], 'senha de confirmação diferente da senha enviada')
        });
    }

    if (type === 'removeUser') {
        validationYup = yup.object().shape({
            userId: yup.string('formato não é valido').required('campo de id do usuário é obrigatório').min(36, 'id do usuário deve conter no mínimo 36 caracteres')
        });
    }

    if (type === 'createParts') {
        validationYup = yup.object().shape({
            partName: yup.string('formato invalido').required('nome da peça é obrigatório').max(150, 'máximo de caracteres alcançados'),
            partBrand: yup.string('formato invalido').required('nome da peça é obrigatório').max(150, 'máximo de caracteres alcançados'),
            partModel: yup.string('formato invalido').required('nome da peça é obrigatório').max(150, 'máximo de caracteres alcançados'),
            partPrice: yup.string('formato invalido').required('nome da peça é obrigatório').max(150, 'máximo de caracteres alcançados'),

        });
    }

    if (type === 'createCars') {
        validationYup = yup.object().shape({
            carName: yup.string('formato invalido').required('nome do carro é obrigatório').max(150, 'máximo de caracteres alcançados'),
            carBrand: yup.string('formato invalido').required('marca de carro é obrigatório').max(150, 'máximo de caracteres'),
            carModel: yup.string('formato invalido').required('modelo de carro é obrigatório').max(150, 'máximo de caracteres'),
            carPlate: yup.string('formato invalido').required('placa do carro é obrigatório').min(7, 'minimo de caracteres é 7').max(7, 'maximo de caracteres é 7'),
            carChassi: yup.string('formato invalido').required('chassi do carro é obrigatório').max(17, 'maximo de caracteres é 17'),
            carPrice: yup.string('formato invalido').required('preço do carro é obrigatorio')
        });
    }

    if (type === 'UpdateCars') {
        validationYup = yup.object().shape({
            carPrice: yup.string('formato invalido').required('preço do carro é obrigatório'),
            carId: yup.string('formato invalido').required('identificador do carro é obrigatório')
        });
    }

    if (type === 'updateStore') {
        validationYup = yup.object().shape({
            storeId: yup.string('formato inválido').required('Id da loja é obrigatório'),
            storeAddress: yup.string('formato invalido').required('endereço obrigatório')
        });
    }

    if (type === 'removeParts') {
        validationYup = yup.object().shape({
            partId: yup.string('formato não é valido').required('campo de id de peca é obrigatório').min(36, 'id da peca deve conter no mínimo 36 caracteres')
        });
    }

    if (type === 'removeCar') {
        validationYup = yup.object().shape({
            carId: yup.string('formato não é valido').required('Id do carro é obrigatório').min(36, 'id do carro deve conter no mínimo 36 caracteres')
        });
    }

    try {

        await validationYup.validate(params, { abortEarly: false });

        return { status: true };

    } catch (error) {

        const ValidationErrors = {};

        error.inner.forEach(error => {
            if (!error.path) return;

            ValidationErrors[error.path] = error.message;
        });

        return { status: false, ValidationErrors };
    }
};