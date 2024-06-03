import { Models } from '../../models/index.js';

export const CreateParts = async (req, res) => {
    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }})

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'createParts', params: req.body });

    if(!responseModelFieldsValidation.status){
        return res.status(400).json({ status: "error", description: responseModelFieldsValidation.ValidationErrors });
    }

    const responseModelInsertParts = await Models.database.InsertParts(req.body);

    if(!responseModelInsertParts.status){
        return res.status(400).json({ status: "error", description: responseModelInsertParts?.errorMessage });
    }

    res.status(201).json({ status: "success", message: "peça cadastrada com sucesso" }); 
};
//create parts