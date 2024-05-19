import { Models } from '../../models/index.js';

export const CreateStore = async (req, res) => {

    const setToken = req?.headers?.authorization;

    let responseModelValidation = await Models.validations.FieldsValidation({ type: 'token', params: { token: setToken }});

    if(!responseModelValidation.status){
        return res.status(401).json({ status: "error", description: responseModelValidation?.ValidationErrors?.token });
    }

    const token = setToken.split(' ')[1];

    const responseModelSelectUserToken = await Models.database.SelectUserToken({ token: token });

    if(!responseModelSelectUserToken.status){
        return res.status(401).json({ status: "error", description: responseModelSelectUserToken?.errorMessage });
    }

    responseModelValidation = await Models.validations.FieldsValidation({ type: 'createStore', params: req.body });

    if (!responseModelValidation.status) {
        return res.status(400).json({ status: "error", description: responseModelValidation?.ValidationErrors });
    }

    const responseModelInsertNewStore = await Models.database.InsertNewStore(req.body);

    if (!responseModelInsertNewStore.status){
        return res.status(400).json({ status: "error", description: responseModelValidation?.ValidationErrors });
    }

    return res.status(201).json({ status: "success", message: "loja criada com sucesso"});
};