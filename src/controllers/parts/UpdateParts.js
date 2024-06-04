import { Models } from '../../models/index.js';

export const UpdateParts = async(req, res) => {

    const setToken = req?.headers?.authorization;

    const responseModelHeadersValidation = await Models.validations.HeadersValidation({ params: { token: setToken }})

    if(!responseModelHeadersValidation.status){
        return res.status(401).json({ status: "error", description: responseModelHeadersValidation?.ValidationErrors?.token });
    }

    const token = responseModelHeadersValidation?.token;

    const responseModelSelectUserToken = await Models.database.SelectUserToken({ token: token });

    if(!responseModelSelectUserToken.status){
        return res.status(401).json({ status: "error", description: responseModelSelectUserToken?.errorMessage });
    }

    const responseModelFieldsValidation = await Models.validations.FieldsValidation({ type: 'updatePart', params: req.query });
    
    if (!responseModelFieldsValidation.status){
        return res.status(400).json({ status: 'error', description:responseModelFieldsValidation.ValidationErrors });
    }

    const responseModelDatabase = await Models.database.UpdateParts({ partId: req.query.partId, partPrice: req.query.partPrice });

    if (!responseModelDatabase.status){
        return res.status(400).json({ status: 'error', description:responseModelDatabase.errorMessage });
    }

    return res.status(200).json({ status: 'success', message: 'preço alterado com sucesso' });
};