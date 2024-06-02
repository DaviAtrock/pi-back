import { Models } from '../../models/index.js';

export const SelectParts = async (req, res) => {

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

    const responseModelSelectParts = await Models.database.SelectParts();

    if(!responseModelSelectParts.status){
        return res.status(400).json({ status: "error", description: responseModelSelectParts.errorMessage });
    }

    return res.status(200).json({ status: "success", parts: responseModelSelectParts.data })

};